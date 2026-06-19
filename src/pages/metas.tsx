"use client";

import { useState } from "react";

const METAS_MOCK = [
  { id: 1, nome: "Viagem de férias",      atual: 3100, total: 5000,  icone: "✈️", prazo: "dez 2026" },
  { id: 2, nome: "Novo PC",               atual: 1230, total: 3000,  icone: "💻", prazo: "set 2026" },
  { id: 3, nome: "Reserva de emergência", atual: 1800, total: 10000, icone: "🏛️", prazo: "dez 2027" },
];

const fmt = (v: number) =>
  new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" }).format(v);

const pct = (a: number, b: number) => Math.min(100, Math.round((a / b) * 100));

export default function Metas() {
  const [metaSelecionada, setMetaSelecionada] = useState<number | null>(null);

  return (
    <div className="flex flex-col gap-3">
      <div className="bg-white border border-gray-200 rounded-xl p-4">
        <p className="text-sm font-semibold text-gray-900 mb-4">🎯 Metas financeiras</p>

        {METAS_MOCK.map(m => {
          const p = pct(m.atual, m.total);
          const corBarra = p >= 70 ? "#1D9E75" : p >= 40 ? "#EF9F27" : "#378ADD";
          const corPill  = p >= 70
            ? { bg: "#EAF3DE", color: "#27500A" }
            : p >= 40
            ? { bg: "#FAEEDA", color: "#633806" }
            : { bg: "#E6F1FB", color: "#0C447C" };

          return (
            <div key={m.id} className="mb-4">
              <div className="flex items-center gap-3 mb-2">
                <span className="text-xl">{m.icone}</span>
                <div className="flex-1">
                  <div className="flex justify-between items-center">
                    <p className="text-xs font-medium text-gray-900">{m.nome}</p>
                    <span
                      className="text-xs font-semibold px-2 py-0.5 rounded-full"
                      style={{ background: corPill.bg, color: corPill.color }}
                    >
                      {p}%
                    </span>
                  </div>
                  <p className="text-xs text-gray-400">
                    {fmt(m.atual)} de {fmt(m.total)} · prazo: {m.prazo}
                  </p>
                </div>
              </div>

              <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden">
                <div
                  className="h-full rounded-full"
                  style={{ width: `${p}%`, backgroundColor: corBarra }}
                />
              </div>

              <button
                onClick={() => setMetaSelecionada(metaSelecionada === m.id ? null : m.id)}
                className="mt-1.5 text-xs text-gray-400 cursor-pointer bg-transparent border-none p-0"
              >
                {metaSelecionada === m.id ? "▲ Fechar estratégia" : "▼ Ver estratégia"}
              </button>

              {metaSelecionada === m.id && (
                <div className="mt-2 bg-blue-50 border border-blue-200 rounded-xl p-3">
                  <p className="text-xs font-semibold text-blue-900 mb-1">📌 Estratégia para {m.nome}</p>
                  <p className="text-xs text-blue-800 leading-relaxed">
                    · Faltam {fmt(m.total - m.atual)} para atingir a meta.<br />
                    · Guardando {fmt(Math.ceil((m.total - m.atual) / 6))}/mês você chega no prazo.<br />
                    · Dica: direcione sobras do orçamento de Lazer para esta meta.
                  </p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}