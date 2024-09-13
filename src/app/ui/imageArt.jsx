import Image from "next/image";
import arte from "/public/Art.jpg";

export default function ImageArt() {
  return <Image src={arte} alt="Arte" width={550} height={450} />;
}
