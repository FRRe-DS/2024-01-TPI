import Percy from "/public/Escultores/PercyRaulZorrillaSoto.png";
import Pr from "/public/Banderas/pe.svg";
import ritmo from "/public/GaleriaEsculturas/Despues_Ritmo.jpg";

import PlantillaEscultoresPage from "@/app/ui/GalleryComponents/plantillaEscultores";

export default function PercyPage() {
  return (
    <>
      <PlantillaEscultoresPage
        foto={Percy}
        bandera={Pr}
        nombre="Percy Raúl Zorrilla Soto"
        pais="Perú"
        parrafo="Nació el 7 de agosto de 1971 (Lima)."
        distinciones={[
          "2014. Escultor Invitado de la Bienal del Chaco (Argentina). Tercer Premio del Primer Simposio Internacional de Escultura, Escuela del Mármol de Andalucía – Universidad de Almería (España).",
          "2013. Primer Premio del XV Concurso Nacional de Escultura Luis Hochschild Plaut de Lima (Perú). Primer Premio del Concurso para Escultura Pública Premio Peter & Adriana Hobart de la Fundación Hobart (Perú).",
          "2007. Primer Premio del IX Concurso Nacional de Escultura Luis Hochschild Plaut de Lima (Perú).",
          "2006. Primer premio, Concurso Nacional de Escultura Luis Hochschild Plaut, Perú.",
          "2003. Primer Premio del diseño de la escultura “Premio Nacional de la Juventud” para el Ministerio de Educación (Perú). Tercer Premio del III Simposio Internacional de Escultura en Granito, (Perú).",
          "2002. Premio para Escultura Pública del Simposio Internacional de Escultura de Okanagan Thompson, Columbia Británica (Canadá).",
          "1997. Segundo Premio y Medalla de Plata en Escultura de la III Bienal de Bellas Artes de Lima. Escuela Nacional de Bellas Artes (Perú).",
          "1996. Primer Premio del III Salón Nacional de Escultura del Instituto Cultural Peruano Norteamericano (Perú).",
        ]}
        proyNombre="Ritmo"
        proyImagen={ritmo}
        proyEnlace="/esculturas/ritmo"
      />
    </>
  );
}
