import antes from "/public/GaleriaEsculturas/Antes_Simpleza.jpg";
import despues from "/public/GaleriaEsculturas/Despues_Simpleza.jpg";
import durante from "/public/GaleriaEsculturas/Durante_Simpleza.jpg";

import PlantillaPage from "../../../ui/GalleryComponents/plantillaEscultura";

export default function SimplezaPage() {
  return (
    <PlantillaPage
      titulo="Simpleza"
      descripcion=" Esto es un placeholder
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint error
            quas amet, modi reiciendis saepe odit recusandae quos aut facere
            minima voluptatibus ex. Hic, qui ratione. Iure necessitatibus qui
            incidunt?"
      etapa1={antes}
      etapa2={durante}
      etapa3={despues}
      autor="Luis Bernardi"
    />
  );
}
