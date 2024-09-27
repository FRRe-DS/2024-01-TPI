import antes from "/public/GaleriaEsculturas/Antes_Presencia.jpg";
import despues from "/public/GaleriaEsculturas/Despues_Presencia.jpg";
import durante from "/public/GaleriaEsculturas/Durante_Presencia.jpg";

import PlantillaPage from "@/app/ui/GalleryComponents/plantillaEscultura";

export default function PresenciaPage() {
  return (
    <PlantillaPage
      titulo="Presencia"
      descripcion=" Esto es un placeholder
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint error
      quas amet, modi reiciendis saepe odit recusandae quos aut facere
      minima voluptatibus ex. Hic, qui ratione. Iure necessitatibus qui
      incidunt?"
      etapa1={antes}
      etapa2={durante}
      etapa3={despues}
      autor="Butrint Morina"
    />
  );
}
