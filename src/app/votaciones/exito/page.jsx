'use client';
import styles from "./page.module.css";

export default function Page() {
    const user = localStorage.getItem('user');
    return (
        <div className={styles.exitoBox}>
            <h1>¡Votación exitosa!</h1>
            <p>Gracias {user} por participar en la votación.</p>
        </div>
    );
}