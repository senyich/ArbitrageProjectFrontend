// RegisterForm.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CookieService from '../../services/CookieService';

export default function RegisterForm() {
  const navigate = useNavigate();
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async e => {
    e.preventDefault();
    setError('');

    if (formData.password !== formData.confirmPassword) {
      setError('Пароли не совпадают');
      return;
    }

    setIsLoading(true);

    try {
      const response = await fetch('http://localhost:5036/api/users/add-user', {
        method: 'POST',
        headers: {
          'accept': 'text/plain',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          userName: formData.email,
          password: formData.password
        }),
      });

      const token = await response.text();

      if (!response.ok) {
        throw new Error(token || 'Ошибка регистрации');
      }

      const isSecure = window.location.protocol === 'https:';

      CookieService.set('jwt', token, {
        expires: 7,
        secure: isSecure,
        sameSite: 'Strict',
        path: '/'
      });

      navigate('/account');
    } catch (err) {
      setError(err.message || 'Произошла ошибка при регистрации');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form
  onSubmit={handleSubmit}
  className="max-w-md mx-auto bg-deep-dark rounded-xl shadow-lg p-8 space-y-7 animate-fade-in-up"
>
  <h2 className="text-2xl font-bold text-center text-neon-green mb-6 tracking-tight">
    Создать аккаунт
    <span className="text-dark-neon-green">.</span>
  </h2>

  {error && (
    <div className="bg-red-900/40 border border-red-500/40 text-red-100 px-4 py-2 rounded-md text-sm shadow-md animate-shake">
      {error}
    </div>
  )}

  <div className="space-y-1">
    <label className="block text-sm font-medium text-neon-green/80">Email</label>
    <input
      type="email"
      name="email"
      required
      value={formData.email}
      onChange={handleChange}
      autoComplete="email"
      disabled={isLoading}
      className="w-full px-4 py-2 bg-dark-neon-green/60 border border-dark-neon-green/40 rounded-lg text-neon-green placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-neon-green/60 focus:border-transparent disabled:opacity-60 transition-all duration-200"
      placeholder="your@email.com"
    />
  </div>

  <div className="space-y-1">
    <label className="block text-sm font-medium text-neon-green/80">Пароль</label>
    <input
      type="password"
      name="password"
      required
      value={formData.password}
      onChange={handleChange}
      autoComplete="new-password"
      disabled={isLoading}
      className="w-full px-4 py-2 bg-dark-neon-green/60 border border-dark-neon-green/40 rounded-lg text-neon-green placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-neon-green/60 focus:border-transparent disabled:opacity-60 transition-all duration-200"
      placeholder="••••••••"
    />
  </div>

  <div className="space-y-1">
    <label className="block text-sm font-medium text-neon-green/80">Подтвердите пароль</label>
    <input
      type="password"
      name="confirmPassword"
      required
      value={formData.confirmPassword}
      onChange={handleChange}
      autoComplete="new-password"
      disabled={isLoading}
      className="w-full px-4 py-2 bg-dark-neon-green/60 border border-dark-neon-green/40 rounded-lg text-neon-green placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-neon-green/60 focus:border-transparent disabled:opacity-60 transition-all duration-200"
      placeholder="••••••••"
    />
  </div>

  <button
    type="submit"
    disabled={isLoading}
    className={`w-full py-3 rounded-lg font-bold transition-all duration-300 relative overflow-hidden
      ${isLoading
        ? 'bg-neon-green/30 text-neon-green/80 cursor-not-allowed'
        : 'bg-neon-green/20 hover:bg-neon-green/40 text-neon-green hover:text-white shadow-neon'
      }`}
  >
    <span className={`relative z-10 ${isLoading ? 'opacity-0' : 'opacity-100'}`}>
      Зарегистрироваться
    </span>
    {isLoading && (
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-5 h-5 border-2 border-neon-green border-t-transparent rounded-full animate-spin"></div>
      </div>
    )}
  </button>
</form>

  );
}