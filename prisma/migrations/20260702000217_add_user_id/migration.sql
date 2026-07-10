-- AlterTable: adiciona com default temporário para linhas existentes
ALTER TABLE "LimiteOrcamento" ADD COLUMN "userId" TEXT NOT NULL DEFAULT '';
ALTER TABLE "Meta" ADD COLUMN "userId" TEXT NOT NULL DEFAULT '';
ALTER TABLE "Transacao" ADD COLUMN "userId" TEXT NOT NULL DEFAULT '';

-- Remove o default (novas linhas vão exigir userId explícito)
ALTER TABLE "LimiteOrcamento" ALTER COLUMN "userId" DROP DEFAULT;
ALTER TABLE "Meta" ALTER COLUMN "userId" DROP DEFAULT;
ALTER TABLE "Transacao" ALTER COLUMN "userId" DROP DEFAULT;

-- CreateIndex
CREATE INDEX "LimiteOrcamento_userId_idx" ON "LimiteOrcamento"("userId");
CREATE UNIQUE INDEX "LimiteOrcamento_categoria_userId_key" ON "LimiteOrcamento"("categoria", "userId");
CREATE INDEX "Meta_userId_idx" ON "Meta"("userId");
CREATE INDEX "Transacao_userId_idx" ON "Transacao"("userId");