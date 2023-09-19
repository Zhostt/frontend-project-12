import React from 'react';
import Formik from 'formik';

function LoginForm() {
  return (
    <form>
      <h1>Войти</h1>
      <label htmlFor="username" value="Ваш ник">
        <input type="text" id="username" name="username" placeholder="Ваш ник" />
      </label>

      <label htmlFor="password" value="Ваш ник">
        <input type="text" id="password" name="password" placeholder="Пароль" />
      </label>

      <button type="submit">Войти</button>
    </form>
  );
}

export default LoginForm;
