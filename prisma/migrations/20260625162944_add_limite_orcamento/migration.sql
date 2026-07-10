-- CreateTable
CREATE TABLE "LimiteOrcamento" (
    "id" SERIAL NOT NULL,
    "categoria" TEXT NOT NULL,
    "limite" DOUBLE PRECISION NOT NULL,
    "cor" TEXT NOT NULL,

    CONSTRAINT "LimiteOrcamento_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "LimiteOrcamento_categoria_key" ON "LimiteOrcamento"("categoria");
