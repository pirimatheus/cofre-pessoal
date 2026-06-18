import { useState } from "react";

// ─── DADOS MOCK ────────────────────────────────────────────────────────────────
const TRANSACOES_MOCK = [
  { id: 1, nome: "Salário",          data: "01 jun", tipo: "Receita",  valor: 5300,  icone: "🏦", cor: "#EAF3DE", corIcone: "#3B6D11" },
  { id: 2, nome: "Freelance design", data: "16 jun", tipo: "Receita",  valor: 1200,  icone: "💻", cor: "#E6F1FB", corIcone: "#185FA5" },
  { id: 3, nome: "Aluguel",          data: "05 jun", tipo: "Fixo",     valor: -1200, icone: "🏠", cor: "#FCEBEB", corIcone: "#A32D2D" },
  { id: 4, nome: "Supermercado",     data: "17 jun", tipo: "Variável", valor: -187,  icone: "🛒", cor: "#EAF3DE", corIcone: "#3B6D11" },
  { id: 5, nome: "Combustível",      data: "15 jun", tipo: "Variável", valor: -95,   icone: "🚗", cor: "#FAEEDA", corIcone: "#854F0B" },
  { id: 6, nome: "Internet",         data: "10 jun", tipo: "Fixo",     valor: -120,  icone: "📶", cor: "#FCEBEB", corIcone: "#A32D2D" },
  { id: 7, nome: "Restaurante",      data: "13 jun", tipo: "Variável", valor: -68,   icone: "🍕", cor: "#FAEEDA", corIcone: "#854F0B" },
  { id: 8, nome: "Assinaturas",      data: "08 jun", tipo: "Fixo",     valor: -280,  icone: "📱", cor: "#FCEBEB", corIcone: "#A32D2D" },
];

const ORCAMENTO_MOCK = [
  { categoria: "Moradia",              gasto: 1200, limite: 1300, cor: "#378ADD" },
  { categoria: "Alimentação",          gasto: 650,  limite: 800,  cor: "#1D9E75" },
  { categoria: "Transporte",           gasto: 310,  limite: 350,  cor: "#EF9F27" },
  { categoria: "Lazer",                gasto: 60,   limite: 200,  cor: "#7F77DD" },
  { categoria: "Internet/Assinaturas", gasto: 280,  limite: 150,  cor: "#E24B4A" },
];

const METAS_MOCK = [
  { id: 1, nome: "Viagem de férias",      atual: 3100, total: 5000,  icone: "✈️", prazo: "dez 2026" },
  { id: 2, nome: "Novo PC",               atual: 1230, total: 3000,  icone: "💻", prazo: "set 2026" },
  { id: 3, nome: "Reserva de emergência", atual: 1800, total: 10000, icone: "🏛️", prazo: "dez 2027" },
];

const ALERTAS_MOCK = [
  { id: 1, nome: "Limite semanal",          desc: "Avisa ao atingir 70% de R$ 700",  ativo: true,  icone: "⚠️" },
  { id: 2, nome: "Gasto acima de R$ 200",   desc: "Notifica qualquer lançamento alto", ativo: true,  icone: "💳" },
  { id: 3, nome: "Relatório mensal",         desc: "Todo dia 1º do mês",               ativo: true,  icone: "📊" },
  { id: 4, nome: "Saldo mínimo R$ 1.000",   desc: "Alerta se saldo cair abaixo",       ativo: false, icone: "🔔" },
  { id: 5, nome: "Meta em risco",            desc: "Ritmo insuficiente para bater meta", ativo: false, icone: "🎯" },
];

// ─── HELPERS ──────────────────────────────────────────────────────────────────
const fmt = (v) =>
  new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" }).format(Math.abs(v));

const pct = (a, b) => Math.min(100, Math.round((a / b) * 100));

const pillStyle = (tipo) => {
  const map = {
    Receita:  { bg: "#E6F1FB", color: "#0C447C" },
    Fixo:     { bg: "#FCEBEB", color: "#791F1F" },
    Variável: { bg: "#FAEEDA", color: "#633806" },
  };
  return map[tipo] || { bg: "#F0F0F0", color: "#444" };
};

