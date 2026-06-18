export default function Dashboard() {
  return (
    <div className="flex flex-col gap-4">

      {/* Métricas */}
      <div className="grid grid-cols-2 gap-3">
        <div className="bg-gray-50 rounded-xl p-4">
          <p className="text-xs text-gray-400 mb-1">Saldo</p>
          <p className="text-xl font-semibold text-green-600">R$ 4.650</p>
        </div>
        <div className="bg-gray-50 rounded-xl p-4">
          <p className="text-xs text-gray-400 mb-1">Receitas</p>
          <p className="text-xl font-semibold text-gray-900">R$ 6.500</p>
        </div>
        <div className="bg-gray-50 rounded-xl p-4">
          <p className="text-xs text-gray-400 mb-1">Gastos</p>
          <p className="text-xl font-semibold text-red-500">R$ 1.850</p>
        </div>
        <div className="bg-gray-50 rounded-xl p-4">
          <p className="text-xs text-gray-400 mb-1">Poupança</p>
          <p className="text-xl font-semibold text-gray-900">71%</p>
        </div>
      </div>
      {/* Alerta */}
      <div className="bg-orange-50 border border-orange-300 rounded-xl p-3 flex gap-3">
        <span className="text-lg">⚠️</span>
        <div>
          <p className="text-xs font-semibold text-orange-900 mb-1">Alerta semanal</p>
          <p className="text-xs text-orange-800">
            Você gastou R$ 480 esta semana — 68% do limite de R$ 700.
          </p>
        </div>
      </div>
      {/* Últimos lançamentos */}
      <div className="bg-white border border-gray-200 rounded-xl p-4">
        <p className="text-sm font-semibold text-gray-900 mb-3">🕐 Últimos lançamentos</p>

        <div className="flex flex-col gap-3">

            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-green-100 flex items-center justify-center text-sm">🏦</div>
              <div className="flex-1">
                <p className="text-xs font-medium text-gray-900">Salário</p>
                <p className="text-xs text-gray-400">01 jun</p>
              </div>
              <p className="text-xs font-semibold text-green-600">+ R$ 5.300</p>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-red-100 flex items-center justify-center text-sm">🏠</div>
              <div className="flex-1">
                <p className="text-xs font-medium text-gray-900">Aluguel</p>
                <p className="text-xs text-gray-400">05 jun</p>
              </div>
              <p className="text-xs font-semibold text-red-500">- R$ 1.200</p>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-orange-100 flex items-center justify-center text-sm">🚗</div>
              <div className="flex-1">
                <p className="text-xs font-medium text-gray-900">Combustível</p>
                <p className="text-xs text-gray-400">15 jun</p>
              </div>
              <p className="text-xs font-semibold text-red-500">- R$ 95</p>
          </div>

        </div>
      </div>
    </div>
  );
}