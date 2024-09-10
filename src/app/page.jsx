import Image from 'next/image'
import Logo from "/public/BienalLogo.png"

export default function Home(){
    return (
        <>
            <header>
                <Image src={Logo} alt = "Bienal Logo" />
                <div>
                    <h1>Bienal del Chaco</h1>
                    <p>Por amor al arte</p>
                </div>
            </header>
            <main>
                <section>
                    <h1>"Un certamen internacional único en el mundo"</h1>
                    <p>- José Eidman, presidente de la Fundación Urunday</p>
                    <img />
                </section>

                <div>
                    <p> Un acontecimiento cultural modelo en el mundo </p>

                    <p>
                        La Bienal de Esculturas de Chaco es un evento de arte que se celebra en Resistencia, Chaco, Argentina.
                        Se realiza cada dos años y tiene como objetivo reunir prestigiosos artistas nacionales e internacionales
                        para crear esculturas en vivo, muchas de las cuales se integran en el patrimonio cultural de la ciudad,
                        conocida como la "Ciudad de las Esculturas" debido a su vasto número de obras expuestas al aire libre
                    </p>

                    <tr id='row-1'>
                        <td id='colum-1.1'>
                            <p>
                                Escultura en vivo
                                
                                Los artistas, seleccionados a nivel internacional,
                                trabajan durante aproximadamente una semana
                                en sus esculturas. Estas obras suelen estar
                                hechas de materiales duraderos, como piedra,
                                metal, mármol, madera, entre otros. El público
                                tiene la oportunidad de observar cómo las ideas
                                toman forma en tiempo real, lo que convierte el
                                evento en una experiencia educativa y dinámica.
                            </p>
                        </td>
                        <td id='colum-1.2'>
                            <p>
                                Exposición permanente
                                
                                Resistencia es conocida como la "Ciudad de las
                                Esculturas" debido a la gran cantidad de obras
                                que la adornan. Muchas de las esculturas
                                creadas en las ediciones anteriores de la bienal
                                pasan a formar parte de esta exposición
                                permanente al aire libre. Actualmente, hay más
                                de 600 esculturas distribuidas por toda la
                                ciudad, lo que convierte a Resistencia en un
                                verdadero museo a cielo abierto.
                            </p>
                        </td>
                    </tr>
                    <tr id='row-2'>
                        <td id='column-2.1'>
                            <p>
                                Talleres y actividades complementarias
                                
                                Durante la bienal, además de la competencia de
                                esculturas, se organizan talleres, charlas,
                                exposiciones y actividades educativas para el
                                público. Estos espacios están diseñados tanto
                                para artistas profesionales como para
                                aficionados y estudiantes. La comunidad local,
                                en particular, se involucra activamente, lo que
                                refuerza el sentido de pertenencia y la
                                apreciación del arte. 
                            </p>
                        </td>
                        <td id='column-2.2'>
                            <p>
                                Temática
                                
                                Cada edición de la bienal tiene una temática
                                que guía a los escultores en la creación de sus
                                obras. Las temáticas están relacionadas con
                                cuestiones actuales como la identidad cultural,
                                la naturaleza, la historia local o problemas
                                sociales globales.  Estas temáticas permiten
                                que los artistas aborden temas relevantes
                                desde una perspectiva artística, generando una
                                reflexión en los espectadores.
                            </p>
                        </td>
                    </tr>
                </div>
            </main>
            {/*<footer>
                <a href="https://next.js.org">Next</a>
            </footer>*/}
        </>
    )
}