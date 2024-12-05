import ImagenArte from "../reactComponents/componentes/imageArte.jsx";
import BotonVolver from "../reactComponents/componentes/BotonVolver.jsx";
import styles from "./page.module.css";
import { getEsculturas } from "../lib/getElementos";
import { Pagination } from "../reactComponents/componentes/Pagination.jsx";

const PAGE_SIZE = 3;

export default async function ArtPage({ searchParams }) {
  const { page } = searchParams;
  const { esculturas, meta } = await getEsculturas(PAGE_SIZE, page);

  return (
    <>
      <section className={styles.esculturasSect}>
        <BotonVolver retorno={"/"} />
        <h1 className={styles.esculturasHeader}> Esculturas </h1>
        <h2 className={styles.esculturasSubHeader}>
          {" "}
          Concurso Internacional de Escultura{" "}
        </h2>
        <p className={styles.esculturasText}>
          Nuevamente, grandes escultores del mundo en escena y en acción,
          trabajando a cielo abierto y en público, esculpiendo piezas que tienen
          por destino las veredas de Resistencia
        </p>
      </section>
      <div className={styles.esculturasPortada}>
        {esculturas.map((escultura) => (
          <div key={escultura.documentId} className={styles.esculturaCard}>
            <h3 className={styles.esculturaTitulo}>{escultura.nombre}</h3>
            <ImagenArte
              className={styles.esculturaImagen}
              imagen={escultura.imagen}
              enlace={"/esculturas/" + escultura.documentId}
            />
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
