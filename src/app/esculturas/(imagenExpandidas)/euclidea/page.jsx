import antes from "/public/GaleriaEsculturas/Antes_Eucli.jpg";
import despues from "/public/GaleriaEsculturas/Despues_Eucli.jpg";
import durante from "/public/GaleriaEsculturas/Durante_Eucli.jpg";

import PlantillaPage from "../../../ui/GalleryComponents/plantillaEscultura";

export default function EuclideaPage() {
  return (
    <PlantillaPage
      titulo="Vida No Euclidea"
      descripcion="Esto es un placeholder
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint error
            quas amet, modi reiciendis saepe odit recusandae quos aut facere
            minima voluptatibus ex. Hic, qui ratione. Iure necessitatibus qui
            incidunt?"
      etapa1={antes}
      etapa2={durante}
      etapa3={despues}
      autor="Alejandro Guillen"
    />
  );
}
