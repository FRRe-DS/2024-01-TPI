import Anna from "/public/Escultores/AnnaKorver.png";
import Nz from "/public/Banderas/nz.svg";
import mensaje from "/public/GaleriaEsculturas/Despues_Mensaje.jpg";

import PlantillaEscultoresPage from "@/app/ui/GalleryComponents/plantillaEscultores";

export default function AnnaPage() {
  return (
    <>
      <PlantillaEscultoresPage
        foto={Anna}
        bandera={Nz}
        nombre="Anna Korver"
        pais="Nueva Zelanda"
        parrafo={[
          "Nació el 26 de julio de 1980 en la ciudad de New Plymouth, en el estado de Taranaki.",
          <br />,
          <b>Distinciones:</b>,
          <br />,
          <ul>
            <li>
              2021. Primer Premio en el Simposio Internacional de Escultura de
              Tuwaiq (Arabia Saudita). Finalista del Premio de Escultura
              “Richard Nelson” de Wellington (Nueva Zelanda).
            </li>
            <li>
              2018. Finalista en la Exposición Itinerante del Premio Wallace
              (Nueva Zelanda).
            </li>
            <li>2016. Finalista del Premio Wallace (Nueva Zelanda).</li>
            <li>
              2014. Ganadora del Simposio Internacional de Escultura de Rotorua
              (Nueva Zelanda).
            </li>
            <li>
              2012. Primer Premio en el Simposio de Escultura de Whangarei
              (Nueva Zelanda).
            </li>
            <li>
              2008. Primer Premio del Simposio de Piedra Dura de Coromandel
              (Nueva Zelanda).
            </li>
            <li>
              2007. Premio a la Excelencia de la Fundación Genevieve Becroft y
              Premio del Público en el Concurso de Escultura en Madera.
            </li>
          </ul>,
        ]}
        proyNombre="Mensaje"
        proyImagen={mensaje}
        proyEnlace="/esculturas/mensaje"
      />
    </>
  );
}
