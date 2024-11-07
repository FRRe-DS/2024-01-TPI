import style from "./imagenEscultores.module.css";
import Image from "next/image";
import Link from "next/link";
import ImgGeneric from "./imagenGenerica";

export default function ImagenEscultores({ titulo, foto, bandera, enlace }) {
  return (
    <div className={style.escultorContenedor}>
      <ImgGeneric
        className={style.escultorBandera}
        imagen={bandera}
        dimensions={150}
      />
      <h1 className={style.escultorTitulo}>{titulo}</h1>
      <Link
        className={style.escultorRedireccion}
        href={enlace}
        rel="noopener no referrer"
      >
        <Image src={foto} alt="navegacion" width={200} height={200} />
      </Link>
    </div>
  );
}
