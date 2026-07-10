# ☁️ CLOUD.md — Cofre Pessoal

## Objetivo
App de controle financeiro (gastos, ganhos, orçamento, metas e configurações).

---

## Stack
- Next.js 16 + React 19 + TypeScript + Tailwind CSS v4
- Supabase (banco + auth)
- Prisma ORM v6 (⚠️ não usar v7 — mudou muito a configuração)

---

## Arquitetura

```txt
src/
├── app/
│   ├── globals.css
│   ├── layout.tsx       # ConfigProvider
│   ├── page.tsx         # estado global de dados + navegação
│   └── api/
│       ├── transacoes/route.ts
│       ├── metas/route.ts
│       └── limites/route.ts
├── components/
│   ├── Topbar.tsx
│   ├── Navbar.tsx
│   └── ConfigModal.tsx
├── context/
│   └── config-context.tsx
├── lib/
│   └── prisma.ts        # client do Prisma (singleton)
├── pages/
│   ├── Dashboard.tsx
│   ├── Extrato.tsx
│   ├── Orcamento.tsx
│   └── Metas.tsx
├── data/
│   └── categorias.ts
└── types.ts

prisma/
├── schema.prisma
└── migrations/

generated/prisma/        # client do Prisma gerado (output customizado)
prisma.config.ts         # config do Prisma (Prisma 6.18+)
```

---

