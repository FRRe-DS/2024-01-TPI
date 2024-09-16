import Image from "next/image";

export default function ImageAtracciones({titulo, frase, imagen}) {
  return (
    <>
      <h1>{titulo}</h1>
      <Image src={imagen} alt="Arte" width={550} height={450} />  
      <p>{frase}</p>
    </>
  );
}
