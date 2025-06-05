import React from "react";

// Функция для форматирования чисел с разделителями и фиксированной точностью
function formatNumber(num, decimals = 2) {
  if (typeof num !== "number" || isNaN(num)) return "-";
  if (Math.abs(num) >= 1e6) {
    return num.toLocaleString(undefined, { maximumFractionDigits: 0 });
  }
  return num.toLocaleString(undefined, { minimumFractionDigits: decimals, maximumFractionDigits: decimals });
}

// Красивый бейдж для chain
function ChainBadge({ chain }) {
  return (
    <div className="inline-block bg-dark-neon-green/80 rounded-lg px-2 py-1 mr-2 mb-1">
      <span className="font-semibold text-neon-green">{chain.name}</span>
      <span className="ml-2 text-xs text-gray-400">
        Fee: <span className="text-neon-green">{formatNumber(chain.withdrawFee, 4)}</span>
      </span>
      <span className={`ml-2 text-xs ${chain.isWithdrawable ? "text-green-400" : "text-red-400"}`}>
        {chain.isWithdrawable ? "Вывод" : "Нет вывода"}
      </span>
      <span className={`ml-2 text-xs ${chain.isDepozitable ? "text-green-400" : "text-red-400"}`}>
        {chain.isDepozitable ? "Ввод" : "Нет ввода"}
      </span>
    </div>
  );
}

export default function ArbitrageOpportunity({ opportunity }) {
  return (
    <div className="rounded-xl bg-deep-dark/90 border border-neon-green/20 shadow-lg p-6 mb-7">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
        <div>
          <div className="text-xl font-bold text-neon-green tracking-wide">
            {opportunity.pare}
          </div>
          <div className="text-sm text-neon-green/80 mb-2">
            {opportunity.fromExchange} <span className="text-gray-400">→</span> {opportunity.toExchange}
          </div>
        </div>
        <div className="flex gap-2">
          <a
            href={opportunity.fromLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-semibold text-green-400 underline hover:text-green-300 transition"
          >
            Купить
          </a>
          <a
            href={opportunity.toLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-semibold text-green-400 underline hover:text-green-300 transition"
          >
            Продать
          </a>
        </div>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm mt-4">
        <div>
          <span className="text-gray-400">Buy VWAP:</span>
          <span className="ml-1 text-neon-green font-mono">{formatNumber(opportunity.buyVWAP, 6)}</span>
        </div>
        <div>
          <span className="text-gray-400">Sell VWAP:</span>
          <span className="ml-1 text-neon-green font-mono">{formatNumber(opportunity.sellVWAP, 6)}</span>
        </div>
        <div>
          <span className="text-gray-400">Spread:</span>
          <span className="ml-1 text-yellow-400 font-mono">{formatNumber(opportunity.spread, 3)}%</span>
        </div>
        <div>
          <span className="text-gray-400">Profit:</span>
          <span className="ml-1 text-green-300 font-mono">{formatNumber(opportunity.profit, 2)} USDT</span>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
        <div>
          <div className="text-xs text-gray-400 mb-1">From Chains:</div>
          <div className="flex flex-wrap">
            {opportunity.fromChains.map((chain, i) => (
              <ChainBadge key={i} chain={chain} />
            ))}
          </div>
        </div>
        <div>
          <div className="text-xs text-gray-400 mb-1">To Chains:</div>
          <div className="flex flex-wrap">
            {opportunity.toChains.map((chain, i) => (
              <ChainBadge key={i} chain={chain} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
