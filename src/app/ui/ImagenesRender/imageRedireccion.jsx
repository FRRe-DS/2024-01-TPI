import Image from "next/image";
import Link from "next/link";

export default function ImagenesRedireccion({ titulo, imagen, enlace }) {
  return (
    <>
      <div className="cardContenedor">
        <h1 className="rootNavTitulo">{titulo}</h1>
        <Link href={enlace} rel="noopener no referrer">
          <Image
            className="rootNavImagen"
            src={imagen}
            alt="navegacion"
            width={550}
            height={450}
          />
        </Link>
      </div>
    </>
  );
}
