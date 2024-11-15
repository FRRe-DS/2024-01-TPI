'use client';
export default function Page() {
    const user = localStorage.getItem('user');
    return (
        <div>
            <h1>¡Votación exitosa!</h1>
            <p>Gracias {user} por participar en la votación.</p>
        </div>
    );
}