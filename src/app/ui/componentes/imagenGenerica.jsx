import Image from "next/image";

export default function ImgGeneric({ imagen, dimensions }) {
  return (
    <div>
      <Image
        className="galleryImagen"
        src={imagen}
        alt="imagen"
        width={dimensions}
        height={dimensions}
      />
    </div>
  );
}
