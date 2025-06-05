import { Link } from "react-router-dom";
import LinkedButton from "./LinkedButton";
import React from "react";

export default function CustomHeader() {
  return (
    <header className="bg-dark-header bg-gradient-to-tr from-dark-header via-dark-neon-green to-dark-header shadow-neon text-neon-green">
      <nav className="max-w-4xl mx-auto px-6 py-5 flex items-center">
        <div>
          <Link
            to="/"
            className="
              text-3xl
              font-extrabold
              tracking-widest
              bg-gradient-to-r from-lime-300 via-green-400 to-green-600
              bg-clip-text
              text-transparent
              drop-shadow-[0_0_10px_#a3fca3]
              font-pacifico
              transition
              hover:drop-shadow-[0_0_20px_#22f57b]
              select-none
              cursor-pointer
              whitespace-nowrap
            "
            style={{ fontFamily: "'Pacifico', cursive" }}
          >
            Arbi
          </Link>
        </div>

        {/* Контейнер с кнопками с ml-auto для сдвига вправо и отступом */}
        <ul className="flex gap-6 items-center ml-auto pr-6">
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
  );
}
