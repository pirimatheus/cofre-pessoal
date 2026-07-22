import { NextRequest, NextResponse } from "next/server";
import { getPluggyApiKey } from "@/lib/pluggy";
import { prisma } from "@/lib/prisma";
import { categorizarPorRegra } from "@/lib/categorizar";

export async function POST(req: NextRequest) {
  const evento = await req.json();

  if (evento.event === "item/updated" || evento.event === "transactions/created") {
    const conta = await prisma.conta.findFirst({ where: { itemId: evento.itemId } });

    if (conta) {
      const apiKey = await getPluggyApiKey();
      const res = await fetch(`https://api.pluggy.ai/transactions?accountId=${conta.contaId}`, {
        headers: { "X-API-KEY": apiKey },
      });
      const { results: transacoesPluggy } = await res.json();

      await Promise.all(
        transacoesPluggy.map((t: any) => {
          const categoria = categorizarPorRegra(t.description) || "Outros";
          
          return prisma.transacao.upsert({
            where: { pluggyTransactionId: t.id },
            update: {
              valor: String(t.amount),
              nome: `${categoria} - ${t.description}`,
            },
            create: {
              nome: `${categoria} - ${t.description}`,
              data: new Date(t.date),
              tipo: t.amount < 0 ? "Variável" : "Fixo",
              valor: String(t.amount),
              icone: "💳",
              cor: "#378ADD",
              userId: conta.userId,
              pluggyTransactionId: t.id,
            },
          });
        })
      );
    }         
  }

  return NextResponse.json({ ok: true });
}