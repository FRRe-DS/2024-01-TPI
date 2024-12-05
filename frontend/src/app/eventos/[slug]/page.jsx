"use client";
import PlantillaEvento from "../../reactComponents/componentes/plantillaEvento";
import { getEvento } from "../../lib/getElement";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import BotonVolver from "../../reactComponents/componentes/BotonVolver";

export default function Page() {
  const pathname = usePathname();
  const [evento, setEvento] = useState(null);
  const [esculturas, setEsculturas] = useState(null);

  useEffect(() => {
    const getSculp = async () => {
      const event = await getEvento(pathname.split("/")[2]);
      setEvento(event); // Guardamos el resultado en el estado

      setEsculturas(event.esculturas); // Guardamos el resultado en el estado
    };

    getSculp();
  }, [pathname]);
  if (!evento || !esculturas) {
    return <p>Cargando...</p>;
  } else {
    return (
        <section>
          <BotonVolver retorno={"/eventos/"} />
            <PlantillaEvento
                nombre={evento.nombre}
                lugar={evento.lugar}
                fecha={evento.fecha}
                hora_inicio={evento.hora_inicio}
                hora_fin={evento.hora_fin}
                fecha_finalizacion={evento.fecha_finalizacion}
                descripcion={evento.descripcion}
                foto={evento.imagen}
                tematica={evento.tematica}
                esculturas={esculturas}
            />
        </section>
        
    );
  }
}
