import type { Transacao } from "@/types";

type Props = {
  transacoes: Transacao[];
};

export default function Extrato({ transacoes }: Props) {
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-4">
      <p className="text-sm font-semibold text-gray-900 mb-3">📋 Extrato — junho 2026</p>

      <div className="flex flex-col gap-3">
        {transacoes.map(t => (
          <div key={t.id} className="flex items-center gap-3">
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
    </div>
  );
}