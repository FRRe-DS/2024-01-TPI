import ImagenEscultores from "../ui/GalleryComponents/imagenEscultores";
import "./escultores.css";

//Importar las imagenes y banderas
import Luis from "/public/Escultores/LuisBernardi.png";
import Ale from "/public/Escultores/AlejandroMardonesGuillen.png";
import Anna from "/public/Escultores/AnnaKorver.png";
import Billy from "/public/Escultores/BillyLee.png";
import Bogdan from "/public/Escultores/BogdanAdrianLefter.png";
import Butrint from "/public/Escultores/ButrintMorina.png";
import Carlos from "/public/Escultores/CarlosIglesiasFaura.png";
import Emrah from "/public/Escultores/EmrahÖnal.png";
import Percy from "/public/Escultores/PercyRaulZorrillaSoto.png";
import Solveiga from "/public/Escultores/SolveigaVasiljeva.png";

import Arg from "/public/Banderas/ar.svg";
import Cl from "/public/Banderas/cl.svg";
import Es from "/public/Banderas/es.svg";
import Nz from "/public/Banderas/nz.svg";
import Usa from "/public/Banderas/us.svg";
import Ro from "/public/Banderas/ro.svg";
import Pr from "/public/Banderas/pe.svg";
import Tr from "/public/Banderas/tr.svg";
import Lv from "/public/Banderas/lv.svg";
import Kos from "/public/Banderas/xk.svg";

export default function EscultoresPage() {
  return (
    <>
      <div className="escultores_header">
        <h1 className="escult_Header_Title"> Escultores Seleccionados </h1>
        <p>
          {" "}
          De todas partes del mundo, escultores se congregan para competir con
          sus obras
        </p>
      </div>
      <div className="escultores_list">
        <ImagenEscultores
          titulo="Luis Bernardi"
          foto={Luis}
          bandera={Arg}
          enlace="/escultores/luis"
        />
        <ImagenEscultores
          titulo="Alejandro Mardones Guillen"
          foto={Ale}
          bandera={Cl}
          enlace="/escultores/ale"
        />
        <ImagenEscultores
          titulo="Carlos Iglesias Faura"
          foto={Carlos}
          bandera={Es}
          enlace="/escultores/carlos"
        />
        <ImagenEscultores
          titulo="Billy Lee"
          foto={Billy}
          bandera={Usa}
          enlace="/escultores/billy"
        />
        <ImagenEscultores
          titulo="Butrint Morina"
          foto={Butrint}
          bandera={Kos}
          enlace="/escultores/butrint"
        />
        <ImagenEscultores
          titulo="Solveiga Vasiljeva"
          foto={Solveiga}
          bandera={Lv}
          enlace="/escultores/solveiga"
        />
        <ImagenEscultores
          titulo="Anna Korver"
          foto={Anna}
          bandera={Nz}
          enlace="/escultores/anna"
        />
        <ImagenEscultores
          titulo="Percy Raul Zorrilla Soto"
          foto={Percy}
          bandera={Pr}
          enlace="/escultores/percy"
        />
        <ImagenEscultores
          titulo="Bogdan Adrian Lefter"
          foto={Bogdan}
          bandera={Ro}
          enlace="/escultores/bogdan"
        />
        <ImagenEscultores
          titulo="Emrah Önal"
          foto={Emrah}
          bandera={Tr}
          enlace="/escultores/emrah"
        />
      </div>
    </>
  );
}
