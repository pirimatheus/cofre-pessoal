const FRASES: Record<string, string[]> = {
  transacao: [
    "Anotado! ✨ Mais um passo no controle das finanças.",
    "Registrado! 💜 Você no comando do seu dinheiro.",
    "Feito! 🎉 Cada lançamento conta uma história.",
    "Pronto! 🌟 Organização é liberdade.",
  ],
  meta: [
    "Nova meta criada! 🎯 O futuro agradece.",
    "Sonho registrado! 💫 Vamos até lá juntos.",
    "Meta no ar! 🚀 Um passo de cada vez.",
  ],
  limite: [
    "Limite definido! 🛡️ Seu orçamento, suas regras.",
    "Combinado! 📊 Controle é a chave.",
  ],
  tema: [
    "Tema atualizado! 🎨 Do seu jeito.",
  ],
  generico: [
    "Prontinho! ✅",
    "Feito com carinho! 💜",
  ],
};

export function gerarFrase(tipo: string): string {
  const lista = FRASES[tipo] ?? FRASES.generico;
  return lista[Math.floor(Math.random() * lista.length)];
}