'use client'
import PlantillaPage from "../../ui/GalleryComponents/plantillaEscultura.jsx";
import {getElement} from "../../lib/getElement.js";
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react';
import { Suspense } from 'react'

export default function Page() {
    const pathname = usePathname();
    const [escultura, setEscultura] = useState(null);
    
    useEffect(() => {
        const getSculp = async () => {
          const escult = await getElement('esculturas', pathname.split('/')[2]);
          setEscultura(escult); // Guardamos el resultado en el estado
        };
    
        getSculp();
      }, [pathname]);

    if (!escultura) {
        return <p>Cargando...</p>; // Muestra un mensaje de carga si no hay datos
    }

    return (
        <section>
        <Suspense fallback={<p>Cargando...</p>}>
            <PlantillaPage
                titulo={escultura.nombre}
                descripcion={escultura.descripcion}
                etapa1={escultura.imagen_antes}
                etapa2={escultura.imagen_durante}
                etapa3={escultura.imagen_despues}
                autor={escultura.escultor}
            />
        </Suspense>
        </section>
        
    );
}