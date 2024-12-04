"use client";
import Link from "next/link";
import styles from "./page.module.css";
import { getEscultura } from "../../lib/getElement";
import { postVote, postVoteUserRegister } from "../../lib/postVote";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import {getToken} from "../../lib/tokens";

// function to show the documentId of escultura to vote
export default function Page() {
  
  const pathname = usePathname();
  const ultimaParteURL = pathname.split("/")[2];
  const [esculturaId, codigoAdicional] = [ultimaParteURL.substring(0, 24), ultimaParteURL.substring(24)];
  const [urlValida, setUrlValida] = useState(null);
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
      // Lógica para emitir la votación si ya esta logueado
      postVoteUserRegister(voteData)
        .then(() => {
          router.push("/votaciones/exito");
        })
        .catch((err) => {
          console.log("Error al votar", err);
        });
    }
  };
  const validarURL = async () => {
    if (codigoAdicional) {
      console.log("codigoAdicional", codigoAdicional);

      const infoToken = await getToken(esculturaId);
      const codigoAlmacenado = infoToken ? infoToken.token : null;

      console.log("codigoAlmacenado", codigoAlmacenado);
      if (codigoAdicional !== codigoAlmacenado) {
        console.error("URL no válida");
        setUrlValida(false);
      } else {
        setUrlValida(true);
      }
    } else {
      if (jwt) {
        setUrlValida(true);
      } else {
        setUrlValida(false);
      }
    } 
  };

  useEffect(() => {
    const getSculp = async () => {
      const escult = await getEscultura(esculturaId);
      setEscultura(escult); // Guardamos el resultado en el estado
    };

    getSculp();
    validarURL();
  }, [pathname, codigoAdicional]);


  if (urlValida === null || !escultura) {
    // Mostrar mensaje de carga mientras se valida la URL o se obtiene la escultura
    return <p>Cargando...</p>;
  }

  if (!urlValida) {
    // Mostrar mensaje de URL no válida
    return <p>URL no válida</p>;
  }

  else {
    return (
      <div  className={styles.votacionCard}>
      <Link href="/eventos">Volver</Link>
      <h1 className={styles.votacionCardNombre}>{escultura.nombre}</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          const email = e.target.email ? e.target.email.value : null;
          const voteData = {
            puntuacion: PuntajeSeleccionado,
            email: email ? email : jwt,
            escultura: esculturaId
          };
          handleVote(voteData);
        }}
        className={styles.votacionCardInfoBox}
      >
        <div>
        {jwt ? (
          ""
        ) : (
          //creamos un input para que el usuario coloque un email
          <input type="email" name="email" placeholder="Email" required />
        )}
        </div>
        <p className={styles.votacionCardEscultor}>Escultor: {escultura.escultor}</p>
        <label className={styles.votacionCardPuntaje} htmlFor="puntaje">Puntaje: </label>
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
        <button className={styles.votacionCardBoton} type="submit">Votar</button>
      </form>
      <br />
      <div className={styles.votacionCardImg}> 
        <img className={styles.votacionCardImagen} src={escultura.imagen_despues} alt="" />
      </div>
      </div>
    );
  }
}
