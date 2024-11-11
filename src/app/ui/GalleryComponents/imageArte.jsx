import Image from "next/image";
import Link from "next/link";
import styles from "./imageArte.module.css";

export default function ImagenArte({ 
  titulo, 
  tematica, 
  imagen, 
  //enlace 
  }) {
  return (
    <div className={styles.galleryBox}>
      <h2 className={styles.galleryNombreArte}>{titulo}</h2>
      <p>{tematica}</p>
      <Image
        className={styles.galleryImagen}
        src={imagen}
        alt="Escultura"
        width={500}
        height={500}
      />
      {/* <Link href={enlace} rel="noopener no referrer">
        <button className={styles.galleryButton}> Ver más</button>
      </Link> */}
    </div>
  );
}
