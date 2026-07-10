"use client";

import { useState } from "react";

type Mensagem = { role: "user" | "ia"; texto: string };

export default function IA() {
  const [mensagens, setMensagens] = useState<Mensagem[]>([]);
  const [input, setInput] = useState("");
  const [carregando, setCarregando] = useState(false);

  async function enviar() {
    if (!input.trim()) return;
    const nova: Mensagem = { role: "user", texto: input };
    setMensagens(prev => [...prev, nova]);
    setInput("");
    setCarregando(true);

    const res = await fetch("/api/ia", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ mensagem: input }),
    });
    const data = await res.json();

    setMensagens(prev => [...prev, { role: "ia", texto: data.resposta }]);
    setCarregando(false);
  }

  return (
    <div className="flex flex-col h-[calc(100vh-120px)]">
      <div className="flex-1 overflow-y-auto flex flex-col gap-3 pb-4">
        {mensagens.length === 0 && (
          <div className="text-center mt-10"
            style={{ color: "var(--color-text-tertiary)", fontSize: "var(--font-size-sm)" }}>
            🤖 Olá! Pergunte sobre seus gastos, metas ou finanças.
          </div>
        )}
        {mensagens.map((m, i) => (
          <div key={i} className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}>
            <div className="max-w-[80%] px-4 py-2 rounded-xl"
              style={{
                background: m.role === "user" ? "#1D9E75" : "var(--color-background-secondary)",
                color: m.role === "user" ? "#fff" : "var(--color-text-primary)",
                fontSize: "var(--font-size-xs)",
                border: m.role === "ia" ? "0.5px solid var(--color-border-tertiary)" : "none",
              }}>
              {m.texto}
            </div>
          </div>
        ))}
        {carregando && (
          <div className="flex justify-start">
            <div className="px-4 py-2 rounded-xl"
              style={{ background: "var(--color-background-secondary)", color: "var(--color-text-tertiary)", fontSize: "var(--font-size-xs)" }}>
              ⏳ Analisando...
            </div>
          </div>
        )}
      </div>

      <div className="flex gap-2 pt-2" style={{ borderTop: "0.5px solid var(--color-border-tertiary)" }}>
        <input
          value={input}
          onChange={e => setInput(e.target.value)}
          onKeyDown={e => e.key === "Enter" && enviar()}
          placeholder="Pergunte algo sobre suas finanças..."
          className="flex-1 rounded-xl px-4 py-2"
          style={{ fontSize: "var(--font-size-xs)", background: "var(--color-background-secondary)", border: "0.5px solid var(--color-border-secondary)", color: "var(--color-text-primary)" }}
        />
        <button onClick={enviar} className="px-4 py-2 rounded-xl text-white font-semibold"
          style={{ background: "#1D9E75", fontSize: "var(--font-size-xs)", border: "none", cursor: "pointer" }}>
          Enviar
        </button>
      </div>
    </div>
  );
}