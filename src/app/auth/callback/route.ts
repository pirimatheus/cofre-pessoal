import { NextResponse } from "next/server";
import { createClient } from "@/utils/supabase/server";
import { prisma } from "@/lib/prisma";

export async function GET(request: Request) {
  const { searchParams, origin } = new URL(request.url);
  const code = searchParams.get("code");
  const next = searchParams.get("next") ?? "/";

  const ip =
    request.headers.get("x-forwarded-for")?.split(",")[0].trim() ??
    request.headers.get("x-real-ip") ??
    null;

  if (code) {
    const supabase = await createClient();
    const { error } = await supabase.auth.exchangeCodeForSession(code);

    if (!error) {
      const { data: { user } } = await supabase.auth.getUser();

      if (user) {
        // Não deixa o login falhar por causa do log — só registra, sem travar o fluxo
        try {
          await prisma.logLogin.create({
            data: { userId: user.id, ip, sucesso: true },
          });
        } catch (logError) {
          console.error("Falha ao registrar log de login:", logError);
        }
      }

      return NextResponse.redirect(`${origin}${next}`);
    }

    // Login falhou (código inválido/expirado) — registra como tentativa sem sucesso
    try {
      await prisma.logLogin.create({
        data: { userId: "desconhecido", ip, sucesso: false },
      });
    } catch (logError) {
      console.error("Falha ao registrar log de login:", logError);
    }
  }

  return NextResponse.redirect(`${origin}/auth/auth-error`);
}