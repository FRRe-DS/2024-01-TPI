import ImagenArte from "../ui/GalleryComponents/imageArte.jsx";
import styles from "./page.module.css";
import { getEsculturas } from "../lib/getElementos";
import { Pagination } from "../ui/componentes/Pagination";

const PAGE_SIZE = 3;

export default async function ArtPage({searchParams}) {
  const { page } = searchParams;
  const {esculturas, meta} = await getEsculturas(PAGE_SIZE, page);

  return (
    <>
      <section className={styles.esculturasSect}>
        <h1 className={styles.esculturasHeader}> Esculturas </h1>
        <h2 className={styles.esculturasSubHeader}> Concurso Internacional de Escultura </h2>
        <p className={styles.esculturasText}>
          Nuevamente, grandes escultores del mundo en escena y en acción,
          trabajando a cielo abierto y en público, esculpiendo piezas que tienen
          por destino las veredas de Resistencia
        </p>
      </section>
      <div className={styles.esculturasPortada}>
          {esculturas.map((escultura) => (
            <div key={escultura.documentId} className={styles.esculturaCard}>
              <ImagenArte
                className={styles.esculturaImagen}
                imagen={escultura.imagen}
                enlace={"/esculturas/" + escultura.documentId}
              />
              <h3 className={styles.esculturaTitulo}>{escultura.nombre}</h3>
            </div>
          ))}
      </div>
      <Pagination 
          page={meta.page}
          pageSize={meta.pageSize}
          pageCount={meta.pageCount}
          total={meta.total}
          ></Pagination>
    </>
  );
}
