"use client";

import { useState } from "react";
import type { Transacao } from "@/types";

type Props = {
  transacoes: Transacao[];
};

const ORCAMENTO_MOCK = [
  { categoria: "Moradia",              limite: 1300, cor: "#378ADD" },
  { categoria: "Alimentação",          limite: 800,  cor: "#1D9E75" },
  { categoria: "Transporte",           limite: 350,  cor: "#EF9F27" },
  { categoria: "Lazer",                limite: 200,  cor: "#7F77DD" },
  { categoria: "Internet/Assinaturas", limite: 150,  cor: "#E24B4A" },
];

const SUGESTOES = [
  { cat: "Internet/Assinaturas", acao: "Reduzir para R$ 150",         urgencia: "alta",  cor: "#E24B4A" },
  { cat: "Lazer",                acao: "Pode aumentar para R$ 250",   urgencia: "ok",    cor: "#1D9E75" },
  { cat: "Moradia",              acao: "Próximo do limite — atenção", urgencia: "média", cor: "#EF9F27" },
];

const fmt = (v: number) =>
  new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" }).format(v);

const pct = (a: number, b: number) => Math.min(100, Math.round((a / b) * 100));

export default function Orcamento({ transacoes }: Props) {
  const [mostrarRebalancear, setMostrarRebalancear] = useState(false);
  console.log("TRANSACOES RECEBIDAS:", transacoes);

  const gastoAlimentacao = transacoes
  .filter(
    (t) =>
      t.tipo === "Variável" &&
      t.nome.startsWith("Alimentação")
  )
  .reduce((total, t) => total + Math.abs(t.valor), 0);

  console.log("Alimentação:", gastoAlimentacao);

  const obterCategoria = (nome: string) => {
    return nome.split(" - ")[0];
  };

  const calcularGastoCategoria = (categoria: string) => {
    return transacoes
      .filter(
        (t) =>
          t.tipo === "Variável" &&
          obterCategoria(t.nome) === categoria
      )
      .reduce((total, t) => total + Math.abs(t.valor), 0);
    };
    console.log("Alimentação", calcularGastoCategoria("Alimentação"));
    console.log("Moradia", calcularGastoCategoria("Moradia"));
    console.log("Transporte", calcularGastoCategoria("Transporte"));

  return (
    <div className="flex flex-col gap-3">

      <div className="bg-white border border-gray-200 rounded-xl p-4">
        <p className="text-sm font-semibold text-gray-900 mb-4">📊 Orçamento mensal</p>

        {ORCAMENTO_MOCK.map(o => {

          const gastoReal = calcularGastoCategoria(o.categoria);

          const estourou = gastoReal > o.limite;

          return (
            <div key={o.categoria} className="mb-4">
              <div className="flex justify-between items-center mb-1.5">
                <p className="text-xs font-medium" style={{ color: estourou ? "#E24B4A" : "#6b7280" }}>
                  {o.categoria} {estourou && "⚠️"}
                </p>
                <p className="text-xs" style={{ color: estourou ? "#E24B4A" : "#6b7280" }}>
                  {fmt(gastoReal)} / {fmt(o.limite)}
                </p>
              </div>

              <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                <div
                  className="h-full rounded-full"
                  style={{ width: `${pct(gastoReal, o.limite)}%`, backgroundColor: o.cor }}
                />
              </div>
            </div>
          );
        })}
      </div>

      <button
        onClick={() => setMostrarRebalancear(!mostrarRebalancear)}
        className="w-full py-2.5 rounded-xl text-sm font-medium cursor-pointer border border-gray-200 bg-gray-50 text-gray-700"
      >
        {mostrarRebalancear ? "▲ Fechar rebalanceamento" : "⚖️ Rebalancear orçamento"}
      </button>

      {mostrarRebalancear && (
        <div className="bg-green-50 border border-green-200 rounded-xl p-4">
          <p className="text-sm font-semibold text-green-900 mb-3">💡 Sugestão de rebalanceamento</p>

          {SUGESTOES.map((s, i) => (
            <div
              key={s.cat}
              className="flex items-center justify-between py-2"
              style={{ borderBottom: i < SUGESTOES.length - 1 ? "0.5px solid #bbf7d0" : "none" }}
            >
              <div>
                <p className="text-xs font-medium text-green-900">{s.cat}</p>
                <p className="text-xs text-green-700">{s.acao}</p>
              </div>
              <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-white" style={{ color: s.cor }}>
                {s.urgencia}
              </span>
            </div>
          ))}

          <p className="text-xs text-green-700 mt-3">
            Revisando assinaturas você libera R$ 130/mês → R$ 1.560/ano extras.
          </p>
        </div>
      )}

    </div>
  );
}