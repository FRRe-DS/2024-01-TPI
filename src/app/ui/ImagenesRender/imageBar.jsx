import ImageAtracciones from "./imageAtracciones";
import arte from "/public/Art.jpg";
import escult from "/public/Escultor.jpg";
import evento from "/public/Event.jpg";
import Link from "next/link";

export default function ImageBar() {
  return (
    <>
      <div>
        <Link href="" target="_blank" rel="noopener noreferrer">  
          <ImageAtracciones 
            titulo={'Arte'} 
            frase={'Creaciones que superan la imaginación'} 
            imagen={arte}
          />
        </Link>
      </div>
      <div>
        <Link href="" target="_blank" rel="noopener noreferrer">  
          <ImageAtracciones 
            titulo={'Escultores'} 
            frase={'Escultores de todo el mundo'} 
            imagen={escult}
          />
        </Link>
      </div>
      <div>
        <Link href="" target="_blank" rel="noopener noreferrer">  
          <ImageAtracciones 
            titulo={'Eventos'} 
            frase={'La Bienal cuenta con una multitud de eventos'} 
            imagen={evento}
          />
        </Link>
      </div>
    </>
  );
}
