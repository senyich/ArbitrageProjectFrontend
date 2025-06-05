import React, { useState, useEffect} from "react";
import CookieService from "../services/CookieService";
import { useNavigate } from "react-router-dom";
import ArbitrageList from "../components/ArbitrageList";

export default function AccountPage() {
  const navigate = useNavigate();
  const [pare, setPare] = useState("");
  const [loading, setLoading] = useState(false);
  const [arbitrages, setArbitrages] = useState([]);
  const [error, setError] = useState("");
  const jwt = CookieService.get("jwt");
  useEffect(() => {
    if (!jwt) navigate("/auth");
  }, [jwt, navigate]);
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    setArbitrages([]);
    try {
      const res = await fetch("http://localhost:5036/api/arbitrage/get-arbitrage-opportunities", {
        method: "POST",
        headers: {
          accept: "text/plain",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          jwt,
          pare: pare.trim(),
        }),
      });
      if (!res.ok) throw new Error("Ошибка при получении данных");
      const data = await res.json();
      setArbitrages(Array.isArray(data) ? data : []);
    } catch (err) {
      setError(err.message || "Ошибка");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-deep-dark py-12 px-2 flex justify-center">
      <div className="w-full max-w-2xl bg-deep-dark/90 border border-neon-green/20 rounded-xl shadow-2xl p-8">
        <h1 className="text-2xl md:text-3xl font-bold text-neon-green mb-8 text-center">
          Личный кабинет
        </h1>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col md:flex-row gap-4 items-center justify-center"
        >
          <input
            type="text"
            required
            placeholder="Введите пару (например, DBGUSDT)"
            value={pare}
            onChange={(e) => setPare(e.target.value)}
            className="flex-1 px-4 py-3 rounded-lg bg-dark-neon-green/80 border border-neon-green/20 text-neon-green placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-neon-green focus:border-transparent transition"
          />
          <button
            type="submit"
            disabled={loading}
            className="
              inline-block
              px-6 py-2
              rounded-lg
              font-semibold
              text-neon-green
              bg-green-700/80
              shadow-neon
              border border-green-700
              transition
              duration-200
              hover:bg-green-600
              hover:text-white
              hover:shadow-[0_0_16px_4px_#22f57b]
              focus:outline-none
              focus:ring-2
              focus:ring-neon-green
              active:scale-95
              select-none
              text-base
              tracking-wide
              min-w-[150px]
            "
          >
            {loading ? "Поиск..." : "Найти арбитраж"}
          </button>
        </form>
        {error && (
          <div className="mt-4 text-red-400 text-center">{error}</div>
        )}
        <ArbitrageList data={arbitrages} />
      </div>
    </div>
  );
}
