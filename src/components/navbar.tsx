"use client";

import { Home, ClipboardList, PieChart, Target, Bell } from "lucide-react";

type Page = "dashboard" | "extrato" | "orcamento" | "metas" | "alertas";

type Props = {
  paginaAtual: Page;
  onChange: (pagina: Page) => void;
};

export default function Navbar({ paginaAtual, onChange }: Props) {
  const tabs: { id: Page; Icone: typeof Home }[] = [
    { id: "dashboard", Icone: Home },
    { id: "extrato",   Icone: ClipboardList },
    { id: "orcamento", Icone: PieChart },
    { id: "metas",     Icone: Target },
    { id: "alertas",   Icone: Bell },
  ];

  return (
    <nav
      className="fixed bottom-0 left-0 right-0 flex justify-around items-center px-2 max-w-2xl lg:max-w-5xl mx-auto"
      style={{
        height: 56,
        background: "var(--color-background-primary)",
        borderTop: "0.5px solid var(--color-border-tertiary)",
        zIndex: "var(--z-navbar)" as unknown as number,
      }}
    >
      {tabs.map(({ id, Icone }) => {
        const ativo = paginaAtual === id;
        return (
          <button
            key={id}
            onClick={() => onChange(id)}
            className="flex-1 h-full flex items-center justify-center cursor-pointer bg-transparent border-none"
            style={{ transition: "all var(--duration-fast) var(--ease-padrao)" }}
          >
            <Icone
              size={24}
              strokeWidth={ativo ? 2.4 : 1.8}
              color={ativo ? "var(--color-accent)" : "var(--color-text-tertiary)"}
            />
          </button>
        );
      })}
    </nav>
  );
}