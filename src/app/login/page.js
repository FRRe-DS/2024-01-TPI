import getEventos from '../lib/getEventos';
import './styles.css';
import React from 'react';

export async function LoginForm () {
    const eventos = await getEventos();
    console.log(eventos);
  return (
    <form action="/login" method="POST">
      <div>
        <label htmlFor="username">Username:</label>
        <input type="text" id="username" name="username" required />
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" name="password" required />
      </div>
      <button type="submit">Login</button>
    </form>
  );
};

export default LoginForm;
