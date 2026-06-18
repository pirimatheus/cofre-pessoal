export default function Topbar() {
  return (
    <header className="bg-white border-b border-gray-200 px-5 py-3 flex items-center justify-between">
      <div>
        <h1 className="text-sm font-semibold text-gray-900">
          🛡️ Cofre Pessoal
        </h1>
        <span className="text-xs text-gray-400">junho 2026</span>
      </div>

      <span className="bg-indigo-100 text-indigo-700 text-xs font-semibold px-3 py-1 rounded-full">
        ⭐ Nível Poupador
      </span>
    </header>
  );
}