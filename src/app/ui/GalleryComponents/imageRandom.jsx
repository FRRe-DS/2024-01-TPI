import Image from "next/image";

export default function ImagenArte({ titulo, imagen }) {
  return (
    <div>
      <h1 className="galleryNombreArte">{titulo}</h1>
      <Image
        className="galleryImagen"
        src={imagen}
        alt="Escultura"
        width={350}
        height={250}
      />
    </div>
  );
}
