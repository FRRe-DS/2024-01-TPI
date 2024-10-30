import ImagenEscultores from "../ui/GalleryComponents/imagenEscultores";
import { getEscultores } from "../lib/getElementos";
import styles from "./page.module.css";
import { Pagination } from "../ui/componentes/Pagination";

const PAGE_SIZE = 6;

export default async function EscultoresPage() {
  const {escultores, meta} = await getEscultores(PAGE_SIZE, 1);

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
            bandera={escultor.bandera}
            enlace={"escultores/" + escultor.documentId}
            key={escultor.documentId}
          />
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
