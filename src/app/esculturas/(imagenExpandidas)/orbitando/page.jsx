import antes from "/public/GaleriaEsculturas/Antes_Orbitando.jpg";
import despues from "/public/GaleriaEsculturas/Despues_Orbitando.jpg";
import durante from "/public/GaleriaEsculturas/Durante_Orbitando.jpg";

import PlantillaPage from "@/app/ui/GalleryComponents/plantillaEscultura";

export default function OrbitandoPage() {
  return (
    <PlantillaPage
      titulo="Orbitando Ideas"
      descripcion=" Esto es un placeholder
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint error
      quas amet, modi reiciendis saepe odit recusandae quos aut facere
      minima voluptatibus ex. Hic, qui ratione. Iure necessitatibus qui
      incidunt?"
      etapa1={antes}
      etapa2={durante}
      etapa3={despues}
      autor="Solveiga Vasiljeva"
    />
  );
}
