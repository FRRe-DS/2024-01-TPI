import ImgGeneric from "../ui/componentes/imagenGenerica.jsx";
import Titulos from "../ui/componentes/paratexto.jsx";
import "./escultores.css"
import { getEscultores } from '../lib/getElementos';
import Link from "next/link.js";
/*
Cree SculpImg pero es parecida a ImageRandom, además para colocar el subtitulo y colocar a cada
imagen con su titulo y subtitulo
*/
export default async function Page() {
  const escultores = await getEscultores();

  return (
    <>
      <div className="sculpHead">
        <h1 className="sculpHead__sculpTitle">Artistas</h1>
        <h2 className="sculpHead__sculpSubtitle">Escultores Presentes</h2>
        <p className="sculpHead__sculpDescr">
          La Bienal ha contado con la participación de escultores de diversas
          partes del mundo.
        </p>
        <div className="sculpHead__sculpSection">
        {escultores.map((escultor) => (
          <Link href={"escultores/" + escultor.documentId} key={escultor.documentId} className="sculpLink">

            <div  className="sculpImg">

              <Titulos 
                titulo={escultor.nombre+' '+escultor.apellidos} 
                subtitulo={escultor.pais} 
              />
              <ImgGeneric
                imagen={escultor.imagen}
                dimensions="200"
              />

            </div>
          </Link>
        ))}
        </div>
      </div>
      
    </>
  );
}
