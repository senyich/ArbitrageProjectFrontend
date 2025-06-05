import React, { useState, useRef, useEffect } from "react";
import LoginForm from "../components/forms/LoginForm";
import RegisterForm from "../components/forms/RegisterForm";
import CookieService from "../services/CookieService";
import { useNavigate } from "react-router-dom";

export default function AuthPage() {
  const [activeTab, setActiveTab] = useState("login");
  const [animation, setAnimation] = useState("fade-in-up");
  const prevTab = useRef("login");
  const navigate = useNavigate();

  useEffect(() => {
    const jwt = CookieService.get("jwt");
    if (jwt) navigate("/account");
  }, [navigate]);

  // Переключение вкладки с анимацией
  const handleTabChange = (tab) => {
    if (tab === activeTab) return;
    setAnimation(tab === "login" ? "swipe-in-right" : "swipe-in-left");
    setActiveTab(tab);
    prevTab.current = tab;
  };

  // Свайп для мобильных
  const touchStartX = useRef(null);
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const handleTouchEnd = (e) => {
    if (touchStartX.current === null) return;
    const deltaX = e.changedTouches[0].clientX - touchStartX.current;
    if (deltaX > 60 && activeTab === "register") handleTabChange("login");
    if (deltaX < -60 && activeTab === "login") handleTabChange("register");
    touchStartX.current = null;
  };

  return (
    <div className="min-h-screen bg-deep-dark flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-deep-dark/90 backdrop-blur-xl border border-neon-green/20 rounded-xl shadow-2xl overflow-hidden relative">
        {/* Фоновая дымка */}
        <div className="absolute inset-0 overflow-hidden opacity-15 pointer-events-none">
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full bg-neon-green"
              style={{
                width: `${Math.random() * 80 + 40}px`,
                height: `${Math.random() * 80 + 40}px`,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                filter: 'blur(30px)',
                opacity: Math.random() * 0.2 + 0.08
              }}
            />
          ))}
        </div>

        <div
          className="relative z-10 p-8"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          {/* Tab-кнопки */}
          <div className="flex mb-8 bg-dark-neon-green/90 rounded-full p-1 shadow">
            <button
              onClick={() => handleTabChange("login")}
              className={`flex-1 py-3 px-4 rounded-full font-bold transition-all duration-300 ${
                activeTab === "login"
                  ? "bg-neon-green text-deep-dark shadow-neon"
                  : "text-neon-green/80 hover:text-neon-green"
              }`}
            >
              Вход
            </button>
            <button
              onClick={() => handleTabChange("register")}
              className={`flex-1 py-3 px-4 rounded-full font-bold transition-all duration-300 ${
                activeTab === "register"
                  ? "bg-neon-green text-deep-dark shadow-neon"
                  : "text-neon-green/80 hover:text-neon-green"
              }`}
            >
              Регистрация
            </button>
          </div>

          {/* Swipe-анимируемая область */}
          <div className={`min-h-[370px] w-full ${animation}`}>
            {activeTab === "login" ? <LoginForm /> : <RegisterForm />}
          </div>
        </div>
      </div>
    </div>
  );
}
