# Cofre Pessoal

## Objetivo

App pessoal de controle financeiro (gastos, ganhos, orçamento, metas e alertas), inspirado visualmente no `FinancasApp.jsx`.

Fase atual: prototipagem funcional com dados em memória (`useState`), estado global compartilhado para transações e início da substituição dos dados mock por cálculos reais.

---

# Stack

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS v4 (`@import "tailwindcss"` em `globals.css`)
- Sem backend/banco de dados por enquanto
- Persistência ainda não implementada

---

# Arquitetura

Estrutura simples de SPA com roteamento manual por estado (não utiliza App Router para navegação interna):

```txt
src/
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
│        ├─ controla a aba ativa
│        └─ centraliza o estado global das transações
│
├── components/
│   ├── Topbar.tsx
│   └── Navbar.tsx
│
├── data/
│   └── categorias.ts
│
├── pages/
│   ├── Dashboard.tsx
│   ├── Extrato.tsx
│   ├── Orcamento.tsx
│   ├── Metas.tsx
│   └── Alertas.tsx
│
└── types.ts
```

---

# Entidades

## Transação

```ts
{
  id,
  nome,
  data,
  tipo,
  valor,
  icone,
  cor
}
```

### Regras

- Valor positivo = receita
- Valor negativo = gasto
- Receitas utilizam apenas o subtipo no campo nome
- Gastos utilizam o padrão:

```txt
Categoria - Subtipo
```

Exemplo:

```txt
Alimentação - Supermercado
Transporte - Combustível
Moradia - Aluguel
```

---

## Meta

Modelo atual (mock):

```ts
{
  id,
  nome,
  atual,
  total,
  icone,
  prazo
}
```

Modelo planejado para V1:

```ts
{
  id,
  nome,
  valorAtual,
  valorObjetivo,
  possuiPrazo,
  dataLimite,
  icone,
  dataCriacao
}
```

---

## Item de Orçamento

```ts
{
  categoria,
  limite,
  cor
}
```

O gasto passa a ser calculado dinamicamente através das transações.

---

## Alerta

```ts
{
  id,
  nome,
  desc,
  ativo,
  icone
}
```

---

# Casos de Uso Implementados

## Dashboard

- Visualizar métricas
- Visualizar alerta principal
- Visualizar últimos lançamentos
- Adicionar gasto
- Adicionar ganho
- Modal de lançamento funcional
- Dropdowns dinâmicos baseados em `categorias.ts`

---

## Extrato

- Visualizar extrato completo
- Atualização em tempo real
- Compartilhamento do estado global de transações

---

## Orçamento

### Implementado

- Visualizar orçamento mensal
- Barras de progresso
- Alerta de estouro
- Rebalanceamento (mock)

### Integração Real Implementada

O orçamento agora recebe:

```ts
transacoes
```

via props.

Foi implementado:

```ts
calcularGastoCategoria(categoria)
```

que soma automaticamente os gastos reais da categoria.

Também foi implementado:

```ts
obterCategoria(nome)
```

que extrai a categoria a partir do padrão:

```txt
Categoria - Subtipo
```

Exemplo:

```txt
Alimentação - Supermercado
↓
Alimentação
```

O orçamento agora calcula dinamicamente:

- Alimentação
- Moradia
- Transporte
- Qualquer categoria existente nas transações

Categorias sem movimentação exibem:

```txt
R$ 0,00
```

---

## Metas

### Implementado

- Listagem de metas
- Barra de progresso
- Estratégia expansível
- Indicadores visuais por percentual

### Situação Atual

Ainda utiliza:

```ts
METAS_MOCK
```

Sem integração com dados reais.

---

## Alertas

- Ativar/desativar alertas
- Toggle funcional

---

# Casos de Uso Pendentes

## Transações

- Editar transação
- Excluir transação
- Persistência de dados

---

## Orçamento

- Configuração de limites pelo usuário
- Rebalanceamento inteligente
- Sugestões baseadas em gastos reais

---

## Metas

### Sprint V1

- Cadastro de metas pelo usuário
- Botão "Nova Meta"
- Modal de criação de meta
- ID automático
- Nome da meta
- Valor atual
- Valor objetivo
- Ícone
- Possui prazo?
- Data limite opcional
- Estado compartilhado de metas

### Sprint V2

- Editar meta
- Excluir meta
- Atualizar valor atual
- Aportes manuais

### Sprint V3

- Histórico de aportes
- Relacionamento entre aportes e metas

### Sprint V4

- Estratégia inteligente
- Cálculo de ritmo mensal necessário
- Projeção de conclusão
- Comparação com prazo
- Sugestões utilizando dados do orçamento
- Detecção automática de atraso

---

# Regras de Negócio

## Transações

- Gasto sempre negativo
- Receita sempre positiva

---

## Orçamento

Categoria entra em estado de alerta quando:

```txt
gasto > limite
```

Exibir:

```txt
⚠️
```

e utilizar cor vermelha.

---

## Metas

Cor da barra:

```txt
≥ 70% → Verde
40% a 69% → Laranja
< 40% → Azul
```

---

# Fonte de Dados Externa

Planilha:

```txt
Planilha_financeira_TAMA_DB.xlsx
```

Contém:

- Gastos
- Entradas
- DropdownEntradas
- ItensPorCategoria

Utilizada apenas como referência estrutural.

Ainda não existe importação automática.

---

# Convenções

## Moeda

```ts
Intl.NumberFormat("pt-BR", {
  style: "currency",
  currency: "BRL"
})
```

---

## Componentes

```txt
"use client"
```

em páginas interativas.

---

## Cards

```txt
bg-white
border border-gray-200
rounded-xl
p-4
```

---

## Texto secundário

```txt
text-xs text-gray-400
text-gray-500
```

---

# Fluxo de Trabalho com IA

Regra principal:

> Uma tarefa por vez.

- Não avançar sem aprovação.
- Explicar antes de implementar.
- Solicitar código completo apenas quando necessário.
- Priorizar aprendizado e compreensão da arquitetura.

---

# Decisões Arquiteturais

- Sem backend nesta fase
- Sem banco de dados nesta fase
- Sem Docker
- Sem monorepo
- Sem testes automatizados por enquanto
- Fluxo baseado em VS Code + IA
- Metodologia inspirada no Akita Way adaptada ao projeto

---

# Histórico de Mudanças

## Estrutura Base

- Criadas as páginas:
  - Dashboard
  - Extrato
  - Orçamento
  - Metas
  - Alertas

---

## Dashboard

- Criados modais de gasto e ganho
- Integração com categorias dinâmicas

---

## Arquitetura

- Criação de `src/types.ts`
- Centralização do estado global em `page.tsx`
- Implementação de Lift State Up

---

## Extrato

- Passou a consumir transações reais do estado global

---

## Orçamento

- Recebe transações reais via props
- Implementada função:

```ts
calcularGastoCategoria()
```

- Implementada função:

```ts
obterCategoria()
```

- Removida dependência dos valores mock de gasto
- Gastos calculados dinamicamente a partir das transações
- Categorias sem movimentação exibem valor zero

---

## Próxima Implementação Planejada

### Metas V1

1. Adicionar botão "➕ Nova Meta"
2. Criar modal de cadastro
3. Criar estrutura de Meta em `types.ts`
4. Elevar estado de metas para `page.tsx`
5. Substituir `METAS_MOCK`
6. Permitir criação de metas pelo usuário