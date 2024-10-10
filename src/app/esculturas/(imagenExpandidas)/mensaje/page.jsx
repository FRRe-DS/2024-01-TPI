import antes from "/public/GaleriaEsculturas/Antes_Mensaje.jpg";
import despues from "/public/GaleriaEsculturas/Despues_Mensaje.jpg";
import durante from "/public/GaleriaEsculturas/Durante_Mensaje.jpg";

import PlantillaPage from "../../../ui/GalleryComponents/plantillaEscultura";

export default function MensajePage() {
  return (
    <PlantillaPage
      titulo="Mensaje"
      descripcion=" Esto es un placeholder
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint error
      quas amet, modi reiciendis saepe odit recusandae quos aut facere
      minima voluptatibus ex. Hic, qui ratione. Iure necessitatibus qui
      incidunt?"
      etapa1={antes}
      etapa2={durante}
      etapa3={despues}
      autor="Anna Korver"
    />
  );
}
