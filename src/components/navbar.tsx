type Page = "dashboard" | "extrato" | "orcamento" | "metas" | "alertas";

type Props = {
  paginaAtual: Page;
  onChange: (pagina: Page) => void;
};

export default function Navbar({ paginaAtual, onChange }: Props) {
  const tabs: { id: Page; label: string; icone: string }[] = [
    { id: "dashboard", label: "Dashboard", icone: "🏠" },
    { id: "extrato",   label: "Extrato",   icone: "📋" },
    { id: "orcamento", label: "Orçamento", icone: "📊" },
    { id: "metas",     label: "Metas",     icone: "🎯" },
  ];

  return (
    <nav className="px-3 py-2 flex gap-2 overflow-x-auto"
      style={{ background: "var(--color-background-primary)", borderBottom: "0.5px solid var(--color-border-tertiary)" }}>
      {tabs.map(t => (
        <button
          key={t.id}
          onClick={() => onChange(t.id)}
          className="px-3 py-1.5 rounded-lg whitespace-nowrap cursor-pointer transition-all"
          style={{
            fontSize: "var(--font-size-xs)",
            background: paginaAtual === t.id ? "var(--color-background-secondary)" : "transparent",
            border: `0.5px solid ${paginaAtual === t.id ? "var(--color-border-secondary)" : "transparent"}`,
            color: paginaAtual === t.id ? "var(--color-text-primary)" : "var(--color-text-tertiary)",
            fontWeight: paginaAtual === t.id ? 600 : 400,
          }}
        >
          {t.icone} {t.label}
        </button>
      ))}
    </nav>
  );
}