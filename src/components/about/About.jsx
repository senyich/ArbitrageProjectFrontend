import React from "react"
import { useEffect } from 'react';
import './About.css';
import ExchangeList from '../exchanges/ExchangeList';
import PriceList from '../pricelist/PriceList';

export default function About() {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate');
        }
      });
    }, { threshold: 0.1 });
    document.querySelectorAll('.about-section').forEach(section => {
      observer.observe(section);
    });
    return () => observer.disconnect();
  }, []);
  return (
    <div className="about-container">
      <section className="about-section">
        <h1>О нашем софте</h1>
        <p>Наш проект, является мощным инструментом для поиска связок в арбитраже криптовалют.
          Речь идет об onchain арбитраже на CEX биржах
        </p>
      </section>
      <section className="about-section">
        <h2>Как работает наш софт?</h2>
        <p>Он работает с api крупных криптовалютных CEX бирж. Смотрит сети для перевода, считает комиссии, спред, возможную прибыль, риски, и еще много всего, на выходе вы получаете готовую для реализации арбитражную связку.</p>
      </section>
      <section className="about-section">
        <h2>Кому подойдет этот софт?</h2>
        <p>Софт подойдет всем, кто хочет начать зарабатывать на арбитраже криптовалют. Он будет неотъемлемым инструментом как для бывалых трейдеров, так и для начинающих арбитражников.</p>
      </section>
      <section className="about-section">
        <h2>Список бирж, с которыми работает софт</h2>
        <div>
          <ExchangeList/>
        </div>
      </section>
      <section className="about-section">
        <h2>Наши тарифы</h2>
        <PriceList/>
      </section>
    </div>
  )
}