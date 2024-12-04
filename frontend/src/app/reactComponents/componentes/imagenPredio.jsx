import Image from "next/image";
import "../estilos/infoExtra.css";

export default function ImgPredio({ titulo, imagen, dimensions }) {
  return (
    <>
      <h1 className="predio_titulo">{titulo}</h1>
      <Image
        className="predio__imagen"
        src={imagen}
        alt={titulo}
        width={dimensions}
        height={dimensions}
      />
    </>
  );
}
