import Ale from "/public/Escultores/AlejandroMardonesGuillen.png";
import Cl from "/public/Banderas/cl.svg";
import euclidea from "/public/GaleriaEsculturas/Despues_Eucli.jpg";

import PlantillaEscultoresPage from "@/app/ui/GalleryComponents/plantillaEscultores";

export default function LuisPage() {
  return (
    <>
      <PlantillaEscultoresPage
        foto={Ale}
        bandera={Cl}
        nombre="Alejandro Mardones Guillen"
        pais="Chile"
        parrafo="Nació en el estado de Valparaíso, el 9 de febrero de 1981."
        distinciones={[
          "2021. Segundo Premio del IV Concurso de Escultura de la Municipalidad de Colina (Chile).",
          "2020. Primer Premio del Concurso de Escultura de la Municipalidad de Valparaíso (Chile).",
          "2012. Mención Honrosa del Concurso Arte Joven -Escultura- de Valparaíso (Chile).",
          "2005. Mención honrosa en el Concurso de Diseño Habitar Italia, Providencia (Chile). Realizó estudios de arquitectura, diseño y arte. Posee experiencia en proyectos escultóricos y en rehabilitación de espacio público; ha participado en exposiciones colectivas e individuales, residencia internacional y proyectos de intervención urbana.",
        ]}
        proyNombre="Euclidea"
        proyImagen={euclidea}
        proyEnlace="/esculturas/euclidea"
      />
    </>
  );
}
