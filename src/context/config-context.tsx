"use client";

import { createContext, useContext, useState, useEffect } from "react";

type Tema = "claro" | "escuro";

type ConfigCtx = {
  tema: Tema; setTema: (t: Tema) => void;
  fonte: number; setFonte: (f: number) => void;
  fonteFamilia: string; setFonteFamilia: (f: string) => void;
};

const Ctx = createContext<ConfigCtx | null>(null);

export function ConfigProvider({ children }: { children: React.ReactNode }) {
  const [tema, setTema] = useState<Tema>("claro");
  const [fonte, setFonte] = useState<number>(13);
  const [fonteFamilia, setFonteFamilia] = useState("Inter");

  useEffect(() => {
    const t = localStorage.getItem("tema") as Tema | null;
    const f = localStorage.getItem("fonte");
    const ff = localStorage.getItem("fonteFamilia");
    if (t) setTema(t);
    if (f) setFonte(Number(f));
    if (ff) setFonteFamilia(ff);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", tema === "escuro");
    localStorage.setItem("tema", tema);
  }, [tema]);

  useEffect(() => {
    document.documentElement.style.setProperty("--font-size-base", `${fonte}px`);
    localStorage.setItem("fonte", String(fonte));
  }, [fonte]);

  useEffect(() => {
    document.documentElement.style.setProperty("--font-family", `'${fonteFamilia}', sans-serif`);
    localStorage.setItem("fonteFamilia", fonteFamilia);
  }, [fonteFamilia]);

  return (
    <Ctx.Provider value={{ tema, setTema, fonte, setFonte, fonteFamilia, setFonteFamilia }}>
      {children}
    </Ctx.Provider>
  );
}

export const useConfig = () => useContext(Ctx)!;