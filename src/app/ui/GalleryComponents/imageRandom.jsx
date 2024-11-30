import Image from "next/image";
import "../../estilosHome/infoExtra.css"

export default function ImagenArte({ titulo, imagen, dimensions }) {
  return (
    <div>
      <h1 className="galleryNombreArte">{titulo}</h1>
      <Image
        className="predio__imagen"
        src={imagen}
        alt={titulo}
        width={dimensions}
        height={dimensions}
      />
    </div>
  );
}
