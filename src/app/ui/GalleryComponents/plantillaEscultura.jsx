import Image from "next/image";

export default function PlantillaPage({
  titulo,
  descripcion,
  etapa1,
  etapa2,
  etapa3,
  autor,
}) {
  return (
    <>
      <div className="esculturaDescriptContainer">
        <h1 className="esculturaDescriptTitulo">{titulo}</h1>
        <p>
          <b className= "esculturaDescription">{descripcion}</b>
        </p>
      </div>
      <div className="esculturaDescriptContainer">
        <p>Escultura construida por {autor} a lo largo del transcurso de la Bienal</p>
        <h2 className="esculturasEtapasText">Inicio</h2>
        <Image src={etapa1} alt="Antes" width={350} height={250} />
        <h2 className="esculturasEtapasText">En Proceso</h2>
        <Image src={etapa2} alt="Durante" width={350} height={250} />
        <h2 className="esculturasEtapasText">Final</h2>
        <Image src={etapa3} alt="Despues" width={350} height={250} />
      </div>
    </>
  );
}
