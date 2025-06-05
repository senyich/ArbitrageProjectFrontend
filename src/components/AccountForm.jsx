import ArbitrageList from "./ArbitrageList";
import React, { useState } from "react";
import CookieService from "../services/CookieService";

export default function AccountForm() {
  const [pare, setPare] = useState("");
  const [loading, setLoading] = useState(false);
  const [hasSearched, setHasSearched] = useState(false);
  const [arbitrages, setArbitrages] = useState([]);
  const [error, setError] = useState("");
  const jwt = CookieService.get("jwt");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    setArbitrages([]);

    try {
      const res = await fetch(
        "http://localhost:5036/api/arbitrage/get-arbitrage-opportunities",
        {
          method: "POST",
          headers: {
            accept: "text/plain",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            jwt,
            pare: pare.trim(),
          }),
        }
      );
      if (!res.ok) throw new Error("Ошибка при получении данных");
      const data = await res.json();
      setArbitrages(Array.isArray(data) ? data : []);
      setHasSearched(true); 
    } catch (err) {
      setError(err.message || "Ошибка");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="flex-1 max-w-4xl mx-auto p-10 bg-deep-dark rounded-2xl shadow-lg border border-dark-neon-green">
      <h1 className="text-3xl font-extrabold text-neon-green mb-10 text-center tracking-wide drop-shadow-md">
        Личный кабинет
      </h1>

      <form
        onSubmit={handleSubmit}
        className="flex flex-col md:flex-row gap-6 items-center justify-center"
      >
        <input
          type="text"
          required
          placeholder="Введите пару (например, DBGUSDT)"
          value={pare}
          onChange={(e) => setPare(e.target.value)}
          className="
            flex-1
            px-5 py-4
            rounded-xl
            bg-dark-neon-green/90
            border-2 border-neon-green/40
            text-neon-green
            placeholder-gray-400
            focus:outline-none
            focus:ring-4 focus:ring-neon-green/60
            focus:border-neon-green
            transition
            duration-300
            shadow-md
            font-semibold
            tracking-wide
          "
        />

        <button
          type="submit"
          disabled={loading}
          className="
            inline-flex
            items-center
            justify-center
            px-8 py-3
            rounded-xl
            font-bold
            text-neon-green
            bg-dark-neon-green/90
            border-2 border-neon-green
            shadow-[0_0_15px_3px_rgba(52,179,83,0.6)]
            transition
            duration-300
            hover:bg-neon-green
            hover:text-deep-dark
            hover:shadow-[0_0_25px_6px_rgba(52,179,83,0.8)]
            focus:outline-none
            focus:ring-4
            focus:ring-neon-green/70
            active:scale-95
            select-none
            text-lg
            tracking-wide
            min-w-[180px]
          "
        >
          {loading && (
            <svg
              className="animate-spin -ml-1 mr-3 h-6 w-6 text-neon-green"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
              ></path>
            </svg>
          )}
          {loading ? "Поиск..." : "Найти арбитраж"}
        </button>
      </form>

      {error && (
        <div className="mt-6 text-red-500 font-semibold text-center drop-shadow-sm">
          {error}
        </div>
      )}

      {/* Больше не показываем сообщение здесь! */}
      <ArbitrageList data={arbitrages} hasSearched={hasSearched} />

    </main>
  );
}
