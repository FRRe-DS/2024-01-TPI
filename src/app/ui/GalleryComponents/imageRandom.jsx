import Image from "next/image";
import styles from "../../page.module.css"

export default function ImagenArte({ titulo, imagen, dimensions }) {
  return (
    <div>
      <h1 className="galleryNombreArte">{titulo}</h1>
      <Image
        className={styles.predio__imagen}
        src={imagen}
        alt={titulo}
        width={dimensions}
        height={dimensions}
      />
    </div>
  );
}
