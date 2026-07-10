"use client";

import { useState, useRef, useEffect } from "react";

type Mensagem = { role: "user" | "ia"; texto: string };

export default function IAChat() {
  const [aberto, setAberto] = useState(false);
  const [mensagens, setMensagens] = useState<Mensagem[]>([]);
  const [input, setInput] = useState("");
  const [carregando, setCarregando] = useState(false);
  const [pos, setPos] = useState({ x: 0, y: 0 }); 
    useEffect(() => {
      setPos({ x: window.innerWidth - 76, y: window.innerHeight - 76 });
  }, []);
  const arrastando = useRef(false);
  const offset = useRef({ x: 0, y: 0 });

  function iniciarArrasto(e: React.MouseEvent) {
    arrastando.current = true;
    offset.current = { x: e.clientX - pos.x, y: e.clientY - pos.y };
    window.onmousemove = (ev) => {
      if (!arrastando.current) return;
      setPos({ x: ev.clientX - offset.current.x, y: ev.clientY - offset.current.y });
    };
    window.onmouseup = () => { arrastando.current = false; };
  }

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
    <>
      {/* Botão flutuante */}
      <div
        onMouseDown={iniciarArrasto}
        onClick={() => setAberto(!aberto)}
        style={{
          position: "fixed",
          top: pos.y,
          left: pos.x,
          width: 52, height: 52,
          borderRadius: "50%",
          background: "#1D9E75",
          display: "flex", alignItems: "center", justifyContent: "center",
          cursor: "grab", zIndex: 200,
          boxShadow: "0 4px 16px rgba(0,0,0,0.18)",
          fontSize: 24,
          userSelect: "none",
        }}
      >
        🤖
      </div>

      {/* Chat overlay */}
      {aberto && (
        <>
        <div onClick={() => setAberto(false)} style={{ position: "fixed", inset: 0, zIndex: 198 }} />
        <div style={{
          position: "fixed", top: pos.y - 430, left: pos.x,
          width: 320, height: 420,
          borderRadius: 16, zIndex: 199,
          background: "var(--color-background-primary)",
          border: "0.5px solid var(--color-border-tertiary)",
          boxShadow: "0 8px 32px rgba(0,0,0,0.15)",
          display: "flex", flexDirection: "column",
        }}>
          {/* Header */}
          <div className="flex items-center justify-between px-4 py-3"
            style={{ borderBottom: "0.5px solid var(--color-border-tertiary)" }}>
            <p className="font-semibold" style={{ fontSize: "var(--font-size-sm)", color: "var(--color-text-primary)" }}>🤖 Assistente</p>
            <button onClick={() => setAberto(false)} style={{ background: "none", border: "none", cursor: "pointer", color: "var(--color-text-tertiary)", fontSize: "var(--font-size-lg)" }}>✕</button>
          </div>

          {/* Mensagens */}
          <div className="flex-1 overflow-y-auto flex flex-col gap-2 p-3">
            {mensagens.length === 0 && (
              <p className="text-center mt-4" style={{ color: "var(--color-text-tertiary)", fontSize: "var(--font-size-xs)" }}>
                Pergunte sobre seus gastos, metas ou finanças.
              </p>
            )}
            {mensagens.map((m, i) => (
              <div key={i} className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}>
                <div className="px-3 py-2 rounded-xl max-w-[85%]"
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
                    <div className="px-3 py-2 rounded-xl"
                    style={{ background: "var(--color-background-secondary)", color: "var(--color-text-tertiary)", fontSize: "var(--font-size-xs)" }}>
                    <span className="animate-pulse">
                        <style>{`
                        @keyframes dots {
                            0%   { content: '.'; }
                            33%  { content: '..'; }
                            66%  { content: '...'; }
                            100% { content: '.'; }
                        }
                        .dots::after {
                            content: '.';
                            animation: dots 1.2s steps(1) infinite;
                        }
                        `}</style>
                        <span className="dots" />
                    </span>
                    </div>
                </div>
                )}
          </div>

          {/* Input */}
          <div className="flex gap-2 p-3" style={{ borderTop: "0.5px solid var(--color-border-tertiary)" }}>
            <input value={input} onChange={e => setInput(e.target.value)}
              onKeyDown={e => e.key === "Enter" && enviar()}
              placeholder="Pergunte algo..."
              className="flex-1 rounded-lg px-3 py-1.5"
              style={{ fontSize: "var(--font-size-xs)", background: "var(--color-background-secondary)", border: "0.5px solid var(--color-border-secondary)", color: "var(--color-text-primary)" }}
            />
            <button onClick={enviar} className="px-3 py-1.5 rounded-lg text-white"
              style={{ background: "#1D9E75", fontSize: "var(--font-size-xs)", border: "none", cursor: "pointer" }}>
              ➤
            </button>
          </div>
        </div>
        </>
      )}
    </>
  );
}