
export default function Page(
    {nombre, lugar, fecha_hora, descripcion, foto, tematica}
){
    const fecha = fecha_hora.split('T');
    const hora = fecha[1].split(':');

    return(
        <div className="evento">
            <h2>{nombre}</h2>
            <img src={foto} alt={nombre} />
            <p><strong>Lugar:</strong> {lugar}</p>
            <p><strong>Fecha y hora:</strong> {fecha[0]} {hora[0]}:{hora[1]}hs</p>
            <p><strong>Descripción:</strong> {descripcion}</p>
            <p><strong>Temática:</strong> {tematica}</p>
        </div>
    )
}