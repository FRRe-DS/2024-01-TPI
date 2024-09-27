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
        <h1>{titulo}</h1>
        <p>
          <b>{descripcion}</b>
        </p>
      </div>
      <div className="esculturaEtapasContainer">
        <p>Creada por {autor} a lo largo del transcurso de la Bienal</p>
        <h2>Inicio</h2>
        <Image src={etapa1} alt="Antes" width={350} height={250} />
        <h2>En Proceso</h2>
        <Image src={etapa2} alt="Durante" width={350} height={250} />
        <h2>Final</h2>
        <Image src={etapa3} alt="Despues" width={350} height={250} />
      </div>
    </>
  );
}
