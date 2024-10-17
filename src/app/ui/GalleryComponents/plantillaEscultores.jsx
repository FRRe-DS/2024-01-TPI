import ImgGeneric from "./imagenGenerica";
//import ImagenArte from "./imageArte";
import Link from "next/link";
import styles from "./plantillaEscultores.module.css";

export default function PlantillaEscultoresPage({
  foto,
  //bandera,
  nombre,
  pais,
  parrafo,
  distinciones,
  proyNombre,
  //proyImagen,
  //proyEnlace,
}) {
  return (
    <>
      <Link
        className={styles.escultoresRetorno}
        href="/escultores"
        rel="noopener"
      >
        <b>Regresar</b>
      </Link>
      <div className={styles.escultoresContainer}>
        <ImgGeneric
          className={styles.escultoresImg}
          imagen={foto}
          dimensions={400}
        />
        {/*<ImgGeneric
          className={styles.escultoresImg}
          imagen={bandera}
          dimensions={50}
        />*/}
        <h1 className={styles.escultoresNombre}>{nombre}</h1>
        <h2 className={styles.escultoresPais}>
          <i>{pais}</i>
        </h2>
        <p className={styles.escultoresBiografia}>{parrafo}</p>

        <div className={styles.escultoresDistinciones}>
          <b>Distinciones</b>
          <br />
          <ul className={styles.escultoresLista}>
            {distinciones.map((distincion, index) => (
              <li className={styles.escultoresItems} key={index}>
                {distincion}
              </li>
            ))}
          </ul>
        </div>
        <h2 className={styles.escultoresProyectoHeader}>
          Proyecto: <b>{proyNombre}</b>
        </h2>
        {/*<ImagenArte
          className={styles.escultores}
          titulo={proyNombre}
          imagen={proyImagen}
          enlace={proyEnlace}
        />*/}
      </div>
    </>
  );
}
