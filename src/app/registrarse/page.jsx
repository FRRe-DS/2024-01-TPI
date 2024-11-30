'use client';
import { useState } from 'react';
import {postUser, getUser } from '../lib/connectUser';
import styles from './page.module.css';
import { useRouter } from 'next/navigation';

export default function Registration() {
  const router = useRouter();
  const [message, setMessage] = useState(null);

  const register = async (event) => {
    event.preventDefault();
    setMessage(null);
    
    const formData = new FormData(event.target);
    const jsonData = Object.fromEntries(formData);

    const res = await postUser(jsonData);

    if (res.error) {
      setMessage(res.error.message);
      return;
    }

    if (res.jwt && res.user) {
      setMessage('Successfull registration.');

      const response = await getUser(res.jwt);

      if (response.error) {
        setMessage(response.error.message);
        return;
      }

      router.push('/');
    }
  };

  return (
    <div className={styles.formContainer}>
    <form className={styles.formBox} onSubmit={register}>
      <label className={styles.formEtiqueta} htmlFor="username" >Nombre de Usuario</label>
      <input className={styles.formInput} type="text" id="username" name="username"  />

      <label className={styles.formEtiqueta} htmlFor="email" >Email</label>
      <input className={styles.formInput} type="email" id="email" name="email" />

      <label className={styles.formEtiqueta} htmlFor="password" >Contraseña</label>
      <input className={styles.formInput} type="password" id="password" name="password" />

      <button className={styles.formButton} type="submit">Registrarse</button>

      <div className={styles.formMensaje}>{ message }</div>
    </form>
    </div>
  );
}