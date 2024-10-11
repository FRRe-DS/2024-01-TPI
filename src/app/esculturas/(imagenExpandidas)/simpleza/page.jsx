import antes from "/public/GaleriaEsculturas/Antes_Simpleza.jpg";
import despues from "/public/GaleriaEsculturas/Despues_Simpleza.jpg";
import durante from "/public/GaleriaEsculturas/Durante_Simpleza.jpg";

import PlantillaPage from "../../../ui/GalleryComponents/plantillaEscultura.jsx";

export default function SimplezaPage() {
  return (
    <PlantillaPage
      titulo="Simpleza"
      descripcion=" Desde hace algún tiempo, parte de la escultura del autor se sostiene y se construye en la línea; y ésta se sustenta en un material muy noble pero frío e implacable como el metal y otras veces en uno cálido y suave como la madera. El color ocupa un lugar importante en su trabajo porque por donde transita hay color, en la dirección que mira hay color, hay infinidades de colores."
      etapa1={antes}
      etapa2={durante}
      etapa3={despues}
      autor="Luis Bernardi"
    />
  );
}
