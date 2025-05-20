import "./PriceList.css"
import LinkedButton from "../linked-button/LinkedButton";
import React from "react"
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
        <LinkedButton content={"Приобрести"} path={""}/>
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
        <LinkedButton content={"Приобрести"} path={""}/>
      </div>
    </div>
  );
}