"use client";

import { useEffect, useState } from "react";

export function useInstallPrompt() {
  const [prompt, setPrompt] = useState<any>(null);
  const [podeInstalar, setPodeInstalar] = useState(false);

  useEffect(() => {
    const handler = (e: Event) => {
      e.preventDefault();
      setPrompt(e);
      setPodeInstalar(true);
    };

    window.addEventListener("beforeinstallprompt", handler);
    return () => window.removeEventListener("beforeinstallprompt", handler);
  }, []);

  async function instalar() {
    if (!prompt) return;
    prompt.prompt();
    await prompt.userChoice;
    setPodeInstalar(false);
    setPrompt(null);
  }

  return { podeInstalar, instalar };
}