// Importar las imagenes
import ImagenesRedireccion from "./imageRedireccion";
import esculturas from "/public/Art.jpg";
import escult from "/public/Escultor.jpg";
import evento from "/public/Event.jpg";

export default function ImageBar() {
  return (
    <>
      <ImagenesRedireccion
        titulo="Esculturas"
        imagen={esculturas}
        enlace="/esculturas"
      />
      <ImagenesRedireccion
        titulo="Escultores"
        imagen={escult}
        enlace="/escultores"
      />
      <ImagenesRedireccion titulo="Eventos" imagen={evento} enlace="/eventos" />
    </>
  );
}
