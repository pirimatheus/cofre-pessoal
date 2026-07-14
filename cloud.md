# ☁️ CLOUD.md — Cofre Pessoal

## Objetivo
App de controle financeiro (gastos, ganhos, orçamento, metas, configurações), com meta de competir com Mobills/Organizze/Monarch Money em nível de produto.

---

## Stack
- Next.js 16 + React 19 + TypeScript + Tailwind CSS v4
- Supabase (banco + auth)
- Prisma ORM v6 (⚠️ não usar v7)
- IA: Groq (chat financeiro)

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
│       ├── limites/route.ts
│       ├── ia/route.ts
│       ├── pin/route.ts
│       ├── notificacoes/route.ts
│       └── layout/route.ts
├── components/
├── context/
├── lib/
├── pages/
├── data/
└── types.ts

prisma/
├── schema.prisma
└── migrations/

generated/prisma/        # client gerado (output customizado)
```

---

## Modelo Arquitetural
- **page.tsx** – estado global de dados, navegação via `fetch` nas API Routes.
- **pages/** – estado local de UI.
- **context/** – estado global de UI (tema, fonte).
- **api/** – rotas Prisma para leitura/escrita no Supabase.

## Entidades atuais
```ts
Transacao { id, nome, data, tipo, valor, icone, cor, userId }
Meta { id, nome, valorAtual, valorObjetivo, possuiPrazo, dataLimite, icone, dataCriacao, userId }
LimiteOrcamento { id, categoria (único), limite, cor, userId }
UsuarioPin, DispositivoConfiavel, LogLogin, ConsentimentoUsuario, LayoutDashboard, Notificacao
```

## ⚠️ Dívida técnica crítica
- `valor String` no Prisma → migrar para `Decimal @db.Decimal(12,2)` (quebra soma/ordenação em escala).
- Sem model `Conta` (multi-conta/cartão), sem parcelamento, sem recorrência.

---

## Regras de Negócio
- `valor > 0` = receita / `valor < 0` = gasto
- Orçamento: `gasto > limite` → alerta visual
- Metas: `≥70%` verde / `40-69%` laranja / `<40%` azul
- Categoria = tudo antes de " - " no campo `nome`

---

## Notas técnicas importantes
- Prisma 7 incompatível — ficar em Prisma 6.
- Client gerado em `generated/prisma`, importar de lá, nunca de `@prisma/client`.
- `.env`: senha real sem colchetes.
- `DATABASE_URL` = pooler transação (porta 6543); `DIRECT_URL` = pooler sessão (porta 5432, só Migrate).

---

## Diagnóstico competitivo (consolidado — Claude + análise externa)
**Pontos fortes:** stack moderna, PIN + dispositivo confiável, criptografia AES, consentimento LGPD, IA chat, dashboard com widgets drag-and-drop.

**Gaps para virar top-tier:**
1. Zero integração bancária/Open Finance — maior driver de crescimento do setor.
2. Não é PWA — sem instalação, push, offline.
3. Sem net worth tracker, recorrência/assinaturas auto-detect, forecasting.
4. Monetização indefinida.
5. Sem cache (TanStack Query), sem analytics (PostHog), sem rate limiting robusto.
6. Schema com tipos fracos (`String` para valores monetários).

---

## Backlog técnico priorizado (decisão: PWA → Open Finance/Banco Central)

### Fase 4 – PWA (🎯 ATUAL)
- [ ] `manifest.json` (ícones, nome, theme-color, display: standalone)
- [ ] Service Worker (Workbox ou `next-pwa`) — cache de assets + estratégia offline
- [ ] Ícones e splash screens (iOS/Android)
- [ ] Instalação: prompt `beforeinstallprompt` customizado
- [ ] Push notifications (Web Push API / FCM)
- [ ] Testar Lighthouse PWA score (meta: 100)
- [ ] Fallback offline para páginas principais (Dashboard, Extrato)

### Fase 5 – Integração Bancária (Banco Central / Open Finance Brasil)
- [ ] Avaliar agregador: Pluggy (mais simples/BR-first) vs Belvo
- [ ] Cadastro developer + sandbox
- [ ] Model `Conta` no Prisma (múltiplas contas/cartões por usuário)
- [ ] Endpoint de conexão OAuth com instituição financeira
- [ ] Webhook de transações em tempo real
- [ ] Categorização automática (regras + IA Groq few-shot)
- [ ] Tela de revisão/edição de categorias importadas
- [ ] Migração `valor String → Decimal`

### Fase 6 – Retenção Core
- [ ] Net worth tracker (contas + investimentos)
- [ ] Detecção de assinaturas recorrentes
- [ ] Forecasting simples ("você fica no vermelho em X meses")
- [ ] Exportação PDF/CSV avançada
- [ ] TanStack Query para cache client-side

### Fase 7 – Monetização
- [ ] Definir tiers (free: manual / premium: Open Finance + IA + multi-conta)
- [ ] Stripe checkout
- [ ] Feature flags (PostHog ou Unleash)

### Fase 8 – Growth & Confiança
- [ ] Analytics de retenção (PostHog)
- [ ] Onboarding 3 passos (conectar banco → 1ª transação → meta)
- [ ] Referral program
- [ ] ASO (App Store/Play Store) + Capacitor build
- [ ] Rate limiting (Upstash) + Sentry

---

## Checklist "profissional React/TI" para este projeto
- [ ] Nunca usar `@prisma/client` direto — sempre `generated/prisma`
- [ ] Todo valor monetário: `Decimal`, nunca `String`/`number` flutuante
- [ ] Toda API route: validar `userId` da sessão antes de qualquer query
- [ ] Componentes de página: separar estado local (UI) de estado global (dados)
- [ ] Testar migrations em branch isolada antes de aplicar em produção
- [ ] Uma tarefa por vez — avançar apenas com "próximo"

---

## Fluxo de Trabalho
1. Uma tarefa por vez, sem avançar sem validação ("próximo").
2. Commits granulares.
3. Testes de integração revisados antes de merge.

**Próximo passo:** implementar PWA (manifest + service worker).