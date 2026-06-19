"use client";

import { useState } from "react";
import { CATEGORIAS_GASTO, TIPOS_ENTRADA } from "@/data/categorias";
import type { Transacao } from "@/types";

type Props = {
  transacoes: Transacao[];
  setTransacoes: React.Dispatch<React.SetStateAction<Transacao[]>>;
};

export default function Dashboard({ transacoes, setTransacoes }: Props) {
  const [modal, setModal] = useState<"gasto" | "ganho" | null>(null);
  const [valor, setValor] = useState("");

  const isGanho = modal === "ganho";

  const salvar = () => {
    const descricao = isGanho ? subtipo : `${categoria} - ${subtipo}`;
    if (!subtipo || !valor) return;

    const nova: Transacao = {
      id: Date.now(),
      nome: descricao,
      data: "agora",
      tipo: isGanho ? "Receita" : "Variável",
      valor: isGanho ? +valor : -Math.abs(+valor),
      icone: isGanho ? "💰" : "🏷️",
      cor: isGanho ? "#EAF3DE" : "#FCEBEB",
    };

    setTransacoes(prev => [nova, ...prev]);
    setCategoria("");
    setSubtipo("");
    setValor("");
    setModal(null);
  };

  const [categoria, setCategoria] = useState("");
  const [subtipo, setSubtipo] = useState("");

  return (
    <div className="flex flex-col gap-4">

      {/* Métricas */}
      <div className="grid grid-cols-2 gap-3">
        <div className="bg-gray-50 rounded-xl p-4">
          <p className="text-xs text-gray-400 mb-1">Saldo</p>
          <p className="text-xl font-semibold text-green-600">R$ 4.650</p>
        </div>
        <div className="bg-gray-50 rounded-xl p-4">
          <p className="text-xs text-gray-400 mb-1">Receitas</p>
          <p className="text-xl font-semibold text-gray-900">R$ 6.500</p>
        </div>
        <div className="bg-gray-50 rounded-xl p-4">
          <p className="text-xs text-gray-400 mb-1">Gastos</p>
          <p className="text-xl font-semibold text-red-500">R$ 1.850</p>
        </div>
        <div className="bg-gray-50 rounded-xl p-4">
          <p className="text-xs text-gray-400 mb-1">Poupança</p>
          <p className="text-xl font-semibold text-gray-900">71%</p>
        </div>
      </div>
      {/* Alerta */}
      <div className="bg-orange-50 border border-orange-300 rounded-xl p-3 flex gap-3">
        <span className="text-lg">⚠️</span>
        <div>
          <p className="text-xs font-semibold text-orange-900 mb-1">Alerta semanal</p>
          <p className="text-xs text-orange-800">
            Você gastou R$ 480 esta semana — 68% do limite de R$ 700.
          </p>
        </div>
      </div>
      {/* Últimos lançamentos */}
      <div className="bg-white border border-gray-200 rounded-xl p-4">
        <p className="text-sm font-semibold text-gray-900 mb-3">🕐 Últimos lançamentos</p>
        {transacoes.slice(0, 3).map((t, i) => (
          <div key={t.id} className="flex items-center gap-3 py-2"
            style={{ borderBottom: i < 2 ? "0.5px solid #e5e7eb" : "none" }}>
            <div className="w-8 h-8 rounded-lg flex items-center justify-center text-sm" style={{ background: t.cor }}>
              {t.icone}
            </div>
            <div className="flex-1">
              <p className="text-xs font-medium text-gray-900">{t.nome}</p>
              <p className="text-xs text-gray-400">{t.data}</p>
            </div>
            <p className="text-xs font-semibold" style={{ color: t.valor >= 0 ? "#1D9E75" : "#E24B4A" }}>
              {t.valor >= 0 ? "+" : "-"} R$ {Math.abs(t.valor)}
            </p>
          </div>
        ))}
      </div>
      {/* Botões */}
      <div className="flex gap-2">
        <button onClick={() => setModal("gasto")} className="flex-1 py-2.5 rounded-xl text-xs font-semibold border border-red-200 bg-red-50 text-red-800 cursor-pointer">
          ➖ Add gasto
        </button>
        <button onClick={() => setModal("ganho")} className="flex-1 py-2.5 rounded-xl text-xs font-semibold border border-green-200 bg-green-50 text-green-800 cursor-pointer">
          ➕ Add ganho
        </button>
      </div>

      {/* Modal */}
      {modal && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl p-6 w-72 flex flex-col gap-4">

            <p className="text-sm font-semibold text-gray-900">
              {isGanho ? "➕ Add ganho" : "➖ Add gasto"}
            </p>

            {isGanho ? (
              <div className="flex flex-col gap-1">
                <p className="text-xs text-gray-400">Tipo de entrada</p>
                <select
                  value={subtipo}
                  onChange={e => setSubtipo(e.target.value)}
                  className="border border-gray-200 rounded-lg px-3 py-2 text-xs text-gray-900 bg-gray-50"
                >
                  <option value="">Selecione...</option>
                  {TIPOS_ENTRADA.map(tipo => (
                    <option key={tipo} value={tipo}>{tipo}</option>
                  ))}
                </select>
              </div>
            ) : (
              <div className="flex flex-col gap-1">
                <p className="text-xs text-gray-400">Categoria</p>
                <select
                  value={categoria}
                  onChange={e => {
                    setCategoria(e.target.value);
                    setSubtipo("");
                  }}
                  className="border border-gray-200 rounded-lg px-3 py-2 text-xs text-gray-900 bg-gray-50"
                >
                  <option value="">Selecione...</option>
                  {Object.keys(CATEGORIAS_GASTO).map(cat => (
                    <option key={cat} value={cat}>{cat}</option>
                  ))}
                </select>

                {categoria && (
                  <div className="flex flex-col gap-1 mt-2">
                    <p className="text-xs text-gray-400">Tipo de gasto</p>
                    <select
                      value={subtipo}
                      onChange={e => setSubtipo(e.target.value)}
                      className="border border-gray-200 rounded-lg px-3 py-2 text-xs text-gray-900 bg-gray-50"
                    >
                      <option value="">Selecione...</option>
                      {CATEGORIAS_GASTO[categoria].map(tipo => (
                        <option key={tipo} value={tipo}>{tipo}</option>
                      ))}
                    </select>
                  </div>
                )}
              </div>
            )}

            <div className="flex flex-col gap-1">
              <p className="text-xs text-gray-400">Valor (R$)</p>
              <input type="number" value={valor} onChange={e => setValor(e.target.value)} placeholder="0,00"
                className="border border-gray-200 rounded-lg px-3 py-2 text-xs text-gray-900 bg-gray-50" />
            </div>

            <div className="flex gap-2">
              <button onClick={() => setModal(null)} className="flex-1 py-2 rounded-lg text-xs text-gray-500 border border-gray-200 cursor-pointer">
                Cancelar
              </button>
              <button onClick={salvar} className="flex-1 py-2 rounded-lg text-xs font-semibold text-white cursor-pointer border-none"
                style={{ background: isGanho ? "#1D9E75" : "#E24B4A" }}>
                Salvar
              </button>
            </div>

          </div>
        </div>
      )}
    </div>
  );
}