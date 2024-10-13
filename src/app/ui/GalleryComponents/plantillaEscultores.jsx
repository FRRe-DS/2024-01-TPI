import ImgGeneric from "../componentes/imagenGenerica";
import ImagenArte from "./imageArte";
import Link from "next/link";

export default function PlantillaEscultoresPage({
  foto,
  bandera,
  nombre,
  pais,
  parrafo,
  proyNombre,
  proyImagen,
  proyEnlace,
}) {
  return (
    <>
      <Link href="/escultores" rel="noopener">
        <b>Regresar</b>
      </Link>

      <ImgGeneric imagen={foto} dimensions={400} />
      <ImgGeneric imagen={bandera} dimensions={50} />
      <h1>{nombre}</h1>
      <h2>
        <i>{pais}</i>
      </h2>
      <p>{parrafo}</p>
      <h2>Proyecto:</h2>
      <ImagenArte titulo={proyNombre} imagen={proyImagen} enlace={proyEnlace} />
    </>
  );
}
