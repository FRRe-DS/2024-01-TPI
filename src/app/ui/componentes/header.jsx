import Image from "next/image";
import Logo from "/public/BienalLogo.png";

export function RootHeader() {
    return (
      <header>
        <Image src={Logo} alt="Bienal Logo" />
        <div>
          <h1>Bienal del Chaco</h1>
          <p>Por amor al arte</p>
        </div>
      </header>
    );
  }