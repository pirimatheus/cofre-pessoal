export type Transacao = {
  id: number;
  nome: string;
  data: string;
  tipo: string;
  valor: number;
  icone: string;
  cor: string;
};

export type Meta = {
    id: number;
    nome: string;
    valorAtual: number;
    valorObjetivo: number;
    possuiPrazo: boolean;
    dataLimite?: string;
    icone: string;
    dataCriacao: string;
  };

  export type Config = {
    tema: "claro" | "escuro";
    notificacoes: boolean;
    idioma: string;
  };

  export type LimiteOrcamento = {
  id: number;
  categoria: string;
  limite: number;
  cor: string;
};