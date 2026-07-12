import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";
import { createClient } from "@/utils/supabase/server";
import { encrypt, decrypt } from "@/lib/crypto";
import { transacaoSchema } from "@/lib/validation";

export async function GET() {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();

  if (!user) {
    return NextResponse.json({ error: "Não autenticado" }, { status: 401 });
  }

  const transacoes = await prisma.transacao.findMany({
    where: { userId: user.id },
    orderBy: { data: "desc" },
  });

const transacoesDescriptografadas = transacoes.map((t) => {
  try {
    return { ...t, valor: Number(decrypt(t.valor)) };
  } catch {
    console.error(`Falha ao descriptografar transação ${t.id}`);
    return { ...t, valor: 0, erro: true };
  }
});

  return NextResponse.json(transacoesDescriptografadas);
}

export async function POST(request: Request) {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();

  if (!user) {
    return NextResponse.json({ error: "Não autenticado" }, { status: 401 });
  }

  const body = await request.json();
  const parsed = transacaoSchema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json(
      { error: "Dados inválidos", details: parsed.error.flatten() },
      { status: 400 }
    );
  }

  const novaTransacao = await prisma.transacao.create({
    data: {
      nome: parsed.data.nome,
      data: new Date(parsed.data.data),
      tipo: parsed.data.tipo,
      valor: encrypt(String(parsed.data.valor)),
      icone: parsed.data.icone,
      cor: parsed.data.cor,
      userId: user.id,
    },
  });

  return NextResponse.json({
    ...novaTransacao,
    valor: Number(decrypt(novaTransacao.valor)),
  });
}