import "./ExchangeList.css"
export default function ExchangeList(){
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
    <section className="exchange-section">
      <h2 className="exchange-title">Список бирж</h2>
      <div className="exchange-grid">
        {exchanges.map((exchange, index) => (
          <a
            key={index}
            href={exchange.url}
            target="_blank"
            rel="noopener noreferrer"
            className="exchange-card"
          >
            <span className="exchange-number">{index + 1}.</span>
            <span className="exchange-name">{exchange.name}</span>
            <svg className="exchange-icon" viewBox="0 0 24 24">
            <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </a>
        ))}
      </div>
    </section>
    );
}