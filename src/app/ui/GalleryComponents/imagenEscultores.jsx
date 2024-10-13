import ImgGeneric from "../componentes/imagenGenerica";
import ImagenesRedireccion from "../ImagenesRender/imageRedireccion";

export default function ImagenEscultores({ titulo, foto, bandera, enlace }) {
  return (
    <>
      <ImagenesRedireccion titulo={titulo} imagen={foto} enlace={enlace} />
      <ImgGeneric imagen={bandera} dimensions={150} />
    </>
  );
}
