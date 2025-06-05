import React, { useState, useEffect } from "react";
import CookieService from "../services/CookieService";
import { useNavigate } from "react-router-dom";
import AccountNavbar from "../components/AccountNavbar";
import AccountRoutes from "../components/routes/AccountRoutes";

export default function AccountPage() {
  const navigate = useNavigate();
  const jwt = CookieService.get("jwt");

  useEffect(() => {
    if (!jwt) navigate("/auth");
  }, [jwt, navigate]);

  return (
      <div className="h-screen bg-deep-dark flex">
      <AccountNavbar />
      <main className="flex-1 overflow-auto p-6">
        <AccountRoutes />
      </main>
    </div>
  );
}
