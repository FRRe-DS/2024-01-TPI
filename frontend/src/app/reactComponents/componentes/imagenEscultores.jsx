import style from "../estilos/imagenEscultores.module.css";
import Image from "next/image";
import Link from "next/link";

export default function ImagenEscultores({ nombre, foto, bandera, enlace }) {
  return (
    <>
      <Link
        className={style.escultorRedireccion}
        href={enlace}
        rel="noopener no referrer"
      >
        <div className={style.escultorContenedor}>
          <div className={style.escultorTitulo}>
            <Image
              className={style.escultorBandera}
              src={bandera}
              width={50}
              height={50}
            />
            <h1 className={style.escultorNombre}>{nombre}</h1>
          </div>
          <Image
            className={style.escultorFoto}
            src={foto}
            alt="navegacion"
            width={500}
            height={500}
          />
        </div>
      </Link>
    </>
  );
}
