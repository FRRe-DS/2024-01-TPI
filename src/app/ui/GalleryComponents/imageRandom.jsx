import Image from "next/image";
import Link from "next/link";
import styles from "./imageRandom.module.css";

export default function ImagenArte({ titulo, imagen, enlace }) {
  return (
    <div className={styles.galleryBox}>
      <Link className={styles.galleryLink} href={enlace} rel="noopener no referrer">
        <h2 className={styles.galleryNombreArte}>{titulo}</h2>
      </Link>
      <Image
        className={styles.galleryImagen}
        src={imagen}
        alt="Escultura"
        width={500}
        height={500}
      />
    </div>
  );
}
