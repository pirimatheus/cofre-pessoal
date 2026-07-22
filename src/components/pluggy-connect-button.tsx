"use client";

import { useState } from "react";

declare global {
  interface Window {
    PluggyConnect: any;
  }
}

type Props = { onAbrir?: () => void };

export function PluggyConnectButton({ onAbrir }: Props) {
  const [carregando, setCarregando] = useState(false);

  async function abrirConexao() {
    setCarregando(true);
    onAbrir?.(); // fecha o modal de configurações, por exemplo

    const res = await fetch("/api/pluggy/connect-token", { method: "POST" });
    const { connectToken } = await res.json();

    const pluggyConnect = new window.PluggyConnect({
      connectToken,
      includeSandbox: true,
      onSuccess: async (itemData: any) => {
        await fetch("/api/pluggy/save-conta", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ itemId: itemData.item.id }),
        });
        setCarregando(false);
        window.location.reload();
      },
      onError: () => setCarregando(false),
      onClose: () => setCarregando(false),
    });

    pluggyConnect.init();
  }

  return (
    <button
      onClick={abrirConexao}
      disabled={carregando}
      className="px-4 py-2 rounded-lg font-medium"
      style={{ background: "#3D1E6D", color: "#FFFFFF" }}
    >
      {carregando ? "Abrindo..." : "Conectar banco"}
    </button>
  );
}