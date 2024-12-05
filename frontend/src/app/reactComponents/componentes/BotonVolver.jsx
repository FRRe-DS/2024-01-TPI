import Link from "next/link";
import "../estilos/globals.css";

export default function BotonVolver({ retorno }) {
  return (
    <Link href={retorno} rel="noopener no referrer">
      <button className="boton">Volver</button>
    </Link>
  );
}
