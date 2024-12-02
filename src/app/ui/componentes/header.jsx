import Image from "next/image";
import Logo from "/public/BienalLogo.png";
import Link from "next/link";
import "../globals.css";
import AuthContainer from "./AuthContainer";

export function RootHeader() {
  return (
    <header className="rootHeader">
      <Image
        className="rootLogoPrincipal"
        src={Logo}
        alt="Bienal Logo"
        priority={true}
      />
      <ul className="rootHeaderFormContainer">
        <AuthContainer/>
      </ul>
      <Link className="rootHeaderRetorno" href="/">
        <h1 className="rootHeaderTitulo">Bienal del Chaco</h1>
      </Link>
    </header>
  );
}
