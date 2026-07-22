const PLUGGY_BASE_URL = "https://api.pluggy.ai";

let cachedApiKey: { key: string; expiraEm: number } | null = null;

export async function getPluggyApiKey() {
  if (cachedApiKey && cachedApiKey.expiraEm > Date.now()) {
    return cachedApiKey.key;
  }

  const res = await fetch(`${PLUGGY_BASE_URL}/auth`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      clientId: process.env.PLUGGY_CLIENT_ID,
      clientSecret: process.env.PLUGGY_CLIENT_SECRET,
    }),
  });

  const data = await res.json();

  cachedApiKey = {
    key: data.apiKey,
    expiraEm: Date.now() + 1000 * 60 * 60 * 1.5, // ~1h30 de validade
  };

  return cachedApiKey.key;
}