import ImageAtracciones from "./imageAtracciones";
import arte from "/public/Art.jpg";
import escult from "/public/Escultor.jpg";
import evento from "/public/Event.jpg";
//import Link from "next/link";

export default function ImageBar() {
  return (
    <>
      <div>
        <ImageAtracciones 
          titulo={'Arte'} 
          frase={'Creaciones que superan la imaginación'} 
          imagen={arte}
        />
      </div>
      <div>
        <ImageAtracciones 
          titulo={'Escultores'} 
          frase={'Escultores de todo el mundo'} 
          imagen={escult}
        />
      </div>
      <div>
        <ImageAtracciones 
          titulo={'Eventos'} 
          frase={'La Bienal cuenta con una multitud de eventos'} 
          imagen={evento}
        />
      </div>
    </>
  );
}
