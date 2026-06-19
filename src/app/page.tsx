"use client";

import { useState } from "react";
import Topbar from "@/components/topbar";
import Navbar from "@/components/navbar";
import Dashboard from "@/pages/dashboard";
import Extrato from "@/pages/extrato";
import Orcamento from "@/pages/orcamento";
import Metas from "@/pages/metas";
import Alertas from "@/pages/alertas";
import type { Transacao } from "@/types";

const TRANSACOES_INICIAIS: Transacao[] = [
  { id: 1, nome: "Salário",                      data: "01 jun", tipo: "Receita",  valor: 5300,  icone: "🏦", cor: "#EAF3DE" },
  { id: 2, nome: "Moradia - Aluguel/Prestação",   data: "05 jun", tipo: "Variável", valor: -1200, icone: "🏠", cor: "#FCEBEB" },
  { id: 3, nome: "Transporte - Combustível",      data: "15 jun", tipo: "Variável", valor: -95,   icone: "🚗", cor: "#FAEEDA" },
];

type Page = "dashboard" | "extrato" | "orcamento" | "metas" | "alertas";

export default function Home() {
  const [pagina, setPagina] = useState<Page>("dashboard");
  const [transacoes, setTransacoes] = useState<Transacao[]>(TRANSACOES_INICIAIS);

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="max-w-2xl mx-auto bg-white min-h-screen shadow-sm">
        <Topbar />
        <Navbar paginaAtual={pagina} onChange={setPagina} />

        <div className="p-4">
          {pagina === "dashboard" && <Dashboard transacoes={transacoes} setTransacoes={setTransacoes} />}
          {pagina === "extrato"   && <Extrato transacoes={transacoes} />}
          {pagina === "orcamento" && <Orcamento transacoes={transacoes} />}
          {pagina === "metas"     && <Metas />}
          {pagina === "alertas"   && <Alertas />}
        </div>
      </div>
    </div>
  );
}