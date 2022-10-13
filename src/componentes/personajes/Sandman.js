import React from 'react'
import '../personajes/personajesStyle/personajes.css';
import { GiSpiderWeb } from 'react-icons/gi';
import { FaArrowLeft } from 'react-icons/fa';
import { FaArrowRight } from 'react-icons/fa';

export const Sandman =({
    id = 'Sandman',
    personaje = 'Hombre de Arena (Sand-Man)',
    realName = 'William Baker (Flint Marko)',
    bornArea = 'Queens, NY.',
    first_appearance = 'The Amazing Spider-Man #4 (septiembre de 1963)',
    cause = 'Entra en contacto con arena que había sido irradiada por un reactor experimental.',
    powers = 'Manipulación de tamaño y masa, cambio de forma, manipulación de la tierra, fuerza sobrehumana, durabilidad y resistencia, control de densidad, vuelo (en forma de tormenta de arena)',
    adds = 'Llevó a su hijo a las playas de Coney Island. Se perdió felizmente en las esculturas de arena, un arte que usaría en la escuela secundaria bajo el estímulo de su maestra la señorita Flint.',
    creators = 'Stan Lee y Steve Ditko',
    alias = 'Flint Marko'
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
            <div className='buttonNavContainer'>
                <a href="/villanos"><button className='buttonNavigationSpiders'> <GiSpiderWeb/> Ir a Villanos</button></a>
            </div>

        </div>
         <div className='dataWrap'>
            <div className='dataControl'>
                <h3 className='titlePerson'>{ personaje }</h3>
                <div className='infoPersonWrap'>
                    <div className='infoPerson'>
                        <p>El Hombre de Arena (en inglés: Sand-Man) (William Baker, alias Flint Marko) es un personaje ficticio, el cual es uno de los villanos más poderosos del Hombre Araña. Aparece en los cómics estadounidenses publicados por Marvel. Un cambiaformas con la capacidad de convertirse en arena, comenzó como adversario recurrente del superhéroe arácnido, y con el tiempo fue redimido, convirtiéndose finalmente en un antihéroe. Sand-Man es también enemigo de Los 4 Fantásticos y miembro fundador del equipo de supervillanos Seis Siniestros.</p>
                        <p>El personaje ha sido adaptado en varias otras encarnaciones mediáticas de Spider-Man. En el cine, Thomas Haden Church interpreta al Hombre de Arena en la película Spider-Man 3 (2007) y en la cinta de Marvel Studios Spider-Man: No Way Home (2021), ambientada en el Universo Cinematográfico de Marvel (UCM). Una criatura basada en el Hombre de Arena apareció en la película del UCM Spider-Man: Far From Home (2019), que en realidad era una ilusión creada por una serie de drones operados por el villano Mysterio. En 2009, el Hombre de Arena fue clasificado como el 72° villano de cómics más grande de todos los tiempos según IGN.</p>
                        <p>William Baker nació en Queens, Nueva York. Cuando tenía tres años, su padre lo abandonó a él y a su madre. En estos primeros años, llevó a su hijo a la playa de Coney Island. Se perdió felizmente en las esculturas de arena, un arte que usaría en la escuela secundaria bajo el estímulo de su maestra (y primer amor), la señorita Flint.</p> 
                        <p>En la escuela preparatoria, un muchacho llamado Vic intimidó a Baker hasta que aprendió a luchar usando los movimientos de un oponente contra sí mismos, una técnica que él realizó como si se deslizara a través de sus dedos como arena. Vic y sus amigos finalmente hicieron amistad con Baker. En la escuela secundaria, William jugó en el equipo de fútbol de su escuela, utilizando el deporte para canalizar su ira. Mientras jugaba al fútbol adoptó el apodo de "Flint", de su antigua maestra.</p>
                        <p>Después de que Vic incurre en una gran deuda de juego con un mafioso, le ruega a Flint que arreglara un partido de fútbol en el que apostó para pagar su deuda. Flint lo hace, pero es expulsado del equipo después de que el entrenador descubre su participación. El entrenador se burla de Baker, diciéndole que no logrará nada importante en su vida. Flint golpea a su exentrenador, lo que resulta en su expulsión de la escuela y el comienzo de su vida de crimen.</p>
                        <p>Su actividad ilegal aumenta en profundidad y alcance, convirtiéndolo en un hombre violento y amargo. Eventualmente termina en la prisión en la isla Ryker donde conoce a su padre, Floyd Baker. Es amable con su padre, pero no le dice quién es. Le dice a Floyd su sobrenombre, Flint, y un apellido falso, Marko, inspirado en las burlas de su exentrenador sobre no marcar en el mundo. Utiliza el alias, Flint Marko desde ese punto (cambió su nombre también para evitar que su madre descubra que es un criminal). Después de que Floyd es liberado de la prisión, Marko se escapa.</p>
                        <p>Marko huye a un sitio de pruebas nucleares en una playa cerca de Savannah, Georgia, donde entra en contacto con arena que había sido irradiada por un reactor experimental. Su cuerpo y la arena radiactiva hacen enlace, cambiando la estructura molecular de Marko en arena. Impresionado, se llama el Hombre de Arena, al ver sus nuevos poderes.</p>
                        <p>Marko choca con Peter Parker / Spider-Man por primera vez en la escuela secundaria de Peter. Spider-Man derrota a Marko con una aspiradora y lo entrega a la policía. El Hombre de Arena se escapa por su ventana después de convertirse en arena, pero es recapturado por la Antorcha Humana después de que la antorcha atrae al Hombre de Arena a un edificio disfrazándose de Spider-Man, activando los sistemas de rociadores. Después de esto Marko resurge como un miembro de los Seis Siniestros, dirigido por el Doctor Octopus. Lucha contra Spider-Man dentro de una caja hermética de metal, que se activa cuando Spider-Man toca una tarjeta diciendo donde está el Buitre, pero el Hombre de Arena es derrotado debido a que Spider-Man tiene pulmones más fuertes que él.</p>
                        <p>Con el tiempo, Hombre de Arena descubre - comenzando con las manos - que su cuerpo puede transformarse en vidrio y volver otra vez. Contrae cáncer y se hace cargo de un centro de investigación médica. Lucha contra el Hombre Maravilla, pero es curado de su cáncer por la radiación.</p>
                        <p>Después, se alía con Hydro-Man para luchar contra su enemigo mutuo, Spider-Man. Un accidente fusiona a los dos villanos en un monstruo llamado Mud-Thing. Spider-Man y la policía son capaces de deshidratar la monstruosidad. Meses después, los supervillanos logran separarse y seguir sus caminos separados.</p>
                        <h3>Debilidades</h3>
                            <ul>
                                <li>Si cae dentro del agua, su cuerpo se desmorona, a menos que reúna suficientes partículas de arena y pueda secarse.</li>
                                <li>Es susceptible de quedarse atrapado si le cae cemento o algún material de secado rápido.</li>
                                <li>Al exponerlo a altas temperaturas o a una carga eléctrica muy alta que genere calor, se convertirá en una estatua de vidrio, aunque esto no le afecte para regresar a su forma de arena.</li>
                                <li>Puede verse afectado si se moja con agua y se congela rápidamente por cualquier método, dejándolo incapacitado hasta descongelarse el agua de su interior.</li>
                                <li>Si recibe ondas vibratorias continuas, su cuerpo no podría reacomodarse al no tener tiempo de hacerlo, hasta que se detengan dichas vibraciones.</li>
                            </ul>
                    </div>
                </div>
    
                <div className='navegationPerson'> 
                    <a href="/personaje/Mysterio"><button className='buttonNavigation'><FaArrowLeft/> Mysterio</button></a>
                    <br/>
                    <a href="/personaje/Lagarto"><button className='buttonNavigation'>Lagarto <FaArrowRight/></button></a>
                </div>
            </div>
        </div>
        </div>
    </div>
  )
}
