import Image from "next/image";
import escult from "/public/Escultor.jpg";

export default function ImageEscult() {
  return <Image src={escult} alt="escultor" width={550} height={450} />;
}