// ─── COMPONENTES PEQUENOS ─────────────────────────────────────────────────────
function Pill({ tipo }) {
  const s = pillStyle(tipo);
  return (
    <span style={{
      background: s.bg, color: s.color,
      fontSize: 11, fontWeight: 600,
      padding: "2px 8px", borderRadius: 20,
      display: "inline-block", marginTop: 2,
    }}>
      {tipo}
    </span>
  );
}

function Toggle({ ativo, onChange }) {
  return (
    <div
      onClick={onChange}
      style={{
        width: 36, height: 20, borderRadius: 10, cursor: "pointer",
        background: ativo ? "#1D9E75" : "#D0D0D0",
        position: "relative", transition: "background .2s", flexShrink: 0,
      }}
    >
      <div style={{
        width: 14, height: 14, borderRadius: "50%", background: "#fff",
        position: "absolute", top: 3,
        left: ativo ? 18 : 3, transition: "left .2s",
      }} />
    </div>
  );
}

// ─── MODAL ADD TRANSAÇÃO ──────────────────────────────────────────────────────
function ModalTransacao({ tipo, onClose, onSalvar }) {
  const [nome, setNome] = useState("");
  const [valor, setValor] = useState("");
  const [categoria, setCategoria] = useState("Variável");

  const isGanho = tipo === "ganho";

  return (
    <div style={{
      position: "absolute", inset: 0, background: "rgba(0,0,0,0.4)",
      display: "flex", alignItems: "center", justifyContent: "center",
      zIndex: 100, borderRadius: 16,
    }}>
      <div style={{
        background: "var(--color-background-primary)",
        border: "0.5px solid var(--color-border-tertiary)",
        borderRadius: 14, padding: 24, width: 280,
      }}>
        <div style={{ fontSize: 15, fontWeight: 600, color: "var(--color-text-primary)", marginBottom: 16 }}>
          {isGanho ? "➕ Add ganho" : "➖ Add gasto"}
        </div>

        <div style={{ marginBottom: 12 }}>
          <div style={{ fontSize: 12, color: "var(--color-text-secondary)", marginBottom: 4 }}>Descrição</div>
          <input
            value={nome}
            onChange={e => setNome(e.target.value)}
            placeholder="Ex: Salário, Mercado..."
            style={{
              width: "100%", padding: "8px 10px", borderRadius: 8,
              border: "0.5px solid var(--color-border-secondary)",
              background: "var(--color-background-secondary)",
              color: "var(--color-text-primary)", fontSize: 13,
            }}
          />
        </div>

        <div style={{ marginBottom: 12 }}>
          <div style={{ fontSize: 12, color: "var(--color-text-secondary)", marginBottom: 4 }}>Valor (R$)</div>
          <input
            type="number"
            value={valor}
            onChange={e => setValor(e.target.value)}
            placeholder="0,00"
            style={{
              width: "100%", padding: "8px 10px", borderRadius: 8,
              border: "0.5px solid var(--color-border-secondary)",
              background: "var(--color-background-secondary)",
              color: "var(--color-text-primary)", fontSize: 13,
            }}
          />
        </div>

        {!isGanho && (
          <div style={{ marginBottom: 16 }}>
            <div style={{ fontSize: 12, color: "var(--color-text-secondary)", marginBottom: 4 }}>Categoria</div>
            <div style={{ display: "flex", gap: 6 }}>
              {["Fixo", "Variável"].map(c => (
                <button
                  key={c}
                  onClick={() => setCategoria(c)}
                  style={{
                    padding: "6px 12px", borderRadius: 20, fontSize: 12, cursor: "pointer",
                    border: "0.5px solid var(--color-border-secondary)",
                    background: categoria === c ? "var(--color-background-tertiary)" : "transparent",
                    color: "var(--color-text-primary)", fontWeight: categoria === c ? 600 : 400,
                  }}
                >{c}</button>
              ))}
            </div>
          </div>
        )}

        <div style={{ display: "flex", gap: 8 }}>
          <button
            onClick={onClose}
            style={{
              flex: 1, padding: "9px 0", borderRadius: 8, fontSize: 13, cursor: "pointer",
              border: "0.5px solid var(--color-border-secondary)",
              background: "transparent", color: "var(--color-text-secondary)",
            }}
          >Cancelar</button>
          <button
            onClick={() => {
              if (!nome || !valor) return;
              onSalvar({
                id: Date.now(),
                nome, data: "agora",
                tipo: isGanho ? "Receita" : categoria,
                valor: isGanho ? +valor : -Math.abs(+valor),
                icone: isGanho ? "💰" : "🏷️",
                cor: isGanho ? "#EAF3DE" : "#FCEBEB",
              });
              onClose();
            }}
            style={{
              flex: 1, padding: "9px 0", borderRadius: 8, fontSize: 13, cursor: "pointer",
              border: "none",
              background: isGanho ? "#1D9E75" : "#E24B4A",
              color: "#fff", fontWeight: 600,
            }}
          >Salvar</button>
        </div>
      </div>
    </div>
  );
}

