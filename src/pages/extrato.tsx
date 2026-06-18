const transacoes = [
  { id: 1, nome: "Salário",      data: "01 jun", tipo: "Receita",  valor: 5300,  icone: "🏦", bg: "bg-green-100" },
  { id: 2, nome: "Freelance",    data: "16 jun", tipo: "Receita",  valor: 1200,  icone: "💻", bg: "bg-blue-100" },
  { id: 3, nome: "Aluguel",      data: "05 jun", tipo: "Fixo",     valor: -1200, icone: "🏠", bg: "bg-red-100" },
  { id: 4, nome: "Supermercado", data: "17 jun", tipo: "Variável", valor: -187,  icone: "🛒", bg: "bg-green-100" },
  { id: 5, nome: "Combustível",  data: "15 jun", tipo: "Variável", valor: -95,   icone: "🚗", bg: "bg-orange-100" },
  { id: 6, nome: "Internet",     data: "10 jun", tipo: "Fixo",     valor: -120,  icone: "📶", bg: "bg-red-100" },
];

export default function Extrato() {
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-4">
      <p className="text-sm font-semibold text-gray-900 mb-3">📋 Extrato — junho 2026</p>

      <div className="flex flex-col gap-3">
        {transacoes.map(t => (
          <div key={t.id} className="flex items-center gap-3">
            <div className={`w-8 h-8 rounded-lg ${t.bg} flex items-center justify-center text-sm`}>
              {t.icone}
            </div>
            <div className="flex-1">
              <p className="text-xs font-medium text-gray-900">{t.nome}</p>
              <p className="text-xs text-gray-400">{t.data}</p>
            </div>
            <p className={`text-xs font-semibold ${t.valor > 0 ? "text-green-600" : "text-red-500"}`}>
              {t.valor > 0 ? "+" : "-"} R$ {Math.abs(t.valor)}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}