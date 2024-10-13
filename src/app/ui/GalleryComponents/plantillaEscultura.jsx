import Image from "next/image";
import styles from "./plantillaEscultura.module.css";
import Link from "next/link";

export default function PlantillaPage({
  titulo,
  descripcion,
  etapa1,
  etapa2,
  etapa3,
  autor,
  enlaceEscultor,
}) {
  return (
    <>
      <h1 className={styles.esculturaDescriptTitulo}>{titulo}</h1>
      <p className={styles.esculturaDescription}>
        <b>{descripcion}</b>
      </p>
      <p className={styles.esculturaDescription}>
        Escultura construida por{" "}
        <Link href={enlaceEscultor} rel="noopener no referrer">
          {autor}
        </Link>{" "}
        a lo largo del transcurso de la Bienal
      </p>
      <div className={styles.esculturaEtapasContainer}>
        <div className={styles.esculturasEtapasBox}>
          <h2 className={styles.esculturaEtapasTitulo}>Inicio</h2>
          <Image
            className={styles.esculturasEtapasImg}
            src={etapa1}
            alt="Antes"
            width={350}
            height={250}
          />
        </div>
        <div className={styles.esculturasEtapasBox}>
          <h2 className={styles.esculturaEtapasTitulo}>En Proceso</h2>
          <Image
            className={styles.esculturasEtapasImg}
            src={etapa2}
            alt="Durante"
            width={350}
            height={250}
          />
        </div>
        <div className={styles.esculturasEtapasBox}>
          <h2 className={styles.esculturaEtapasTitulo}>Final</h2>
          <Image
            className={styles.esculturasEtapasImg}
            src={etapa3}
            alt="Despues"
            width={350}
            height={250}
          />
        </div>
      </div>
    </>
  );
}
