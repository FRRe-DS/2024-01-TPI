import Facebook from "/public/facebook.svg";
import Instagram from "/public/instagram.svg";
import Twitter from "/public/twitter.svg";
import WhatsApp from "/public/whatsapp.svg";
import SocialMedia from "../SocialMediaBar/socialMedia";

export function RootFooter() {
  return (
    <footer className="rootFooter">
      <h4 className="footerTitleSocial">Siganos</h4>
      <div className="footerSocial">
        <SocialMedia link="https://www.facebook.com/bienaldelchaco" imagen={Facebook} alt="Facebook" />
        <SocialMedia link="https://www.instagram.com/bienaldelchaco" imagen={Instagram} alt="Instagram" />
        <SocialMedia link="https://www.twitter.com/bienaldelchaco" imagen={Twitter} alt="Twitter" />
        <SocialMedia link="https://wa.me/15551234567?text=I'm%20bienal%20del%20chaco" imagen={WhatsApp} alt="WhatsApp" />
      </div>
      <p>© 2024 Bienal del Chaco</p>
    </footer>
  );
}
