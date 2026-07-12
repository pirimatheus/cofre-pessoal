"use client";

export default function LoadingOverlay({ show }: { show: boolean }) {
  if (!show) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center transition-opacity duration-300"
      style={{
        background: "color-mix(in srgb, var(--color-background-primary) 55%, transparent)",
        backdropFilter: "blur(6px)",
      }}
    >
      <svg width="56" height="56" viewBox="0 0 56 56" style={{ animation: "spin 1.1s linear infinite" }}>
        <defs>
          <linearGradient id="ringGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="var(--color-accent)" stopOpacity="0" />
            <stop offset="100%" stopColor="var(--color-accent)" stopOpacity="1" />
          </linearGradient>
        </defs>
        <circle
          cx="28" cy="28" r="23"
          fill="none"
          stroke="var(--color-border-primary)"
          strokeWidth="3"
          opacity="0.4"
        />
        <circle
          cx="28" cy="28" r="23"
          fill="none"
          stroke="url(#ringGradient)"
          strokeWidth="3"
          strokeLinecap="round"
          strokeDasharray="100 144"
        />
      </svg>

      <style>{`
        @keyframes spin { to { transform: rotate(360deg); } }
        @media (prefers-reduced-motion: reduce) {
          svg { animation: none !important; }
        }
      `}</style>
    </div>
  );
}