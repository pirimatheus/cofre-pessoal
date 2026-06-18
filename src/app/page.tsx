"use client";

import { useState } from "react";
import Topbar from "@/components/topbar";
import Navbar from "@/components/navbar";
import Dashboard from "@/pages/dashboard";
import Extrato from "@/pages/extrato";
import Orcamento from "@/pages/orcamento";
import Metas from "@/pages/metas";
import Alertas from "@/pages/alertas";

type Page = "dashboard" | "extrato" | "orcamento" | "metas" | "alertas";

export default function Home() {
  const [pagina, setPagina] = useState<Page>("dashboard");

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="max-w-2xl mx-auto bg-white min-h-screen shadow-sm">
        <Topbar />
        <Navbar paginaAtual={pagina} onChange={setPagina} />

        <div className="p-4">
          {pagina === "dashboard" && <Dashboard />}
          {pagina === "extrato"   && <Extrato />}
          {pagina === "orcamento" && <Orcamento />}
          {pagina === "metas"     && <Metas />}
          {pagina === "alertas"   && <Alertas />}
        </div>
      </div>
    </div>
  );
}