import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { createClient } from "@/utils/supabase/server";
import { prisma } from "@/lib/prisma";
import { randomBytes, createHash } from "crypto";

const NOME_COOKIE = "dispositivo_token";
const DIAS_VALIDADE = 30;

function gerarHash(token: string) {
  return createHash("sha256").update(token).digest("hex");
}

// Checa se o dispositivo (cookie) já é confiável
export async function GET() {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) return NextResponse.json({ confiavel: false }, { status: 401 });

  const cookieStore = await cookies();
  const token = cookieStore.get(NOME_COOKIE)?.value;
  if (!token) return NextResponse.json({ confiavel: false });

  const registro = await prisma.dispositivoConfiavel.findFirst({
    where: { userId: user.id, tokenHash: gerarHash(token), expiraEm: { gt: new Date() } },
  });

  return NextResponse.json({ confiavel: !!registro });
}

// Marca esse dispositivo como confiável (chamado depois do PIN certo)
export async function POST() {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) return NextResponse.json({ error: "Não autenticado" }, { status: 401 });

  const token = randomBytes(32).toString("hex");
  const expiraEm = new Date(Date.now() + DIAS_VALIDADE * 24 * 60 * 60 * 1000);

  await prisma.dispositivoConfiavel.create({
    data: { userId: user.id, tokenHash: gerarHash(token), expiraEm },
  });

  const cookieStore = await cookies();
  cookieStore.set(NOME_COOKIE, token, {
    httpOnly: true,
    secure: true,
    sameSite: "lax",
    maxAge: DIAS_VALIDADE * 24 * 60 * 60,
    path: "/",
  });

  return NextResponse.json({ ok: true });
}