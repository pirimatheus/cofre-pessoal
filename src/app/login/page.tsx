"use client";

import { createClient } from "@/utils/supabase/client";

export default function LoginPage() {
  const supabase = createClient();

  const entrarComGoogle = async () => {
    await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo: `${window.location.origin}/auth/callback`,
      },
    });
  };

  return (
    <div style={{ display: "flex", height: "100vh", alignItems: "center", justifyContent: "center" }}>
      <button onClick={entrarComGoogle} style={{
        padding: "10px 20px", borderRadius: 8, fontSize: 14, fontWeight: 600,
        cursor: "pointer", border: "1px solid #ccc", background: "#fff",
      }}>
        🔐 Entrar com Google
      </button>
    </div>
  );
}