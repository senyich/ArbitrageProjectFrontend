import React, { useState } from 'react';
import './LoginForm.css';


export default function LoginForm(){
  const [formData, setFormData] = useState({
    login: '',
    password: '',
  });

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log('Авторизация:', formData);
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2>Вход в аккаунт</h2>

        <div className="form-fields">
          <div className="form-group">
            <label>Логин (email или имя пользователя)</label>
            <input
              type="text"
              name="login"
              value={formData.login}
              onChange={handleChange}
              required
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
            />
          </div>
        </div>

        <button type="submit">Войти</button>
      </form>
    </div>
  );
};

