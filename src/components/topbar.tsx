"use client";

import { useState } from "react";
import ConfigModal from "@/components/config-modal";

export default function Topbar() {
  const [modalConfigAberto, setModalConfigAberto] = useState(false);

  return (
    <>
      <header className="px-5 py-3 flex items-center justify-between"
        style={{ background: "var(--color-background-primary)", borderBottom: "0.5px solid var(--color-border-tertiary)" }}>
        <div>
          <h1 className="font-semibold text-gray-900" style={{ fontSize: "var(--font-size-sm)" }}>
            🛡️ Cofre Pessoal
          </h1>
          <span className="text-gray-400" style={{ fontSize: "var(--font-size-xs)" }}>junho 2026</span>
        </div>

        <span className="bg-indigo-100 text-indigo-700 font-semibold px-3 py-1 rounded-full" style={{ fontSize: "var(--font-size-xs)" }}>
          ⭐ Nível Poupador
        </span>

        <button
          onClick={() => setModalConfigAberto(true)}
          className="cursor-pointer bg-transparent border-none"
          style={{ fontSize: "var(--font-size-lg)" }}
        >
          ⚙️
        </button>
      </header>

      {modalConfigAberto && (
        <ConfigModal onClose={() => setModalConfigAberto(false)} />
      )}
    </>
  );
}