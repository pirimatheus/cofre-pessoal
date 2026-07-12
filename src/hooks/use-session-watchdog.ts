"use client";

import { useEffect } from "react";
import { createClient } from "@/utils/supabase/client";

export function useSessionWatchdog() {
  useEffect(() => {
    const supabase = createClient();

    const { data: listener } = supabase.auth.onAuthStateChange((event) => {
      if (event === "SIGNED_OUT" || event === "TOKEN_REFRESHED" && false) {
        // placeholder, tratado abaixo
      }
      if (event === "SIGNED_OUT") {
        window.location.href = "/login";
      }
    });

    // Checagem ativa a cada 5 minutos: garante que a sessão ainda é válida
    const intervalo = setInterval(async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (!session) {
        window.location.href = "/login";
      }
    }, 5 * 60 * 1000);

    return () => {
      listener.subscription.unsubscribe();
      clearInterval(intervalo);
    };
  }, []);
}