import React, { useState } from "react";
import styles from "./Login.module.css"; // Импортируем стили как модуль

export const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e:any) => {
    e.preventDefault();
    // Здесь можно добавить логику для отправки данных на сервер
    console.log("Username:", username);
    console.log("Password:", password);
    alert(`Вы ввели:\nЛогин: ${username}\nПароль: ${password}`);
  };

  return (
    <div className={styles.loginContainer}>
      <h2>Авторизация</h2>
      <form onSubmit={handleSubmit}>
        <div className={styles.formGroup}>
          <label htmlFor="username">Логин:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="password">Пароль:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className={styles.submitButton}>
          Войти
        </button>
      </form>
    </div>
  );
};

export default LoginForm;