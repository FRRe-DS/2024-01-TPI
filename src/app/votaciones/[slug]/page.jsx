'use client'
import Link from "next/link";
import { getEscultura } from "../../lib/getElement";
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

// function to show the documentId of escultura to vote
export default function Page() {
    const pathname = usePathname();
    const [escultura, setEscultura] = useState(null);
    const jwt = localStorage.getItem('jwt');
    const router = useRouter();

    const handleVote = () => {
        if (!jwt) {
            router.push('/login');
        } else {
            // Lógica para emitir la votación
            router.push('/votaciones/exito');
        }
    };
    
    useEffect(() => {
        const getSculp = async () => {
          const escult = await getEscultura(pathname.split('/')[2]);
          setEscultura(escult); // Guardamos el resultado en el estado
        };
    
        getSculp();
      }, [pathname]);

    console.log(escultura);
    if (!escultura) {
        return <p>Cargando...</p>; // Muestra un mensaje de carga si no hay datos
    } else {
        return (
            <div>
                <Link href="/eventos">Volver</Link>
                <h1>{escultura.nombre}</h1>
                <p style={{ color: 'red' }}>{jwt? '':'Debe estar registrado para emitir una votacion'}</p>
                <p>{escultura.descripcion == null? '': escultura.descripcion}</p>
                <p>Escultor: {escultura.escultor}</p>
                <label htmlFor="puntaje">Puntaje: </label>
                <input type="number" id="puntaje" name="puntaje" min="1" max="5" />
                <button onClick={handleVote}>Votar</button>
                <br />
                <img src={escultura.imagen_despues} alt="" />
            </div>
        );
    }
}