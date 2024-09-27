import antes from "/public/GaleriaEsculturas/Antes_Hitos.jpg";
import despues from "/public/GaleriaEsculturas/Despues_Hitos.jpg";
import durante from "/public/GaleriaEsculturas/Durante_Hitos.jpg";

import PlantillaPage from "@/app/ui/GalleryComponents/plantillaEscultura";

export default function HitosPage() {
  return (
    <PlantillaPage
      titulo="Hitos"
      descripcion=" Esto es un placeholder
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint error
      quas amet, modi reiciendis saepe odit recusandae quos aut facere
      minima voluptatibus ex. Hic, qui ratione. Iure necessitatibus qui
      incidunt?"
      etapa1={antes}
      etapa2={durante}
      etapa3={despues}
      autor="Billy Lee"
    />
  );
}
