import Image from "next/image";

export default function ImagenArte({ titulo, subtitulo, imagen, dimensions }) {
  return (
    <div>
      <Image
        className="galleryImagen"
        src={imagen}
        alt="Escultura"
        width={dimensions}
        height={dimensions}
      />
      <h2 className="galleryNombreArte">{titulo}</h2>
      <h3 className="galletyPaisEsc">{subtitulo}</h3>
    </div>
  );
}
