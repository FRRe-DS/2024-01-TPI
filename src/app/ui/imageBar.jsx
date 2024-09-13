import ImageArt from "./imageArt";
import ImageEscult from "./imageEscult";
import ImageEvent from "./imageEvent";
import Link from "next/link";

export default function ImageBar() {
  return (
    <>
      <div>
        <h2>Arte</h2>
        <ImageArt />
        <p>Creaciones que superan la imaginación</p>
        <Link href="/art">Ver más </Link>
      </div>
      <div>
        <h2>Escultores</h2>
        <ImageEscult />
        <p>Escultores de todo el mundo</p>
        <Link href="/escult">Ver más </Link>
      </div>
      <div>
        <h2>Eventos</h2>
        <ImageEvent />
        <p>La Bienal cuenta con una multitud de eventos</p>
        <Link href="/event">Ver más </Link>
      </div>
    </>
  );
}
