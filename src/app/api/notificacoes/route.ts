import { NextResponse } from "next/server";
import { createClient } from "@/utils/supabase/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) return NextResponse.json({ error: "Não autenticado" }, { status: 401 });

  const notificacoes = await prisma.notificacao.findMany({
    where: { userId: user.id },
    orderBy: { criadoEm: "desc" },
    take: 50,
  });

  return NextResponse.json(notificacoes);
}

export async function PUT(req: Request) {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) return NextResponse.json({ error: "Não autenticado" }, { status: 401 });

  const { todas } = await req.json();

  if (todas) {
    await prisma.notificacao.updateMany({ where: { userId: user.id, lida: false }, data: { lida: true } });
  }

  return NextResponse.json({ ok: true });
}