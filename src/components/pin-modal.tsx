"use client";

import { useState, useEffect } from "react";

type Props = { onSucesso: () => void };

export default function PinModal({ onSucesso }: Props) {
  const [existePin, setExistePin] = useState<boolean | null>(null);
  const [pin, setPin] = useState("");
  const [confirmarPin, setConfirmarPin] = useState("");
  const [erro, setErro] = useState("");
  const [carregando, setCarregando] = useState(false);

  useEffect(() => {
    fetch("/api/pin")
      .then(res => res.json())
      .then(data => setExistePin(data.existe));
  }, []);

  const cadastrarPin = async () => {
    setErro("");
    if (pin.length !== 4) return setErro("O PIN precisa ter 4 dígitos");
    if (pin !== confirmarPin) return setErro("Os PINs não coincidem");

    setCarregando(true);
    const res = await fetch("/api/pin", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ pin }),
    });
    setCarregando(false);

    if (res.ok) {
      await marcarDispositivoConfiavel();
      onSucesso();
    } else {
      setErro("Não foi possível cadastrar o PIN");
    }
  };

  const verificarPin = async () => {
    setErro("");
    setCarregando(true);
    const res = await fetch("/api/pin", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ pin }),
    });
    const data = await res.json();
    setCarregando(false);

    if (data.valido) {
      await marcarDispositivoConfiavel();
      onSucesso();
    } else if (data.bloqueado) {
      setErro(`Muitas tentativas erradas. Tente novamente em ${data.minutosRestantes} min.`);
    } else {
      setErro(`PIN incorreto. ${data.tentativasRestantes} tentativa(s) restante(s).`);
      setPin("");
    }
  };

  const marcarDispositivoConfiavel = async () => {
    await fetch("/api/pin/dispositivo", { method: "POST" });
  };

  if (existePin === null) return null; // ainda carregando, não mostra nada

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center"
      style={{ background: "color-mix(in srgb, var(--color-background-primary) 60%, transparent)", backdropFilter: "blur(6px)" }}
    >
      <div
        className="flex flex-col gap-4 rounded-2xl p-6 w-[90%] max-w-xs"
        style={{ background: "var(--color-background-secondary)", border: "1px solid var(--color-border-primary)" }}
      >
        <div className="flex flex-col items-center gap-1">
          <span style={{ fontSize: 28 }}>🔒</span>
          <h2 className="font-semibold" style={{ fontSize: "var(--font-size-md)", color: "var(--color-text-primary)" }}>
            {existePin ? "Digite seu PIN" : "Crie um PIN de segurança"}
          </h2>
          <p style={{ fontSize: "var(--font-size-xs)", color: "var(--color-text-tertiary)" }}>
            {existePin ? "Novo dispositivo detectado" : "4 dígitos, só pra este dispositivo"}
          </p>
        </div>

        <input
          type="password"
          inputMode="numeric"
          maxLength={4}
          value={pin}
          onChange={(e) => setPin(e.target.value.replace(/\D/g, ""))}
          className="text-center tracking-[0.5em] rounded-xl py-2 outline-none"
          style={{
            fontSize: "var(--font-size-lg)",
            background: "var(--color-background-primary)",
            border: "1px solid var(--color-border-primary)",
            color: "var(--color-text-primary)",
          }}
          autoFocus
        />

        {!existePin && (
          <input
            type="password"
            inputMode="numeric"
            maxLength={4}
            placeholder="Confirme o PIN"
            value={confirmarPin}
            onChange={(e) => setConfirmarPin(e.target.value.replace(/\D/g, ""))}
            className="text-center tracking-[0.5em] rounded-xl py-2 outline-none"
            style={{
              fontSize: "var(--font-size-lg)",
              background: "var(--color-background-primary)",
              border: "1px solid var(--color-border-primary)",
              color: "var(--color-text-primary)",
            }}
          />
        )}

        {erro && <p style={{ fontSize: "var(--font-size-xs)", color: "#E24B4A" }}>{erro}</p>}

        <button
          onClick={existePin ? verificarPin : cadastrarPin}
          disabled={carregando}
          className="rounded-xl py-2 font-medium cursor-pointer border-none"
          style={{ background: "var(--color-accent)", color: "#fff", fontSize: "var(--font-size-sm)" }}
        >
          {carregando ? "..." : existePin ? "Confirmar" : "Criar PIN"}
        </button>
      </div>
    </div>
  );
}