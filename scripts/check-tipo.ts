import "dotenv/config";
import { PrismaClient } from "../generated/prisma/client";
import { decrypt } from "../src/lib/crypto";

const prisma = new PrismaClient();

async function main() {
  const transacoes = await prisma.$queryRawUnsafe<any[]>(`SELECT id, valor FROM "Transacao"`);
  for (const t of transacoes) {
    console.log("valor bruto no banco:", t.valor);
    console.log("valor descriptografado:", decrypt(t.valor));
  }
}

main().finally(() => prisma.$disconnect());