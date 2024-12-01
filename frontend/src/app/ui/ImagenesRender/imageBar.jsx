// Importar las imagenes
import ImagenesRedireccion from "./imageRedireccion";
import esculturas from "/public/Art.jpg";
import escult from "/public/Escultor.jpg";
import evento from "/public/Event.jpg";
import style from "../../page.module.css";

export default function ImageBar() {
  return (
    <>
      <div className={style.gridImages}>
        <div className={style.rootNavContenedor}>
          <ImagenesRedireccion
            titulo="Esculturas"
            imagen={esculturas}
            enlace="/esculturas"
          />
        </div>
        <div className={style.rootNavContenedor}>
          <ImagenesRedireccion
            titulo="Escultores"
            imagen={escult}
            enlace="/escultores"
          />
        </div>
        <div className={style.rootNavContenedor}>
          <ImagenesRedireccion
            titulo="Eventos"
            imagen={evento}
            enlace="/eventos"
          />
        </div>
      </div>
    </>
  );
}
