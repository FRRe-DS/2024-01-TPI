import ImagenArte from "../../ui/GalleryComponents/imageRandom.jsx";

export default function InfoExtra () {
    return (
        <>
            <header>
                <nav className="menu">
                    <ul className="enlaces">
                        <li><a href='#info' className="enlace__info"> Información </a></li>
                        <li><a href='#map' className="enlace__map"> Mapa </a></li>
                        <li><a href='#predio' className="enlace__predio"> Predio </a></li>
                    </ul>
                </nav>
            </header>

            <div className="info" id="info">
                <h4 className="info__entrada"> Entrada </h4>
                <p className="info__entrada">  Todas las actividades de la bienal son de acceso libre y gratiuto </p>

                <h4 className="info__instalaciones"> Instalaciones </h4>
                <ul className="info__instalaciones__lista">
                    <li>Estacionamiento</li>
                    <li>Escenario</li>
                    <li>Gastronomía</li>
                    <li>Baños Químicos</li>
                    <li>Puestos de información</li>
                    <li>Puestos de Seguridad</li>
                    <li>Puestos de Salud y Evacuación</li>
                </ul>
            </div>

            <div className="map-responsive" id="map">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3541.0116662845985!2d-58.98075030793457!3d-27.437747151863935!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94450c5b04a7481d%3A0xf99641a09f8495d2!2sDomo%20Del%20Centenario!5e0!3m2!1ses-419!2sar!4v1727822763791!5m2!1ses-419!2sar"  
                    width="600" 
                    height="450" 
                    style={{border:0}} 
                    allowfullscreen="" 
                    loading="lazy" 
                    referrerpolicy="no-referrer-when-downgrade"
                />
            </div>

            <div className="predio" id="predio">
                {/*Acá solo qeudaría agregar la imagen del predio qeu esta en el canva*/}
                <ImagenArte
                    titulo="Predio"
                    imagen="https://picsum.photos/800/400?random=9"
                    dimensions="500"
                />
            </div>
        </>
    );
}