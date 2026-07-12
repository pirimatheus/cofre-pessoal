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
import LoadingOverlay from "@/components/loading-overlay";
import { useState, useEffect } from "react";
import PinModal from "@/components/pin-modal";
import { useSessionWatchdog } from "@/hooks/use-session-watchdog";
import ConsentimentoModal from "@/components/consentimento-modal";

export const dynamic = "force-dynamic";

type Page = "dashboard" | "extrato" | "orcamento" | "metas" | "alertas";

export default function Home() {
  useSessionWatchdog();
  const [pagina, setPagina] = useState<Page>("dashboard");
  const [transacoes, setTransacoes] = useState<Transacao[]>([]);
  const [metas, setMetas] = useState<Meta[]>([]);
  const [config, setConfig] = useState(false);
  const [limites, setLimites] = useState<LimiteOrcamento[]>([]);
  const [carregando, setCarregando] = useState(true);
  const [dispositivoConfiavel, setDispositivoConfiavel] = useState<boolean | null>(null);
  const [consentimentoAceito, setConsentimentoAceito] = useState<boolean | null>(null); // 👈 ADICIONA ESSA LINHA


  useEffect(() => {
    Promise.all([
      fetch("/api/transacoes").then(res => res.json()),
      fetch("/api/metas").then(res => res.json()),
      fetch("/api/limites").then(res => res.json()),
      fetch("/api/pin/dispositivo").then(res => res.json()).then(data => setDispositivoConfiavel(data.confiavel)),
      fetch("/api/consentimento").then(res => res.json()).then(data => setConsentimentoAceito(data.aceito)), // 👈 ADICIONA ESSA LINHA
    ])
      .then(([dadosTransacoes, dadosMetas, dadosLimites]) => {
        setTransacoes(dadosTransacoes);
        setMetas(dadosMetas);
        setLimites(dadosLimites);
      })
      .catch(() => {
        // se der erro, ainda assim libera a tela (com dados vazios) em vez de travar pra sempre
      })
      .finally(() => setCarregando(false));
  }, []);
  useEffect(() => {
    const recarregar = () => {
      Promise.all([
        fetch("/api/transacoes").then(res => res.json()),
        fetch("/api/metas").then(res => res.json()),
        fetch("/api/limites").then(res => res.json()),
      ]).then(([dadosTransacoes, dadosMetas, dadosLimites]) => {
        setTransacoes(dadosTransacoes);
        setMetas(dadosMetas);
        setLimites(dadosLimites);
      });
    };

    window.addEventListener("dados-atualizados", recarregar);
    return () => window.removeEventListener("dados-atualizados", recarregar);
  }, []);

    if (consentimentoAceito === false) {                           // 👈 ADICIONA ESSE IF
    return <ConsentimentoModal onAceitar={() => setConsentimentoAceito(true)} />;
  }
  
  if (dispositivoConfiavel === false) {
      return <PinModal onSucesso={() => setDispositivoConfiavel(true)} />;
    }
  
  return (
    <div className="min-h-screen" style={{ background: "var(--color-background-tertiary)" }}>
      <LoadingOverlay show={carregando} />

      <div className="max-w-2xl lg:max-w-5xl mx-auto min-h-screen shadow-sm" style={{ background: "var(--color-background-primary)" }}>
        <Topbar />
        <Navbar paginaAtual={pagina} onChange={setPagina} />

        {config && <ConfigModal onClose={() => setConfig(false)} />}

        <div className="p-4" style={{ paddingBottom: 72 }}>
          <div key={pagina} style={{ animation: "entrada-pagina var(--duration-normal) var(--ease-padrao)" }}>
          {pagina === "dashboard" && <Dashboard transacoes={transacoes} setTransacoes={setTransacoes} />}
          {pagina === "extrato"   && <Extrato transacoes={transacoes} />}
          {pagina === "orcamento" && <Orcamento transacoes={transacoes} limites={limites} setLimites={setLimites} />}
          {pagina === "metas"     && <Metas metas={metas} setMetas={setMetas} />}
          {pagina === "alertas"   && <Alertas />}
          </div>
        </div>
      </div>
    </div>
  );
}