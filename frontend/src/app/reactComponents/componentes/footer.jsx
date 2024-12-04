import SocialMediaFooter from "./socialMedia";
import "../estilos/globals.css";
import Link from "next/link";

export function RootFooter() {
  return (
    <footer className="rootFooter">
      <SocialMediaFooter />
      <Link className="link-panel" target="_blank" rel="noopener noreferrer" href="http://localhost:1337/">Panel Admin</Link>
      <div className="footerText">© 2024 Bienal del Chaco</div>
    </footer>
  );
}
