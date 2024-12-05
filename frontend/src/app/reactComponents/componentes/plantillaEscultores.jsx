import Image from "next/image";
import BotonVolver from "./BotonVolver";
import styles from "../estilos/plantillaEscultores.module.css";

export default function PlantillaEscultoresPage({
  foto,
  bandera,
  nombre,
  pais,
  parrafo,
  distinciones,
  proyNombre,
  proyImagen,
}) {
  console.log(bandera);
  return (
    <>
      <BotonVolver retorno={"/escultores"} />
      <div className={styles.escultoresContainer}>
        <div className={styles.escultoresIlustracion}>
          <Image
            className={styles.escultoresImg}
            src={foto}
            alt="imagen"
            width={500}
            height={500}
          />
          <div className={styles.escultoresText}>
            <h1 className={styles.escultoresNombre}>{nombre}</h1>
            <div className={styles.containerPais}>
              <h2 className={styles.escultoresPais}>
                <i>{pais}</i>
              </h2>
              <Image
                className={styles.escultoresBandera}
                src={bandera}
                width={50}
                height={50}
              />
            </div>
            <p className={styles.escultoresBiografia}>{parrafo}</p>
          </div>
        </div>
        <div className={styles.escultoresDistinciones}>
          <b className={styles.escultoresDistincionesTit}>Distinciones</b>
          <br />
          <ul className={styles.escultoresLista}>
            {distinciones == null
              ? ""
              : distinciones.map((distincion, index) => (
                  <li className={styles.escultoresItems} key={index}>
                    {distincion}
                  </li>
                ))}
          </ul>
        </div>
        <h2 className={styles.escultoresProyectoHeader}>
          Proyecto: <b>{proyNombre}</b>
        </h2>
        {
          <Image
            className={styles.escultoresProyecto}
            src={proyImagen}
            width={500}
            height={500}
          />
        }
      </div>
    </>
  );
}
