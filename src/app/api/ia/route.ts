import { NextResponse } from "next/server";
import { createClient } from "@/utils/supabase/server";
import { prisma } from "@/lib/prisma";
import Groq from "groq-sdk";
import { decrypt, encrypt } from "@/lib/crypto";
import { iaSchema, transacaoSchema } from "@/lib/validation";
import { gerarFrase } from "@/lib/frases-notificacao";

const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });

export async function POST(request: Request) {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) return NextResponse.json({ error: "Não autenticado" }, { status: 401 });

  const body = await request.json();
  const parsed = iaSchema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json(
      { error: "Dados inválidos", details: parsed.error.flatten() },
      { status: 400 }
    );
  }

  const { mensagem } = parsed.data;

  const [transacoesRaw, metasRaw, limitesRaw] = await Promise.all([
    prisma.transacao.findMany({ where: { userId: user.id }, orderBy: { data: "desc" }, take: 50 }),
    prisma.meta.findMany({ where: { userId: user.id } }),
    prisma.limiteOrcamento.findMany({ where: { userId: user.id } }),
  ]);

  const transacoes = transacoesRaw.map((t) => ({ ...t, valor: Number(decrypt(t.valor)) }));
  const metas = metasRaw.map((m) => ({
    ...m,
    valorAtual: Number(decrypt(m.valorAtual)),
    valorObjetivo: Number(decrypt(m.valorObjetivo)),
  }));
  const limites = limitesRaw.map((l) => ({ ...l, limite: Number(decrypt(l.limite)) }));

  const contexto = `Você é um assistente financeiro pessoal. Responda em português, de forma direta e amigável.
Quando o usuário pedir para registrar um gasto ou ganho, use a ferramenta criar_transacao em vez de apenas responder em texto.

Dados do usuário:
- Transações recentes: ${JSON.stringify(transacoes)}
- Metas: ${JSON.stringify(metas)}
- Limites de orçamento: ${JSON.stringify(limites)}`;

  const ferramentas = [
    {
      type: "function" as const,
      function: {
        name: "criar_transacao",
        description: "Registra uma nova transação financeira (gasto ou ganho) para o usuário",
        parameters: {
          type: "object",
          properties: {
            nome: { type: "string", description: "Descrição da transação, ex: 'Mercado' ou 'Salário'" },
            tipo: { type: "string", enum: ["Receita", "Variável", "Fixo", "Investimento"] },
            valor: { type: "number", description: "Valor positivo para ganho, negativo para gasto" },
          },
          required: ["nome", "tipo", "valor"],
        },
      },
    },
    {
      type: "function" as const,
      function: {
        name: "criar_meta",
        description: "Cria uma nova meta financeira para o usuário",
        parameters: {
          type: "object",
          properties: {
            nome: { type: "string", description: "Nome da meta, ex: 'Viagem para a praia'" },
            valorObjetivo: { type: "number", description: "Valor total que o usuário quer juntar" },
            valorAtual: { type: "number", description: "Valor que o usuário já tem guardado, padrão 0" },
          },
          required: ["nome", "valorObjetivo"],
        },
      },
    },
    {
      type: "function" as const,
      function: {
        name: "criar_limite_orcamento",
        description: "Define um limite de gasto mensal para uma categoria",
        parameters: {
          type: "object",
          properties: {
            categoria: { type: "string", description: "Nome da categoria, ex: 'Alimentação', 'Lazer'" },
            limite: { type: "number", description: "Valor máximo mensal para essa categoria" },
          },
          required: ["categoria", "limite"],
        },
      },
    },
    {
      type: "function" as const,
      function: {
        name: "mudar_tema",
        description: "Muda o tema visual do app entre claro e escuro",
        parameters: {
          type: "object",
          properties: {
            tema: { type: "string", enum: ["claro", "escuro"] },
          },
          required: ["tema"],
        },
      },
    },
  ];

  const primeiraResposta = await groq.chat.completions.create({
    model: "llama-3.3-70b-versatile",
    messages: [
      { role: "system", content: contexto },
      { role: "user", content: mensagem },
    ],
    tools: ferramentas,
    max_tokens: 1000,
  });

  const escolha = primeiraResposta.choices[0].message;
  let acaoExecutada = false;
  let temaSolicitado: string | null = null; // 👈 declarado FORA de qualquer if, visível no final

  if (escolha.tool_calls && escolha.tool_calls.length > 0) {
    const chamada = escolha.tool_calls[0];
    const args = JSON.parse(chamada.function.arguments);

    // Cada ferramenta é um "if" independente, irmão dos outros — nenhum dentro do outro
    if (chamada.function.name === "criar_transacao") {
      const validado = transacaoSchema.safeParse({
        nome: args.nome,
        data: new Date().toISOString(),
        tipo: args.tipo,
        valor: args.valor,
        icone: args.valor >= 0 ? "💰" : "🏷️",
        cor: args.valor >= 0 ? "#EAF3DE" : "#FCEBEB",
      });

      if (validado.success) {
        await prisma.transacao.create({
          data: { ...validado.data, valor: encrypt(String(validado.data.valor)), userId: user.id },
        });
        acaoExecutada = true;
      }
    }

    if (chamada.function.name === "criar_meta") {
      await prisma.meta.create({
        data: {
          nome: args.nome,
          valorAtual: encrypt(String(args.valorAtual ?? 0)),
          valorObjetivo: encrypt(String(args.valorObjetivo)),
          possuiPrazo: false,
          icone: "🎯",
          dataCriacao: new Date(),
          userId: user.id,
        },
      });
      acaoExecutada = true;
    }

    if (chamada.function.name === "criar_limite_orcamento") {
      await prisma.limiteOrcamento.upsert({
        where: { categoria_userId: { categoria: args.categoria, userId: user.id } },
        update: { limite: encrypt(String(args.limite)) },
        create: { categoria: args.categoria, limite: encrypt(String(args.limite)), cor: "#7c3aed", userId: user.id },
      });
      acaoExecutada = true;
    }

    if (chamada.function.name === "mudar_tema") {
      temaSolicitado = args.tema;
      acaoExecutada = true;
    }

    const segundaResposta = await groq.chat.completions.create({
      model: "llama-3.3-70b-versatile",
      messages: [
        { role: "system", content: contexto },
        { role: "user", content: mensagem },
        escolha,
        {
          role: "tool" as const,
          tool_call_id: chamada.id,
          content: acaoExecutada ? "Ação executada com sucesso." : "Não foi possível executar a ação.",
        },
      ],
      max_tokens: 1000,
    });

    let notificacaoTexto: string | null = null;
    if (acaoExecutada) {
      const tipoNotificacao =
        chamada.function.name === "criar_transacao" ? "transacao" :
        chamada.function.name === "criar_meta" ? "meta" :
        chamada.function.name === "criar_limite_orcamento" ? "limite" :
        chamada.function.name === "mudar_tema" ? "tema" : "generico";

      notificacaoTexto = gerarFrase(tipoNotificacao);
      await prisma.notificacao.create({ data: { userId: user.id, mensagem: notificacaoTexto } });
    }

    return NextResponse.json({
      resposta: segundaResposta.choices[0].message.content ?? "",
      acaoExecutada,
      temaSolicitado,
      notificacaoTexto,
    });
  }

  return NextResponse.json({ resposta: escolha.content ?? "", acaoExecutada: false, temaSolicitado: null });
}