import ImagenArte from "../ui/GalleryComponents/imageArte.jsx";
import styles from "./page.module.css";

import { getEsculturas } from "../lib/getEsculturas";

export default async function ArtPage() {
  const esculturas = await getEsculturas();
  console.log(esculturas);
  return (
    <>
      <section className={styles.esculturasSect}>
        <h1 className={styles.esculturasHeader}> Esculturas </h1>
        <p className={styles.esculturasText}>
          Nuevamente, grandes escultores del mundo en escena y en acción,
          trabajando a cielo abierto y en público, esculpiendo piezas que tienen
          por destino las veredas de Resistencia
        </p>
      </section>
      <div className={styles.esculturasPortada}>
        {esculturas.map((escultura) => (
          <ImagenArte
          key={escultura.documentId}
          className={styles.esculturasSeleccionadas}
          titulo={escultura.nombre}
          tematica={escultura.tematica}
          imagen={escultura.imagen}
          enlace={"/esculturas/" + escultura.documentId}
          />
        ))}
      </div>
    </>
  );
}
