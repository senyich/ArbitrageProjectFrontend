import LinkedButton from "./LinkedButton"
import React from "react"

export default function HomeLabel() {
  return (
    <section className="flex items-center justify-center min-h-[60vh] bg-deep-dark">
      <div className="
        bg-green-950/80
        rounded-2xl
        shadow-neon
        max-w-2xl
        w-full
        mx-4
        p-8
        flex flex-col items-center
        text-center
        gap-6
      ">
        <h1 className="
          text-3xl md:text-4xl
          font-extrabold
          text-neon-green
          drop-shadow-[0_0_16px_#22f57b]
        ">
          Софт для поиска связок в onchain арбитраже криптовалют
        </h1>
        <p className="
          text-lime-200
          text-lg
          md:text-xl
          font-medium
          drop-shadow-[0_0_6px_#22f57b]
        ">
          Попробуйте стабильный и безопасный способ заработка в мире криптовалют с помощью нашего мощного инструмента!
        </p>
        <LinkedButton
          content={"Попробовать"}
          path={"/auth"}
        />
      </div>
    </section>
  )
}
