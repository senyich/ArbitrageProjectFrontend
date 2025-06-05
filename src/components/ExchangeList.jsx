import React from "react"

export default function ExchangeList() {
  const exchanges = [
    { name: 'Binance', url: 'https://www.binance.com' },
    { name: 'Bybit', url: 'https://www.bybit.com' },
    { name: 'OKX', url: 'https://www.okx.com' },
    { name: 'KuCoin', url: 'https://www.kucoin.com' },
    { name: 'HTX', url: 'https://www.htx.com/ru-ru' },
    { name: 'BitGet', url: 'https://www.bitget.com/ru/' },
    { name: 'GateIo', url: 'https://www.gate.io/ru' },
    { name: 'Mexc', url: 'https://www.mexc.com/' },
    { name: 'Coinex', url: 'https://www.coinex.com/ru/' },
    { name: 'BingX', url: 'https://bingx.com/ru-ru/' },
  ];
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
      {exchanges.map((exchange, index) => (
        <a
          key={index}
          href={exchange.url}
          target="_blank"
          rel="noopener noreferrer"
          className="
            flex items-center gap-3
            bg-green-950/60
            border border-green-800
            rounded-lg
            px-5 py-4
            shadow-neon
            text-neon-green
            font-semibold
            text-lg
            transition
            hover:bg-green-900 hover:text-white hover:shadow-[0_0_24px_6px_#22f57b]
            focus:outline-none
          "
        >
          <span className="text-lime-400 font-bold">{index + 1}.</span>
          <span className="drop-shadow-[0_0_6px_#22f57b]">{exchange.name}</span>
        </a>
      ))}
    </div>
  );
}
