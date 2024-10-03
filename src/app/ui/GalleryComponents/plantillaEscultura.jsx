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
      <div className={styles.esculturaDescriptContainer}>
        <h1 className={styles.esculturaDescriptTitulo}>{titulo}</h1>
        <p>
          <b className= {styles.esculturaDescription}>{descripcion}</b>
        </p>
      </div>
      <div className={styles.esculturaDescriptContainer}>
        <p>Escultura construida por {autor} a lo largo del transcurso de la Bienal</p>
        <h2 className={styles.esculturasEtapasText}>Inicio</h2>
        <Image src={etapa1} alt="Antes" width={350} height={250} />
        <h2 className={styles.esculturasEtapasText}>En Proceso</h2>
        <Image src={etapa2} alt="Durante" width={350} height={250} />
        <h2 className={styles.esculturasEtapasText}>Final</h2>
        <Image src={etapa3} alt="Despues" width={350} height={250} />
      </div>
    </>
  );
}
