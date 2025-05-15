import "./PriceList.css"
export default function PriceList(){
    return (
    <div className="pricing-grid">
      <div className="pricing-card">
        <h3>Базовый тариф</h3>
        <div className="price">
          <span className="amount">100$</span>
          <span className="period">/месяц</span>
        </div>
        <ul className="features">
          <li>✓ 10 CEX бирж</li>
          <li>✓ Лимит 15 связок/день</li>
        </ul>
        <button className="pricing-btn">Приобрести</button>
      </div>
      <div className="pricing-card">
        <h3>Продвинутый тариф</h3>
        <div className="price">
          <span className="amount">200$</span>
          <span className="period">/месяц</span>
        </div>
        <ul className="features">
          <li>✓ 10 CEX бирж</li>
          <li>✓ Безлимитные связки</li>
          <li>✓ Связки с хэджированием</li>
          <li>✓ Фильтрация связок</li>
        </ul>
        <button className="pricing-btn">Приобрести</button>
      </div>
    </div>
  );
}