"use client";

import { useState, useEffect } from "react";
import { CATEGORIAS_GASTO, TIPOS_ENTRADA } from "@/data/categorias";
import type { Transacao } from "@/types";
import { DndContext, closestCenter, PointerSensor, useSensor, useSensors, type DragEndEvent } from "@dnd-kit/core";
import { SortableContext, arrayMove, rectSortingStrategy } from "@dnd-kit/sortable";
import SortableWidget from "@/components/sortable-widget";
import { Pencil, Check } from "lucide-react";

type Props = { transacoes: Transacao[]; setTransacoes: React.Dispatch<React.SetStateAction<Transacao[]>> };

export default function Dashboard({ transacoes, setTransacoes }: Props) {
  const [modal, setModal] = useState<"gasto" | "ganho" | null>(null);
  const [valor, setValor] = useState("");
  const [categoria, setCategoria] = useState("");
  const [subtipo, setSubtipo] = useState("");
  const [editando, setEditando] = useState(false);
  const [ordem, setOrdem] = useState<string[]>([
    "saldo", "receitas", "gastos", "poupanca", "alerta", "ultimos-lancamentos", "botoes-acao",
  ]);

  useEffect(() => {
    fetch("/api/layout")
      .then(res => res.json())
      .then(data => setOrdem(data.ordem));
  }, []);

  const salvarOrdem = async (novaOrdem: string[]) => {
    await fetch("/api/layout", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ordem: novaOrdem }),
    });
  };

  const sensors = useSensors(useSensor(PointerSensor, { activationConstraint: { distance: 5 } }));

