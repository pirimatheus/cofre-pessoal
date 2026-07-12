import PageCard from "@/components/page-card";
import type { Transacao } from "@/types";

type Props = { transacoes: Transacao[] };

export default function Extrato({ transacoes }: Props) {
  return (
    <PageCard titulo="📋 Extrato — junho 2026" 
      style={{ background: "var(--color-background-primary)", border: "0.5px solid var(--color-border-tertiary)" }}>
      <div className="flex flex-col gap-3">
        {transacoes.map(t => (
          <div key={t.id} className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg flex items-center justify-center"
              style={{ background: t.cor, fontSize: "var(--font-size-sm)" }}>
              {t.icone}
            </div>
            <div className="flex-1">
              <p className="font-medium" style={{ fontSize: "var(--font-size-xs)", color: "var(--color-text-primary)" }}>{t.nome}</p>
              <p style={{ fontSize: "var(--font-size-xs)", color: "var(--color-text-tertiary)" }}>{t.data}</p>
            </div>
            <p className="font-semibold" style={{ fontSize: "var(--font-size-xs)", color: t.valor >= 0 ? "#1D9E75" : "#E24B4A" }}>
              {t.valor >= 0 ? "+" : "-"} {Math.abs(t.valor).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
            </p>
          </div>
        ))}
      </div>
    </PageCard>
  );
}