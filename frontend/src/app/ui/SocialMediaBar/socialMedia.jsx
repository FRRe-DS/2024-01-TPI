import Image from "next/image";
import Facebook from "/public/facebook.svg";
import Instagram from "/public/instagram.svg";
import Twitter from "/public/twitter.svg";
import WhatsApp from "/public/whatsapp.svg";
import "../globals.css";

export default function SocialMediaFooter() {
  return (
    <>
      <h4 className="footerTitleSocial">Síganos</h4>
      <div className="footerSocial">
        <a
          href="https://www.facebook.com/bienaldelchaco"
          target="_blank"
          rel="noreferrer"
        >
          <Image src={Facebook} alt="Facebook" width={30} height={30} />
        </a>
        <a
          href="https://www.instagram.com/bienaldelchaco"
          target="_blank"
          rel="noreferrer"
        >
          <Image src={Instagram} alt="Instagram" width={30} height={30} />
        </a>
        <a
          href="https://www.twitter.com/bienaldelchaco"
          target="_blank"
          rel="noreferrer"
        >
          <Image src={Twitter} alt="Twitter" width={30} height={30} />
        </a>
        <a
          href="https://wa.me/15551234567?text=I'm%20bienal%20del%20chaco"
          target="_blank"
          rel="noreferrer"
        >
          <Image src={WhatsApp} alt="WhatsApp" width={30} height={30} />
        </a>
      </div>
    </>
  );
}
