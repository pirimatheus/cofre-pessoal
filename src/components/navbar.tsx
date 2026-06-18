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
    { id: "alertas",   label: "Alertas",   icone: "🔔" },
  ];

  return (
    <nav className="bg-white border-b border-gray-200 px-3 py-2 flex gap-2 overflow-x-auto">
      {tabs.map(t => (
        <button
          key={t.id}
          onClick={() => onChange(t.id)}
          className={`px-3 py-1.5 rounded-lg text-xs whitespace-nowrap cursor-pointer transition-all
            ${paginaAtual === t.id
              ? "bg-gray-100 border border-gray-300 text-gray-900 font-semibold"
              : "border border-transparent text-gray-400 font-normal"
            }`}
        >
          {t.icone} {t.label}
        </button>
      ))}
    </nav>
  );
}