import Image from "next/image";
import Link from "next/link";
import "../../ui/imageRandom.css";

export default function ImagenArte({ titulo, imagen, enlace }) {
  return (
    <div>
      <Link href={enlace} rel="noopener no referrer">
        <h2 className="galleryNombreArte">{titulo}</h2>
      </Link>
      <Image
        className="galleryImagen"
        src={imagen}
        alt="Escultura"
        width={500}
        height={500}
      />
    </div>
  );
}
