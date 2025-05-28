import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CookieService from '../../../services/CookieService';
import './LoginForm.css';

export default function LoginForm() {
  const navigate = useNavigate();
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    login: '',
    password: '',
  });

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async e => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    try {
      // Отправка данных на API аутентификации
      const response = await fetch('http://localhost:5036/api/users/auth-user', {
        method: 'POST',
        headers: {
          'accept': 'text/plain',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          userName: formData.login,
          password: formData.password
        }),
      });

      // Обработка текстового ответа (JWT токен)
      const token = await response.text();

      if (!response.ok) {
        throw new Error(token || 'Ошибка авторизации');
      }

      // Определяем, используем ли мы HTTPS
      const isSecure = window.location.protocol === 'https:';
      
      // Сохраняем токен через сервис
      CookieService.set('jwt', token, {
        expires: 7, // Срок действия 7 дней
        secure: isSecure,
        sameSite: 'Strict',
        path: '/'
      });

      // Редирект на страницу аккаунта
      navigate('/account');

    } catch (err) {
      setError(err.message || 'Произошла ошибка при авторизации');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2>Вход в аккаунт</h2>

        {error && <div className="error-message">{error}</div>}

        <div className="form-fields">
          <div className="form-group">
            <label>Логин (email или имя пользователя)</label>
            <input
              type="text"
              name="login"
              value={formData.login}
              onChange={handleChange}
              required
              autoComplete="username"
              disabled={isLoading}
            />
          </div>

          <div className="form-group">
            <label>Пароль</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              autoComplete="current-password"
              disabled={isLoading}
            />
          </div>
        </div>

        <button 
          type="submit" 
          disabled={isLoading}
          className={isLoading ? 'loading' : ''}
        >
          {isLoading ? 'Вход...' : 'Войти'}
        </button>
      </form>
    </div>
  );
};