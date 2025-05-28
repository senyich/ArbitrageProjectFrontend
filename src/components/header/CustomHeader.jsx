import { Link } from "react-router-dom"
import LinkedButton from "../linked-button/LinkedButton"
import React from "react"
import "./CustomHeader.css"

export default function CustomHeader() {
  return (
    <header className="header">
      <nav className="nav-container">
        <div className="logo">
          <Link to="/">Arbi</Link>
        </div>
        <ul className="nav-link-list">
          <li><LinkedButton content={"Главная"} path="/"/></li>
          <li><LinkedButton content={"Личный кабинет"} path="/auth"/></li>
        </ul>
      </nav>
    </header>
  )
}