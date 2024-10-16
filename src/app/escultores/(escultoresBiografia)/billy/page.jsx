import Billy from "/public/Escultores/BillyLee.png";
import Usa from "/public/Banderas/us.svg";
import hitos from "/public/GaleriaEsculturas/Despues_Hitos.jpg";

import PlantillaEscultoresPage from "@/app/ui/GalleryComponents/plantillaEscultores";

export default function BillyPage() {
  return (
    <>
      <PlantillaEscultoresPage
        foto={Billy}
        bandera={Usa}
        nombre="Billy Lee"
        pais="Estados Unidos"
        parrafo="Nació el 23 de junio de 1946 en Uitenhage, Sudáfrica, emigró a Inglaterra antes de establecerse en el estado de Carolina del Norte, Estados Unidos."
        distinciones={[
          "2019. Premio de Bronce en la Segunda Exposición Internacional de Escultura de Wenzhou (China).",
          "2018. Premio a la Excelencia en el Segundo Concurso de Arte Público de Shenzhen (China)",
          "2015. Premio a la Excelencia en la Quinta Exposición Internacional de Escultura del Premio Lui Kaiqu de Anhui (China).",
          "2008. Beca para artistas visuales del Consejo de las Artes de Carolina del Norte (Estados Unidos).",
          "2005. Premio a la Excelencia en Investigación de la Universidad de Carolina del Norte en Greensboro (Estados Unidos).",
          "2003. Premio Destacado en la Primera Exposición Escultura Internacional Yuzi Paradise (China).",
          "2002. Premio al Logro Artístico Sobresaliente de la Conferencia de Arte de Southeastern College (Estados Unidos).",
          "1993. Premio Rodin por su obra expuesta en el Museo al Aire Libre de Hakone (Japón).",
          "1991. Premio Especial Giacomo Manzù en la 7ª Exposición Internacional de Escultura Henry Moore (Japón).",
          "1972-1973. Beca Kennedy, el único artista hasta la fecha que tiene ese título de la familia del presidente.",
          "Integrante del Centro de Estudios Visuales Avanzados del Instituto Tecnológico de Massachusetts (Estados Unidos). Miembro de la Real Sociedad de Escultores de Londres (Inglaterra). Realizó exposiciones en El Cairo (Egipto), Venice (Italia), Londres (Inglaterra), New York y Chicago (Estados Unidos), Abu Dhabi (Emiratos Arabes Unidos), Budapest (Hungría), Beijing y Shanghai (China), Madrid y Barcelona (España), Tokyo y Osaka (Japón). Debido a su considerable y creciente reputación internacional, constantemente es invitado a exponer y emplazar obras en todo el mundo.",
        ]}
        proyNombre="Hitos"
        proyImagen={hitos}
        proyEnlace="/esculturas/hitos"
      />
    </>
  );
}
