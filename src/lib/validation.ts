import { z } from "zod";

export const transacaoSchema = z.object({
  nome: z.string().min(1, "Nome é obrigatório").max(200),
  data: z.string().datetime({ message: "Data inválida (ISO 8601)" }),
  tipo: z.enum(["Receita", "Variável", "Fixo", "Investimento"]),
  valor: z.number().finite("Valor deve ser um número válido"),
  icone: z.string().min(1, "Ícone é obrigatório").max(10),
  cor: z.string().regex(/^#[0-9A-Fa-f]{6}$/, "Cor deve ser hexadecimal #RRGGBB"),
});

export const metaSchema = z.object({
  nome: z.string().min(1, "Nome é obrigatório").max(200),
  valorAtual: z.number().min(0, "Valor atual não pode ser negativo").finite(),
  valorObjetivo: z.number().positive("Valor objetivo deve ser positivo").finite(),
  possuiPrazo: z.boolean(),
  dataLimite: z.string().datetime({ message: "Data limite inválida" }).nullable().optional(),
  icone: z.string().min(1, "Ícone é obrigatório").max(10),
});

export const limiteSchema = z.object({
  categoria: z.string().min(1, "Categoria é obrigatória").max(100),
  limite: z.number().positive("Limite deve ser positivo").finite(),
  cor: z.string().regex(/^#[0-9A-Fa-f]{6}$/, "Cor deve ser hexadecimal #RRGGBB"),
});

export const iaSchema = z.object({
  mensagem: z.string().min(1, "Mensagem é obrigatória").max(2000),
});