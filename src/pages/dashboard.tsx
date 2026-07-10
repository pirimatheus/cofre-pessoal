"use client";

import { useState } from "react";
import { CATEGORIAS_GASTO, TIPOS_ENTRADA } from "@/data/categorias";
import type { Transacao } from "@/types";

type Props = { transacoes: Transacao[]; setTransacoes: React.Dispatch<React.SetStateAction<Transacao[]>> };

export default function Dashboard({ transacoes, setTransacoes }: Props) {
  const [modal, setModal] = useState<"gasto" | "ganho" | null>(null);
  const [valor, setValor] = useState("");
  const [categoria, setCategoria] = useState("");
  const [subtipo, setSubtipo] = useState("");

  const isGanho = modal === "ganho";

  const salvar = async () => {
    const descricao = isGanho ? subtipo : `${categoria} - ${subtipo}`;
    if (!subtipo || !valor) return;

    const nova = {
      nome: descricao,
      data: new Date().toISOString(),
      tipo: isGanho ? "Receita" : "Variável",
      valor: isGanho ? +valor : -Math.abs(+valor),
      icone: isGanho ? "💰" : "🏷️",
      cor: isGanho ? "#EAF3DE" : "#FCEBEB",
    };

    const res = await fetch("/api/transacoes", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(nova),
    });
    const salva = await res.json();

    setTransacoes(prev => [salva, ...prev]);
    setCategoria("");
    setSubtipo("");
    setValor("");
    setModal(null);
  };

  const receitas = transacoes.filter(t => t.valor > 0).reduce((s, t) => s + t.valor, 0);
  const gastos = transacoes.filter(t => t.valor < 0).reduce((s, t) => s + Math.abs(t.valor), 0);
  const saldo = receitas - gastos;
  const poupanca = receitas > 0 ? Math.round((saldo / receitas) * 100) : 0;

  return (
    <div className="flex flex-col gap-4">

      {/* Métricas */}
      <div className="grid grid-cols-2 gap-3">
        {[
          { label: "Saldo",    valor: `R$ ${saldo.toFixed(2)}`,    cor: "#1D9E75" },
          { label: "Receitas", valor: `R$ ${receitas.toFixed(2)}`, cor: "var(--color-text-primary)" },
          { label: "Gastos",   valor: `R$ ${gastos.toFixed(2)}`,   cor: "#E24B4A" },
          { label: "Poupança", valor: `${poupanca}%`,              cor: "var(--color-text-primary)" },
        ].map(m => (
          <div key={m.label} className="rounded-xl p-4"
            style={{ background: "var(--color-background-secondary)", border: "0.5px solid var(--color-border-tertiary)" }}>
            <p className="mb-1" style={{ fontSize: "var(--font-size-xs)", color: "var(--color-text-tertiary)" }}>{m.label}</p>
            <p className="font-semibold" style={{ fontSize: "var(--font-size-md)", color: m.cor }}>{m.valor}</p>
          </div>
        ))}
      </div>

      {/* Alerta */}
      <div className="bg-orange-50 border border-orange-300 rounded-xl p-3 flex gap-3">
        <span style={{ fontSize: "var(--font-size-lg)" }}>⚠️</span>
        <div>
          <p className="font-semibold text-orange-900 mb-1" style={{ fontSize: "var(--font-size-xs)" }}>Alerta semanal</p>
          <p className="text-orange-800" style={{ fontSize: "var(--font-size-xs)" }}>
            Você gastou R$ 480 esta semana — 68% do limite de R$ 700.
          </p>
        </div>
      </div>

      {/* Últimos lançamentos */}
      <div className="rounded-xl p-4"
        style={{ background: "var(--color-background-primary)", border: "0.5px solid var(--color-border-tertiary)" }}>
        <p className="font-semibold mb-3" style={{ fontSize: "var(--font-size-sm)", color: "var(--color-text-primary)" }}>🕐 Últimos lançamentos</p>
        {transacoes.slice(0, 3).map((t, i) => (
          <div key={t.id} className="flex items-center gap-3 py-2"
            style={{ borderBottom: i < 2 ? "0.5px solid var(--color-border-tertiary)" : "none" }}>
            <div className="w-8 h-8 rounded-lg flex items-center justify-center"
              style={{ background: t.cor, fontSize: "var(--font-size-sm)" }}>
              {t.icone}
            </div>
            <div className="flex-1">
              <p className="font-medium" style={{ fontSize: "var(--font-size-xs)", color: "var(--color-text-primary)" }}>{t.nome}</p>
              <p style={{ fontSize: "var(--font-size-xs)", color: "var(--color-text-tertiary)" }}>{t.data}</p>
            </div>
            <p className="font-semibold" style={{ fontSize: "var(--font-size-xs)", color: t.valor >= 0 ? "#1D9E75" : "#E24B4A" }}>
              {t.valor >= 0 ? "+" : "-"} R$ {Math.abs(t.valor)}
            </p>
          </div>
        ))}
      </div>

      {/* Botões */}
      <div className="flex gap-2">
        <button onClick={() => setModal("gasto")}
          className="flex-1 py-2.5 rounded-xl font-semibold cursor-pointer"
          style={{ fontSize: "var(--font-size-xs)", border: "0.5px solid #F09595", background: "#FCEBEB", color: "#791F1F" }}>
          ➖ Add gasto
        </button>
        <button onClick={() => setModal("ganho")}
          className="flex-1 py-2.5 rounded-xl font-semibold cursor-pointer"
          style={{ fontSize: "var(--font-size-xs)", border: "0.5px solid #97C459", background: "#EAF3DE", color: "#27500A" }}>
          ➕ Add ganho
        </button>
      </div>

      {/* Modal */}
      {modal && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
          <div className="rounded-xl p-6 w-72 flex flex-col gap-4"
            style={{ background: "var(--color-background-primary)", border: "0.5px solid var(--color-border-tertiary)" }}>
            <p className="font-semibold" style={{ fontSize: "var(--font-size-sm)", color: "var(--color-text-primary)" }}>
              {isGanho ? "➕ Add ganho" : "➖ Add gasto"}
            </p>

            {isGanho ? (
              <div className="flex flex-col gap-1">
                <p style={{ fontSize: "var(--font-size-xs)", color: "var(--color-text-tertiary)" }}>Tipo de entrada</p>
                <select value={subtipo} onChange={e => setSubtipo(e.target.value)}
                  className="rounded-lg px-3 py-2"
                  style={{ fontSize: "var(--font-size-xs)", background: "var(--color-background-secondary)", border: "0.5px solid var(--color-border-secondary)", color: "var(--color-text-primary)" }}>
                  <option value="">Selecione...</option>
                  {TIPOS_ENTRADA.map(tipo => <option key={tipo} value={tipo}>{tipo}</option>)}
                </select>
              </div>
            ) : (
              <div className="flex flex-col gap-1">
                <p style={{ fontSize: "var(--font-size-xs)", color: "var(--color-text-tertiary)" }}>Categoria</p>
                <select value={categoria} onChange={e => { setCategoria(e.target.value); setSubtipo(""); }}
                  className="rounded-lg px-3 py-2"
                  style={{ fontSize: "var(--font-size-xs)", background: "var(--color-background-secondary)", border: "0.5px solid var(--color-border-secondary)", color: "var(--color-text-primary)" }}>
                  <option value="">Selecione...</option>
                  {Object.keys(CATEGORIAS_GASTO).map(cat => <option key={cat} value={cat}>{cat}</option>)}
                </select>
                {categoria && (
                  <div className="flex flex-col gap-1 mt-2">
                    <p style={{ fontSize: "var(--font-size-xs)", color: "var(--color-text-tertiary)" }}>Tipo de gasto</p>
                    <select value={subtipo} onChange={e => setSubtipo(e.target.value)}
                      className="rounded-lg px-3 py-2"
                      style={{ fontSize: "var(--font-size-xs)", background: "var(--color-background-secondary)", border: "0.5px solid var(--color-border-secondary)", color: "var(--color-text-primary)" }}>
                      <option value="">Selecione...</option>
                      {CATEGORIAS_GASTO[categoria].map(tipo => <option key={tipo} value={tipo}>{tipo}</option>)}
                    </select>
                  </div>
                )}
              </div>
            )}

            <div className="flex flex-col gap-1">
              <p style={{ fontSize: "var(--font-size-xs)", color: "var(--color-text-tertiary)" }}>Valor (R$)</p>
              <input type="number" value={valor} onChange={e => setValor(e.target.value)} placeholder="0,00"
                className="rounded-lg px-3 py-2"
                style={{ fontSize: "var(--font-size-xs)", background: "var(--color-background-secondary)", border: "0.5px solid var(--color-border-secondary)", color: "var(--color-text-primary)" }} />
            </div>

            <div className="flex gap-2">
              <button onClick={() => setModal(null)} className="flex-1 py-2 rounded-lg cursor-pointer"
                style={{ fontSize: "var(--font-size-xs)", color: "var(--color-text-secondary)", border: "0.5px solid var(--color-border-secondary)", background: "transparent" }}>
                Cancelar
              </button>
              <button onClick={salvar} className="flex-1 py-2 rounded-lg font-semibold text-white cursor-pointer border-none"
                style={{ background: isGanho ? "#1D9E75" : "#E24B4A", fontSize: "var(--font-size-xs)" }}>
                Salvar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}