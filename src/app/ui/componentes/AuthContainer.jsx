'use client';
import { useEffect, useState } from "react";
import Link from "next/link";

export default function Page() {
    const [token, setToken] = useState(null);
    const [role, setRole] = useState(null);
    
    // Función para obtener el token del localStorage
    const getToken = () => {
        try {
            const user = localStorage.getItem("user");
            const getRole = localStorage.getItem("role");
            setRole(getRole);
            console.log(role);
            if (user) {
                setToken(user);
            } else {
                setToken(null);
            }
        } catch (error) {
            console.error("Error accediendo a localStorage:", error);
        }
    };

    useEffect(() => {
        // Cargamos el token al iniciar
        getToken();

        // Escuchamos cambios en el localStorage
        window.addEventListener("storage", getToken);

        // Limpiamos el listener al desmontar el componente
        return () => {
            window.removeEventListener("storage", getToken);
        };
    }, []);

    // Cerrar sesión
    const logout = () => {
        localStorage.removeItem("jwt");
        localStorage.removeItem("user");
        localStorage.removeItem("role");
        setToken(null);
        window.location.reload("/");
    };

    if (token) {
        return (
            <>
                <li className="rootLista">{token}</li>
                <p><Link href={'/misEsculturas'}>{role !== 'null' ? 'Mis esculturas' : ''}</Link></p>
                <button onClick={logout}>Cerrar sesión</button>
            </>
        );
    } else {
        return (
            <>
                <li className="rootLista">
                    <Link className="rootHeaderUsuario" href="/login">Iniciar sesión</Link>
                </li>
                <li className="rootLista">
                    <Link className="rootHeaderUsuario" href="/registrarse">Registrarse</Link>
                </li>
            </>
        );
    }
}
