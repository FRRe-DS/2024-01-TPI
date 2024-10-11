import antes from "/public/GaleriaEsculturas/Antes_Reflejo.jpg";
import despues from "/public/GaleriaEsculturas/Despues_Reflejo.jpg";
import durante from "/public/GaleriaEsculturas/Durante_Reflejo.jpg";

import PlantillaPage from "../../../ui/GalleryComponents/plantillaEscultura.jsx";

export default function ReflejoPage() {
  return (
    <PlantillaPage
      titulo="Reflejo de Luna"
      descripcion=" Esto es un placeholder
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint error
      quas amet, modi reiciendis saepe odit recusandae quos aut facere
      minima voluptatibus ex. Hic, qui ratione. Iure necessitatibus qui
      incidunt?"
      etapa1={antes}
      etapa2={durante}
      etapa3={despues}
      autor="Bogdan Adrian Lefter"
    />
  );
}
