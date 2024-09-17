import Image from "next/image";

export default function ImageAtracciones({ titulo, frase, imagen }) {
  return (
    <>
      <h1 className="rootNavTitulo">{titulo}</h1>
      <Image
        className="rootNavImagen"
        src={imagen}
        alt="Arte"
        width={550}
        height={450}
      />
      <p className="rootNavDesc">{frase}</p>
    </>
  );
}
