import Link from "next/link";

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
  console.log(esculturas)

  return (
    <div className="evento">
      <h2>{nombre}</h2>
      <img src={foto} alt={nombre} />
      <p>
        <strong>Lugar:</strong> {lugar}
      </p>
      <p>
        <strong>Fecha y hora:</strong> {fecha[0]} {hora[0]}:{hora[1]}hs
      </p>
      <p>
        <strong>Descripción:</strong> {descripcion}
      </p>
      <p>
        <strong>Temática:</strong> {tematica}
      </p>
      <div>
        <h3>Esculturas relacionadas</h3>
        <ul>
          {esculturas == "" ? "" : esculturas.map((escultura) => (
            <li key={escultura.documentId}>
              <img src={escultura.imagen} alt={escultura.nombre} />
              <p>{escultura.nombre}</p>
              <Link href={`/votaciones/${escultura.documentId}`}>Ir a votar</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
