import Bogdan from "/public/Escultores/BogdanAdrianLefter.png";
import Ro from "/public/Banderas/ro.svg";
import reflejo from "/public/GaleriaEsculturas/Despues_Reflejo.jpg";

import PlantillaEscultoresPage from "@/app/ui/GalleryComponents/plantillaEscultores";

export default function BogdanPage() {
  return (
    <>
      <PlantillaEscultoresPage
        foto={Bogdan}
        bandera={Ro}
        nombre="Bogdan Adrian Lefter"
        pais="Rumania"
        parrafo={[
          "Nació el 1 de marzo de 1983 en la ciudad de Bucarest.",
          <br />,
          <b>Distinciones:</b>,
          <br />,
          <ul>
            <li>
              2020. Nominado en la categoría de escultura de la XII Bienal
              Nacional “Ion Andreescu” de Buz?u (Rumania).
            </li>
            <li>
              2015. Premio a la Excelencia del Simposio Internacional de
              Escultura de Ho Chi Minh (Vietnam).
            </li>
            <li>
              2010. Ganador del Concurso Internacional de Arte Público de
              Ciudades con la fuente/escultura “Skuld, el signo del futuro” de
              Wuxi (China).
            </li>
            <li>
              2012. Nominado en la 22ª edición de la exposición “Saloanelor
              Moldovei” – categoría escultura por la obra “Leda”, Bacau,
              Rumania.
            </li>
            <li>
              2012. Nominado en la categoría escultura de la VIII Bienal
              Nacional “Ion Andreescu” de Buz?u (Rumania).
            </li>
            <li>
              2010. Primer Premio de Escultura en la VII Bienal Nacional “Ion
              Andreescu” de Buz?u (Rumania). Primer Premio del Concurso
              Internacional de Escultura en Arena, de Rorschach (Suiza).
            </li>
            <li>
              2009. Segundo Premio en el Concurso Internacional de Escultura en
              Nieve “Kunstwege” de Pontresina, (Suiza).
            </li>
          </ul>,
        ]}
        proyNombre="Reflejo"
        proyImagen={reflejo}
        proyEnlace="/esculturas/reflejo"
      />
    </>
  );
}
