import Image from "next/image";

export default function ImgGeneric({ imagen, dimensions }) {
  return (
    <div>
      <Image src={imagen} alt="imagen" width={dimensions} height={dimensions} />
    </div>
  );
}
