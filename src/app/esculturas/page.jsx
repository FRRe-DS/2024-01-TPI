import ImagenArte from "../ui/GalleryComponents/imageRandom";

export default function ArtPage() {
  return (
    <>
      <section>
        <p>
          Nuevamente, grandes escultores del mundo en escena y en acción, trabajando a cielo abierto y en público, esculpiendo piezas que tienen por destino las veredas de Resistencia
        </p>
      </section>
      <div>
        <ImagenArte
          titulo="Abstract1"
          imagen="https://picsum.photos/800/400?random=1"
          dimensions="500"
        />
        <ImagenArte
          titulo="Abstract2"
          imagen="https://picsum.photos/800/400?random=2"
          dimensions="500"
        />
        <ImagenArte
          titulo="Abstract3"
          imagen="https://picsum.photos/800/400?random=3"
          dimensions="500"
        />
        <ImagenArte
          titulo="Abstract4"
          imagen="https://picsum.photos/800/400?random=4"
          dimensions="500"
        />
        <ImagenArte
          titulo="Abstract5"
          imagen="https://picsum.photos/800/400?random=5"
          dimensions="500"
        />
        <ImagenArte
          titulo="Abstract6"
          imagen="https://picsum.photos/800/400?random=6"
          dimensions="500"
        />
      </div>
    </>
  );
}
