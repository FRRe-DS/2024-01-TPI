import Link from "next/link";
import styles from "./plantillaEvento.module.css";

export default function Page({
  nombre,
  lugar,
  fecha_hora,
  descripcion,
  foto,
  tematica,
  esculturas,
}) {
  const fecha = fecha_hora.split("T");
  const hora = fecha[1].split(":");
  const todasEsculturas = esculturas == null ? "" : esculturas.esculturas;

  return (
    <>
    <div className={styles.evento}>
      <h2 className={styles.eventoNombre}>{nombre}</h2>
      <img className={styles.eventoImagen} src={foto} alt={nombre} />
    </div>

    <div className={styles.estilosEspecificaciones}>
        <p className={styles.eventoParrafo}>
          <strong>Lugar:</strong> {lugar}
        </p>
        <p className={styles.eventoParrafo}>
          <strong>Fecha y hora:</strong> {fecha[0]} {hora[0]}:{hora[1]}hs
        </p>
        <p className={styles.eventoParrafo}>
          <strong>Descripción:</strong> {descripcion}
        </p>
        <p className={styles.eventoParrafo}>
          <strong>Temática:</strong> {tematica}
        </p>
    </div>

      <div className={styles.relacionado}>
        <h3 className={styles.eventoEsculTitulo}>Esculturas relacionadas</h3>
        <ul className={styles.eventoListas}>
          {todasEsculturas == "" ? "" : todasEsculturas.map((escultura) => (
            <li className={styles.eventoElementoLista} key={escultura.documentId}>
              <img className={styles.eventoImagenLista} src={escultura.imagen} alt={escultura.nombre} />
              <p className={styles.eventoParrafoLista}>{escultura.nombre}</p>
              <Link className={styles.eventoLinkLista} href={`/votaciones/${escultura.documentId}`}>Ir a votar</Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
