import { NextResponse } from "next/server";
import { createClient } from "@/utils/supabase/server";
import { prisma } from "@/lib/prisma";
import Groq from "groq-sdk";
import { decrypt } from "@/lib/crypto";
import { iaSchema } from "@/lib/validation";

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

  const transacoes = transacoesRaw.map((t) => ({
    ...t,
    valor: Number(decrypt(t.valor)),
  }));

  const metas = metasRaw.map((m) => ({
    ...m,
    valorAtual: Number(decrypt(m.valorAtual)),
    valorObjetivo: Number(decrypt(m.valorObjetivo)),
  }));

  const limites = limitesRaw.map((l) => ({
    ...l,
    limite: Number(decrypt(l.limite)),
  }));

  const contexto = `Você é um assistente financeiro pessoal. Responda em português, de forma direta e amigável.

Dados do usuário:
- Transações recentes: ${JSON.stringify(transacoes)}
- Metas: ${JSON.stringify(metas)}
- Limites de orçamento: ${JSON.stringify(limites)}`;

  const response = await groq.chat.completions.create({
    model: "llama-3.3-70b-versatile",
    messages: [
      { role: "system", content: contexto },
      { role: "user", content: mensagem },
    ],
    max_tokens: 1000,
  });

  const resposta = response.choices[0].message.content ?? "";
  return NextResponse.json({ resposta });
}