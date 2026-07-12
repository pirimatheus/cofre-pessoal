import { NextResponse } from "next/server";
import { createClient } from "@/utils/supabase/server";
import { prisma } from "@/lib/prisma";

const ORDEM_PADRAO = ["saldo", "receitas", "gastos", "poupanca", "alerta", "ultimos-lancamentos", "botoes-acao"];

export async function GET() {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) return NextResponse.json({ error: "Não autenticado" }, { status: 401 });

  const registro = await prisma.layoutDashboard.findUnique({ where: { userId: user.id } });
  return NextResponse.json({ ordem: registro?.ordem ?? ORDEM_PADRAO });
}

export async function PUT(req: Request) {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) return NextResponse.json({ error: "Não autenticado" }, { status: 401 });

  const { ordem } = await req.json();
  if (!Array.isArray(ordem)) {
    return NextResponse.json({ error: "Ordem inválida" }, { status: 400 });
  }

  await prisma.layoutDashboard.upsert({
    where: { userId: user.id },
    update: { ordem },
    create: { userId: user.id, ordem },
  });

  return NextResponse.json({ ok: true });
}