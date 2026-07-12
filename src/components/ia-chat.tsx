"use client";

import { useState, useRef, useEffect } from "react";
import { useConfig } from "@/context/config-context";

type Mensagem = { role: "user" | "ia"; texto: string };

const LARGURA_CHAT = 300;
const ALTURA_CHAT = 380;
const MARGEM = 12;
const TAMANHO_ICONE = 52;

// Avatar da IA — SVG leve, com "respiração" e piscar de olhos via CSS
function AvatarIA({ tamanho = 32 }: { tamanho?: number }) {
  return (
    <svg width={tamanho} height={tamanho} viewBox="0 0 64 64">
      {/* Antena, com bolinha "acesa" pulsando */}
      <line x1="32" y1="8" x2="32" y2="16" stroke="var(--color-accent)" strokeWidth="2.5" strokeLinecap="round" />
      <circle cx="32" cy="6" r="3.5" fill="var(--color-accent)" style={{ animation: "brilhar 2s ease-in-out infinite" }} />

      {/* Corpo com "respiração" suave */}
      <g style={{ animation: "respirar 3s ease-in-out infinite", transformOrigin: "32px 40px" }}>
        {/* Cabeça */}
        <rect x="12" y="16" width="40" height="34" rx="14" fill="var(--color-accent-soft)" stroke="var(--color-accent)" strokeWidth="2.5" />

        {/* Orelhinhas laterais */}
        <rect x="6" y="28" width="7" height="12" rx="3.5" fill="var(--color-accent)" />
        <rect x="51" y="28" width="7" height="12" rx="3.5" fill="var(--color-accent)" />

        {/* Olhos que piscam — telinha arredondada */}
        <g style={{ animation: "piscar 4s ease-in-out infinite", transformOrigin: "32px 33px" }}>
          <rect x="19" y="27" width="10" height="12" rx="5" fill="var(--color-accent)" />
          <rect x="35" y="27" width="10" height="12" rx="5" fill="var(--color-accent)" />
        </g>

        {/* Bochechas fofas */}
        <circle cx="17" cy="43" r="3" fill="var(--color-accent)" opacity="0.35" />
        <circle cx="47" cy="43" r="3" fill="var(--color-accent)" opacity="0.35" />

        {/* Sorriso */}
        <path d="M 24 43 Q 32 48 40 43" stroke="var(--color-accent)" strokeWidth="2.5" fill="none" strokeLinecap="round" />
      </g>

      <style>{`
        @keyframes respirar {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }
        @keyframes piscar {
          0%, 90%, 100% { transform: scaleY(1); }
          95% { transform: scaleY(0.15); }
        }
        @keyframes brilhar {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.4; }
        }
      `}</style>
    </svg>
  );
}

