import ImagenEscultores from "../ui/GalleryComponents/imagenEscultores";
import { getEscultores } from "../lib/getElementos";
import styles from "./page.module.css";

export default async function EscultoresPage() {
  const escultores = await getEscultores();
  return (
    <>
      <div className={styles.escultoresSect}>
        <h1 className={styles.escultoresHeader}> Escultores Seleccionados </h1>
        <p className={styles.escultoresText}>
          De todas partes del mundo, escultores se congregan para competir con
          sus obras
        </p>
      </div>
      <div className={styles.escultoresPortada}>
        {escultores.map((escultor) => (
          <ImagenEscultores
            titulo={escultor.nombre + " " + escultor.apellidos}
            foto={escultor.imagen}
            bandera={escultor.pais}
            enlace={"escultores/" + escultor.documentId}
            key={escultor.documentId}
          />
        ))}
      </div>
    </>
  );
}
