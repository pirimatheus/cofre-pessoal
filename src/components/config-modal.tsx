"use client";

import { useConfig } from "@/context/config-context";

type Props = { onClose: () => void };

const FONTES = ["Inter", "DM Sans", "Nunito", "Poppins", "Plus Jakarta Sans", "Outfit"];

export default function ConfigModal({ onClose }: Props) {
  const { tema, setTema, fonte, setFonte, fonteFamilia, setFonteFamilia } = useConfig();

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

      </div>
    </div>
  );
}