"use client";
import { useState } from "react";
import { connectUser } from "../lib/connectUser";
import { useRouter } from "next/navigation";
import Link from "next/link";
import styles from "./page.module.css";

export default function Login() {
  const [message, setMessage] = useState(null);
  const router = useRouter();

  const login = async (event) => {
    event.preventDefault();
    setMessage(null);
    const formData = new FormData(event.target);
    const jsonData = Object.fromEntries(formData);

    const res = await connectUser(jsonData);

    if (res.error) {
      setMessage(res.error.message);
      return;
    }

    if (res.jwt && res.user) {
      setMessage("Inicio de sesion exitoso.");
      router.prefetch("/");
      router.replace("/");
    }
  };

  return (
    <div className={styles.formContainer}>
    <form className={styles.formBox} onSubmit={login}>
      <label className={styles.formEtiqueta} htmlFor="identifier">
        Nombre de Usuario/Email
      </label>
      <input className={styles.formInput} type="text" id="identifier" name="identifier"/>

      <label className={styles.formEtiqueta} htmlFor="password">
        Contraseña
      </label>
      <input className={styles.formInput} type="password" id="password" name="password" />
      <button className={styles.formButton} type="submit">Iniciar Sesión</button>
      <div className={styles.formTexto}><Link href="/registrarse">Todavía no tienes una cuenta?</Link></div>
      <div className={styles.formMensaje} >{message}</div>
    </form>
    </div>
  );
}
