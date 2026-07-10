import { PrismaClient } from "../generated/prisma/client";
import { encrypt } from "../src/lib/crypto";

const prisma = new PrismaClient();

async function main() {
  // Transacao
  const transacoes = await prisma.$queryRawUnsafe<any[]>(
    `SELECT id, valor FROM "Transacao"`
  );
  for (const t of transacoes) {
    await prisma.$executeRawUnsafe(
      `UPDATE "Transacao" SET valor_novo = $1 WHERE id = $2`,
      encrypt(String(t.valor)),
      t.id
    );
  }

  // Meta
  const metas = await prisma.$queryRawUnsafe<any[]>(
    `SELECT id, "valorAtual", "valorObjetivo" FROM "Meta"`
  );
  for (const m of metas) {
    await prisma.$executeRawUnsafe(
      `UPDATE "Meta" SET "valorAtual_novo" = $1, "valorObjetivo_novo" = $2 WHERE id = $3`,
      encrypt(String(m.valorAtual)),
      encrypt(String(m.valorObjetivo)),
      m.id
    );
  }

  // LimiteOrcamento
  const limites = await prisma.$queryRawUnsafe<any[]>(
    `SELECT id, limite FROM "LimiteOrcamento"`
  );
  for (const l of limites) {
    await prisma.$executeRawUnsafe(
      `UPDATE "LimiteOrcamento" SET limite_novo = $1 WHERE id = $2`,
      encrypt(String(l.limite)),
      l.id
    );
  }

  console.log("Migração concluída.");
}

main().finally(() => prisma.$disconnect());