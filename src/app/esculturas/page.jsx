import ImagenArte from "../ui/GalleryComponents/imageRandom";
import "../ui/esculturas.css"; 

import simpleza from "/public/GaleriaEsculturas/Despues_Simpleza.jpg";
import introspec from "/public/GaleriaEsculturas/Despues_Introspec.jpg";
import eucli from "/public/GaleriaEsculturas/Despues_Eucli.jpg";
import hitos from "/public/GaleriaEsculturas/Despues_Hitos.jpg";
import presencia from "/public/GaleriaEsculturas/Despues_Presencia.jpg";
import mensaje from "/public/GaleriaEsculturas/Despues_Mensaje.jpg";
import reflejo from "/public/GaleriaEsculturas/Despues_Reflejo.jpg";
import zarafet from "/public/GaleriaEsculturas/Despues_Zarafet.jpg";
import ritmo from "/public/GaleriaEsculturas/Despues_Ritmo.jpg";
import orbitando from "/public/GaleriaEsculturas/Despues_Orbitando.jpg";

export default function ArtPage() {
  return (
    <>
      <section className="esculturasText">
        <p>
          <h1 className= "esculturasHeader"> Esculturas </h1>
          Nuevamente, grandes escultores del mundo en escena y en acción,
          trabajando a cielo abierto y en público, esculpiendo piezas que tienen
          por destino las veredas de Resistencia
        </p>
      </section>
      <div className="esculturasPortada">
        <ImagenArte
          className="esculturasSeleccionadas"
          titulo="Simpleza"
          imagen={simpleza}
          enlace={"/esculturas/simpleza"}
        />
        <ImagenArte
          className="esculturasSeleccionadas"
          titulo="Introspección"
          imagen={introspec}
          enlace={"/esculturas/introspeccion"}
        />
        <ImagenArte
          className="esculturasSeleccionadas"
          titulo="Vida No Euclidea"
          imagen={eucli}
          enlace={"/esculturas/euclidea"}
        />
        <ImagenArte
          className="esculturasSeleccionadas"
          titulo="Hitos"
          imagen={hitos}
          enlace={"/esculturas/hitos"}
        />
        <ImagenArte
          className="esculturasSeleccionadas"
          titulo="Presencia"
          imagen={presencia}
          enlace={"/esculturas/presencia"}
        />
        <ImagenArte
          className="esculturasSeleccionadas"
          titulo="Mensaje"
          imagen={mensaje}
          enlace={"/esculturas/mensaje"}
        />
        <ImagenArte
          className="esculturasSeleccionadas"
          titulo="Reflejo de la Luna"
          imagen={reflejo}
          enlace={"/esculturas/reflejo"}
        />
        <ImagenArte
          className="esculturasSeleccionadas"
          titulo="Uyumlu Zarafet"
          imagen={zarafet}
          enlace={"/esculturas/zarafet"}
        />
        <ImagenArte
          className="esculturasSeleccionadas"
          titulo="Ritmo Cósmico"
          imagen={ritmo}
          enlace={"/esculturas/ritmo"}
        />
        <ImagenArte
          className="esculturasSeleccionadas"
          titulo="Orbitando Ideas"
          imagen={orbitando}
          enlace={"/esculturas/orbitando"}
        />
      </div>
    </>
  );
}
