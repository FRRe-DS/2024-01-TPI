import Luis from "/public/Escultores/LuisBernardi.png";
import Arg from "/public/Banderas/ar.svg";
import simpleza from "/public/GaleriaEsculturas/Despues_Simpleza.jpg";
import PlantillaEscultoresPage from "../../../ui/GalleryComponents/plantillaEscultores";

export default function LuisPage() {
  return (
    <>
      <PlantillaEscultoresPage
        foto={Luis}
        bandera={Arg}
        nombre="Luis Bernardi"
        pais="Argentina"
        parrafo={[
          "Nacido el 23 de septiembre de 1965 en la ciudad de Monte Caseros,Corrientes. Actualmente reside en la ciudad de Unquillo, provincia de Córdoba.",
          <br />,
          <b>Distinciones:</b>,
          <br />,
          <ul>
            <li>
              2021. Primer Premio del 65° Salón de Artes Plásticas “Manuel
              Belgrano”. Ciudad Autónoma de Buenos Aires (Argentina).
            </li>
            <li>
              2017. Primer Premio del Concurso Provincial de Escultura de Villa
              María, Córdoba. (Argentina).
            </li>
            <li>
              2015. Mención del 104° Salón Nacional de Artes Visuales -Sección
              Esculturas- Ciudad Autónoma de Buenos Aires (Argentina).
            </li>
            <li>
              2002. Mención Especial del Jurado en el XIX Salón Provincial
              -sección escultura- de Artistas Plásticos Asociados de Córdoba
              (Argentina).
            </li>
            <li>
              2000. Mención del Jurado y Premio del Público en el 9° Encuentro
              Nacional de Escultura en Madera de Leandro N. Alem, Misiones
              (Argentina).
            </li>
          </ul>,
        ]}
        proyNombre="Simpleza"
        proyImagen={simpleza}
        proyEnlace="/esculturas/simpleza"
      />
    </>
  );
}
