import Image from "next/image";
import Logo from "/public/BienalLogo.png";

export function RootHeader() {
  return (
    <header className="rootHeader">
      <Image
        className="rootLogoPrincipal"
        src={Logo}
        alt="Bienal Logo"
        priority={true}
      />
      <ul>
            <li><a href="/login">Iniciar sesion</a></li>
            <li><a href="/registrarse">Registrarse</a></li>
      </ul>
      <div>
        <h1 className="rootHeaderTitulo">Bienal del Chaco</h1>
      </div>
    </header>
  );
}
