import { NextRequest, NextResponse } from "next/server";
import { getPluggyApiKey } from "@/lib/pluggy";
import { prisma } from "@/lib/prisma";
import { createClient } from "@/utils/supabase/server";

export async function POST(req: NextRequest) {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();

  if (!user) {
    return NextResponse.json({ error: "Não autenticado" }, { status: 401 });
  }

  const { itemId } = await req.json();
  const apiKey = await getPluggyApiKey();

  const res = await fetch(`https://api.pluggy.ai/accounts?itemId=${itemId}`, {
    headers: { "X-API-KEY": apiKey },
  });
  const { results: contas } = await res.json();

  await Promise.all(
    contas.map((conta: any) =>
      prisma.conta.upsert({
        where: { contaId: conta.id },
        update: { saldo: String(conta.balance), ultimaSync: new Date() },
        create: {
          userId: user.id,
          itemId,
          contaId: conta.id,
          instituicao: conta.name,
          tipo: conta.type,
          saldo: String(conta.balance),
        },
      })
    )
  );

  return NextResponse.json({ ok: true, contasImportadas: contas.length });
}