// ─── TABS ─────────────────────────────────────────────────────────────────────
function Dashboard({ transacoes, onAddGasto, onAddGanho }) {
  const receitas = transacoes.filter(t => t.valor > 0).reduce((s, t) => s + t.valor, 0);
  const gastos   = transacoes.filter(t => t.valor < 0).reduce((s, t) => s + t.valor, 0);
  const saldo    = receitas + gastos;
  const poupanca = receitas > 0 ? Math.round((saldo / receitas) * 100) : 0;
  const ultimos  = [...transacoes].slice(0, 3);

  return (
    <div style={{ padding: 16, paddingBottom: 90, position: "relative" }}>
      {/* Métricas */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 10, marginBottom: 16 }}>
        {[
          { label: "Saldo",    valor: fmt(saldo),    cor: saldo >= 0 ? "#1D9E75" : "#E24B4A" },
          { label: "Receitas", valor: fmt(receitas), cor: "var(--color-text-primary)" },
          { label: "Gastos",   valor: fmt(gastos),   cor: "#E24B4A" },
          { label: "Poupança", valor: poupanca + "%", cor: "var(--color-text-primary)" },
        ].map(m => (
          <div key={m.label} style={{
            background: "var(--color-background-secondary)",
            borderRadius: 10, padding: 14,
          }}>
            <div style={{ fontSize: 12, color: "var(--color-text-secondary)", marginBottom: 6 }}>{m.label}</div>
            <div style={{ fontSize: 20, fontWeight: 600, color: m.cor }}>{m.valor}</div>
          </div>
        ))}
      </div>

      {/* Alerta */}
      <div style={{
        background: "#FAEEDA", border: "0.5px solid #EF9F27",
        borderRadius: 10, padding: "12px 14px",
        display: "flex", gap: 10, marginBottom: 14,
      }}>
        <span style={{ fontSize: 18, flexShrink: 0 }}>⚠️</span>
        <div style={{ fontSize: 13, color: "#412402" }}>
          <div style={{ fontWeight: 600, marginBottom: 2 }}>Alerta semanal</div>
          Você gastou R$ 480 esta semana — 68% do limite de R$ 700.
        </div>
      </div>

      {/* Últimos lançamentos */}
      <div style={{
        background: "var(--color-background-primary)",
        border: "0.5px solid var(--color-border-tertiary)",
        borderRadius: 12, padding: 16,
      }}>
        <div style={{ fontSize: 14, fontWeight: 600, color: "var(--color-text-primary)", marginBottom: 12 }}>
          🕐 Últimos lançamentos
        </div>
        {ultimos.map((t, i) => (
          <div key={t.id} style={{
            display: "flex", alignItems: "center", gap: 12,
            padding: "8px 0",
            borderBottom: i < ultimos.length - 1 ? "0.5px solid var(--color-border-tertiary)" : "none",
          }}>
            <div style={{
              width: 34, height: 34, borderRadius: 8,
              background: t.cor, display: "flex", alignItems: "center",
              justifyContent: "center", fontSize: 16, flexShrink: 0,
            }}>{t.icone}</div>
            <div style={{ flex: 1, minWidth: 0 }}>
              <span style={{ fontSize: 13, fontWeight: 500, color: "var(--color-text-primary)" }}>{t.nome}</span>
              <span style={{ fontSize: 11, color: "var(--color-text-tertiary)", marginLeft: 6 }}>{t.data}</span>
              <Pill tipo={t.tipo} />
            </div>
            <div style={{ fontSize: 13, fontWeight: 600, color: t.valor >= 0 ? "#1D9E75" : "#E24B4A", flexShrink: 0 }}>
              {t.valor >= 0 ? "+" : "-"} {fmt(t.valor)}
            </div>
          </div>
        ))}
      </div>

      {/* FABs */}
      <div style={{ position: "absolute", bottom: 20, right: 16, display: "flex", flexDirection: "column", gap: 8, alignItems: "flex-end" }}>
        <button onClick={onAddGasto} style={{
          display: "flex", alignItems: "center", gap: 8,
          padding: "9px 18px", borderRadius: 20, fontSize: 13, fontWeight: 600,
          cursor: "pointer", border: "0.5px solid #F09595",
          background: "#FCEBEB", color: "#791F1F",
        }}>➖ Add gasto</button>
        <button onClick={onAddGanho} style={{
          display: "flex", alignItems: "center", gap: 8,
          padding: "9px 18px", borderRadius: 20, fontSize: 13, fontWeight: 600,
          cursor: "pointer", border: "0.5px solid #97C459",
          background: "#EAF3DE", color: "#27500A",
        }}>➕ Add ganho</button>
      </div>
    </div>
  );
}

