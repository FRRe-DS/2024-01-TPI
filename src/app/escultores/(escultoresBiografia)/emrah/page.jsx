import Emrah from "/public/Escultores/EmrahÖnal.png";
import Tr from "/public/Banderas/tr.svg";
import zarafet from "/public/GaleriaEsculturas/Despues_Zarafet.jpg";

import PlantillaEscultoresPage from "@/app/ui/GalleryComponents/plantillaEscultores";

export default function EmrahPage() {
  return (
    <>
      <PlantillaEscultoresPage
        foto={Emrah}
        bandera={Tr}
        nombre="Emrah Önal"
        pais="Turquía"
        parrafo={[
          "Nació el 23 de octubre de 1993 en la ciudad de Estambul.",
          <br />,
          <b>Distinciones:</b>,
          <br />,
          <ul>
            <li>
              2022. Segundo Premio del Concurso de Escultura para la Fuente del
              Bosque de Belgrado en Estambul (Turquía). Premio Especial del
              Jurado en el Séptimo Concurso de Escultura Erdemir “Acero y vida”.
            </li>
            <li>
              2021. Fondo para Artistas Jóvenes de la Fundación “Ali Ismail
              Korkmaz”.
            </li>
            <li>
              2019. Mención de Honor de la Fundación Turgut Pura en el Concurso
              de Escultura de Izmir (Turquía).
            </li>
            <li>
              2018. Primer Premio de la Universidad de Bellas Artes “Mimar
              Sinan” de Estambul (Turquía), donde comenzó el programa de
              Maestría y continúa su educación.
            </li>
            <li>
              Participó en diversas exposiciones colectivas, simposios de
              escultura y fue voluntario en organizaciones no gubernamentales.
            </li>
          </ul>,
        ]}
        proyNombre="Uyumlu Zarafet"
        proyImagen={zarafet}
        proyEnlace="/esculturas/uyumlu-zarafet"
      />
    </>
  );
}
