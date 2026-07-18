import { NextRequest, NextResponse } from "next/server";
import webpush from "web-push";
import { prisma } from "@/lib/prisma";

webpush.setVapidDetails(
  "mailto:matheuspirenopolis@gmail.com",
  process.env.NEXT_PUBLIC_VAPID_PUBLIC_KEY!,
  process.env.VAPID_PRIVATE_KEY!
);

export async function POST(req: NextRequest) {
  const { userId, titulo, corpo } = await req.json();

  const inscricoes = await prisma.pushSubscription.findMany({ where: { userId } });

  await Promise.all(
    inscricoes.map((sub) =>
      webpush.sendNotification(
        {
          endpoint: sub.endpoint,
          keys: { p256dh: sub.p256dh, auth: sub.auth },
        },
        JSON.stringify({ titulo, corpo })
      ).catch(() => {
        // inscrição inválida/expirada — pode apagar do banco depois
      })
    )
  );

  return NextResponse.json({ ok: true });
}