import React, { useState } from "react";
import LoginForm from "../../components/forms/loginform/LoginForm";
import RegisterForm from "../../components/forms/registerform/RegisterForm";
import "./AuthPage.css";

export default function AuthPage() {
  const [activeTab, setActiveTab] = useState("login");

  return (
    <div className="auth-wrapper">
      <div className="auth-tabs">
        <button
          className={`tab-btn ${activeTab === "login" ? "active" : ""}`}
          onClick={() => setActiveTab("login")}
        >
          Вход
        </button>
        <button
          className={`tab-btn ${activeTab === "register" ? "active" : ""}`}
          onClick={() => setActiveTab("register")}
        >
          Регистрация
        </button>
      </div>

      <div className="auth-form-container fade-in">
        {activeTab === "login" ? <LoginForm /> : <RegisterForm />}
      </div>
    </div>
  );
}
