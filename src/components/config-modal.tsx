"use client";

import { usePushNotifications } from "@/hooks/use-push-notifications";
import { useConfig } from "@/context/config-context";
import { useState } from "react";
import { createClient } from "@/utils/supabase/client";
import { PluggyConnectButton } from "./pluggy-connect-button";

type Props = { onClose: () => void };

const FONTES = ["Inter", "DM Sans", "Nunito", "Poppins", "Plus Jakarta Sans", "Outfit"];

export default function ConfigModal({ onClose }: Props) {
  const { tema, setTema, fonte, setFonte, fonteFamilia, setFonteFamilia } = useConfig();
  const [confirmando, setConfirmando] = useState(false);
  const [textoConfirmacao, setTextoConfirmacao] = useState("");
  const [excluindo, setExcluindo] = useState(false);
  const { permitido, ativarNotificacoes } = usePushNotifications();

  const excluirConta = async () => {
    setExcluindo(true);
    const res = await fetch("/api/conta", { method: "DELETE" });

    if (res.ok) {
      const supabase = createClient();
      await supabase.auth.signOut();
      window.location.href = "/login";
    } else {
      setExcluindo(false);
      alert("Não foi possível excluir sua conta. Tente novamente.");
    }
  };

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
      <div className="w-[90%] max-w-md rounded-xl p-5 space-y-4"
        style={{ background: "var(--color-background-primary)", border: "0.5px solid var(--color-border-tertiary)" }}>

        <div className="flex items-center justify-between">
          <h2 className="font-semibold" style={{ color: "var(--color-text-primary)", fontSize: "var(--font-size-md)" }}>⚙️ Configurações</h2>
          <button onClick={onClose} className="cursor-pointer bg-transparent border-none"
            style={{ color: "var(--color-text-tertiary)", fontSize: "var(--font-size-lg)" }}>✕</button>
        </div>

        {/* Dark mode */}
        <div className="flex items-center justify-between">
          <p style={{ color: "var(--color-text-primary)", fontSize: "var(--font-size-sm)" }}>Dark</p>
          <div onClick={() => setTema(tema === "escuro" ? "claro" : "escuro")} className="cursor-pointer"
            style={{ width: 44, height: 24, borderRadius: 12, background: tema === "escuro" ? "#1D9E75" : "#D0D0D0", position: "relative", transition: "background .2s" }}>
            <div style={{ width: 18, height: 18, borderRadius: "50%", background: "#fff", position: "absolute", top: 3, left: tema === "escuro" ? 22 : 3, transition: "left .2s" }} />
          </div>
        </div>

        {/* Tamanho da fonte */}
        <div>
          <div className="flex justify-between mb-2">
            <p style={{ color: "var(--color-text-tertiary)", fontSize: "var(--font-size-xs)" }}>Tamanho da fonte</p>
            <p style={{ color: "var(--color-text-secondary)", fontSize: "var(--font-size-xs)" }}>{fonte}px</p>
          </div>
          <input type="range" min={11} max={17} step={1} value={fonte}
            onChange={e => setFonte(Number(e.target.value))} className="w-full cursor-pointer" />
          <div className="flex justify-between mt-1">
            <span style={{ color: "var(--color-text-tertiary)", fontSize: "var(--font-size-xs)" }}>A</span>
            <span style={{ color: "var(--color-text-tertiary)", fontSize: "var(--font-size-md)" }}>A</span>
          </div>
        </div>

        {/* Família de fonte */}
        <div>
          <p className="mb-2" style={{ color: "var(--color-text-tertiary)", fontSize: "var(--font-size-xs)" }}>Fonte</p>
          <div className="flex flex-col gap-1">
            {FONTES.map(f => (
              <button key={f} onClick={() => setFonteFamilia(f)}
                className="text-left px-3 py-2 rounded-lg"
                style={{
                  fontFamily: `'${f}', sans-serif`,
                  fontSize: "var(--font-size-sm)",
                  background: fonteFamilia === f ? "var(--color-background-secondary)" : "transparent",
                  border: `0.5px solid ${fonteFamilia === f ? "var(--color-border-secondary)" : "var(--color-border-tertiary)"}`,
                  color: "var(--color-text-primary)",
                  fontWeight: fonteFamilia === f ? 600 : 400,
                }}>
                {f}
              </button>
            ))}
          </div>
        </div>
        {/* Notificações */}
        <div className="pt-2" style={{ borderTop: "0.5px solid var(--color-border-tertiary)" }}>
          <button
            onClick={ativarNotificacoes}
            className="px-3 py-2 rounded-lg font-medium"
            style={{ background: "#FF6B1A", color: "#FFFFFF", fontSize: "var(--font-size-sm)" }}
          >
            Ativar notificações
          </button>
        </div>
        {/* Conexão bancária */}
        <div className="pt-2" style={{ borderTop: "0.5px solid var(--color-border-tertiary)" }}>
          <p className="mb-2" style={{ color: "var(--color-text-tertiary)", fontSize: "var(--font-size-xs)" }}>
            Open Finance
          </p>
          <PluggyConnectButton />
        </div>
        {/* Zona de risco */}
        <div className="pt-2" style={{ borderTop: "0.5px solid var(--color-border-tertiary)" }}>
          <p className="mb-2 mt-3" style={{ color: "#E24B4A", fontSize: "var(--font-size-xs)", fontWeight: 600 }}>
            Zona de risco
          </p>

          {!confirmando ? (
            <button
              onClick={() => setConfirmando(true)}
              className="w-full py-2 rounded-lg cursor-pointer"
              style={{
                background: "transparent",
                border: "1px solid #E24B4A",
                color: "#E24B4A",
                fontSize: "var(--font-size-sm)",
                fontWeight: 500,
              }}
            >
              Excluir minha conta
            </button>
          ) : (
            <div className="flex flex-col gap-2">
              <p style={{ color: "var(--color-text-secondary)", fontSize: "var(--font-size-xs)" }}>
                Essa ação apaga todos os seus dados (transações, metas, limites) e não pode ser desfeita.
                Digite <strong>EXCLUIR</strong> para confirmar.
              </p>
              <input
                value={textoConfirmacao}
                onChange={(e) => setTextoConfirmacao(e.target.value)}
                className="rounded-lg px-3 py-2 outline-none"
                style={{
                  background: "var(--color-background-secondary)",
                  border: "1px solid var(--color-border-primary)",
                  color: "var(--color-text-primary)",
                  fontSize: "var(--font-size-sm)",
                }}
              />
              <div className="flex gap-2">
                <button
                  onClick={() => { setConfirmando(false); setTextoConfirmacao(""); }}
                  className="flex-1 py-2 rounded-lg cursor-pointer"
                  style={{ background: "var(--color-background-secondary)", border: "1px solid var(--color-border-primary)", color: "var(--color-text-primary)", fontSize: "var(--font-size-sm)" }}
                >
                  Cancelar
                </button>
                <button
                  onClick={excluirConta}
                  disabled={textoConfirmacao !== "EXCLUIR" || excluindo}
                  className="flex-1 py-2 rounded-lg cursor-pointer"
                  style={{
                    background: textoConfirmacao === "EXCLUIR" ? "#E24B4A" : "var(--color-border-primary)",
                    border: "none",
                    color: "#fff",
                    fontSize: "var(--font-size-sm)",
                    opacity: excluindo ? 0.6 : 1,
                  }}
                >
                  {excluindo ? "Excluindo..." : "Confirmar exclusão"}
                </button>
              </div>
            </div>
          )}
        </div>

      </div>
    </div>
  );
}