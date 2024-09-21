import Link from "next/link";
import Image from "next/image";

export default function SocialMedia(link, imagen, alt) {
  return (
    <Link href={link} rel="noreferrer">
      <Image src={imagen} alt={alt} width={30} height={30} />
    </Link>
  );

}
