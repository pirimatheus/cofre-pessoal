import { NextResponse } from "next/server";
import { createClient } from "@/utils/supabase/server";
import { prisma } from "@/lib/prisma";
import { createAdminClient } from "@/utils/supabase/admin";

export async function DELETE() {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) return NextResponse.json({ error: "Não autenticado" }, { status: 401 });


  
  // Apaga todos os dados do usuário nas suas tabelas
  await prisma.transacao.deleteMany({ where: { userId: user.id } });
  await prisma.meta.deleteMany({ where: { userId: user.id } });
  await prisma.limiteOrcamento.deleteMany({ where: { userId: user.id } });
  await prisma.usuarioPin.deleteMany({ where: { userId: user.id } });
  await prisma.dispositivoConfiavel.deleteMany({ where: { userId: user.id } });
  await prisma.logLogin.deleteMany({ where: { userId: user.id } });

  // Remove o usuário do sistema de login (Supabase Auth)
  const admin = createAdminClient();
  const { error } = await admin.auth.admin.deleteUser(user.id);
  if (error) {
    return NextResponse.json({ error: "Dados apagados, mas houve erro ao remover a conta de login" }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}