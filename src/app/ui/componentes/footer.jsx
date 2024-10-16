import SocialMediaFooter from "../SocialMediaBar/socialMedia";
import "../globals.css";

export function RootFooter() {
  return (
    <footer className="rootFooter">
      <SocialMediaFooter />
      <p>© 2024 Bienal del Chaco</p>
    </footer>
  );
}
