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
      <h1 className={styles.escultoresNombre}>{nombre}</h1>
      <h2 className={styles.escultoresPais}>
        <i>{pais}</i>
      </h2>
      <p className={styles.escultoresBiografia}>{parrafo}</p>
      <h2 className={styles.escultoresProyectoHeader}>Proyecto:</h2>
      <ImagenArte
        className={styles.escultores}
        titulo={proyNombre}
        imagen={proyImagen}
        enlace={proyEnlace}
      />
    </>
  );
}
