import Image from "next/image";
import Logo from "/public/BienalLogo.png";
import "../globals.css";

export function RootHeader() {
  return (
    <header className="rootHeader">
      <Image
        className="rootLogoPrincipal"
        src={Logo}
        alt="Bienal Logo"
        priority={true}
      />
      <div>
        <h1 className="rootHeaderTitulo">Bienal del Chaco</h1>
      </div>
    </header>
  );
}
