"use client";

import { useState, useEffect } from "react";
import { createClient } from "@/utils/supabase/client";
import ConfigModal from "@/components/config-modal";

export default function Topbar() {
  const [modalConfigAberto, setModalConfigAberto] = useState(false);
  const [nome, setNome] = useState<string | null>(null);
  const supabase = createClient();

  useEffect(() => {
    supabase.auth.getUser().then(({ data }) => {
      setNome(data.user?.user_metadata?.full_name ?? data.user?.email ?? null);
    });
  }, []);

  const sair = async () => {
    await supabase.auth.signOut();
    window.location.href = "/login";
  };

  return (
    <>
      <header
        className="px-5 py-3 flex items-center justify-between"
        style={{ background: "var(--color-background-primary)", borderBottom: "0.5px solid var(--color-border-tertiary)" }}
      >
        <div>
          <h1 className="font-semibold" style={{ fontSize: "var(--font-size-sm)", color: "var(--color-text-primary)" }}>
            🛡️ Cofre Pessoal
          </h1>
          <span style={{ fontSize: "var(--font-size-xs)", color: "var(--color-text-tertiary)" }}>junho 2026</span>
        </div>

        <div className="flex items-center gap-3">
          {nome && (
            <span
              className="font-medium truncate max-w-27.5"
              style={{ fontSize: "var(--font-size-xs)", color: "var(--color-text-secondary)" }}
              title={nome}
            >
              {nome}
            </span>
          )}

          <button
            onClick={() => setModalConfigAberto(true)}
            className="cursor-pointer bg-transparent border-none"
            style={{ fontSize: "var(--font-size-lg)" }}
          >
            ⚙️
          </button>

          <button
            onClick={sair}
            className="cursor-pointer border-none rounded-full px-3 py-1 font-medium"
            style={{
              fontSize: "var(--font-size-xs)",
              background: "var(--color-accent-soft)",
              color: "var(--color-accent)",
            }}
          >
            Sair
          </button>
        </div>
      </header>

      {modalConfigAberto && <ConfigModal onClose={() => setModalConfigAberto(false)} />}
    </>
  );
}