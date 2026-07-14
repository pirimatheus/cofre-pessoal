"use client";

import { useInstallPrompt } from "@/hooks/use-install-prompt";

export function InstallBanner() {
  const { podeInstalar, instalar } = useInstallPrompt();

  if (!podeInstalar) return null;

  return (
    <div
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-4 py-3"
      style={{ background: "#3D1E6D", color: "#FFFFFF" }}
    >
      <span style={{ fontSize: "var(--font-size-sm)" }}>
        Instale o Cofre Pessoal na tela inicial
      </span>
      <button
        onClick={instalar}
        className="px-3 py-1 rounded-lg font-medium"
        style={{ background: "#FF6B1A", fontSize: "var(--font-size-xs)" }}
      >
        Instalar
      </button>
    </div>
  );
}