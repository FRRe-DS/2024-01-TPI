'use client'
import PlantillaEscultoresPage from "../../ui/GalleryComponents/plantillaEscultores";
import { getEscultor } from "../../lib/getElement";
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react';
import { Suspense } from 'react'

export default function Page() {
    const pathname = usePathname();
    const [escultor, setEscultor] = useState(null);
    
    useEffect(() => {
        const getSculp = async () => {
          const escult = await getEscultor(pathname.split('/')[2]);
          setEscultor(escult); // Guardamos el resultado en el estado
        };
    
        getSculp();
      }, [pathname]);

    if (!escultor) {
        return <p>Cargando...</p>; // Muestra un mensaje de carga si no hay datos
    }

    console.log(escultor);

    return (
        <section>
        <Suspense fallback={<p>Cargando...</p>}>
            <PlantillaEscultoresPage
                foto={escultor.imagen}
                bandera={escultor.img_pais}
                nombre={escultor.nombre}
                pais={escultor.pais}
                parrafo={escultor.biografia}
                distinciones={escultor.obras_previas}
                proyNombre={escultor.escultura}
                proyImagen={escultor.img_escultura}
                proyEnlace={`esculturas/${escultor.id_escultura}`}
            />
        </Suspense>
        </section>
        
    );
}