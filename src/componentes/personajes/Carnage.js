import React from 'react'
import '../personajes/personajesStyle/personajes.css';
import { GiSpiderWeb } from 'react-icons/gi';
import { FaArrowLeft } from 'react-icons/fa';
import { FaArrowRight } from 'react-icons/fa';

export const Carnage = ({
    id = 'Carnage',
    personaje = 'Carnage',
    realName = 'Cletus Kasady',
    bornArea = 'Extraterrestre',
    first_appearance = 'The Amazing Spider-Man #344 (marzo de 1992)',
    cause = 'Parásito Extraterrestre',
    powers = 'Todos los poderes del primer huésped humano del predecesor, Spider-Man, cambios de forma y camuflaje limitados, capacidades de defensa autónoma del simbionte., indetectable por el "sentido arácnido" de Spider-Man, capacidad de crear armas con su cuerpo y poder separarlas del cuerpo; las armas más recurrentes son hachas letales, capacidad de regeneración',
    adds = 'Carnage nació con habilidades aún más singulares que las de su progenitor-debido al hecho de que se gestó en un medio ajeno a ella- en la Tierra.',
    creators = 'David Michelinie, Mark Bagley, Erik Larsen',
    alias = '	Spider-Carnage, Carnage Cósmico, Superior Carnage, Duende Rojo, Red Slayer, Duende Diminuto'
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
                <a href="/villanos"><button className='buttonNavigationSpiders'> <GiSpiderWeb/> Ir a Villanos</button></a>
            </div>

        </div>
         <div className='dataWrap'>
            <div className='dataControl'>
                <h3 className='titlePerson'>{ personaje }</h3>
                <div className='infoPersonWrap'>
                    <div className='infoPerson'>
                        <p>Carnage (conocido también como Matanza en España) fue un supervillano ficticio que aparece en las historietas publicadas por Marvel Comics, generalmente representado como un enemigo de Spider-Man y Venom. El personaje apareció por primera vez en The Amazing Spider-Man # 361 (abril de 1992), y fue creado por el escritor David Michelinie y el artista Mark Bagley. Carnage pertenece a una raza de parásitos extraterrestres amorfos conocidos como los Simbiontes, que forman una simbiosis al vincularse con sus anfitriones, otorgándoles habilidades sobrehumanas. El simbionte Carnage generalmente se representa como un descendiente de Venom que es más poderoso que él debido a la naturaleza de los simbiontes, y es mucho más sociópata y sádica. Al igual que Venom, Carnage ha tenido múltiples anfitriones a lo largo de los años, pero el más infame sigue siendo el primero, el asesino en serie Cletus Kasady, cuya personalidad coincide perfectamente con la del simbionte. Otros anfitriones incluyen a Ben Reilly, Karl Malus y Norman Osborn.</p>
                        <p>El personaje se ha adaptado sustancialmente de los cómics a varias formas de medios, incluidas películas, series de televisión y videojuegos. Cletus Kasady hizo su debut cinematográfico en la película de Universo de Sony Pictures de Personajes de Marvel Venom (2018), interpretado por Woody Harrelson y en Venom: Let There Be Carnage (2021) y será el villano de su padre, donde se convertirá en Carnage. En 2009, la versión Cletus Kasady de Carnage se clasificó como IGN 90ª más grande villano de cómic de todos los tiempos</p>
                        <h2>Huéspedes</h2><br/>
                            <h4>Cletus Kasady</h4>
                                <p>Cuando el simbionte de Eddie Brock, Venom, pronto volvió a unir permitiendo a Venom para escapar de la prisión, el simbionte dejó su descendencia en la célula; Debido a su mentalidad extraña, el simbionte no sintió ningún vínculo emocional con su descendencia, considerándolo insignificante, y por lo tanto nunca comunicó su existencia a Brock a través de su enlace telepático. El nuevo simbionte se unió al compañero de Eddie Brock, Cletus Kasady, a través de un corte en su mano, transformándolo en Carnage. El vínculo entre el simbionte Carnage y Kasady era más fuerte que el vínculo entre Brock y el simbionte Venom. Como resultado, Carnage es mucho más violento, poderoso y mortal que Venom. Kasady y el simbionte serían un antagonista principal en "Maximum Carnage" y Kasady sería continuamente el personaje más recurrente en el uso del simbionte de Carnage en muchas publicaciones.</p> 
                            <h4>Ben Reilly (Spider-Carnage)</h4>
                             <p>El simbionte se transfirió a Spider-Man, Ben Reilly en ese momento, cuando Ben se unió a él para evitar que dañara a personas inocentes, creando a Spider-Carnage. La fuerza de voluntad de Ben resistió los deseos asesinos del simbionte el tiempo suficiente para que se la devolviera a Ravencroft. Reilly posteriormente intentó destruir el simbionte al someterse a una explosión de microondas potencialmente letal, pero se escapó con Kasady después de que las microondas lo obligaran a separarse de él.</p>
                            <h4>Tanis Nevies (Scorn)</h4>
                                <p>Tanis Nevies apareció por primera vez en Carnage Family Feud # 1 y murió en Web of Venom: Carnage Born # 1. Después de que Sentry se separara de Carnage fuera de la atmósfera terrestre se descubrió que, aunque el anfitrión probablemente fue asesinado, el simbionte sobrevivió quedándose inactivo y regresó a la Tierra, donde fue descubierto por Michael Hall, un competidor de Tony Stark. Trajo a Shriek y su médico, Tanis Nevies, para que pudiera usar a Shriek y mantener vivo al simbionte, con el fin de utilizar las propiedades del simbionte, para crear prótesis y exo-trajes que respondan de la misma manera que un simbionte. Una de esas personas, el Dr. Tanis Nieves, está equipado con uno de estos brazos protésicos después de quedar atrapado en un ataque por el Doppelganger, que intentó rescatar a Shriek. Cuando está cerca del simbionte, su brazo se vuelve loco y lo obliga a matar a varios científicos antes de que el simbionte se una a la fuerza, convirtiéndose el nuevo Carnage. Después de que el simbionte use a Tanis para irrumpir en una instalación de Hall Corporation, se revela que Kasady está vivo (aunque ambas piernas han sido cortadas), su cuerpo conservado por el simbionte y reparado por las prótesis de Hall. Kasady recupera el simbionte y se convierte en Carnage una vez más, intentando vengar su cautiverio mientras Spider-Man y Iron Man luchan por detenerlo. Entonces se revela que Carnage está otra vez embarazado, y el engendro de la prenda se une brevemente a Tanis, pero ella se la quita a sí misma y al simbionte bono de Shriek antes de ser arrancada de ella. Asustado por la malicia de Shriek, el brazo simbionte luego se une a Tanis, creando un nuevo héroe, Scorn, quien derrota a Shriek y la obliga a usar su grito sónico para debilitar a Carnage, pero se escapa.</p>
                                <p>Cuando Carnage invadió Doverton, Colorado y se unió a sus ciudadanos y al equipo de los Vengadores, quienes originalmente intentaron detener a Carnage. Después de eso, el gobierno envió otro equipo formado por fuerzas especiales mejoradas por simbiontes. El Dr. Tanis Nieves, como Scorn, está de acuerdo con Agony, Phage, Riot y Lasher, pero son superados en número ya que Carnage controla toda la ciudad. Las fuerzas especiales mejoradas siguen luchando, pero Carnage envía a los Vengadores controlados tras ellos, que es cuando Spider-Man viene con los residentes no afectados de la ciudad. El cuerpo a cuerpo es particularmente feroz cuando Venom interviene con rondas sonoras. Scorn usa un vehículo de construcción para llevar a los dos a un dispositivo que ella construyó y revela que su dispositivo está destinado a eliminar permanentemente los vínculos de Carnage y Venom, pero los anfitriones aún están allí. Después de que los simbiontes lucharon con ellos mismos y con el equipo de los Vengadores, Venom encuentra su camino de regreso a Flash Thompson, mientras que Scorn puede capturar y contener al simbionte Carnage</p>
                            <h4>Karl Malus (Superior Carnage)</h4>
                                <p>Después de que Kasady fue lobotomizado, fue sacado de la cárcel por el Mago y Klaw, quienes intentaron reclutarlo para los Cuatro Espantosos y convertirlo en su propia versión de Venom. Después de un intento fallido de controlar Kasady, Mago transfiere el simbionte al Dr. Karl Malus. El Dr. Malus se enfureció y, bajo la influencia del simbionte, trató de matar a sus compañeros de equipo, pero fue dominado por Klaw y controlado por el Mago, que lo llama "Superior Carnage" y lo equipa con armas</p>
                                <p>El trío se enfrenta al Superior Spider-Man y durante su batalla, el Mago pierde su control sobre Carnage y se lesiona fatalmente una vez que Spider-Man lo suelta accidentalmente debido a la conmoción de descubrir que el Mago leyó su mente y conoce a Otto Octvaius. Carnage, ahora libre, se desboca y comienza a matar a cualquiera que esté frente a él. Klaw intenta detenerlo, pero debido a que su arma está dañada, falla y se da cuenta de que la única forma es que el Mago recupere el control. Tanto Carnage como Klaw salen a la calle. Carnage lucha contra el Superior Spider-Man y admite que, aunque le gustaba usar armas, para él es mejor rasgar y cortar los cuerpos. Klaw intenta que el Mago controle a Carnage de nuevo, pero es asesinado por Carnage y la explosión separa al simbionte de su anfitrión, solo para vincularse con el Mago herido.</p>
                            <h4>Normab Osborn (Duende Rojo)</h4>
                                <p>Después del golpe de Estado de Hydra en América, el simbionte Carnage fue robado de un viejo almacén de S.H.I.E.L.D. por el entonces impotente Norman Osborn. Inicialmente se sintió abrumado por el deseo del simbionte por un Carnage sin sentido cuando permitió que se fusionara con él, pero ha sido capaz de "persuadir" al simbionte para que le permita controlar los poderes de Carnage para demostrarle algo. Aparte del Carnage sin sentido 'aburrido'. Usando esta combinación de poderes durante el argumento de "Go Down Swinging", Norman es capaz de atravesar a la Antorcha Humana, Clash, Silk, Miles Morales y Agente Anti-Venom, con la combinación del simbionte y el suero Duende que hacen que Carnage sea inmune a sus debilidades tradicionales, eventualmente transfiriendo parte del simbionte a su nieto Normie lo suficiente para convertirlo en una versión en miniatura de Duende Rojo. El simbionte Carnage aparentemente es destruido por Spider-Man cuando lo golpea con un tanque de gas en explosión, sin embargo, debido a que el simbionte estaba vinculado a Norman cuando Peter lo destruyó, se pregunta qué tipo de efecto podría haber tenido en la mente de su viejo enemigo. Más tarde, mientras Spider-Man visita a Norman en Ravencroft, se revela que la mente de Norman parece haber sido completamente frita y ahora cree que Spider-Man es en realidad Norman Osborn y él es Cletus Kasady. No está claro si está fingiendo o no o si realmente ha perdido la razón. Mientras tanto, Harry se las arregla para quitar el simbionte Carnage de Normie. No todo se ha ido.</p> 
                            <h4>Otros Huéspedes</h4>
                            <ul>
                                <li>John Jameson</li>
                                <li>Norrin Radd (Carnage Cósmico)</li>
                                <li>Bentley Wittman (Mago)</li>
                                <li>Carla Unger</li>
                                <li>Normie Osborn (Duende Diminuto) Nieto de Norman Osborn</li>
                            </ul>
                    </div>
                </div>
                <div className='buttonNavContainer d-block d-sm-none'>
                    <a href="/villanos"><button className='buttonNavigationSpiders'> <GiSpiderWeb/> Ir a Villanos</button></a>
                </div>
                <div className='navegationPerson'> 
                    <a href="/personaje/Venom"><button className='buttonNavigation'><FaArrowLeft/> Venom</button></a>
                    <br/>
                    <a href="/personaje/Mysterio"><button className='buttonNavigation'>Mysterio <FaArrowRight/></button></a>
                </div>
            </div>
        </div>
        </div>
    </div>
  )
}
