import SocialMediaFooter from "./socialMedia";
import "../estilos/globals.css";
import Link from "next/link";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export function RootFooter() {
  return (
    <footer className="rootFooter">
      <SocialMediaFooter />
      <Link className="link-panel" target="_blank" rel="noopener noreferrer" href={API_URL}>Panel Admin</Link>
      <div className="footerText">© 2024 Bienal del Chaco</div>
    </footer>
  );
}
