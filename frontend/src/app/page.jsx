import ImageBar from "./reactComponents/componentes/imageBar";
import InfoExtra from "./reactComponents/componentes/InfoExtra";
import styles from "./reactComponents/estilos/page.module.css";
import "./reactComponents/estilos/globals.css";

export default function Home() {
  return (
    <>
      <main>
        <h2> Por amor al Arte</h2>
        <section className={styles.rootPageCita}>
          <h1 className={styles.rootCitaTitulo}>
            "Un certamen internacional único en el mundo"
          </h1>

          <p className={styles.rootCitaParrafo}>
            - José Eidman, presidente de la Fundación Urunday
          </p>
        </section>
        <div className={styles.rootPResentacion}>
          <p className={styles.rootTituloTexto}>
            Un acontecimiento cultural modelo en el mundo
          </p>
          <p className={styles.rootTexto}>
            La Bienal de Esculturas de Chaco es un evento de arte que se celebra
            en Resistencia, Chaco, Argentina. Se realiza cada dos años y tiene
            como objetivo reunir prestigiosos artistas nacionales e
            internacionales para crear esculturas en vivo, muchas de las cuales
            se integran en el patrimonio cultural de la ciudad, conocida como la
            "Ciudad de las Esculturas" debido a su vasto número de obras
            expuestas al aire libre.
          </p>
        </div>

        <div className={styles.gridTabla}>
          <div className={styles.gridItem}>
            <p className={styles.rootTituloTexto}>Escultura en vivo</p>
            <p className={styles.rootTexto}>
              Los artistas, seleccionados a nivel internacional, trabajan
              durante aproximadamente una semana en sus esculturas. Estas obras
              suelen estar hechas de materiales duraderos, como piedra, metal,
              mármol, madera, entre otros. El público tiene la oportunidad de
              observar cómo las ideas toman forma en tiempo real, lo que
              convierte el evento en una experiencia educativa y dinámica.
            </p>
            <p className={styles.rootTituloTexto}>Exposición permanente</p>
            <p className={styles.rootTexto}>
              Resistencia es conocida como la "Ciudad de las Esculturas" debido
              a la gran cantidad de obras que la adornan. Muchas de las
              esculturas creadas en las ediciones anteriores de la bienal pasan
              a formar parte de esta exposición permanente al aire libre.
              Actualmente, hay más de 600 esculturas distribuidas por toda la
              ciudad, lo que convierte a Resistencia en un verdadero museo a
              cielo abierto.
            </p>
          </div>
          <div className={styles.gridItem}>
            <p className={styles.rootTituloTexto}>
              Talleres y actividades complementarias
            </p>
            <p className={styles.rootTexto}>
              Durante la bienal, además de la competencia de esculturas, se
              organizan talleres, charlas, exposiciones y actividades educativas
              para el público. Estos espacios están diseñados tanto para
              artistas profesionales como para aficionados y estudiantes. La
              comunidad local, en particular, se involucra activamente, lo que
              refuerza el sentido de pertenencia y la apreciación del arte.
            </p>
            <p className={styles.rootTituloTexto}>Temática</p>
            <p className={styles.rootTexto}>
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

        <nav className={styles.rootSeccionNavegacion}>
          <ImageBar />
        </nav>

        <InfoExtra />
      </main>
    </>
  );
}
