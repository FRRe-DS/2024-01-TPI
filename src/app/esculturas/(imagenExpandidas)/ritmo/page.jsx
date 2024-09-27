import antes from "/public/GaleriaEsculturas/Antes_Ritmo.jpg";
import despues from "/public/GaleriaEsculturas/Despues_Ritmo.jpg";
import durante from "/public/GaleriaEsculturas/Durante_Ritmo.jpg";

import PlantillaPage from "../../../ui/GalleryComponents/plantillaEscultura";

export default function RitmoPage() {
  return (
    <PlantillaPage
      titulo="Ritmo Cósmico"
      descripcion=" Esto es un placeholder
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint error
            quas amet, modi reiciendis saepe odit recusandae quos aut facere
            minima voluptatibus ex. Hic, qui ratione. Iure necessitatibus qui
            incidunt?"
      etapa1={antes}
      etapa2={durante}
      etapa3={despues}
      autor="Percy Raúl Zorrilla Soto"
    />
  );
}
