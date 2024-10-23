import style from "./imagenEscultores.module.css";
import Image from "next/image";
import Link from "next/link";
//import ImgGeneric from "./imagenGenerica";

function ImagenesRedireccion({ titulo, bandera, imagen, enlace }) {
  return (
    <div className={style.escultorContenedor}>
      <h1 className={style.escultorTitulo}>{titulo}</h1>
      <h2 className={style.escultorPais}>{bandera}</h2>
      <Link
        className={style.escultorRedireccion}
        href={enlace}
        rel="noopener no referrer"
      >
        <Image src={imagen} alt="navegacion" width={200} height={200} />
      </Link>
    </div>
  );
}

export default function ImagenEscultores({ titulo, foto, bandera, enlace }) {
  return (
    <>
      {/*
      <ImgGeneric
        className={style.escultorBandera}
        imagen={bandera}
        dimensions={150}
      />*/}
      <ImagenesRedireccion
        titulo={titulo}
        bandera={bandera}
        imagen={foto}
        enlace={enlace}
      />
    </>
  );
}
