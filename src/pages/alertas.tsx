"use client";

import { useState } from "react";

const ALERTAS_MOCK = [
  { id: 1, nome: "Limite semanal",        desc: "Avisa ao atingir 70% de R$ 700",    ativo: true,  icone: "⚠️" },
  { id: 2, nome: "Gasto acima de R$ 200", desc: "Notifica qualquer lançamento alto",  ativo: true,  icone: "💳" },
  { id: 3, nome: "Relatório mensal",       desc: "Todo dia 1º do mês",                ativo: true,  icone: "📊" },
  { id: 4, nome: "Saldo mínimo R$ 1.000", desc: "Alerta se saldo cair abaixo",        ativo: false, icone: "🔔" },
  { id: 5, nome: "Meta em risco",          desc: "Ritmo insuficiente para bater meta", ativo: false, icone: "🎯" },
];

export default function Alertas() {
  const [alertas, setAlertas] = useState(ALERTAS_MOCK);

  const toggle = (id: number) => {
    setAlertas(prev => prev.map(a => a.id === id ? { ...a, ativo: !a.ativo } : a));
  };

  return (
    <div className="flex flex-col gap-3">

      {/* Alerta ativo no topo */}
      <div className="bg-orange-50 border border-orange-300 rounded-xl p-3 flex gap-3">
        <span className="text-lg">⚠️</span>
        <div>
          <p className="text-xs font-semibold text-orange-900 mb-1">Alerta ativo agora</p>
          <p className="text-xs text-orange-800">Gasto semanal em 68% do limite — R$ 480 de R$ 700.</p>
        </div>
      </div>

      {/* Lista de alertas */}
      <div className="bg-white border border-gray-200 rounded-xl p-4">
        <p className="text-sm font-semibold text-gray-900 mb-3">🔔 Configurar alertas</p>

        {alertas.map((a, i) => (
          <div
            key={a.id}
            className="flex items-center gap-3 py-2.5"
            style={{ borderBottom: i < alertas.length - 1 ? "0.5px solid #e5e7eb" : "none" }}
          >
            <div className="w-8 h-8 rounded-lg bg-gray-100 flex items-center justify-center text-base flex-shrink;0">
              {a.icone}
            </div>

            <div className="flex-1">
              <p className="text-xs font-medium text-gray-900">{a.nome}</p>
              <p className="text-xs text-gray-400">{a.desc}</p>
            </div>

            {/* Toggle */}
            <div
              onClick={() => toggle(a.id)}
              className="cursor-pointer flex-shrink;0"
              style={{
                width: 36, height: 20, borderRadius: 10,
                background: a.ativo ? "#1D9E75" : "#D0D0D0",
                position: "relative", transition: "background .2s",
              }}
            >
              <div style={{
                width: 14, height: 14, borderRadius: "50%", background: "#fff",
                position: "absolute", top: 3,
                left: a.ativo ? 18 : 3, transition: "left .2s",
              }} />
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}