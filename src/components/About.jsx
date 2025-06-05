import React from "react";
import ExchangeList from "./ExchangeList";
import PriceList from "./PriceList";

export default function About() {
  return (
    <div className="bg-deep-dark min-h-screen py-12 px-4">
      <div className="max-w-3xl mx-auto flex flex-col gap-10">

        {/* Блок: О проекте */}
        <section className="bg-green-950/70 rounded-2xl shadow-neon p-7">
          <h1 className="text-3xl md:text-4xl font-extrabold text-neon-green mb-4 drop-shadow-[0_0_8px_#22f57b]">
            О нашем софте
          </h1>
          <p className="text-lime-200 text-lg">
            Наш проект — мощный инструмент для поиска связок в арбитраже криптовалют. Речь идет об onchain арбитраже на CEX биржах.
          </p>
        </section>

        {/* Блок: Как работает */}
        <section className="bg-green-950/70 rounded-2xl shadow-neon p-7">
          <h2 className="text-2xl md:text-3xl font-bold text-neon-green mb-3 drop-shadow-[0_0_8px_#22f57b]">
            Как работает наш софт?
          </h2>
          <p className="text-lime-200">
            Он работает с API крупных криптовалютных CEX бирж. Анализирует сети для перевода, считает комиссии, спред, возможную прибыль, риски и многое другое. На выходе — готовая арбитражная связка.
          </p>
        </section>

        {/* Блок: Кому подойдет */}
        <section className="bg-green-950/70 rounded-2xl shadow-neon p-7">
          <h2 className="text-2xl md:text-3xl font-bold text-neon-green mb-3 drop-shadow-[0_0_8px_#22f57b]">
            Кому подойдет этот софт?
          </h2>
          <p className="text-lime-200">
            Софт подойдет всем, кто хочет начать зарабатывать на арбитраже криптовалют. Это незаменимый инструмент как для опытных трейдеров, так и для новичков.
          </p>
        </section>

        {/* Блок: Список бирж */}
        <section className="bg-green-950/70 rounded-2xl shadow-neon p-7">
          <h2 className="text-2xl md:text-3xl font-bold text-neon-green mb-3 drop-shadow-[0_0_8px_#22f57b]">
            Список бирж, с которыми работает софт
          </h2>
          <ExchangeList />
        </section>

        {/* Блок: Тарифы */}
        <section className="bg-green-950/70 rounded-2xl shadow-neon p-7">
          <h2 className="text-2xl md:text-3xl font-bold text-neon-green mb-3 drop-shadow-[0_0_8px_#22f57b]">
            Наши тарифы
          </h2>
          <PriceList />
        </section>
      </div>
    </div>
  );
}
