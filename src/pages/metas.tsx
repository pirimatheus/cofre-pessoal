"use client";

import Navbar from "@/components/navbar";
import Topbar from "@/components/topbar";
import { useState } from "react";
import Dashboard from "./dashboard";
import Extrato from "./extrato";

const METAS_MOCK = [
  { id: 1, nome: "Viagem de férias",      atual: 3100, total: 5000,  icone: "✈️", prazo: "dez 2026" },
  { id: 2, nome: "Novo PC",               atual: 1230, total: 3000,  icone: "💻", prazo: "set 2026" },
  { id: 3, nome: "Reserva de emergência", atual: 1800, total: 10000, icone: "🏛️", prazo: "dez 2027" },
];

const fmt = (v: number) =>
  new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" }).format(v);

const pct = (a: number, b: number) => Math.min(100, Math.round((a / b) * 100));

export default function Metas() {
      type Meta = {
    id: number;
    nome: string;
    valorAtual: number;
    valorObjetivo: number;
    possuiPrazo: boolean;
    dataLimite?: string;
    icone: string;
    dataCriacao: string;
  };
  const [metaSelecionada, setMetaSelecionada] = useState<number | null>(null);

  const [mostrarModal, setMostrarModal] = useState(false);
  const [nomeMeta, setNomeMeta] = useState("");
  const [valorAtual, setValorAtual] = useState("");
  const [valorObjetivo, setValorObjetivo] = useState("");
  const [possuiPrazo, setPossuiPrazo] = useState(true);
  const [dataLimite, setDataLimite] = useState("");

  const [metas, setMetas] = useState<Meta[]>([]);

  function adicionarMeta() {
    if (!nomeMeta || !valorObjetivo) return;

    const novaMeta = {
      id: Date.now(),
      nome: nomeMeta,
      valorAtual: Number(valorAtual || 0),
      valorObjetivo: Number(valorObjetivo),
      possuiPrazo,
      dataLimite: possuiPrazo ? dataLimite : undefined,
      icone: "🎯",
      dataCriacao: new Date().toISOString(),
    };

    setMetas((prev) => [...prev, novaMeta]);

    // limpar modal
    setNomeMeta("");
    setValorAtual("");
    setValorObjetivo("");
    setPossuiPrazo(true);
    setDataLimite("");
    setMostrarModal(false);
  }

  return (
    <div className="flex flex-col gap-3">
      <div className="bg-white border border-gray-200 rounded-xl p-4">
        <div className="flex items-center justify-between mb-4">
          <p className="text-sm font-semibold text-gray-900">
            🎯 Metas financeiras
          </p>

          <button
            onClick={() => setMostrarModal(true)}
            className="px-3 py-1.5 rounded-lg text-xs font-medium border border-gray-200 bg-gray-50 text-gray-700 cursor-pointer"
          >
            ➕ Nova Meta
          </button>
        </div>

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
          {mostrarModal && (
            <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
              <div className="bg-white w-[90%] max-w-md rounded-xl p-5 space-y-4">
                
                {/* Título */}
                <h2 className="text-lg font-semibold">
                  Nova Meta
                </h2>

                {/* Nome da meta */}
                <div>
                  <label className="text-sm text-gray-600">Nome</label>
                  <input
                    className="w-full border rounded-lg p-2 mt-1"
                    value={nomeMeta}
                    onChange={(e) => setNomeMeta(e.target.value)}
                    placeholder="Ex: Viagem para Europa"
                  />
                </div>

                {/* Valor atual */}
                <div>
                  <label className="text-sm text-gray-600">Valor atual</label>
                  <input
                    type="number"
                    className="w-full border rounded-lg p-2 mt-1"
                    value={valorAtual}
                    onChange={(e) => setValorAtual(e.target.value)}
                    placeholder="0"
                  />
                </div>

                {/* Valor objetivo */}
                <div>
                  <label className="text-sm text-gray-600">Valor objetivo</label>
                  <input
                    type="number"
                    className="w-full border rounded-lg p-2 mt-1"
                    value={valorObjetivo}
                    onChange={(e) => setValorObjetivo(e.target.value)}
                    placeholder="0"
                  />
                </div>

                {/* Toggle prazo */}
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">
                    Possui prazo?
                  </span>

                  <button
                    onClick={() => setPossuiPrazo(!possuiPrazo)}
                    className={`px-3 py-1 rounded-full text-sm ${
                      possuiPrazo ? "bg-green-100 text-green-700" : "bg-gray-100 text-gray-600"
                    }`}
                  >
                    {possuiPrazo ? "Sim" : "Não"}
                  </button>
                </div>

                {/* Data limite */}
                {possuiPrazo && (
                  <div>
                    <label className="text-sm text-gray-600">Data limite</label>
                    <input
                      type="date"
                      className="w-full border rounded-lg p-2 mt-1"
                      value={dataLimite}
                      onChange={(e) => setDataLimite(e.target.value)}
                    />
                  </div>
                )}

                {/* Ações */}
                <div className="flex gap-2 pt-2">
                  <button
                    onClick={() => setMostrarModal(false)}
                    className="flex-1 bg-gray-200 rounded-lg p-2"
                  >
                    Cancelar
                  </button>

                  <button
                    onClick={adicionarMeta}
                    className="flex-1 bg-black text-white rounded-lg p-2"
                  >
                    Criar Meta
                  </button>
                </div>

              </div>
            </div>
          )}
    </div>
  );
}