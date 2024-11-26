"use client";
import Link from "next/link";
import styles from "./page.module.css";
import { getEscultura } from "../../lib/getElement";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

// function to show the documentId of escultura to vote
export default function Page() {
  const pathname = usePathname();
  const [escultura, setEscultura] = useState(null);
  const jwt = localStorage.getItem("jwt");
  const router = useRouter();

  //Guardar el puntaje seleccionado
  const [PuntajeSeleccionado, setPuntajeSeleccionado] = useState(0);
  //Guarda el puntaje visual (para evitar accidentes)
  const [PuntajeVisual, setPuntajeVisual] = useState(0);

  const handleVote = (voteData) => {
    if (!jwt) {
      // router.push("/login");
      // aniadimos la escultura a votedata

      voteData.escultura = pathname.split("/")[2];
      console.log(voteData);
    } else {
      // Lógica para emitir la votación
      router.push("/votaciones/exito");
    }
  };

  useEffect(() => {
    const getSculp = async () => {
      const escult = await getEscultura(pathname.split("/")[2]);
      setEscultura(escult); // Guardamos el resultado en el estado
    };

    getSculp();
  }, [pathname]);

  if (!escultura) {
    return <p>Cargando...</p>; // Muestra un mensaje de carga si no hay datos
  } else {
    return (
      <div>
      <Link href="/eventos">Volver</Link>
      <h1>{escultura.nombre}</h1>
      <form
        onSubmit={(e) => {
        e.preventDefault();
        const email = e.target.email ? e.target.email.value : null;
        const voteData = {
          puntaje: PuntajeSeleccionado,
          correo: email,
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
