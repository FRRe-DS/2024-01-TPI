import { Card, CardBody, CardFooter } from "@chakra-ui/react";
// Importar las imagenes
import ImageAtracciones from "./imageAtracciones";
import arte from "/public/Art.jpg";
import escult from "/public/Escultor.jpg";
import evento from "/public/Event.jpg";

// Hasta implementar una interacción con la imagen
import Link from "next/link";

export default function ImageBar() {
  return (
    <>
      <Card className="cardContenedor">
        <CardBody className="cardCuerpo">
          <Link href="/art" rel="noopener noreferrer">
            <ImageAtracciones
              titulo={"Arte"}
              frase={"Creaciones que superan la imaginación"}
              imagen={arte}
            />
          </Link>
        </CardBody>
        <CardFooter className="cardEnlace">
          <p>
            Click en la <b>imagen</b> para ver más
          </p>
        </CardFooter>
      </Card>
      <Card className="cardContenedor">
        <CardBody className="cardCuerpo">
          <Link href="/sculptor" rel="noopener noreferrer">
            <ImageAtracciones
              titulo={"Escultores"}
              frase={"Escultores de todo el mundo"}
              imagen={escult}
            />
          </Link>
        </CardBody>
        <CardFooter className="cardEnlace">
          <p>
            Click en la <b>imagen</b> para ver más
          </p>
        </CardFooter>
      </Card>
      <Card className="cardContenedor">
        <CardBody className="cardCuerpo">
          <Link href="/events" rel="noopener noreferrer">
            <ImageAtracciones
              titulo={"Eventos"}
              frase={"La Bienal cuenta con una multitud de eventos"}
              imagen={evento}
            />
          </Link>
        </CardBody>
        <CardFooter className="cardEnlace">
          <p>
            Click en la <b>imagen</b> para ver más
          </p>
        </CardFooter>
      </Card>
    </>
  );
}
