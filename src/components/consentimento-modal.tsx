"use client";

import { useState } from "react";

type Props = { onAceitar: () => void };

export default function ConsentimentoModal({ onAceitar }: Props) {
  const [enviando, setEnviando] = useState(false);

  const aceitar = async () => {
    setEnviando(true);
    await fetch("/api/consentimento", { method: "POST" });
    onAceitar();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center"
      style={{
        background: "color-mix(in srgb, var(--color-background-primary) 60%, transparent)",
        backdropFilter: "blur(6px)",
      }}
    >
      <div
        className="flex flex-col gap-3 rounded-2xl p-6 w-[90%] max-w-xs"
        style={{
          background: "var(--color-background-secondary)",
          border: "1px solid var(--color-border-primary)",
        }}
      >
        <h2
          className="font-semibold"
          style={{ fontSize: "var(--font-size-md)", color: "var(--color-text-primary)" }}
        >
          Sua privacidade
        </h2>

        <p style={{ fontSize: "var(--font-size-xs)", color: "var(--color-text-secondary)" }}>
          Usamos seus dados apenas para o funcionamento do app, com criptografia e proteção por PIN.
          Você pode excluir sua conta e dados a qualquer momento.
        </p>

        
          href="/privacidade"
          target="_blank"
          rel="noopener noreferrer"
          <a style={{ 
            fontSize: "var(--font-size-xs)", 
            color: "var(--color-accent)" 
            }}
        >
          Ler Política de Privacidade completa
        </a>

        <button
          onClick={aceitar}
          disabled={enviando}
          className="rounded-xl py-2 font-medium cursor-pointer border-none mt-2"
          style={{
            background: "var(--color-accent)",
            color: "#fff",
            fontSize: "var(--font-size-sm)",
          }}
        >
          {enviando ? "..." : "Aceitar e continuar"}
        </button>
      </div>
    </div>
  );
}