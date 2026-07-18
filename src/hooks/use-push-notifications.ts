"use client";

import { useEffect, useState } from "react";

function urlBase64ToUint8Array(base64String: string) {
  const padding = "=".repeat((4 - (base64String.length % 4)) % 4);
  const base64 = (base64String + padding).replace(/-/g, "+").replace(/_/g, "/");
  const rawData = window.atob(base64);
  return Uint8Array.from([...rawData].map((c) => c.charCodeAt(0)));
}

export function usePushNotifications() {
  const [permitido, setPermitido] = useState(false);

  useEffect(() => {
    setPermitido(Notification.permission === "granted");
  }, []);

  async function ativarNotificacoes() {
    const registro = await navigator.serviceWorker.ready;

    const permissao = await Notification.requestPermission();
    if (permissao !== "granted") return;

    const subscription = await registro.pushManager.subscribe({
      userVisibleOnly: true,
      applicationServerKey: urlBase64ToUint8Array(
        process.env.NEXT_PUBLIC_VAPID_PUBLIC_KEY!
      ),
    });

    await fetch("/api/push/subscribe", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(subscription),
    });

    setPermitido(true);
  }

  return { permitido, ativarNotificacoes };
}