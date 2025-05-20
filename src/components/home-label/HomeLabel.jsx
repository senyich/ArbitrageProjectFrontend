import LinkedButton from "../linked-button/LinkedButton"
import React from "react"
import "./HomeLabel.css"
export default function HomeLabel() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Софт для поиска связок в onchain арбитраже криптовалют</h1>
        <p>Попробуйте стабильный и безопасный способ заработка в мире криптовалют с помощью нашего мощного инструмента!</p>
        <LinkedButton 
          content={"Попробовать"}
          path={"user-profile"}/>
      </div>
    </section>
  )
}