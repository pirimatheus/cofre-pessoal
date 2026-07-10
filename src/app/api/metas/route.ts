import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { createClient } from "@/utils/supabase/server";
import { encrypt, decrypt } from "@/lib/crypto";
import { metaSchema } from "@/lib/validation";

export async function GET() {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();

  if (!user) {
    return NextResponse.json({ error: "Não autenticado" }, { status: 401 });
  }

  const meta = await prisma.meta.findMany({
    where: { userId: user.id },
    orderBy: { dataCriacao: "desc" },
  });

  const metaDescriptografada = meta.map((m) => ({
    ...m,
    valorAtual: Number(decrypt(m.valorAtual)),
    valorObjetivo: Number(decrypt(m.valorObjetivo)),
  }));

  return NextResponse.json(metaDescriptografada);
}

export async function POST(request: Request) {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();

  if (!user) {
    return NextResponse.json({ error: "Não autenticado" }, { status: 401 });
  }

  const body = await request.json();
  const parsed = metaSchema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json(
      { error: "Dados inválidos", details: parsed.error.flatten() },
      { status: 400 }
    );
  }

  const novaMeta = await prisma.meta.create({
    data: {
      nome: parsed.data.nome,
      valorAtual: encrypt(String(parsed.data.valorAtual)),
      valorObjetivo: encrypt(String(parsed.data.valorObjetivo)),
      possuiPrazo: parsed.data.possuiPrazo,
      dataLimite: parsed.data.dataLimite ? new Date(parsed.data.dataLimite) : null,      icone: parsed.data.icone,
      dataCriacao: new Date(),
      userId: user.id,
    },
  });

  return NextResponse.json(novaMeta);
}