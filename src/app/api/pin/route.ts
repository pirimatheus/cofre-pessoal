import { NextResponse } from "next/server";
import { createClient } from "@/utils/supabase/server";
import { prisma } from "@/lib/prisma";
import bcrypt from "bcryptjs";

const MAX_TENTATIVAS = 5;
const BLOQUEIO_MINUTOS = 10;

export async function GET() {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) return NextResponse.json({ error: "Não autenticado" }, { status: 401 });

  const pin = await prisma.usuarioPin.findUnique({ where: { userId: user.id } });
  return NextResponse.json({ existe: !!pin });
}

// Cadastrar ou trocar o PIN
export async function POST(req: Request) {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) return NextResponse.json({ error: "Não autenticado" }, { status: 401 });

  const { pin } = await req.json();
  if (!/^\d{4}$/.test(pin)) {
    return NextResponse.json({ error: "PIN deve ter 4 dígitos" }, { status: 400 });
  }

  const pinHash = await bcrypt.hash(pin, 10);

  await prisma.usuarioPin.upsert({
    where: { userId: user.id },
    update: { pinHash, tentativas: 0, bloqueadoAte: null },
    create: { userId: user.id, pinHash },
  });

  return NextResponse.json({ ok: true });
}

// Verificar o PIN (com limite de tentativas)
export async function PUT(req: Request) {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) return NextResponse.json({ error: "Não autenticado" }, { status: 401 });

  const { pin } = await req.json();
  const registro = await prisma.usuarioPin.findUnique({ where: { userId: user.id } });
  if (!registro) return NextResponse.json({ error: "PIN não cadastrado" }, { status: 404 });

  // Checa se está bloqueado
  if (registro.bloqueadoAte && registro.bloqueadoAte > new Date()) {
    const minutosRestantes = Math.ceil((registro.bloqueadoAte.getTime() - Date.now()) / 60000);
    return NextResponse.json(
      { valido: false, bloqueado: true, minutosRestantes },
      { status: 429 }
    );
  }

  const valido = await bcrypt.compare(pin, registro.pinHash);

  if (valido) {
    await prisma.usuarioPin.update({
      where: { userId: user.id },
      data: { tentativas: 0, bloqueadoAte: null },
    });
    return NextResponse.json({ valido: true });
  }

  const novasTentativas = registro.tentativas + 1;
  const bloquear = novasTentativas >= MAX_TENTATIVAS;

  await prisma.usuarioPin.update({
    where: { userId: user.id },
    data: {
      tentativas: bloquear ? 0 : novasTentativas,
      bloqueadoAte: bloquear ? new Date(Date.now() + BLOQUEIO_MINUTOS * 60_000) : null,
    },
  });

  return NextResponse.json({
    valido: false,
    tentativasRestantes: bloquear ? 0 : MAX_TENTATIVAS - novasTentativas,
    bloqueado: bloquear,
  });
}