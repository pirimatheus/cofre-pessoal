-- Remove colunas antigas (com dados sem criptografia)
ALTER TABLE "Transacao" DROP COLUMN "valor";
ALTER TABLE "Meta" DROP COLUMN "valorAtual";
ALTER TABLE "Meta" DROP COLUMN "valorObjetivo";
ALTER TABLE "LimiteOrcamento" DROP COLUMN "limite";

-- Renomeia as colunas novas (com dados criptografados) pro nome original
ALTER TABLE "Transacao" RENAME COLUMN "valor_novo" TO "valor";
ALTER TABLE "Meta" RENAME COLUMN "valorAtual_novo" TO "valorAtual";
ALTER TABLE "Meta" RENAME COLUMN "valorObjetivo_novo" TO "valorObjetivo";
ALTER TABLE "LimiteOrcamento" RENAME COLUMN "limite_novo" TO "limite";