import Image from "next/image";
import Link from "next/link";
import style from "../estilos/page.module.css";

export default function ImagenesRedireccion({ titulo, imagen, enlace }) {
  return (
    <>
      <Link href={enlace} rel="noopener no referrer">
        <Image
          className={style.rootNavImagen}
          src={imagen}
          alt="navegacion"
          width={550}
          height={450}
        />
      </Link>
      <h1 className={style.rootNavTitulo}>{titulo}</h1>
    </>
  );
}
