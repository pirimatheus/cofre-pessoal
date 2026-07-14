"use client";

import { useState } from "react";
import type { Transacao, LimiteOrcamento } from "@/types";
import { CATEGORIAS_GASTO } from "@/data/categorias";

type Props = {
  transacoes: Transacao[];
  limites: LimiteOrcamento[];
  setLimites: React.Dispatch<React.SetStateAction<LimiteOrcamento[]>>;
};

const SUGESTOES = [
  { cat: "Internet/Assinaturas", acao: "Reduzir para R$ 150",         urgencia: "alta",  cor: "#E24B4A" },
  { cat: "Lazer",                acao: "Pode aumentar para R$ 250",   urgencia: "ok",    cor: "#1D9E75" },
  { cat: "Moradia",              acao: "Próximo do limite — atenção", urgencia: "média", cor: "#EF9F27" },
];

const fmt = (v: number) =>
  new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" }).format(v);

const pct = (a: number, b: number) => Math.min(100, Math.round((a / b) * 100));

const PALETA = ["#378ADD", "#1D9E75", "#EF9F27", "#7F77DD", "#E24B4A", "#0EA5A0"];

export default function Orcamento({ transacoes, limites, setLimites }: Props) {
  const [mostrarRebalancear, setMostrarRebalancear] = useState(false);
  const [mostrarModalLimite, setMostrarModalLimite] = useState(false);
  const [novaCategoria, setNovaCategoria] = useState("");
  const [novoLimite, setNovoLimite] = useState("");

  async function adicionarLimite() {
    if (!novaCategoria || !novoLimite) return;
    const cor = PALETA[limites.length % PALETA.length];
    const res = await fetch("/api/limites", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ categoria: novaCategoria, limite: Number(novoLimite), cor }),
    });
    const salvo = await res.json();
    setLimites(prev => [...prev, salvo]);
    setNovaCategoria("");
    setNovoLimite("");
    setMostrarModalLimite(false);
  }

  const obterCategoria = (nome: string) => nome.split(" - ")[0];

  const calcularGastoCategoria = (categoria: string) =>
    transacoes
      .filter(t => t.tipo === "Variável" && obterCategoria(t.nome) === categoria)
      .reduce((total, t) => total + Math.abs(t.valor), 0);

  return (
    <div className="flex flex-col gap-3">
      <div className="rounded-xl p-4"
        style={{ background: "var(--color-background-primary)", border: "0.5px solid var(--color-border-tertiary)" }}>
        <p className="font-semibold mb-4" style={{ fontSize: "var(--font-size-sm)", color: "var(--color-text-primary)" }}>📊 Orçamento mensal</p>
        <button onClick={() => setMostrarModalLimite(true)} className="font-medium mb-3"
          style={{ fontSize: "var(--font-size-xs)", color: "#378ADD", background: "none", border: "none", cursor: "pointer" }}>
          ➕ Adicionar limite
        </button>

        {limites.map(o => {
          const gastoReal = calcularGastoCategoria(o.categoria);
          const estourou = gastoReal > o.limite;
          return (
            <div key={o.categoria} className="mb-4">
              <div className="flex justify-between items-center mb-1.5">
                <p className="font-medium" style={{ fontSize: "var(--font-size-xs)", color: estourou ? "#E24B4A" : "var(--color-text-secondary)" }}>
                  {o.categoria} {estourou && "⚠️"}
                </p>
                <p style={{ fontSize: "var(--font-size-xs)", color: estourou ? "#E24B4A" : "var(--color-text-secondary)" }}>
                  {fmt(gastoReal)} / {fmt(o.limite)}
                </p>
              </div>
              <div className="h-2 rounded-full overflow-hidden" style={{ background: "var(--color-background-secondary)" }}>
                <div className="h-full rounded-full" style={{ width: `${pct(gastoReal, o.limite)}%`, backgroundColor: o.cor }} />
              </div>
            </div>
          );
        })}
      </div>

      {mostrarModalLimite && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
          <div className="w-[90%] max-w-md rounded-xl p-5 space-y-4"
            style={{ background: "var(--color-background-primary)", border: "0.5px solid var(--color-border-tertiary)" }}>
            <h2 className="font-semibold" style={{ fontSize: "var(--font-size-md)", color: "var(--color-text-primary)" }}>Novo limite</h2>
            <div>
              <label style={{ fontSize: "var(--font-size-sm)", color: "var(--color-text-secondary)" }}>Categoria</label>
              <select className="w-full rounded-lg p-2 mt-1" style={{ fontSize: "var(--font-size-sm)", background: "var(--color-background-secondary)", border: "0.5px solid var(--color-border-secondary)", color: "var(--color-text-primary)" }}
                value={novaCategoria} onChange={e => setNovaCategoria(e.target.value)}>
                <option value="">Selecione...</option>
                {Object.keys(CATEGORIAS_GASTO).map(cat => <option key={cat} value={cat}>{cat}</option>)}
              </select>
            </div>
            <div>
              <label style={{ fontSize: "var(--font-size-sm)", color: "var(--color-text-secondary)" }}>Limite (R$)</label>
              <input type="number" className="w-full rounded-lg p-2 mt-1" style={{ fontSize: "var(--font-size-sm)", background: "var(--color-background-secondary)", border: "0.5px solid var(--color-border-secondary)", color: "var(--color-text-primary)" }}
                value={novoLimite} onChange={e => setNovoLimite(e.target.value)} placeholder="0" />
            </div>
            <div className="flex gap-2 pt-2">
              <button onClick={() => setMostrarModalLimite(false)} className="flex-1 rounded-lg p-2"
                style={{ fontSize: "var(--font-size-sm)", background: "var(--color-background-secondary)", color: "var(--color-text-primary)", border: "0.5px solid var(--color-border-secondary)" }}>
                Cancelar
              </button>
              <button onClick={adicionarLimite} className="flex-1 rounded-lg p-2 text-white"
                style={{ fontSize: "var(--font-size-sm)", background: "#1D9E75", border: "none" }}>
                Criar limite
              </button>
            </div>
          </div>
        </div>
      )}

      <button onClick={() => setMostrarRebalancear(!mostrarRebalancear)}
        className="w-full py-2.5 rounded-xl font-medium cursor-pointer"
        style={{ fontSize: "var(--font-size-sm)", border: "0.5px solid var(--color-border-secondary)", background: "var(--color-background-secondary)", color: "var(--color-text-primary)" }}>
        {mostrarRebalancear ? "▲ Fechar rebalanceamento" : "⚖️ Rebalancear orçamento"}
      </button>

      {mostrarRebalancear && (
        <div className="rounded-xl p-4"
          style={{ background: "#EAF3DE", border: "0.5px solid #97C459" }}>
          <p className="font-semibold mb-3" style={{ fontSize: "var(--font-size-sm)", color: "#1D4F0A" }}>💡 Sugestão de rebalanceamento</p>
          {SUGESTOES.map((s, i) => (
            <div key={s.cat} className="flex items-center justify-between py-2"
              style={{ borderBottom: i < SUGESTOES.length - 1 ? "0.5px solid #C5E09A" : "none" }}>
              <div>
                <p className="font-medium" style={{ fontSize: "var(--font-size-xs)", color: "#1D4F0A" }}>{s.cat}</p>
                <p style={{ fontSize: "var(--font-size-xs)", color: "#2D6A0A" }}>{s.acao}</p>
              </div>
              <span className="font-semibold px-2 py-0.5 rounded-full"
                style={{ fontSize: "var(--font-size-xs)", background: "var(--color-background-primary)", color: s.cor }}>
                {s.urgencia}
              </span>
            </div>
          ))}
          <p className="mt-3" style={{ fontSize: "var(--font-size-xs)", color: "#2D6A0A" }}>
            Revisando assinaturas você libera R$ 130/mês → R$ 1.560/ano extras.
          </p>
        </div>
      )}
    </div>
  );
}