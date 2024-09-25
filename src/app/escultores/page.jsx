import ImagenArte from "../ui/GalleryComponents/SculpImg.jsx";
import "./escultores.css";
/*
Cree SculpImg pero es parecida a ImageRandom, además para colocar el subtitulo y colocar a cada
imagen con su titulo y subtitulo
*/
export default function SculpPage() {
  return (
    <>
      <div>
        <h1>Artistas</h1>
        <h2>Escultores Presentes</h2>
        <p>
         La Bienal ha contado con la participación de escultores de diversas partes del mundo. 
        </p>
      </div>
      <div>
        <ImagenArte
          titulo="Sculptor1"
          subtitulo="Country1"
          imagen="https://picsum.photos/800/400?random=1"
          dimensions="200"
        />
        <ImagenArte
          titulo="Sculptor2"
          subtitulo="Country2"
          imagen="https://picsum.photos/800/400?random=2"
          dimensions="200"
        />
        <ImagenArte
          titulo="Sculptor3"
          subtitulo="Country3"
          imagen="https://picsum.photos/800/400?random=3"
          dimensions="200"
        />
        <ImagenArte
          titulo="Sculptor4"
          subtitulo="Country4"
          imagen="https://picsum.photos/800/400?random=4"
          dimensions="200"
        />
      </div>
    </>
  );
}