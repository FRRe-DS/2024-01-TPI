"use client";
import Link from "next/link";
import styles from "./page.module.css";
import { getEscultura } from "../../lib/getElement";
import { postVote } from "../../lib/postVote";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

// function to show the documentId of escultura to vote
export default function Page() {
  
  const pathname = usePathname();
  const ultimaParteURL = pathname.split("/")[2];
  const esculturaId = ultimaParteURL.substring(0, 24);
  const codigoAdicional = ultimaParteURL.length > 24 ? ultimaParteURL.substring(24) : null;
  const [escultura, setEscultura] = useState(null);
  const jwt = localStorage.getItem("jwt");
  const router = useRouter();

  //Guardar el puntaje seleccionado
  const [PuntajeSeleccionado, setPuntajeSeleccionado] = useState(0);
  //Guarda el puntaje visual (para evitar accidentes)
  const [PuntajeVisual, setPuntajeVisual] = useState(0);

  const handleVote = (voteData) => {
    if (!jwt) {
      // logica para emitir un voto sin estar logeado
      
      postVote(voteData)
        .then(() => {
          router.push("/votaciones/exito");
        })
        .catch((err) => {
          console.log("Error al votar", err);
        });
    } else {
      // Lógica para emitir la votación
      router.push("/votaciones/exito");
    }
  };
  const validarURL = () => {
    if (codigoAdicional) {
      const codigoAlmacenado = localStorage.getItem(esculturaId);
      if (codigoAdicional !== codigoAlmacenado) {
        console.error("URL no válida");
        return true;
      } else {
        return false;
      }
    } else {
      return false;
    }
  }

  useEffect(() => {
    const getSculp = async () => {
      const escult = await getEscultura(esculturaId);
      setEscultura(escult); // Guardamos el resultado en el estado
    };

    getSculp();
  }, [pathname]);


  if (!escultura) {
    return <p>Cargando...</p>; // Muestra un mensaje de carga si no hay datos
  } 
  // else if(validarURL()){
  //   return <p>URL no válida</p>;
  // }
  else {
    return (
      <div  className={styles.votacionCard}>
      <Link href="/eventos">Volver</Link>
      <h1>{escultura.nombre}</h1>
      <form
        onSubmit={(e) => {
        e.preventDefault();
        const email = e.target.email ? e.target.email.value : null;
        const voteData = {
          puntuacion: PuntajeSeleccionado,
          email: email,
          escultura: esculturaId
        };
        handleVote(voteData);
        }}
      >
        <div>
        {jwt ? (
          ""
        ) : (
          //creamos un input para que el usuario coloque un email
          <input type="email" name="email" placeholder="Email" required />
        )}
        </div>
        <p>{escultura.descripcion == null ? "" : escultura.descripcion}</p>
        <p>Escultor: {escultura.escultor}</p>
        <label htmlFor="puntaje">Puntaje: </label>
        <div className={styles.estrellas}>
        {[...Array(5)].map((_, index) => {
          return (
          <span
            key={index}
            className={`${
            index + 1 <= PuntajeSeleccionado
              ? `${styles.seleccionadas}`
              : " "
            }
            ${
            index + 1 <= PuntajeVisual ? `${styles.seleccionadas}` : " "
            }`}
            onMouseOver={() => {
            setPuntajeVisual(index + 1);
            }}
            onMouseOut={() => {
            setPuntajeVisual(0);
            }}
            onClick={() => setPuntajeSeleccionado(index + 1)}
          >
            &#9733;
          </span>
          );
        })}
        </div>
        Votado: {PuntajeSeleccionado}
        <button type="submit">Votar</button>
      </form>
      <br />
      <img src={escultura.imagen_despues} alt="" />
      </div>
    );
  }
}
