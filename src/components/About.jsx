import React, { useEffect, useRef } from "react";
import ExchangeList from "./ExchangeList";
import PriceList from "./PriceList";

// Улучшенный анимированный блок с более выраженными эффектами
const AnimatedSection = ({ children, direction = "up", delay = 0 }) => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.style.opacity = '1'; // Явно включаем видимость
            entry.target.classList.add(
              direction === "left" 
                ? "animate-swipe-in-left" 
                : direction === "right" 
                ? "animate-swipe-in-right" 
                : "animate-fade-in-up"
            );
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 } // Срабатывает раньше (15% элемента в зоне видимости)
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, [direction]);

  return (
    <div
      ref={sectionRef}
      className="opacity-0 will-change-transform" // Оптимизация для анимаций
      style={{ animationDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

export default function About() {
  return (
    <div className="bg-deep-dark min-h-screen py-16 px-4"> {/* Увеличенные отступы */}
      <div className="max-w-3xl mx-auto flex flex-col gap-16"> {/* Увеличенный gap */}

        {/* Блок: О проекте */}
        <AnimatedSection>
          <section className="bg-green-950/70 rounded-2xl shadow-neon p-8 transform transition-all hover:scale-[1.01] hover:shadow-neon-intense">
            <h1 className="text-4xl md:text-5xl font-extrabold text-neon-green mb-6 drop-shadow-[0_0_12px_#22f57b]">
              О нашем софте
            </h1>
            <p className="text-lime-200 text-xl leading-relaxed">
              Наш проект — <span className="font-bold text-neon-green">мощный инструмент</span> для поиска связок в арбитраже криптовалют. Речь идет об onchain арбитраже на CEX биржах.
            </p>
          </section>
        </AnimatedSection>

        {/* Блок: Как работает */}
        <AnimatedSection direction="left" delay={150}>
          <section className="bg-green-950/70 rounded-2xl shadow-neon p-8 transform transition-all hover:scale-[1.01] hover:shadow-neon-intense">
            <h2 className="text-3xl md:text-4xl font-bold text-neon-green mb-4 drop-shadow-[0_0_12px_#22f57b]">
              Как работает наш софт?
            </h2>
            <p className="text-lime-200 text-lg leading-relaxed">
              Он работает с API крупных криптовалютных CEX бирж. <span className="font-semibold">Анализирует сети</span> для перевода, считает комиссии, спред, возможную прибыль, риски и многое другое. На выходе — <span className="text-neon-green font-medium">готовая арбитражная связка</span>.
            </p>
          </section>
        </AnimatedSection>

        {/* Блок: Кому подойдет */}
        <AnimatedSection direction="right" delay={200}>
          <section className="bg-green-950/70 rounded-2xl shadow-neon p-8 transform transition-all hover:scale-[1.01] hover:shadow-neon-intense">
            <h2 className="text-3xl md:text-4xl font-bold text-neon-green mb-4 drop-shadow-[0_0_12px_#22f57b]">
              Кому подойдет этот софт?
            </h2>
            <p className="text-lime-200 text-lg leading-relaxed">
              Софт подойдет <span className="font-semibold">всем</span>, кто хочет начать зарабатывать на арбитраже криптовалют. Это <span className="text-neon-green">незаменимый инструмент</span> как для опытных трейдеров, так и для новичков.
            </p>
          </section>
        </AnimatedSection>

        {/* Блок: Список бирж */}
        <AnimatedSection delay={250}>
          <section className="bg-green-950/70 rounded-2xl shadow-neon p-8 transform transition-all hover:scale-[1.01] hover:shadow-neon-intense">
            <h2 className="text-3xl md:text-4xl font-bold text-neon-green mb-4 drop-shadow-[0_0_12px_#22f57b]">
              Список бирж
            </h2>
            <ExchangeList />
          </section>
        </AnimatedSection>

        {/* Блок: Тарифы */}
        <AnimatedSection delay={300}>
          <section className="bg-green-950/70 rounded-2xl shadow-neon p-8 transform transition-all hover:scale-[1.01] hover:shadow-neon-intense">
            <h2 className="text-3xl md:text-4xl font-bold text-neon-green mb-4 drop-shadow-[0_0_12px_#22f57b]">
              Наши тарифы
            </h2>
            <PriceList />
          </section>
        </AnimatedSection>
      </div>
    </div>
  );
}