import Image from "next/image";
import styles from "./plantillaEscultura.module.css";

export default function PlantillaPage({
  titulo,
  descripcion,
  etapa1,
  etapa2,
  etapa3,
  autor,
}) {
  return (
    <>
      <h1 className={styles.esculturaDescriptTitulo}>{titulo}</h1>
      <p className={styles.esculturaDescription}>
        <span>{descripcion}</span>
      </p>
      <p className={styles.esculturaDescription}>
        Escultura construida por <strong>{autor}</strong> a lo largo del transcurso de la Bienal
      </p>
      <div className={styles.esculturaEtapasContainer}>
        <div className={styles.esculturasEtapasBox}>
          <h2 className={styles.esculturaEtapasTitulo}>Inicio</h2>
          {etapa1 ? (
            <Image
              className={styles.esculturasEtapasImg}
              src={etapa1}
              alt="Antes"
              width={350}
              height={250}
            />
          ):
          <p>Imagen no disponible</p>}  
        </div>
        <div className={styles.esculturasEtapasBox}>
          <h2 className={styles.esculturaEtapasTitulo}>En Proceso</h2>
          {etapa2 ? (
            <Image
              className={styles.esculturasEtapasImg}
              src={etapa2}
              alt="Durante"
              width={350}
              height={250}
            />
          ):
          <p>Imagen no disponible</p>}  
        </div>
        <div className={styles.esculturasEtapasBox}>
          <h2 className={styles.esculturaEtapasTitulo}>Final</h2>
          {etapa3 ? (
            <Image
              className={styles.esculturasEtapasImg}
              src={etapa3}
              alt="Despues"
              width={350}
              height={250}
            />
          ):
          <p>Imagen no disponible</p>}
        </div>
      </div>
    </>
  );
}
