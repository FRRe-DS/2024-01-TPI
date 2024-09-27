import ImagenArte from "../ui/GalleryComponents/SculpImg.jsx";
import "./escultores.css";
/*
Cree SculpImg pero es parecida a ImageRandom, además para colocar el subtitulo y colocar a cada
imagen con su titulo y subtitulo
*/
export default function SculpPage() {
  return (
    <>
      <div className="sculpHead">
        <h1 className="sculpHead__sculpTitle">Artistas</h1>
        <h2 className="sculpHead__sculpSubtitle">Escultores Presentes</h2>
        <p className="sculpHead__sculpDescr">
         La Bienal ha contado con la participación de escultores de diversas partes del mundo. 
        </p>
      </div>
      <div className="sculpImg">
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