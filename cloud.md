# Cofre Pessoal

## Objetivo

App pessoal de controle financeiro (gastos, ganhos, orçamento, metas e alertas), inspirado visualmente no `FinancasApp.jsx`. Fase atual: prototipagem com dados mock, sem persistência real ainda.

## Stack

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS v4 (`@import "tailwindcss"` em `globals.css`)
- Sem backend/banco de dados por enquanto — tudo em `useState` local

## Arquitetura

Estrutura simples de SPA com roteamento manual por estado (não usa App Router para navegação entre telas):

```
src/
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx          ← controla qual página exibir (estado de aba ativa)
├── components/
│   ├── Topbar.tsx
│   └── Navbar.tsx         ← navegação entre as 5 abas
├── data/
│   └── categorias.ts      ← categorias de gasto e tipos de entrada (vindos da planilha AppSheet)
└── pages/
    ├── Dashboard.tsx
    ├── Extrato.tsx
    ├── Orcamento.tsx
    ├── Metas.tsx
    └── Alertas.tsx
```

## Entidades

- **Transação**: `{ id, nome, data, tipo, valor, icone, cor }` — valor negativo = gasto, positivo = ganho
- **Categoria de gasto**: categoria (ex: Alimentação) → lista de subtipos (ex: Supermercado, Feira/Hortifruti...)
- **Tipo de entrada**: lista simples (Salário, Bico, Tauama Designer de Moda, Culinária Matheus)
- **Meta**: `{ id, nome, atual, total, icone, prazo }`
- **Item de orçamento**: `{ categoria, gasto, limite, cor }`
- **Alerta**: `{ id, nome, desc, ativo, icone }`

## Casos de uso já implementados

- Visualizar métricas, alerta e últimos lançamentos no Dashboard
- Adicionar gasto ou ganho via modal no Dashboard (salva em `useState`, não persiste)
- Visualizar extrato completo de transações
- Visualizar orçamento por categoria com barra de progresso e alerta visual de estouro
- Rebalancear orçamento (sugestões mock)
- Visualizar metas com progresso e estratégia expansível
- Ativar/desativar alertas via toggle

## Casos de uso pendentes

- Persistência real de dados (ainda decidir: localStorage, backend, etc.)
- Responsividade geral (ajuste de tamanhos — pendente desde o início do projeto)
- Edição/exclusão de transações
- Conectar Orçamento/Metas aos dados reais de Gastos/Entradas (hoje são mocks desconectados)

## Regras de negócio

- Gasto sempre é salvo como valor negativo na lista de transações
- Categoria "estourou o limite" quando `gasto > limite` no Orçamento → exibir em vermelho com ⚠️
- Cores de progresso em Metas: ≥70% verde, 40-69% laranja, <40% azul
- **Formatação de Descrição de Transações no Modal:** Se a transação for um ganho (Receita), o campo `nome` recebe apenas o `subtipo` selecionado. Se for um gasto (Despesa), o campo `nome` é composto por `Categoria - Subtipo`.
## Fonte de dados externa

Planilha `Planilha_financeira_TAMA_DB.xlsx` (exportada de um app AppSheet existente do usuário) contém:
- Aba **Gastos**: histórico real de gastos (descrição, tipo, valor, data serial Excel)
- Aba **Entradas**: histórico real de ganhos (tipo, valor, data)
- Aba **DropdownEntradas**: tipos de entrada válidos
- Aba **ItensPorCategoria**: categoria → subtipo de gasto (fonte do `categorias.ts`)

Usada como referência de categorização, não como dado importado diretamente (ainda).

## Convenções

- Formatação de moeda: `Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" })`
- Componentes de página: `"use client"` + função nomeada default export
- Cores em hexadecimal inline via `style={{}}`, não em classes Tailwind customizadas
- Cards: `bg-white border border-gray-200 rounded-xl p-4`
- Texto secundário: `text-xs text-gray-400` / `text-gray-500`

## Fluxo de trabalho com a IA (regra do usuário)

> Uma tarefa por vez. Esperar confirmação antes de avançar. Pedir o código completo apenas quando solicitado — por padrão, explicar passo a passo para fins de aprendizado.

## Decisões arquiteturais

- Sem testes automatizados nesta fase (projeto é mock-only, sem terminal/CI no fluxo de trabalho do usuário)
- Sem monorepo, sem Docker — fluxo é chat (Claude.ai gratuito) + copiar/colar manual no VS Code
- Metodologia adaptada do "Akita Way": mantém a essência (uma tarefa por vez, contexto documentado, IA como executora) mas descarta partes que pressupõem ambiente de terminal/testes automatizados que o usuário não usa no fluxo atual

## Histórico de mudanças

- Criadas as 5 páginas base (Dashboard, Extrato, Orçamento, Metas, Alertas)
- Implementada página Orçamento (barras de progresso, alerta de estouro, rebalanceamento)
- Implementada página Metas (barras de progresso, estratégia expansível)
- Implementada página Alertas (toggles funcionais)
- Adicionados botões de gasto/ganho no Dashboard com modal funcional
- Iniciada extração de categorias da planilha AppSheet para `src/data/categorias.ts`
- **Atualização do Modal de Transações:** Substituído o input manual de texto (`nome`) por seletores dinâmicos baseados em `categorias.ts`. Ajustada a função `salvar` para validar `subtipo` e concatenar dinamicamente a descrição da transação (`Categoria - Subtipo` para gastos, apenas `Subtipo` para ganhos), limpando corretamente os estados de categoria e subtipo ao fechar.