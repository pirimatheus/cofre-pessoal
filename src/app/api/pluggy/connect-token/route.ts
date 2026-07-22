import { NextRequest, NextResponse } from "next/server";
import { getPluggyApiKey } from "@/lib/pluggy";
import { createClient } from "@/utils/supabase/server";

export async function POST(req: NextRequest) {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();

  if (!user) {
    return NextResponse.json({ error: "Não autenticado" }, { status: 401 });
  }

  const apiKey = await getPluggyApiKey();

  const res = await fetch("https://api.pluggy.ai/connect_token", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-API-KEY": apiKey,
    },
    body: JSON.stringify({
      clientUserId: user.id,
    }),
  });

  const data = await res.json();

  return NextResponse.json({ connectToken: data.accessToken });
}