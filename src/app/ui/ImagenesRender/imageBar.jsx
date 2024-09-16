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
      <Card>
        <CardBody>
          <ImageAtracciones
            titulo={"Arte"}
            frase={"Creaciones que superan la imaginación"}
            imagen={arte}
          />
        </CardBody>
        <CardFooter>
          <Link href="/art">Ver más</Link>
        </CardFooter>
      </Card>
      <Card>
        <CardBody>
          <ImageAtracciones
            titulo={"Escultores"}
            frase={"Escultores de todo el mundo"}
            imagen={escult}
          />
        </CardBody>
        <CardFooter>
          <Link href="/sculptors">Ver más</Link>
        </CardFooter>
      </Card>
      <Card>
        <CardBody>
          <ImageAtracciones
            titulo={"Eventos"}
            frase={"La Bienal cuenta con una multitud de eventos"}
            imagen={evento}
          />
        </CardBody>
        <CardFooter>
          <Link href="/events">Ver más</Link>
        </CardFooter>
      </Card>
    </>
  );
}
