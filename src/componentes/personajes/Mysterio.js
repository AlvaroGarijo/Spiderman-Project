import React from 'react'
import '../personajes/personajesStyle/personajes.css';
import { GiSpiderWeb } from 'react-icons/gi';
import { FaArrowLeft } from 'react-icons/fa';
import { FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export const Mysterio = ({
    id = 'Mysterio',
    personaje = 'Mysterio',
    realName = 'Quentin Beck',
    bornArea = 'Estados Unidos',
    first_appearance = 'The Amazing Spider-Man #13 (junio de 1964)',
    cause = 'Experiencia en ilusiones',
    powers = 'Maestro ilusionista y experto en efectos especiales, químico competente y roboticista, experto en combate cuerpo a cuerpo hábil, tecnología avanzada y artilugios integrados en el traje.',
    adds = 'Quentin Beck no posee habilidades sobrehumanas, pero es un experto diseñador de dispositivos de efectos especiales e ilusiones de escenario.',
    creators = 'Stan Lee y Steve Ditko',
    alias = 'Dr. Ludwig Rinehart. Cage McKnight,Gerdes, Nicholas Macabes, Rudolph Hines, Mysty'
}) => {
const imagePath= `/assets/personajes/${id}.png`;
return (
    <div className='wrappPerson'>
    <div className='personWrap1'>
         <div className='imgWrap'>
            <img src={imagePath} className='card-imgIndividual' alt='Duende Verde'/>
            <div className='dataControlSmall'>
                <ul className='listDataControl'>
                    <li className='listData'>Nombre: <span className='styleData'>{ realName }</span></li>
                    <li className='listData'>Lugar de Nacimiento: <span className='styleData'>{ bornArea }</span></li>
                    <li className='listData'>Causa de sus poderes: <span className='styleData'>{ cause }</span></li>
                    <li className='listData'>Poderes: <span className='styleData'>{ powers }</span></li>
                    <li className='listData'>Añadidos: <span className='styleData'>{ adds }</span></li>
                    <li className='listData'> Primera aparición: <span className='styleData'>{ first_appearance }</span></li>
                    <li className='listData'>Creadores: <span className='styleData'>{ creators }</span></li>
                    <li className='listData'>Alias: <span className='styleData'>{ alias }</span></li>
                </ul>
            </div>
            <div className='buttonNavContainer d-none d-sm-block'>
                 <Link to="/villanos"><button className='buttonNavigationSpiders'> <GiSpiderWeb/> Ir a Villanos</button></Link>
            </div>

        </div>
         <div className='dataWrap'>
            <div className='dataControl'>
                <h3 className='titlePerson'>{ personaje }</h3>
                <div className='infoPersonWrap'>
                    <div className='infoPerson'>
                        <p>Mysterio (Quentin Beck) es un personaje ficticio que aparece en los cómics estadounidenses publicados por Marvel Comics. Se le representa principalmente en un aliado del Hombre Araña, Nick Fury, Daredevil y más. Creado por Stan Lee y Steve Ditko y su primera aparición fue en The Amazing Spider-Man #13 en 1964.</p>
                        <p>El personaje ha aparecido en numerosas caricaturas y videojuegos de Spider-Man. En 2009, Mysterio fue clasificado por IGN como el 85ª mejor villano de cómic de todos los tiempos. Y uno de los villanos más malvados de Spider-Man. El personaje hizo su debut en vivo interpretado por Jake Gyllenhaal en la película de Marvel Cinematic Universe, Spider-Man: Lejos de casa (2019), la serie web TheDailyBugle.net como vía material de archivo y Spider-Man: Sin camino a casa (2021).</p>
                        <p>Debutando en The Amazing Spider-Man # 13, Mysterio es Quentin Beck, un mago y especialista en efectos especiales que trabaja para un importante estudio de Hollywood con el sueño de hacerse un nombre en la industria del cine. Sin embargo, llegó a ver su carrera en efectos especiales como un trabajo sin futuro. Sus intentos de convertirse en actor fueron mal recibidos, pero se dio cuenta de que su experiencia en ilusiones podría convertirlo en un supervillano eficaz.</p> 
                        <p>En su primera batalla con Spider-Man, después de que inculpa a Spider-Man por robar el Museo Midtown, Mysterio obstruye el sentido del héroe arácnido con gas y disuelve las redes de Spider-Man con un abrasivo químico. Sin embargo, Spider-Man engaña a Mysterio para que revele que robó el museo, y luego Spider-Man reveló que lo había capturado en cinta. Mysterio fue encarcelado, culpando a Spider-Man por su arruinada carrera. Mysterio más tarde se une a los Seis Siniestros en un intento de vengarse de Spider-Man, y lo combate usando robots de los X-Men. Después de este Spider-Man obtiene una carta que le permite seguir luchando contra Hombre de Arena.</p>
                        <p>Mysterio más tarde crea el alias del mundialmente famoso psiquiatra Dr. Ludwig Rinehart, usando la tecnología y la hipnosis en un intento de hacer que Spider-Man pierda la cabeza, y casi lo convence para desenmascararse, aunque irónicamente Spider-Man fue ayudado por J. Jonah Jameson que repente irrumpió en la casa. Spider-Man luego desenmascaró a Mysterio.</p>
                        <p>Mysterio luego establece una breve asociación con el Mago en un complot para matar a Spider-Man y Antorcha Humana en una película de Hollywood pretendiendo inscribirlos en una película. Sin embargo, ambos fueron derrotados y arrestados. Amenaza con destruir la ciudad mientras está en la televisión, y luego convence a Spider-Man de que mide 6 pulgadas (150 mm) utilizando una sugerencia post-hipnótica y un parque de atracciones en miniatura, pero Spider-Man ve la ilusión y captura a Mysterio de nuevo.</p>
                        <p>En otros encuentros, Mysterio ha fingido la muerte de la tía May de Spider-Man, y ha hecho tratos con demonios del Limbo. A pesar de esto, sin embargo, Mysterio fue constantemente golpeado por Spider-Man y generalmente arrestado. Se unió a los Seis Siniestros del Doctor Octopus en varias ocasiones, pero esto nunca le dio la ventaja contra su enemigo que deseaba. Eventualmente, comenzó a perder credibilidad como supervillano, siendo su derrota a manos de los Power Pack un momento particularmente humillante.</p>
                        <p>Mysterio se verá luego como parte de los nuevos Seis Siniestros organizado por Doctor Octopus. Primero trabaja con Camaleón para distraer a Spider-Man y la Fundación Futura, simulando un ataque en el Caribe por piratas zombis, mientras que el resto de los Seis roban algo de la sede de los Cuatro Fantásticos.</p>
                        <p>También participa en un ataque de los Seis en la Academia de los Vengadores</p>
                        <p>Cuando los Seis Siniestros lanzan un ataque contra la Inteligencia y su nueva arma del día del juicio final, Mysterio es responsable de acabar con el Fantasma Rojo y sus Súper-Simios.</p>
                        <p>Doctor Octopus y Mysterio luego coordinan a los Octobots que se han infiltrado en la Estación Espacial Apogee 1. Cuando Mysterio nota que algunos Octobots fueron desactivados, el Doctor Octopus le ordena a los Octobots que terminen su misión y luego destruyan la estación espacial. Spider-Man, Antorcha Humana y John Jameson descubren más tarde que los Octobots se han hecho cargo de los miembros de la tripulación de la estación espacial, lo que los convierte en zombis controlados por Octobot que obedecen las órdenes del Doctor Octopus</p>
                        <p>Mientras se encuentran en su base submarina, el Doctor Octopus y Mysterio descubren que sus zombis controlados por Octobot se han desmayado. Después de que la Estación Espacial Apogee 1 sea destruida y la tripulación sea evacuada por Spider-Man, Antorcha Humana y John Jameson, el Doctor Octopus le dice al resto de los Seis Siniestros que su plan maestro está a punto de comenzar.</p>
                        <p>Durante la historia de Spider-Men, Mysterio ha cruzado al Universo Marvel por última vez varias veces solo para encontrarse con el Spider-Man principal después de su último viaje. En la lucha, Spider-Man es transportado al Universo Ultimate, donde Mysterio revela que su contraparte Ultimate es simplemente un avatar robótico controlado de forma remota.</p>
                        <p>Al negarse a permitir que Spider-Man escape, Mysterio envía un avatar robot después de Peter y el nuevo Spider-Man.</p>
                        <p>A pesar de usar armas químicas para crear la alucinación de que ambos Spider-Men están luchando contra un ejército de sus mejores enemigos, la mayor experiencia de Peter le permite concentrarse en las ilusiones de Mysterio y destruir al avatar. Mysterio luego se marcha, lo que refleja que es más apropiado dejar a Spider-Man atrapado en un mundo donde está muerto, dejando que Iron Man examine su tecnología descartada</p>
                        <p>Mysterio se está preparando para cimentar su victoria destruyendo el portal y atrapando a Spider-Man en el universo Ultimate para siempre. Pero incapaz de resistir la tentación de ver cómo le está yendo a su enemigo, mantiene el portal abierto el tiempo suficiente para que Peter y los Ultimates lo capturen. A pesar de sus mejores esfuerzos para despistarlos con sus peores temores, Mysterio es derrotado rápidamente. Fury decide mantenerlo prisionero en el universo Ultimate debido a su conocimiento de la identidad secreta de Peter.</p>
                    </div>
                </div>
                <div className='buttonNavContainer d-block d-sm-none'>
                     <Link to="/villanos"><button className='buttonNavigationSpiders'> <GiSpiderWeb/> Ir a Villanos</button></Link>
                </div>
                <div className='navegationPerson'>
                    <Link to="/personaje/Carnage"><button className='buttonNavigation'><FaArrowLeft/> Carnage</button></Link>
                        <br/>
                    <Link to="/personaje/Sandman"><button className='buttonNavigation'>Sandman <FaArrowRight/> </button></Link> 
                </div>
            </div>
        </div>
        </div>
    </div>
  )
}
