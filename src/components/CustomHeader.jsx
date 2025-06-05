import { Link } from "react-router-dom"
import LinkedButton from "./LinkedButton"
import React from "react"

export default function CustomHeader() {
  return (
    <header className="bg-green-900 bg-gradient-to-tr from-green-800 via-emerald-600 to-lime-400 shadow-neon text-neon-green">
      <nav className="max-w-4xl mx-auto px-6 py-5 flex items-center justify-between">
        <div>
          <Link
            to="/"
            className="text-2xl font-extrabold tracking-widest text-lime-300 hover:text-white drop-shadow-[0_0_8px_#22f57b] hover:text-white transition"
          >
            Arbi
          </Link>
        </div>
        <ul className="flex gap-6 items-center">
          <li>
            <LinkedButton
              content={"Главная"}
              path="/"
              className="text-neon-green font-medium px-4 py-2 rounded-md hover:bg-green-800 hover:text-white transition shadow-neon"
            />
          </li>
          <li>
            <LinkedButton
              content={"Личный кабинет"}
              path="/auth"
              className="text-neon-green font-medium px-4 py-2 rounded-md hover:bg-green-800 hover:text-white transition shadow-neon"
            />
          </li>
        </ul>
      </nav>
    </header>
  )
}
