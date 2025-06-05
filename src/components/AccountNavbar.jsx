import React from "react";
import { NavLink } from "react-router-dom";
import CookieService from "../services/CookieService";

export default function AccountNavbar() {
  const navItems = [
    { name: "Поиск ситуаций по паре", path: "/account/arbitrageform" },
    { name: "История актуальных связок", path: "/account/history" },
    { name: "Тарифы", path: "/account/pricing" },
  ];

  const handleLogout = () => {
    CookieService.remove("jwt");
    window.location.href = "/auth";
  };

  return (
    <nav className="bg-deep-dark border-r border-dark-neon-green shadow-lg w-56 flex flex-col justify-between h-full p-8">
      <div>
        <div className="mb-10">
          <span className="text-2xl font-extrabold text-neon-green tracking-wide drop-shadow-md">
            Личный кабинет
          </span>
        </div>
        <div className="flex flex-col space-y-6">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `px-4 py-3 rounded-lg text-base font-semibold transition-colors duration-300 flex items-center gap-3
                ${
                  isActive
                    ? "bg-dark-neon-green text-neon-green shadow-inner shadow-black/50 border-l-4 border-neon-green"
                    : "text-lime-200 hover:bg-dark-neon-green hover:text-neon-green hover:border-l-4 hover:border-neon-green"
                }`
              }
            >
              {item.name}
            </NavLink>
          ))}
        </div>
      </div>

      {/* Кнопка выхода */}
      <button
        onClick={handleLogout}
        className="
          mt-10
          px-5 py-3
          rounded-lg
          text-base
          font-semibold
          text-red-600
          border
          border-red-700
          bg-red-50 bg-opacity-10
          hover:bg-red-700 hover:text-red-100 hover:border-red-600
          transition-colors
          duration-300
          flex
          items-center
          gap-3
          w-full
          justify-center
          shadow-md
          active:scale-95
          focus:outline-none
          focus:ring-2
          focus:ring-red-500
          focus:ring-offset-1
          focus:ring-offset-deep-dark
        "
      >
        <span>Выйти</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2.5}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
          />
        </svg>
      </button>
    </nav>
  );
}
