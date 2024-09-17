import ImageBar from "./ui/ImagenesRender/imageBar";

export default function Home() {
  return (
    <>
      <main>
        <section className="rootPageCita">
          <h1 className="rootCitaTitulo">
            "Un certamen internacional único en el mundo"
          </h1>

          <p className="rootCitaParrafo">
            - José Eidman, presidente de la Fundación Urunday
          </p>
        </section>

        <div>
          <p className="rootTituloTexto">
            {" "}
            Un acontecimiento cultural modelo en el mundo{" "}
          </p>

          <p className="rootTexto">
            La Bienal de Esculturas de Chaco es un evento de arte que se celebra
            en Resistencia, Chaco, Argentina. Se realiza cada dos años y tiene
            como objetivo reunir prestigiosos artistas nacionales e
            internacionales para crear esculturas en vivo, muchas de las cuales
            se integran en el patrimonio cultural de la ciudad, conocida como la
            "Ciudad de las Esculturas" debido a su vasto número de obras
            expuestas al aire libre
          </p>

          <div>
            <p className="rootTituloTexto"> Escultura en vivo </p>

            <p className="rootTexto">
              Los artistas, seleccionados a nivel internacional, trabajan
              durante aproximadamente una semana en sus esculturas. Estas obras
              suelen estar hechas de materiales duraderos, como piedra, metal,
              mármol, madera, entre otros. El público tiene la oportunidad de
              observar cómo las ideas toman forma en tiempo real, lo que
              convierte el evento en una experiencia educativa y dinámica.
            </p>

            <p className="rootTituloTexto">Exposición permanente</p>

            <p className="rootTexto">
              Resistencia es conocida como la "Ciudad de las Esculturas" debido
              a la gran cantidad de obras que la adornan. Muchas de las
              esculturas creadas en las ediciones anteriores de la bienal pasan
              a formar parte de esta exposición permanente al aire libre.
              Actualmente, hay más de 600 esculturas distribuidas por toda la
              ciudad, lo que convierte a Resistencia en un verdadero museo a
              cielo abierto.
            </p>

            <p className="rootTituloTexto">
              Talleres y actividades complementarias{" "}
            </p>

            <p className="rootTexto">
              Durante la bienal, además de la competencia de esculturas, se
              organizan talleres, charlas, exposiciones y actividades educativas
              para el público. Estos espacios están diseñados tanto para
              artistas profesionales como para aficionados y estudiantes. La
              comunidad local, en particular, se involucra activamente, lo que
              refuerza el sentido de pertenencia y la apreciación del arte.
            </p>

            <p className="rootTituloTexto">Temática</p>

            <p className="rootTexto">
              Cada edición de la bienal tiene una temática que guía a los
              escultores en la creación de sus obras. Las temáticas están
              relacionadas con cuestiones actuales como la identidad cultural,
              la naturaleza, la historia local o problemas sociales globales.
              Estas temáticas permiten que los artistas aborden temas relevantes
              desde una perspectiva artística, generando una reflexión en los
              espectadores.
            </p>
          </div>
        </div>

        <section className="rootSeccionNavegacion">
          <ImageBar />
        </section>
      </main>
    </>
  );
}
