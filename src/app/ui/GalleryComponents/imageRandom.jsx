import Image from "next/image";

export default function ImagenArte({ titulo, imagen, dimensions }) {
  return (
    <div>
      <h1 className="galleryNombreArte">{titulo}</h1>
      <Image
        className="galleryImagen"
        src={imagen}
        alt="Escultura"
        width={dimensions}
        height={dimensions}
      />
    </div>
  );
}
