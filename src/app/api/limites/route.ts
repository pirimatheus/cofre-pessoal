import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { createClient } from "@/utils/supabase/server";
import { encrypt, decrypt } from "@/lib/crypto";
import { limiteSchema } from "@/lib/validation";

export async function GET() {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();

  if (!user) {
    return NextResponse.json({ error: "Não autenticado" }, { status: 401 });
  }

  const limite = await prisma.limiteOrcamento.findMany({
    where: { userId: user.id },
    orderBy: { categoria: "desc" },
  });

  const limiteDescriptografado = limite.map((l) => ({
    ...l,
    limite: Number(decrypt(l.limite)),
  }));

  return NextResponse.json(limiteDescriptografado);
}

export async function POST(request: Request) {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();

  if (!user) {
    return NextResponse.json({ error: "Não autenticado" }, { status: 401 });
  }

  const body = await request.json();
  const parsed = limiteSchema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json(
      { error: "Dados inválidos", details: parsed.error.flatten() },
      { status: 400 }
    );
  }

  const novoLimite = await prisma.limiteOrcamento.create({
    data: {
      categoria: parsed.data.categoria,
      limite: encrypt(String(parsed.data.limite)),
      cor: parsed.data.cor,
      userId: user.id,
    },
  });

  return NextResponse.json(novoLimite);
}