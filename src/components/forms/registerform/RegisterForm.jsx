import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CookieService from '../../../services/CookieService';
import './RegisterForm.css';

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
    
    // Валидация паролей
    if (formData.password !== formData.confirmPassword) {
      setError('Пароли не совпадают');
      return;
    }

    setIsLoading(true);

    try {
      // Отправка данных на ваш API
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

      // Обработка текстового ответа (JWT токен)
      const token = await response.text();

      if (!response.ok) {
        throw new Error(token || 'Ошибка регистрации');
      }

      // Определение протокола для флага secure
      const isSecure = window.location.protocol === 'https:';
      
      // Сохранение JWT через сервис
      CookieService.set('jwt', token, {
        expires: 7, // Срок действия 7 дней
        secure: isSecure,
        sameSite: 'Strict',
        path: '/'
      });

      // Редирект на страницу аккаунта
      navigate('/account');

    } catch (err) {
      setError(err.message || 'Произошла ошибка при регистрации');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="register-container">
      <form className="register-form" onSubmit={handleSubmit}>
        <h2>Регистрация</h2>

        {error && <div className="error-message">{error}</div>}

        <label>Email</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          autoComplete="email"
          disabled={isLoading}
        />

        <label>Пароль</label>
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          required
          autoComplete="new-password"
          disabled={isLoading}
        />

        <label>Подтверждение пароля</label>
        <input
          type="password"
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleChange}
          required
          autoComplete="new-password"
          disabled={isLoading}
        />

        <button 
          type="submit" 
          disabled={isLoading}
          className={isLoading ? 'loading' : ''}
        >
          {isLoading ? 'Регистрация...' : 'Зарегистрироваться'}
        </button>
      </form>
    </div>
  );
};