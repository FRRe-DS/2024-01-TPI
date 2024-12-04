import { useRef } from "react";  // Para usar referencias y manipular el scroll
import styles from '../estilos/carrousel.module.css'
import Link from "next/link";
import Image from "next/image";

const Carousel = ({ eventosRec }) => {
  const carouselRef = useRef(null);

  const handleScroll = (direction) => {
    const carousel = carouselRef.current;
    if (carousel) {
      const scrollAmount = 300;  // Cantidad de desplazamiento
      if (direction === "left") {
        carousel.scrollLeft -= scrollAmount;
      } else if (direction === "right") {
        carousel.scrollLeft += scrollAmount;
      }
    }
  };

  return (
    <div className={styles.carouselContainer}>
      <button
        className={styles.arrowButton + ' ' + styles.leftArrow}
        onClick={() => handleScroll("left")}
      >
        &#8592; {/* Flecha izquierda */}
      </button>
      <div ref={carouselRef} className={styles.carousel}>
        {eventosRec.map((evento) => (
          <Link className={styles.links} href={`/eventos/${evento.documentId}`} key={evento.documentId}>
            <div className={styles.eventCard}>
              <h3 className={styles.eventTitle}>{evento.nombre}</h3>
              <Image
                className={styles.eventImage}
                src={evento.imagen}
                alt={evento.nombre}
                width="200"
                height="200"
              />
              <p className={styles.eventDate}>{evento.fecha_hora}</p>
              <p className={styles.eventDate}>{evento.fecha_finalizacion}</p>
            </div>
          </Link>
        ))}
      </div>
      <button
        className={styles.arrowButton + ' ' + styles.rightArrow}
        onClick={() => handleScroll("right")}
      >
        &#8594; {/* Flecha derecha */}
      </button>
    </div>
  );
};

export default Carousel;
