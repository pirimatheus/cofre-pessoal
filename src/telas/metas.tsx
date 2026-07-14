"use client";

import type { Meta } from "@/types";
import { useState } from "react";

type Props = { metas: Meta[], setMetas: React.Dispatch<React.SetStateAction<Meta[]>> };

const fmt = (v: number) =>
  new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" }).format(v);

const pct = (a: number, b: number) => Math.min(100, Math.round((a / b) * 100));

export default function Metas({ metas, setMetas }: Props) {
  const [metaSelecionada, setMetaSelecionada] = useState<number | null>(null);
  const [mostrarModal, setMostrarModal] = useState(false);
  const [nomeMeta, setNomeMeta] = useState("");
  const [valorAtual, setValorAtual] = useState("");
  const [valorObjetivo, setValorObjetivo] = useState("");
  const [possuiPrazo, setPossuiPrazo] = useState(true);
  const [dataLimite, setDataLimite] = useState("");

  async function adicionarMeta() {
    if (!nomeMeta || !valorObjetivo) return;
    const res = await fetch("/api/metas", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        nome: nomeMeta,
        valorAtual: Number(valorAtual || 0),
        valorObjetivo: Number(valorObjetivo),
        possuiPrazo,
        dataLimite: possuiPrazo ? dataLimite : null,
        icone: "🎯",
      }),
    });
    const salva = await res.json();
    setMetas(prev => [...prev, salva]);
    setNomeMeta(""); setValorAtual(""); setValorObjetivo("");
    setPossuiPrazo(true); setDataLimite("");
    setMostrarModal(false);
  }

  return (
    <div className="flex flex-col gap-3">
      <div className="rounded-xl p-4"
        style={{ background: "var(--color-background-primary)", border: "0.5px solid var(--color-border-tertiary)" }}>
        <div className="flex items-center justify-between mb-4">
          <p className="font-semibold" style={{ fontSize: "var(--font-size-sm)", color: "var(--color-text-primary)" }}>🎯 Metas financeiras</p>
          <button onClick={() => setMostrarModal(true)} className="px-3 py-1.5 rounded-lg font-medium cursor-pointer"
            style={{ fontSize: "var(--font-size-xs)", background: "var(--color-background-secondary)", border: "0.5px solid var(--color-border-secondary)", color: "var(--color-text-primary)" }}>
            ➕ Nova Meta
          </button>
        </div>

        {metas.map(m => {
          const p = pct(m.valorAtual, m.valorObjetivo);
          const corBarra = p >= 70 ? "#1D9E75" : p >= 40 ? "#EF9F27" : "#378ADD";
          const corPill = p >= 70 ? { bg: "#EAF3DE", color: "#27500A" } : p >= 40 ? { bg: "#FAEEDA", color: "#633806" } : { bg: "#E6F1FB", color: "#0C447C" };

          return (
            <div key={m.id} className="mb-4">
              <div className="flex items-center gap-3 mb-2">
                <span style={{ fontSize: "var(--font-size-lg)" }}>{m.icone}</span>
                <div className="flex-1">
                  <div className="flex justify-between items-center">
                    <p className="font-medium" style={{ fontSize: "var(--font-size-xs)", color: "var(--color-text-primary)" }}>{m.nome}</p>
                    <span className="font-semibold px-2 py-0.5 rounded-full"
                      style={{ fontSize: "var(--font-size-xs)", background: corPill.bg, color: corPill.color }}>{p}%</span>
                  </div>
                  <p style={{ fontSize: "var(--font-size-xs)", color: "var(--color-text-tertiary)" }}>
                    {fmt(m.valorAtual)} de {fmt(m.valorObjetivo)} · prazo: {m.dataLimite}
                  </p>
                </div>
              </div>
              <div className="h-1.5 rounded-full overflow-hidden" style={{ background: "var(--color-background-secondary)" }}>
                <div className="h-full rounded-full" style={{ width: `${p}%`, backgroundColor: corBarra }} />
              </div>
              <button onClick={() => setMetaSelecionada(metaSelecionada === m.id ? null : m.id)}
                className="mt-1.5 cursor-pointer bg-transparent border-none p-0"
                style={{ fontSize: "var(--font-size-xs)", color: "var(--color-text-tertiary)" }}>
                {metaSelecionada === m.id ? "▲ Fechar estratégia" : "▼ Ver estratégia"}
              </button>
              {metaSelecionada === m.id && (
                <div className="mt-2 rounded-xl p-3"
                  style={{ background: "#E6F1FB", border: "0.5px solid #9CC5EE" }}>
                  <p className="font-semibold mb-1" style={{ fontSize: "var(--font-size-xs)", color: "#0C447C" }}>📌 Estratégia para {m.nome}</p>
                  <p className="leading-relaxed" style={{ fontSize: "var(--font-size-xs)", color: "#1A4A7A" }}>
                    · Faltam {fmt(m.valorObjetivo - m.valorAtual)} para atingir a meta.<br />
                    · Guardando {fmt(Math.ceil((m.valorObjetivo - m.valorAtual) / 6))}/mês você chega no prazo.<br />
                    · Dica: direcione sobras do orçamento de Lazer para esta meta.
                  </p>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {mostrarModal && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
          <div className="w-[90%] max-w-md rounded-xl p-5 space-y-4"
            style={{ background: "var(--color-background-primary)", border: "0.5px solid var(--color-border-tertiary)" }}>
            <h2 className="font-semibold" style={{ fontSize: "var(--font-size-md)", color: "var(--color-text-primary)" }}>Nova Meta</h2>
            <div>
              <label style={{ fontSize: "var(--font-size-sm)", color: "var(--color-text-secondary)" }}>Nome</label>
              <input className="w-full rounded-lg p-2 mt-1" style={{ fontSize: "var(--font-size-sm)", background: "var(--color-background-secondary)", border: "0.5px solid var(--color-border-secondary)", color: "var(--color-text-primary)" }}
                value={nomeMeta} onChange={e => setNomeMeta(e.target.value)} placeholder="Ex: Viagem para Europa" />
            </div>
            <div>
              <label style={{ fontSize: "var(--font-size-sm)", color: "var(--color-text-secondary)" }}>Valor atual</label>
              <input type="number" className="w-full rounded-lg p-2 mt-1" style={{ fontSize: "var(--font-size-sm)", background: "var(--color-background-secondary)", border: "0.5px solid var(--color-border-secondary)", color: "var(--color-text-primary)" }}
                value={valorAtual} onChange={e => setValorAtual(e.target.value)} placeholder="0" />
            </div>
            <div>
              <label style={{ fontSize: "var(--font-size-sm)", color: "var(--color-text-secondary)" }}>Valor objetivo</label>
              <input type="number" className="w-full rounded-lg p-2 mt-1" style={{ fontSize: "var(--font-size-sm)", background: "var(--color-background-secondary)", border: "0.5px solid var(--color-border-secondary)", color: "var(--color-text-primary)" }}
                value={valorObjetivo} onChange={e => setValorObjetivo(e.target.value)} placeholder="0" />
            </div>
            <div className="flex items-center justify-between">
              <span style={{ fontSize: "var(--font-size-sm)", color: "var(--color-text-secondary)" }}>Possui prazo?</span>
              <button onClick={() => setPossuiPrazo(!possuiPrazo)} className="px-3 py-1 rounded-full"
                style={{ fontSize: "var(--font-size-sm)", background: possuiPrazo ? "#EAF3DE" : "var(--color-background-secondary)", color: possuiPrazo ? "#1D9E75" : "var(--color-text-secondary)", border: "none", cursor: "pointer" }}>
                {possuiPrazo ? "Sim" : "Não"}
              </button>
            </div>
            {possuiPrazo && (
              <div>
                <label style={{ fontSize: "var(--font-size-sm)", color: "var(--color-text-secondary)" }}>Data limite</label>
                <input type="date" className="w-full rounded-lg p-2 mt-1" style={{ fontSize: "var(--font-size-sm)", background: "var(--color-background-secondary)", border: "0.5px solid var(--color-border-secondary)", color: "var(--color-text-primary)" }}
                  value={dataLimite} onChange={e => setDataLimite(e.target.value)} />
              </div>
            )}
            <div className="flex gap-2 pt-2">
              <button onClick={() => setMostrarModal(false)} className="flex-1 rounded-lg p-2"
                style={{ fontSize: "var(--font-size-sm)", background: "var(--color-background-secondary)", color: "var(--color-text-primary)", border: "0.5px solid var(--color-border-secondary)" }}>
                Cancelar
              </button>
              <button onClick={adicionarMeta} className="flex-1 rounded-lg p-2 text-white border-none"
                style={{ fontSize: "var(--font-size-sm)", background: "#1D9E75", cursor: "pointer" }}>
                Criar Meta
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}