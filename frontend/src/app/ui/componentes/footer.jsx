import SocialMediaFooter from "../SocialMediaBar/socialMedia";
import "../globals.css";
import Link from "next/link";

export function RootFooter() {
  return (
    <footer className="rootFooter">
      <SocialMediaFooter />
      <Link className="link-panel" target="_blank" rel="noopener noreferrer" href="http://localhost:1337/">Panel Admin</Link>
      <p>© 2024 Bienal del Chaco</p>
    </footer>
  );
}
