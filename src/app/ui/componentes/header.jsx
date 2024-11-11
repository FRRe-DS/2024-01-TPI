import Image from "next/image";
import Logo from "/public/BienalLogo.png";
import Link from "next/link";
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
      <ul className="rootHeaderFormContainer">
        <li>
          <Link className="rootHeaderUsuario" href="/login">
            Iniciar sesion
          </Link>
        </li>
        <li>
          <Link className="rootHeaderUsuario" href="/registrarse">
            Registrarse
          </Link>
        </li>
      </ul>
      <div>
        <Link className="rootHeaderRetorno" href="/">
          <h1 className="rootHeaderTitulo">Bienal del Chaco</h1>
        </Link>
      </div>
    </header>
  );
}
