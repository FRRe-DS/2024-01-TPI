'use client';
import styles from "./page.module.css";

export default function Page() {
    const isServer = typeof window === "undefined";
    let user;

    if (!isServer) {
    user = localStorage.getItem("user");
    // Haz algo con los datos
    }

    return (
        <div className={styles.exitoBox}> 
            <h1>¡Votación exitosa!</h1>
            <p>Gracias {user? user:"a ti"} por participar en la votación.</p>
        </div>
    );
}