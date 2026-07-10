-- CreateTable
CREATE TABLE "Meta" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "valorAtual" DOUBLE PRECISION NOT NULL,
    "valorObjetivo" DOUBLE PRECISION NOT NULL,
    "possuiPrazo" BOOLEAN NOT NULL,
    "dataLimite" TIMESTAMP(3),
    "icone" TEXT NOT NULL,
    "dataCriacao" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Meta_pkey" PRIMARY KEY ("id")
);
