import Butrint from "/public/Escultores/ButrintMorina.png";
import Kos from "/public/Banderas/xk.svg";
import presencia from "/public/GaleriaEsculturas/Despues_Presencia.jpg";

import PlantillaEscultoresPage from "@/app/ui/GalleryComponents/plantillaEscultores";

export default function ButrintPage() {
  return (
    <>
      <PlantillaEscultoresPage
        foto={Butrint}
        bandera={Kos}
        nombre="Butrint Morina"
        pais="Kosovo"
        parrafo={[
          "Nació el 21 de abril de 1988 en el pequeño pueblo de Gllareve del municipio de Klina.",
          <br />,
          <b>Distinciones:</b>,
          <br />,
          <ul>
            <li>
              2022. Primer Premio en la Bienal de Esculptura de Ferizaj
              (Kosovo).
            </li>
            <li>
              2019. Premio de Excelencia en la Exposición de Esculturas de
              Zhhengzhou (China). Segundo Premio en la Exposición Anual de Arte
              “Flaka e Janarit” de Gjilan (Kosovo).
            </li>
            <li>
              2018. Segundo Premio de la Exposición Anual “ArtKlina” de Kline
              (Kosovo).
            </li>
            <li>
              2017. Primer Premio en la Exposición del Concurso de Escultura del
              Credins Bank de Tirana (Albania).
            </li>
            <li>
              2016. Primer Premio en la Exposición Anual “Los días de la
              Cultura” de Ferizaj (Kosovo).
            </li>
            <li>
              2014. Tercer Premio en la Exposición Internacional “Salón de
              Otoño“ de Gjilan (Kosovo).
            </li>
            <li>
              Participó en concursos de escultura en Turquía (2023, 2018, 2017,
              2014 y 2013), Albania (2022 y 2019), Egipto (2021 y 2018), Taiwán
              (2020), Macedonia (2019 y 2018), China (2019), Arabia Saudita
              (2019),
            </li>
          </ul>,
        ]}
        proyNombre="Presencia"
        proyImagen={presencia}
        proyEnlace="/esculturas/presencia"
      />
    </>
  );
}