const aoTerminarArrastar = (event: DragEndEvent) => {
    const { active, over } = event;
    if (over && active.id !== over.id) {
      setOrdem(prev => {
        const antigo = prev.indexOf(active.id as string);
        const novo = prev.indexOf(over.id as string);
        const novaOrdem = arrayMove(prev, antigo, novo);
        salvarOrdem(novaOrdem); // 👈 salva no banco assim que reordena
        return novaOrdem;
      });
    }
  };

  const isGanho = modal === "ganho";

  const salvar = async () => {
    const descricao = isGanho ? subtipo : `${categoria} - ${subtipo}`;
    if (!subtipo || !valor) return;

    const nova = {
      nome: descricao,
      data: new Date().toISOString(),
      tipo: isGanho ? "Receita" : "Variável",
      valor: isGanho ? +valor : -Math.abs(+valor),
      icone: isGanho ? "💰" : "🏷️",
      cor: isGanho ? "#EAF3DE" : "#FCEBEB",
    };

    const res = await fetch("/api/transacoes", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(nova),
    });
    const salva = await res.json();

    setTransacoes(prev => [salva, ...prev]);
    setCategoria("");
    setSubtipo("");
    setValor("");
    setModal(null);
  };

  const receitas = transacoes.filter(t => t.valor > 0).reduce((s, t) => s + t.valor, 0);
  const gastos = transacoes.filter(t => t.valor < 0).reduce((s, t) => s + Math.abs(t.valor), 0);
  const saldo = receitas - gastos;
  const poupanca = receitas > 0 ? Math.round((saldo / receitas) * 100) : 0;

  // ===== NOVO: catálogo de widgets =====
  const larguraClasse: Record<"full" | "half", string> = {
    full: "col-span-2 lg:col-span-4",
    half: "col-span-1 lg:col-span-2",
  };

  const widgets: { id: string; tamanho: "full" | "half"; conteudo: React.ReactNode }[] = [
    {
      id: "saldo",
      tamanho: "half",
      conteudo: (
        <div className="rounded-xl p-4 h-full" style={{ background: "var(--color-background-secondary)", border: "0.5px solid var(--color-border-tertiary)" }}>
          <p className="mb-1" style={{ fontSize: "var(--font-size-xs)", color: "var(--color-text-tertiary)" }}>Saldo</p>
          <p className="font-semibold" style={{ fontSize: "var(--font-size-md)", color: "#1D9E75" }}>R$ {saldo.toFixed(2)}</p>
        </div>
      ),
    },
    {
      id: "receitas",
      tamanho: "half",
      conteudo: (
        <div className="rounded-xl p-4 h-full" style={{ background: "var(--color-background-secondary)", border: "0.5px solid var(--color-border-tertiary)" }}>
          <p className="mb-1" style={{ fontSize: "var(--font-size-xs)", color: "var(--color-text-tertiary)" }}>Receitas</p>
          <p className="font-semibold" style={{ fontSize: "var(--font-size-md)", color: "var(--color-text-primary)" }}>R$ {receitas.toFixed(2)}</p>
        </div>
      ),
    },
    {
      id: "gastos",
      tamanho: "half",
      conteudo: (
        <div className="rounded-xl p-4 h-full" style={{ background: "var(--color-background-secondary)", border: "0.5px solid var(--color-border-tertiary)" }}>
          <p className="mb-1" style={{ fontSize: "var(--font-size-xs)", color: "var(--color-text-tertiary)" }}>Gastos</p>
          <p className="font-semibold" style={{ fontSize: "var(--font-size-md)", color: "#E24B4A" }}>R$ {gastos.toFixed(2)}</p>
        </div>
      ),
    },
    {
      id: "poupanca",
      tamanho: "half",
      conteudo: (
        <div className="rounded-xl p-4 h-full" style={{ background: "var(--color-background-secondary)", border: "0.5px solid var(--color-border-tertiary)" }}>
          <p className="mb-1" style={{ fontSize: "var(--font-size-xs)", color: "var(--color-text-tertiary)" }}>Poupança</p>
          <p className="font-semibold" style={{ fontSize: "var(--font-size-md)", color: "var(--color-text-primary)" }}>{poupanca}%</p>
        </div>
      ),
    },
    {
      id: "alerta",
      tamanho: "full",
      conteudo: (
        <div className="bg-orange-50 border border-orange-300 rounded-xl p-3 flex gap-3">
          <span style={{ fontSize: "var(--font-size-lg)" }}>⚠️</span>
          <div>
            <p className="font-semibold text-orange-900 mb-1" style={{ fontSize: "var(--font-size-xs)" }}>Alerta semanal</p>
            <p className="text-orange-800" style={{ fontSize: "var(--font-size-xs)" }}>
              Você gastou R$ 480 esta semana — 68% do limite de R$ 700.
            </p>
          </div>
        </div>
      ),
    },
    {
      id: "ultimos-lancamentos",
      tamanho: "full",
      conteudo: (
        <div className="rounded-xl p-4" style={{ background: "var(--color-background-primary)", border: "0.5px solid var(--color-border-tertiary)" }}>
          <p className="font-semibold mb-3" style={{ fontSize: "var(--font-size-sm)", color: "var(--color-text-primary)" }}>🕐 Últimos lançamentos</p>
          {transacoes.slice(0, 3).map((t, i) => (
            <div key={t.id} className="flex items-center gap-3 py-2"
              style={{ borderBottom: i < 2 ? "0.5px solid var(--color-border-tertiary)" : "none" }}>
              <div className="w-8 h-8 rounded-lg flex items-center justify-center"
                style={{ background: t.cor, fontSize: "var(--font-size-sm)" }}>
                {t.icone}
              </div>
              <div className="flex-1">
                <p className="font-medium" style={{ fontSize: "var(--font-size-xs)", color: "var(--color-text-primary)" }}>{t.nome}</p>
                <p style={{ fontSize: "var(--font-size-xs)", color: "var(--color-text-tertiary)" }}>{t.data}</p>
              </div>
              <p className="font-semibold" style={{ fontSize: "var(--font-size-xs)", color: t.valor >= 0 ? "#1D9E75" : "#E24B4A" }}>
                {t.valor >= 0 ? "+" : "-"} R$ {Math.abs(t.valor)}
              </p>
            </div>
          ))}
        </div>
      ),
    },
    {
      id: "botoes-acao",
      tamanho: "full",
      conteudo: (
        <div className="flex gap-2">
          <button onClick={() => setModal("gasto")}
            className="flex-1 py-2.5 rounded-xl font-semibold cursor-pointer"
            style={{ fontSize: "var(--font-size-xs)", border: "0.5px solid #F09595", background: "#FCEBEB", color: "#791F1F" }}>
            ➖ Add gasto
          </button>
          <button onClick={() => setModal("ganho")}
            className="flex-1 py-2.5 rounded-xl font-semibold cursor-pointer"
            style={{ fontSize: "var(--font-size-xs)", border: "0.5px solid #97C459", background: "#EAF3DE", color: "#27500A" }}>
            ➕ Add ganho
          </button>
        </div>
      ),
    },
  ];
  // ===== FIM do catálogo de widgets =====

  return (
    <div className="flex flex-col gap-4">

      {/* NOVO: grid único renderizando todos os widgets do array acima */}
      <div className="flex justify-end">
        <button
          onClick={() => setEditando(!editando)}
          className="flex items-center gap-1 px-3 py-1.5 rounded-lg cursor-pointer border-none"
          style={{ fontSize: "var(--font-size-xs)", background: "var(--color-background-secondary)", color: "var(--color-text-primary)" }}
        >
          {editando ? <Check size={14} /> : <Pencil size={14} />}
          {editando ? "Concluir" : "Editar"}
        </button>
      </div>

      <DndContext sensors={sensors} collisionDetection={closestCenter} onDragEnd={aoTerminarArrastar}>
        <SortableContext items={ordem} strategy={rectSortingStrategy}>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
            {ordem.map(id => {
              const w = widgets.find(w => w.id === id)!;
              return (
                <div key={id} className={larguraClasse[w.tamanho]}>
                  <SortableWidget id={id} editando={editando}>
                    {w.conteudo}
                  </SortableWidget>
                </div>
              );
            })}
          </div>
        </SortableContext>
      </DndContext>

      {/* Modal — EXATAMENTE igual ao seu original, sem nenhuma mudança */}
      {modal && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
          <div className="rounded-xl p-6 w-[90%] max-w-xs flex flex-col gap-4"
            style={{ background: "var(--color-background-primary)", border: "0.5px solid var(--color-border-tertiary)" }}>
            <p className="font-semibold" style={{ fontSize: "var(--font-size-sm)", color: "var(--color-text-primary)" }}>
              {isGanho ? "➕ Add ganho" : "➖ Add gasto"}
            </p>

            {isGanho ? (
              <div className="flex flex-col gap-1">
                <p style={{ fontSize: "var(--font-size-xs)", color: "var(--color-text-tertiary)" }}>Tipo de entrada</p>
                <select value={subtipo} onChange={e => setSubtipo(e.target.value)}
                  className="rounded-lg px-3 py-2"
                  style={{ fontSize: "var(--font-size-xs)", background: "var(--color-background-secondary)", border: "0.5px solid var(--color-border-secondary)", color: "var(--color-text-primary)" }}>
                  <option value="">Selecione...</option>
                  {TIPOS_ENTRADA.map(tipo => <option key={tipo} value={tipo}>{tipo}</option>)}
                </select>
              </div>
            ) : (
              <div className="flex flex-col gap-1">
                <p style={{ fontSize: "var(--font-size-xs)", color: "var(--color-text-tertiary)" }}>Categoria</p>
                <select value={categoria} onChange={e => { setCategoria(e.target.value); setSubtipo(""); }}
                  className="rounded-lg px-3 py-2"
                  style={{ fontSize: "var(--font-size-xs)", background: "var(--color-background-secondary)", border: "0.5px solid var(--color-border-secondary)", color: "var(--color-text-primary)" }}>
                  <option value="">Selecione...</option>
                  {Object.keys(CATEGORIAS_GASTO).map(cat => <option key={cat} value={cat}>{cat}</option>)}
                </select>
                {categoria && (
                  <div className="flex flex-col gap-1 mt-2">
                    <p style={{ fontSize: "var(--font-size-xs)", color: "var(--color-text-tertiary)" }}>Tipo de gasto</p>
                    <select value={subtipo} onChange={e => setSubtipo(e.target.value)}
                      className="rounded-lg px-3 py-2"
                      style={{ fontSize: "var(--font-size-xs)", background: "var(--color-background-secondary)", border: "0.5px solid var(--color-border-secondary)", color: "var(--color-text-primary)" }}>
                      <option value="">Selecione...</option>
                      {CATEGORIAS_GASTO[categoria].map(tipo => <option key={tipo} value={tipo}>{tipo}</option>)}
                    </select>
                  </div>
                )}
              </div>
            )}

            <div className="flex flex-col gap-1">
              <p style={{ fontSize: "var(--font-size-xs)", color: "var(--color-text-tertiary)" }}>Valor (R$)</p>
              <input type="number" value={valor} onChange={e => setValor(e.target.value)} placeholder="0,00"
                className="rounded-lg px-3 py-2"
                style={{ fontSize: "var(--font-size-xs)", background: "var(--color-background-secondary)", border: "0.5px solid var(--color-border-secondary)", color: "var(--color-text-primary)" }} />
            </div>

            <div className="flex gap-2">
              <button onClick={() => setModal(null)} className="flex-1 py-2 rounded-lg cursor-pointer"
                style={{ fontSize: "var(--font-size-xs)", color: "var(--color-text-secondary)", border: "0.5px solid var(--color-border-secondary)", background: "transparent" }}>
                Cancelar
              </button>
              <button onClick={salvar} className="flex-1 py-2 rounded-lg font-semibold text-white cursor-pointer border-none"
                style={{ background: isGanho ? "#1D9E75" : "#E24B4A", fontSize: "var(--font-size-xs)" }}>
                Salvar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}