function Extrato({ transacoes }) {
  return (
    <div style={{ padding: 16 }}>
      <div style={{
        background: "var(--color-background-primary)",
        border: "0.5px solid var(--color-border-tertiary)",
        borderRadius: 12, padding: 16,
      }}>
        <div style={{ fontSize: 14, fontWeight: 600, color: "var(--color-text-primary)", marginBottom: 12 }}>
          📋 Extrato — junho 2026
        </div>
        {transacoes.map((t, i) => (
          <div key={t.id} style={{
            display: "flex", alignItems: "center", gap: 10,
            padding: "7px 0",
            borderBottom: i < transacoes.length - 1 ? "0.5px solid var(--color-border-tertiary)" : "none",
          }}>
            <div style={{
              width: 30, height: 30, borderRadius: 8,
              background: t.cor, display: "flex", alignItems: "center",
              justifyContent: "center", fontSize: 14, flexShrink: 0,
            }}>{t.icone}</div>
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 6, flexWrap: "wrap" }}>
                <span style={{ fontSize: 13, fontWeight: 500, color: "var(--color-text-primary)" }}>{t.nome}</span>
                <span style={{ fontSize: 11, color: "var(--color-text-tertiary)" }}>{t.data}</span>
                <Pill tipo={t.tipo} />
              </div>
            </div>
            <div style={{ fontSize: 13, fontWeight: 600, color: t.valor >= 0 ? "#1D9E75" : "#E24B4A", flexShrink: 0 }}>
              {t.valor >= 0 ? "+" : "-"}{fmt(t.valor)}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function Orcamento() {
  const [mostrarRebalancear, setMostrarRebalancear] = useState(false);

  return (
    <div style={{ padding: 16 }}>
      <div style={{
        background: "var(--color-background-primary)",
        border: "0.5px solid var(--color-border-tertiary)",
        borderRadius: 12, padding: 16, marginBottom: 12,
      }}>
        <div style={{ fontSize: 14, fontWeight: 600, color: "var(--color-text-primary)", marginBottom: 14 }}>
          📊 Orçamento mensal
        </div>
        {ORCAMENTO_MOCK.map(o => {
          const p = pct(o.gasto, o.limite);
          const estourou = o.gasto > o.limite;
          return (
            <div key={o.categoria} style={{ marginBottom: 14 }}>
              <div style={{ display: "flex", justifyContent: "space-between", fontSize: 12, marginBottom: 4 }}>
                <span style={{ color: estourou ? "#E24B4A" : "var(--color-text-secondary)", fontWeight: estourou ? 600 : 400 }}>
                  {o.categoria}
                </span>
                <span style={{ color: estourou ? "#E24B4A" : "var(--color-text-secondary)" }}>
                  {fmt(o.gasto)} / {fmt(o.limite)}
                </span>
              </div>
              <div style={{ height: 8, background: "var(--color-background-secondary)", borderRadius: 4, overflow: "hidden" }}>
                <div style={{ width: p + "%", height: "100%", background: o.cor, borderRadius: 4, transition: "width .3s" }} />
              </div>
            </div>
          );
        })}
      </div>

      <button
        onClick={() => setMostrarRebalancear(!mostrarRebalancear)}
        style={{
          width: "100%", padding: 10, fontSize: 13, fontWeight: 500,
          borderRadius: 10, cursor: "pointer",
          border: "0.5px solid var(--color-border-secondary)",
          background: "var(--color-background-secondary)",
          color: "var(--color-text-primary)",
        }}
      >
        {mostrarRebalancear ? "▲ Fechar rebalanceamento" : "⚖️ Rebalancear orçamento"}
      </button>

      {mostrarRebalancear && (
        <div style={{
          marginTop: 12, background: "#EAF3DE",
          border: "0.5px solid #97C459", borderRadius: 12, padding: 16,
        }}>
          <div style={{ fontSize: 13, fontWeight: 600, color: "#1D4F0A", marginBottom: 10 }}>
            💡 Sugestão de rebalanceamento
          </div>
          {[
            { cat: "Internet/Assinaturas", acao: "Reduzir para R$ 150", urgencia: "alta", cor: "#E24B4A" },
            { cat: "Lazer",               acao: "Pode aumentar para R$ 250", urgencia: "ok",  cor: "#1D9E75" },
            { cat: "Moradia",             acao: "Próximo do limite — atenção", urgencia: "média", cor: "#EF9F27" },
          ].map(s => (
            <div key={s.cat} style={{
              display: "flex", justifyContent: "space-between", alignItems: "center",
              padding: "8px 0",
              borderBottom: "0.5px solid #C5E09A",
            }}>
              <div>
                <div style={{ fontSize: 13, fontWeight: 500, color: "#1D4F0A" }}>{s.cat}</div>
                <div style={{ fontSize: 11, color: "#2D6A0A" }}>{s.acao}</div>
              </div>
              <span style={{
                fontSize: 11, fontWeight: 600, padding: "2px 8px",
                borderRadius: 20, background: "#fff", color: s.cor,
              }}>
                {s.urgencia}
              </span>
            </div>
          ))}
          <div style={{ fontSize: 12, color: "#2D6A0A", marginTop: 10 }}>
            Revisando assinaturas você libera R$ 130/mês → R$ 1.560/ano extras.
          </div>
        </div>
      )}
    </div>
  );
}

function Metas() {
  const [metaSelecionada, setMetaSelecionada] = useState(null);

  return (
    <div style={{ padding: 16 }}>
      <div style={{
        background: "var(--color-background-primary)",
        border: "0.5px solid var(--color-border-tertiary)",
        borderRadius: 12, padding: 16, marginBottom: 12,
      }}>
        <div style={{ fontSize: 14, fontWeight: 600, color: "var(--color-text-primary)", marginBottom: 12 }}>
          🎯 Metas financeiras
        </div>
        {METAS_MOCK.map(m => {
          const p = pct(m.atual, m.total);
          const corBarra = p >= 70 ? "#1D9E75" : p >= 40 ? "#EF9F27" : "#378ADD";
          const corPill  = p >= 70 ? { bg: "#EAF3DE", color: "#27500A" } : p >= 40 ? { bg: "#FAEEDA", color: "#633806" } : { bg: "#E6F1FB", color: "#0C447C" };
          return (
            <div key={m.id} style={{ marginBottom: 14 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 6 }}>
                <span style={{ fontSize: 20 }}>{m.icone}</span>
                <div style={{ flex: 1 }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <span style={{ fontSize: 13, fontWeight: 500, color: "var(--color-text-primary)" }}>{m.nome}</span>
                    <span style={{ fontSize: 11, fontWeight: 600, padding: "2px 8px", borderRadius: 20, background: corPill.bg, color: corPill.color }}>{p}%</span>
                  </div>
                  <div style={{ fontSize: 11, color: "var(--color-text-tertiary)" }}>
                    {fmt(m.atual)} de {fmt(m.total)} · prazo: {m.prazo}
                  </div>
                </div>
              </div>
              <div style={{ height: 6, background: "var(--color-background-secondary)", borderRadius: 3, overflow: "hidden" }}>
                <div style={{ width: p + "%", height: "100%", background: corBarra, borderRadius: 3 }} />
              </div>
              <button
                onClick={() => setMetaSelecionada(metaSelecionada === m.id ? null : m.id)}
                style={{
                  marginTop: 6, fontSize: 11, color: "var(--color-text-secondary)",
                  background: "none", border: "none", cursor: "pointer", padding: 0,
                }}
              >
                {metaSelecionada === m.id ? "▲ Fechar estratégia" : "▼ Ver estratégia"}
              </button>

              {metaSelecionada === m.id && (
                <div style={{
                  marginTop: 8, background: "#E6F1FB",
                  border: "0.5px solid #9CC5EE", borderRadius: 10, padding: 12,
                }}>
                  <div style={{ fontSize: 12, fontWeight: 600, color: "#0C447C", marginBottom: 6 }}>
                    📌 Estratégia para {m.nome}
                  </div>
                  <div style={{ fontSize: 12, color: "#1A4A7A", lineHeight: 1.6 }}>
                    · Faltam {fmt(m.total - m.atual)} para atingir a meta.<br />
                    · Guardando R$ {Math.ceil((m.total - m.atual) / 6)}/mês você chega no prazo.<br />
                    · Dica: direcione sobras do orçamento de Lazer para esta meta.
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

function Alertas() {
  const [alertas, setAlertas] = useState(ALERTAS_MOCK);

  const toggle = (id) => {
    setAlertas(prev => prev.map(a => a.id === id ? { ...a, ativo: !a.ativo } : a));
  };

  return (
    <div style={{ padding: 16 }}>
      <div style={{
        background: "#FAEEDA", border: "0.5px solid #EF9F27",
        borderRadius: 10, padding: "12px 14px",
        display: "flex", gap: 10, marginBottom: 14,
      }}>
        <span style={{ fontSize: 18 }}>⚠️</span>
        <div style={{ fontSize: 13, color: "#412402" }}>
          <div style={{ fontWeight: 600, marginBottom: 2 }}>Alerta ativo agora</div>
          Gasto semanal em 68% do limite — R$ 480 de R$ 700.
        </div>
      </div>

      <div style={{
        background: "var(--color-background-primary)",
        border: "0.5px solid var(--color-border-tertiary)",
        borderRadius: 12, padding: 16,
      }}>
        <div style={{ fontSize: 14, fontWeight: 600, color: "var(--color-text-primary)", marginBottom: 12 }}>
          🔔 Configurar alertas
        </div>
        {alertas.map((a, i) => (
          <div key={a.id} style={{
            display: "flex", alignItems: "center", gap: 12,
            padding: "10px 0",
            borderBottom: i < alertas.length - 1 ? "0.5px solid var(--color-border-tertiary)" : "none",
          }}>
            <div style={{
              width: 34, height: 34, borderRadius: 8,
              background: "var(--color-background-secondary)",
              display: "flex", alignItems: "center", justifyContent: "center", fontSize: 16, flexShrink: 0,
            }}>{a.icone}</div>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: 13, fontWeight: 500, color: "var(--color-text-primary)" }}>{a.nome}</div>
              <div style={{ fontSize: 11, color: "var(--color-text-tertiary)" }}>{a.desc}</div>
            </div>
            <Toggle ativo={a.ativo} onChange={() => toggle(a.id)} />
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── APP PRINCIPAL ────────────────────────────────────────────────────────────
const TABS = [
  { id: "dashboard", label: "Dashboard", icone: "🏠" },
  { id: "extrato",   label: "Extrato",   icone: "📋" },
  { id: "orcamento", label: "Orçamento", icone: "📊" },
  { id: "metas",     label: "Metas",     icone: "🎯" },
  { id: "alertas",   label: "Alertas",   icone: "🔔" },
];

export default function App() {
  const [aba, setAba]             = useState("dashboard");
  const [transacoes, setTransacoes] = useState(TRANSACOES_MOCK);
  const [modal, setModal]         = useState(null); // "gasto" | "ganho" | null

  const adicionarTransacao = (t) => {
    setTransacoes(prev => [t, ...prev]);
  };

  return (
    <div style={{
      background: "var(--color-background-tertiary)",
      borderRadius: 16, overflow: "hidden",
      fontFamily: "var(--font-sans)",
      position: "relative", minHeight: 580,
    }}>
      {/* TOPBAR */}
      <div style={{
        background: "var(--color-background-primary)",
        borderBottom: "0.5px solid var(--color-border-tertiary)",
        padding: "12px 20px",
        display: "flex", alignItems: "center", justifyContent: "space-between",
      }}>
        <div>
          <div style={{ fontSize: 15, fontWeight: 600, color: "var(--color-text-primary)" }}>
            🛡️ Cofre Pessoal
          </div>
          <div style={{ fontSize: 12, color: "var(--color-text-secondary)" }}>junho 2026</div>
        </div>
        <span style={{
          background: "#EEEDFE", color: "#3C3489",
          fontSize: 11, fontWeight: 600,
          padding: "3px 10px", borderRadius: 20,
        }}>⭐ Nível Poupador</span>
      </div>

      {/* NAV */}
      <div style={{
        display: "flex", gap: 4, padding: "10px 12px",
        background: "var(--color-background-primary)",
        borderBottom: "0.5px solid var(--color-border-tertiary)",
        overflowX: "auto",
      }}>
        {TABS.map(t => (
          <button
            key={t.id}
            onClick={() => setAba(t.id)}
            style={{
              padding: "6px 12px", borderRadius: 8, fontSize: 12,
              fontWeight: aba === t.id ? 600 : 400,
              cursor: "pointer", whiteSpace: "nowrap",
              border: "0.5px solid " + (aba === t.id ? "var(--color-border-secondary)" : "transparent"),
              background: aba === t.id ? "var(--color-background-secondary)" : "transparent",
              color: aba === t.id ? "var(--color-text-primary)" : "var(--color-text-secondary)",
              transition: "all .15s",
            }}
          >
            {t.icone} {t.label}
          </button>
        ))}
      </div>

      {/* CONTEÚDO */}
      {aba === "dashboard" && (
        <Dashboard
          transacoes={transacoes}
          onAddGasto={() => setModal("gasto")}
          onAddGanho={() => setModal("ganho")}
        />
      )}
      {aba === "extrato"   && <Extrato   transacoes={transacoes} />}
      {aba === "orcamento" && <Orcamento />}
      {aba === "metas"     && <Metas />}
      {aba === "alertas"   && <Alertas />}

      {/* MODAL */}
      {modal && (
        <ModalTransacao
          tipo={modal}
          onClose={() => setModal(null)}
          onSalvar={adicionarTransacao}
        />
      )}
    </div>
  );
}
