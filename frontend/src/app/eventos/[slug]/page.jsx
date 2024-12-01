"use client";
import PlantillaEvento from "../../ui/GalleryComponents/plantillaEvento";
import { getEvento } from "../../lib/getElement";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Suspense } from "react";

export default function Page() {
  const pathname = usePathname();
  const [evento, setEvento] = useState(null);
  const [esculturas, setEsculturas] = useState(null);

  useEffect(() => {
    const getSculp = async () => {
      const event = await getEvento(pathname.split("/")[2]);
      setEvento(event); // Guardamos el resultado en el estado
      console.log(event.esculturas)

      setEsculturas(event.esculturas); // Guardamos el resultado en el estado
    };

    getSculp();
  }, [pathname]);
  if (!evento || !esculturas) {
    return <p>Cargando...</p>;
  } else {
    return (
        <section>
            <PlantillaEvento
                nombre={evento.nombre}
                lugar={evento.lugar}
                fecha_hora={evento.fecha_hora}
                descripcion={evento.descripcion}
                foto={evento.imagen}
                tematica={evento.tematica}
                esculturas={esculturas}
            />
        </section>
        
    );
  }
}
