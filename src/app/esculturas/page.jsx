import ImagenArte from "../ui/GalleryComponents/imageRandom";
import { simpleza } from "/public/Simpleza.jpg";
import { metal } from "/public/Metal.jpg";

export default function ArtPage() {
  return (
    <>
      <section className="esculturasText">
        <p>
          Nuevamente, grandes escultores del mundo en escena y en acción, trabajando a cielo abierto y en público, esculpiendo piezas que tienen por destino las veredas de Resistencia
        </p>
      </section>
      <div className="esculturasPortada">
        <ImagenArte
          titulo="Simpleza"
          src={simpleza}
        />
        <ImagenArte
          titulo="Introspección"
          src={metal}
        />
      </div>
    </>
  );
}