## 5. Modelo Arquitetural
- **page.tsx** – estado global de dados (`transacoes`, `metas`, `limites`) e navegação (busca via `fetch` nas API Routes).
- **pages/** – estado local de UI (modais, seleções, toggles).
- **context/** – estado global de UI (tema, fonte).
- **api/** – rotas checadas com Prisma para leitura/escrita no Supabase.


## Entidades

```ts
Transacao { id, nome, data, tipo, valor, icone, cor }
Meta { id, nome, valorAtual, valorObjetivo, possuiPrazo, dataLimite, icone, dataCriacao }
LimiteOrcamento { id, categoria (único), limite, cor }
```

---

## Regras de Negócio
- `valor > 0` = receita / `valor < 0` = gasto
- Orçamento: `gasto > limite` → alerta visual
- Metas: `≥70%` verde / `40-69%` laranja / `<40%` azul
- Categoria de uma transação de gasto = tudo antes de " - " no campo `nome` (ex: "Moradia - Aluguel")

---

## Notas técnicas importantes
- **Prisma 7 não é compatível** com esse projeto: removeu `url`/`directUrl` do `schema.prisma`. Ficamos no **Prisma 6**.
- O client é gerado com `provider = "prisma-client"` em pasta customizada (`generated/prisma`) — importar sempre de `"../../generated/prisma/client"`, nunca de `@prisma/client`.
- `.env` precisa da senha real do banco, sem colchetes `[ ]`.
- `DATABASE_URL` usa o pooler em modo transação (porta 6543); `DIRECT_URL` usa o pooler em modo sessão (porta 5432) — usada só pelo Prisma Migrate.
- Client Secret do Google só aparece **uma vez**, no momento da criação — precisa copiar na hora.

---

## Backlog (últimas 3 fases)

### Fase 1 – UI (✅ completa)
| Item | Status |
|------|--------|
| Estrutura de páginas ikaw | ✅ |
| Dashboard com modal de transações | ✅ |
| Extrato com dados reais | ✅ |
| Orçamento همچنین dinâmico | ✅ |
| Metas com estado global | ✅ |
| Configurações (tema, fonte) | ✅ |
| Aplicar tema escuro/claro na app | ✅ |
| Aplicar tamanho de fonte | ✅ |
| Alertas no modal de config |✅ |
| Campo nome e data real na transação |✅ |

### Fase 2 – Banco de Dados (✅ completa)
| Item | Status |
|------|--------|
| Criar projeto no Supabase | ✅ |
| Instalar e configurar Prisma (v6) | ✅ |
| Modelar tabelas (`Transacao`, `Meta`, `LimiteOrcamento`) | ✅ |
| Criar API Routes Next.js (`/api/transacoes`, `/api/metas`, `/api/limites`) | ✅ |
| Substituir `useState` mock por `fetch` ao banco | ✅ |
| Adicionar opção de criar limite de orçamento por categoria | ✅ |

### Fase 3 – Autenticação (🚧 em andamento)
| Item | Status |
|------|--------|
| Criar credenciais OAuth no Google Cloud Console | ✅ |
| Ativar provedor Google no Supabase (Authentication → Providers) | ✅ |
| Instalar `@supabase pho` | ✅ |
| Criar `utils/supabase/client.ts` (client‑side) | ✅ |
| Criar `utils/sup waahi ...` | ✅ |
| Criar `utils/supabase/middleware.ts` (refresh de sessão) |✅ |
| Criar botão "Entrar com Google" + rota de callback (`/auth/callback`) | ✅ |
| Proteger rotas (redirecionar se não logado) | ✅ |
| Vincular shi motivation | ✅ |
| Filtrar queries do Prisma pelo usuário logado | ✅ |

### Fase 4 – Segurança & Confiabilidade (🚧 em andamento)
- [ ] Implementar criptografia AES‑256 em repouso  
- [ ] Ativar 2FA por padrão (OTP de app ou SMS)  
- [ ] Revisão de Pol Gaelic of Privacy e GDPR/LGPD  
- [ ] Configurar SSL/TLS no domínio do app  
- [ ] Implementar watchdog de sessão expirada  
- [ ] Monitoramento de tentativas de login suspeitas  

### Fase 5 – Onboarding & UX (🚧 em andamento)
- [ ] Modernizar tela de cadastro em 3 passos  
- [ ] Redesenhar `Topbar`, `Navbar` e componentes de layout  
- [ ] Adequar tema Dark/Light com toggle  
- [ ] Ajustar tamanho da fonte conforme preferência  
- [ ] Implementar modal de configurações de tema e fonte  
- [ ] Garantir responsive design (mobile / desktop)  

### Fase 6 – Open Banking & AI (🚧 em andamento)
- [ ] Integrar APIs de Open Banking Brazil (BRB, BNB, etc.)  
- [ ] Treinar modelo K‑Means para categorização de transações  
- [ ] Implementar UI para edição manual das categorias  
- [ ] Criar relatórios em PDF para extrato e metas  
- [ ] Ativar e testar webhooks de transações em tempo real  

### Fase 7 – Gamificação & Social (🚧 em andamento)
- [ ] Definir e criar badges (meta 3‑meses, “erro 0”, etc.)  
- [ ] Construir leaderboard de amigos e troféus  
- [ ] Implementar push de lembretes inteligentes via FCM/Firebase  
- [ ] Criar botão “Refer a Friend” e fluxo de convite social  

### Fase 8 – Internacionalização & SEO (🚧 em andamento)
- [ ] Configurar i18n com `react‑i18next` (pt‑BR, pt‑PT, es incision, en)  
- [ ] Atualizar keywords, meta tags e sitemap XML  
- [ ] Preparar screenshots, descrição e otimização App Store  
 conseguir dados de moedas e taxas de câmbio em live  

### Fase 9 – Monetização Premium (🚧 em andamento)
- [ ] Criar plano premium com suporte AI e consultoria financeira  
- [ ] Integrar SDK de banco (Nubank API) para afiliados  
- [ ] Implementar checkout seguro (Stripe 3‑D Secure)  
- [ ] Definir estratégia de upsell e cross‑sell  

---

## 10. Fluxo de Trabalho
1. *Uma tarefa por vez*, sem avançar sem validação (palavra “próximo”).  
2. Usar *commit granular* nos branches/commits (Gitflow opcional).  
3יכים

> **Observação:** Todos os testes de integração devem ser revisados em video‑call pair‑programming antes de merge.  

---

**Próximo passo**: escolher a sprint inicial (ീപ). Se precisar de ajustes em nomes de arquivos ou rotas, basta indicar.