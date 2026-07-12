import type { ReactNode } from "react";

type Props = {
  titulo: string;
  acao?: ReactNode;
  children: ReactNode;
  style?: React.CSSProperties;
};

export default function PageCard({ titulo, acao, children, style }: Props) {
  return (
    <div
      className="p-4"
      style={{
        background: "var(--widget-background)",
        border: "var(--widget-border)",
        borderRadius: "var(--widget-radius)",
        boxShadow: "var(--widget-shadow)",
        ...style
      }}
    >
      <div className="flex items-center justify-between mb-3">
        <p
          className="font-semibold"
          style={{ fontSize: "var(--font-size-sm)", color: "var(--color-text-primary)" }}
        >
          {titulo}
        </p>
        {acao}
      </div>

      {children}
    </div>
  );
}