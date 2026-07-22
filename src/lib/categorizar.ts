const REGRAS: { palavras: string[]; categoria: string }[] = [
  { palavras: ["uber", "99", "taxi"], categoria: "Transporte" },
  { palavras: ["ifood", "rappi", "restaurante"], categoria: "Alimentação" },
  { palavras: ["netflix", "spotify", "amazon prime"], categoria: "Internet/Assinaturas" },
  { palavras: ["farmacia", "drogaria"], categoria: "Saúde" },
  { palavras: ["mercado", "supermercado", "atacadao"], categoria: "Mercado" },
];

export function categorizarPorRegra(descricao: string): string | null {
  const texto = descricao.toLowerCase();
  for (const regra of REGRAS) {
    if (regra.palavras.some((p) => texto.includes(p))) {
      return regra.categoria;
    }
  }
  return null;
}