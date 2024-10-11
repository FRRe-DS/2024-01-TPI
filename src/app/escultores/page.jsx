import ImgGeneric from "../ui/componentes/imagenGenerica.jsx";
import Titulos from "../ui/componentes/paratexto.jsx";
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
          La Bienal ha contado con la participación de escultores de diversas
          partes del mundo.
        </p>
      </div>
      <div className="sculpImg">
        <ImgGeneric
          imagen="https://picsum.photos/800/400?random=1"
          dimensions="200"
        />
        <Titulos titulo="Sculptor1" subtitulo="Country1" />
        <ImgGeneric
          imagen="https://picsum.photos/800/400?random=2"
          dimensions="200"
        />
        <Titulos titulo="Sculptor2" subtitulo="Country2" />
        <ImgGeneric
          imagen="https://picsum.photos/800/400?random=3"
          dimensions="200"
        />
        <Titulos titulo="Sculptor3" subtitulo="Country3" />
        <ImgGeneric
          imagen="https://picsum.photos/800/400?random=4"
          dimensions="200"
        />
        <Titulos titulo="Sculptor4" subtitulo="Country4" />
        <ImgGeneric
          imagen="https://picsum.photos/800/400?random=5"
          dimensions="200"
        />
        <Titulos titulo="Sculptor5" subtitulo="Country5" />
      </div>
    </>
  );
}
