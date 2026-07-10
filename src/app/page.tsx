"use client";

import Topbar from "@/components/topbar";
import Navbar from "@/components/navbar";
import Dashboard from "@/pages/dashboard";
import Extrato from "@/pages/extrato";
import Orcamento from "@/pages/orcamento";
import Metas from "@/pages/metas";
import Alertas from "@/pages/alertas";
import type { Transacao, Meta, LimiteOrcamento } from "@/types";
import ConfigModal from "@/components/config-modal";
import { useState, useEffect } from "react";

export const dynamic = "force-dynamic";

type Page = "dashboard" | "extrato" | "orcamento" | "metas" | "alertas";

export default function Home() {
  const [pagina, setPagina] = useState<Page>("dashboard");
  const [transacoes, setTransacoes] = useState<Transacao[]>([]);
  const [metas, setMetas] = useState<Meta[]>([]);
  const [config, setConfig] = useState(false);
  const [limites, setLimites] = useState<LimiteOrcamento[]>([]);

  useEffect(() => {
  fetch("/api/transacoes")
    .then(res => res.json())
    .then(data => setTransacoes(data));

    fetch("/api/metas")
      .then(res => res.json())
      .then(data => setMetas(data));

    fetch("/api/limites")
      .then(res => res.json())
      .then(data => setLimites(data));
  }, []);
  

  return (
    <div className="min-h-screen" style={{ background: "var(--color-background-tertiary)" }}>
      <div className="max-w-2xl mx-auto min-h-screen shadow-sm" style={{ background: "var(--color-background-primary)" }}>
        <Topbar />
        <Navbar paginaAtual={pagina} onChange={setPagina} />

        {config && <ConfigModal onClose={() => setConfig(false)} />}
        
        <div className="p-4">
          {pagina === "dashboard" && <Dashboard transacoes={transacoes} setTransacoes={setTransacoes} />}
          {pagina === "extrato"   && <Extrato transacoes={transacoes} />}
          {pagina === "orcamento" && <Orcamento transacoes={transacoes} limites={limites} setLimites={setLimites} />}
          {pagina === "metas"     && <Metas metas={metas} setMetas={setMetas} />}
          {pagina === "alertas"   && <Alertas />}
        </div>
      </div>
    </div>
  );
}