export default function IAChat() {
  const { setTema } = useConfig();
  const [aberto, setAberto] = useState(false);
  const [toast, setToast] = useState<string | null>(null);

  function mostrarToast(mensagem: string) {
    setToast(mensagem);
    setTimeout(() => setToast(null), 5000);
  }

  const [mensagens, setMensagens] = useState<Mensagem[]>([]);
  const [input, setInput] = useState("");
  const [carregando, setCarregando] = useState(false);
  const [pos, setPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    setPos({ x: window.innerWidth - 76, y: window.innerHeight - 76 });
  }, []);

  const arrastando = useRef(false);
  const offset = useRef({ x: 0, y: 0 });
  const houveMovimento = useRef(false);

  function iniciarArrasto(e: React.MouseEvent) {
    arrastando.current = true;
    houveMovimento.current = false;
    offset.current = { x: e.clientX - pos.x, y: e.clientY - pos.y };

    window.onmousemove = (ev) => {
      if (!arrastando.current) return;
      houveMovimento.current = true;
      setPos({ x: ev.clientX - offset.current.x, y: ev.clientY - offset.current.y });
    };
    window.onmouseup = () => { arrastando.current = false; };
  }

  // Calcula onde o chat deve abrir, sempre dentro da tela, do lado do ícone
  function calcularPosicaoChat() {
    const centroIconeX = pos.x + TAMANHO_ICONE / 2;
    const centroIconeY = pos.y + TAMANHO_ICONE / 2;

    // Horizontal: tenta alinhar com o ícone, mas nunca deixa vazar da tela
    let left = pos.x + TAMANHO_ICONE / 2 - LARGURA_CHAT / 2;
    left = Math.max(MARGEM, Math.min(left, window.innerWidth - LARGURA_CHAT - MARGEM));

    // Vertical: se o ícone está na metade de cima da tela, abre PRA BAIXO dele;
    // se está na metade de baixo, abre PRA CIMA dele — nunca sai da tela
    const iconeNaMetadeSuperior = centroIconeY < window.innerHeight / 2;
    let top = iconeNaMetadeSuperior
      ? pos.y + TAMANHO_ICONE + MARGEM
      : pos.y - ALTURA_CHAT - MARGEM;

    top = Math.max(MARGEM, Math.min(top, window.innerHeight - ALTURA_CHAT - MARGEM));

    return { left, top };
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

    if (data.acaoExecutada) {
      window.dispatchEvent(new Event("dados-atualizados"));
    }
    if (data.temaSolicitado) {
      setTema(data.temaSolicitado);
    }
    if (data.notificacaoTexto) {
      mostrarToast(data.notificacaoTexto);
    }
  }

  const chatPos = aberto ? calcularPosicaoChat() : { left: 0, top: 0 };

  return (
    <>
      {/* Botão flutuante — avatar sem fundo colorido, só o SVG */}
      <div
        onMouseDown={iniciarArrasto}
        onClick={() => { if (!houveMovimento.current) setAberto(!aberto); }}
        style={{
          position: "fixed",
          top: pos.y,
          left: pos.x,
          width: TAMANHO_ICONE, height: TAMANHO_ICONE,
          display: "flex", alignItems: "center", justifyContent: "center",
          cursor: "grab", zIndex: 200,
          userSelect: "none",
          filter: "drop-shadow(0 4px 12px rgba(0,0,0,0.18))",
        }}
      >
        <AvatarIA tamanho={TAMANHO_ICONE} />
      </div>

      {/* Chat overlay — estilo janela de mensageiro (MSN) */}
      {aberto && (
        <>
          <div onClick={() => setAberto(false)} style={{ position: "fixed", inset: 0, zIndex: "var(--z-modal)" as unknown as number }} />
          <div style={{
            position: "fixed", top: chatPos.top, left: chatPos.left,
            width: LARGURA_CHAT, height: ALTURA_CHAT,
            borderRadius: "var(--radius-md)", zIndex: "var(--z-chat)" as unknown as number,
            background: "var(--color-background-primary)",
            border: "1px solid var(--color-border-primary)",
            boxShadow: "var(--shadow-lg)",
            display: "flex", flexDirection: "column",
            overflow: "hidden",
          }}>
            {/* Header estilo "janela de conversa" com foto de perfil */}
            <div
              className="flex items-center gap-2 px-3 py-2"
              style={{
                background: "linear-gradient(135deg, var(--color-accent), var(--color-accent-soft))",
                borderBottom: "1px solid var(--color-border-primary)",
              }}
            >
              <div
                className="rounded-full flex items-center justify-center shrink-0"
                style={{ width: 36, height: 36, background: "var(--color-background-primary)" }}
              >
                <AvatarIA tamanho={30} />
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-semibold truncate" style={{ fontSize: "var(--font-size-xs)", color: "#fff" }}>
                  Assistente
                </p>
                <p className="flex items-center gap-1" style={{ fontSize: 10, color: "rgba(255,255,255,0.85)" }}>
                  <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#4ADE80", display: "inline-block" }} />
                  Online
                </p>
              </div>
              <button
                onClick={() => setAberto(false)}
                className="cursor-pointer border-none rounded-full flex items-center justify-center shrink-0"
                style={{ width: 22, height: 22, background: "rgba(255,255,255,0.2)", color: "#fff", fontSize: 12 }}
              >
                ✕
              </button>
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
                      background: m.role === "user" ? "var(--color-accent)" : "var(--color-background-secondary)",
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
                    <span className="dots" />
                    <style>{`
                      @keyframes dots {
                        0%   { content: '.'; }
                        33%  { content: '..'; }
                        66%  { content: '...'; }
                      }
                      .dots::after {
                        content: '.';
                        animation: dots 1.2s steps(1) infinite;
                      }
                    `}</style>
                  </div>
                </div>
              )}
            </div>

            {/* Input */}
            <div className="flex gap-2 p-2" style={{ borderTop: "0.5px solid var(--color-border-tertiary)" }}>
              <input value={input} onChange={e => setInput(e.target.value)}
                onKeyDown={e => e.key === "Enter" && enviar()}
                placeholder="Digite uma mensagem..."
                className="flex-1 rounded-lg px-3 py-1.5 outline-none"
                style={{ fontSize: "var(--font-size-xs)", background: "var(--color-background-secondary)", border: "0.5px solid var(--color-border-secondary)", color: "var(--color-text-primary)" }}
              />
              <button onClick={enviar} className="px-3 py-1.5 rounded-lg cursor-pointer border-none"
                style={{ background: "var(--color-accent)", color: "#fff", fontSize: "var(--font-size-xs)" }}>
                ➤
              </button>
            </div>
          </div>
        </>
      )}

      {/* Toast — aparece mesmo com o chat fechado */}
      {toast && (
        <div
          style={{
            position: "fixed",
            top: 16,
            left: "50%",
            transform: "translateX(-50%)",
            zIndex: "var(--z-overlay)" as unknown as number,
            background: "var(--color-background-tertiary)",
            border: "1.5px solid var(--color-accent)",
            boxShadow: "var(--shadow-lg)",
            borderRadius: "var(--radius-sm)",
            padding: "10px 32px 10px 14px",
            display: "flex",
            alignItems: "center",
            gap: 8,
            maxWidth: "90vw",
            animation: "entrada-toast var(--duration-normal) var(--ease-padrao)",
          }}
        >
          <div style={{ width: 22, height: 22, flexShrink: 0 }}>
            <AvatarIA tamanho={22} />
          </div>
          <p style={{ fontSize: "var(--font-size-xs)", color: "var(--color-accent)", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
            {toast}
          </p>
          <button
            onClick={() => setToast(null)}
            className="cursor-pointer border-none flex items-center justify-center shrink-0"
            style={{
              width: 20, height: 20,
              background: "transparent",
              position: "absolute",
              top: -8, right: -8,
              padding: 0,
            }}
          >
            <svg width="16" height="16" viewBox="0 0 16 16">
              <line x1="3" y1="3" x2="13" y2="13" stroke="#E24B4A" strokeWidth="2" strokeLinecap="round" />
              <line x1="13" y1="3" x2="3" y2="13" stroke="#E24B4A" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </button>

          <style>{`
            @keyframes entrada-toast {
              from { opacity: 0; transform: translate(-50%, -12px); }
              to   { opacity: 1; transform: translate(-50%, 0); }
            }
          `}</style>
        </div>
      )}
    </>
  );
}
    