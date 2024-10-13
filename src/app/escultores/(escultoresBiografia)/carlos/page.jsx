import Carlos from "/public/Escultores/CarlosIglesiasFaura.png";
import Es from "/public/Banderas/es.svg";
import introspec from "/public/GaleriaEsculturas/Despues_Introspec.jpg";

import PlantillaEscultoresPage from "@/app/ui/GalleryComponents/plantillaEscultores";

export default function CarlosPage() {
  return (
    <>
      <PlantillaEscultoresPage
        foto={Carlos}
        bandera={Es}
        nombre="Carlos Iglesias Faura"
        pais="España"
        parrafo={[
          "Nació en Madrid, el 18 de abril de 1988.",
          <br />,
          <b>Distinciones:</b>,
          <br />,
          <ul>
            <li>
              2023. Premio Colección Too Many Friends en Feria de Arte JustMad
              de Madrid (España). Finalista del Certamen de Escultura Antonio
              López del Ayuntamiento de Pinto, Madrid (España).
            </li>
            <li>
              2022-2021. Finalista del Certamen de Escultura Rafael Canogar del
              Ayuntamiento La Roda (España).
            </li>
            <li>
              2016. Premio Un futuro de Arte de la Fundación DeArte (España).
            </li>
            <li>
              2014. Premio El Flechazo de la Feria de Arte Flecha de Madrid
              (España).
            </li>
            <li>
              2012-2013. Beca de Residencia de la Fundación Antonio Gala para
              Jóvenes Creadores en Córdoba (España).
            </li>
          </ul>,
        ]}
        proyNombre="Introspección"
        proyImagen={introspec}
        proyEnlace="/esculturas/introspeccion"
      />
    </>
  );
}
