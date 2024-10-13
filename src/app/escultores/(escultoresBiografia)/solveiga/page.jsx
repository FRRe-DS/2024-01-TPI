import Solveiga from "/public/Escultores/SolveigaVasiljeva.png";
import Lv from "/public/Banderas/lv.svg";
import orbitando from "/public/GaleriaEsculturas/Despues_Orbitando.jpg";

import PlantillaEscultoresPage from "@/app/ui/GalleryComponents/plantillaEscultores";

export default function SolveigaPage() {
  return (
    <>
      <PlantillaEscultoresPage
        foto={Solveiga}
        bandera={Lv}
        nombre="Solveiga Vasiljeva"
        pais="Letonia"
        parrafo={[
          "Nacida el 05 de abril de 1954 en la ciudad de Sigulda, Letonia.",
          <br />,
          <b>Distinciones:</b>,
          <br />,
          <ul>
            <li>
              2008. Primer Premio Signo de memoria Dzegužkalns de Riga
              (Letonia).
            </li>
            <li>
              2007. Premio de Consolación del Concurso Internacional para
              Monumento a las Víctimas de la Ocupación Soviética de Riga
              (Letonia).
            </li>
            <li>
              2005. Primer Premio del Concurso de Escultura para el Monumento a
              las víctimas de la Segunda Guerra Mundial de Riga (Letonia).
            </li>
            <li>
              2000. Primer Premio ArtBaltic en el Concurso Arte en el aire
              (Letonia) Participó de concursos de escultura en Taiwan (2017 y
              2016), Japón (2013 y 2007), China (2011), Bienal del Chaco,
              Argentina (2010), Suiza (2009), República Checa (2008), Polonia
              (2006), Dinamarca (2005 y 1998), Turquía (2002 y 1998).
            </li>
          </ul>,
        ]}
        proyNombre="Orbitando"
        proyImagen={orbitando}
        proyEnlace="/esculturas/orbitando"
      />
    </>
  );
}
