import Image from "next/image";
import evento from "/public/Event.jpg";

export default function ImageEvent() {
  return <Image src={evento} alt="Evento" width={550} height={450} />;
}
