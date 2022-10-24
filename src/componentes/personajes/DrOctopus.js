import React from 'react'
import '../personajes/personajesStyle/personajes.css';
import { GiSpiderWeb } from 'react-icons/gi';
import { FaArrowLeft } from 'react-icons/fa';
import { FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export const DrOctopus =({
    id = 'Dr_Octopus',
    personaje = 'Dr. Octopus',
    realName = 'Otto Gunther Octavius',
    bornArea = 'Schenectady, Nueva York',
    first_appearance = 'The Amazing Spider-Man #3 (julio de 1963)',
    cause = 'Arnés mecánico fusionado permanentemente con su cuerpo durante un accidente de laboratorio',
    powers = 'Ingeniero e inventor brillante, estratega magnífico, inteligencia de nivel genio, usa tentáculos mecánicos superfuertes y duraderos, control telepático sobre sus tentáculos mecánicos',
    adds = 'Laboratorios avanzados, Armaduras, Múltiples armas, gas letal, instrumentos de tortura, múltiples herramientas en sus tentáculos de pulpo',
    creators = 'Stan Lee y Steve Ditko',
    alias = 'Doc Ock, Doctor Pulpo, Master Planner, Master Programmer, Bowrey Bum, Superior Spider-Man (Peter Parker), Superior Octopus'
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
            <br/>
            <div className='buttonNavContainer d-none d-sm-block'>
              <Link to="/villanos"><button className='buttonNavigationSpiders'> <GiSpiderWeb/> Ir a Villanos</button></Link>
            </div>

        </div>
         <div className='dataWrap'>
            <div className='dataControl'>
                <h3 className='titlePerson'>{ personaje }</h3>
                <div className='infoPersonWrap'>
                    <div className='infoPerson'>
                        <p>Otto Octavius nació en Schenectady, Nueva York, tuvo una educación turbulenta. Su padre, Torbert Octavius, fue un trabajador de una fábrica, era abusivo y violento hacia ambos, Otto y su madre María Octavius. La timidez del joven Otto y su buen desempeño en la escuela, hizo que lo etiquetaran como la "mascota del profesor" y lo usaron como objeto de intimidación. Torbert no apreciaba tener un hijo acosado, y ordenó a Otto usar la violencia en el trato con los bravucones. María Octavius defendería a su hijo de Torbert en muchas ocasiones, diciéndole a Otto que era un pensador dotado, y que usaría razonamientos para resolver problemas, no la violencia. Debido a la insistencia de su madre y su disgusto hacia los hombres que trabajaban en el trabajo manual, Otto estaba decidido a no ser como su padre y dedicó todos sus esfuerzos en su educación, obteniendo regularmente las mejores calificaciones. La devoción de Otto por estudiar dio sus frutos con él, al recibir una beca universitaria. Durante el primer año de Otto en la universidad, ocurrió la muerte de su padre debido a un accidente industrial, Otto se aboco hacia el estudio y una obsesión por la ciencia física. Después de graduarse de la universidad, Otto encontró trabajo en una empresa de ingeniería.</p>
                        <p>Otto se convirtió en un brillante y respetado físico nuclear, consultor de la investigación atómica, inventor y conferencista. Él diseñó un conjunto de tentáculos mecánicos de alta tecnología controlados a través de una interfaz de cerebro-ordenador para que lo ayuden con su investigación en física atómica. Los brazos de tentáculos eran resistentes a la radiación y poseían gran fuerza y un movimiento de alta precisión, que se adjuntaban a un arnés que se enlazaba alrededor de su cuerpo. Más adelante en su carrera criminal, afirmó que la inspiración para el dispositivo devino de El Hombre de Vitruvio, el famoso boceto a lápiz de Leonardo da Vinci, uno de sus ídolos.</p>
                        <p>A pesar de que su relación con sus compañeros de trabajo era típicamente hostil a los demás, una compañera investigadora llamada Mary Alice Anders, se hizo amiga de él, cuando Otto la impresionó con una demostración de su arnés, los dos comenzaron un noviazgo. A su debido tiempo, Otto le propuso matrimonio a Mary Alice. Sin embargo, la madre de Otto no estaba de acuerdo, creyendo que ninguna mujer era lo suficientemente bueno para su hijo. Para complacer a su madre, puso fin a su compromiso. Más tarde, cuando descubrió que su madre había empezado a salir con un bibliotecario la reprendió, causando que ella tuviera un infarto agudo de miocardio (un "ataque al corazón") en el calor de su discusión. Con la muerte de su madre y con Mary Alice Anders fuera de su vida, la disposición de Otto hacia casi todo el mundo se convirtió en algo mal intencionado, y él mismo se había vuelto más distraído sobre prestar atención a los detalles y las precauciones de seguridad en su trabajo. Sus compañeros de trabajo a menudo lo llamaban "Dr. Octopus" a sus espaldas, un juego de palabras con su nombre real inspirado por el aparato de sus cuatro tentáculos; era consciente de este insulto, pero apenas le importaba.</p> 
                        <p>Durante una fuga de radiación accidental que terminó en una explosión, los cuatro tentáculos mecánicos se fundieron en el cuerpo de Otto Octavius. Más tarde se reveló que la radiación (o, posiblemente, su propia mutación latente) había mutado su cerebro para que pudiera controlar el movimiento de los brazos robóticos, solo con sus pensamientos. Los tentáculos ya se habrían eliminado de su unión quirúrgica al cuerpo, pero Otto conserva la facultad de controlarlos telepáticamente desde una gran distancia. El accidente también aparentemente dañó su cerebro (aunque luego se sugirió que lo que fue interpretado como daño cerebral era de hecho su mente reconfigurandose para dar cabida a cuatro miembros adicionales), y el científico se volvió malvado, y se abocó a una vida de crimen, primero tomando rehenes en el hospital y luego haciéndose llamar "Dr. Octopus", el nombre de insulto que sus compañeros de trabajo le habían dado.12​ Aunque el propio Doctor Octopus es corpulento, y de una mala condición física, y es miope, con su arnés unido físicamente es más que un desafió para El Hombre Araña. El accidente también hizo que sus ojos fueran muy sensibles a la luz, lo que le obligaba a usar gafas con lentes sombreados.</p> 
                        <p>En su primer encuentro, el Doctor Octopus derrotó a Spider-Man, arrojándolo por una ventana. Después de esta derrota, Spider-Man considera renunciar a su carrera heroica, pero fue inspirado para continuar por la Antorcha Humana, y finalmente derrotó el Doctor Octopus.</p> 
                        <p>Con los años, el Dr. Octopus se ha convertido en uno de los miembros más identificables de la galería de los villanos de Spider-Man. El Doctor Octopus formó a los originales Seis Siniestros, para luchar contra Spider-Man después de tomar a Betty Brant y May Parker como rehenes. Ha reunido y dirigido a los posteriores grupos de Seis Siniestros, y por lo general se ofende cuando alguien distinto dirige al equipo. Disfrazado como el Master Planner, organizó un robo de material radiactivo. Después de que él robó una fórmula que necesitaba el Spider-Man, para curar a su tía May, Spider-Man persigue a la banda del Doctor Octopus hasta su base. En la lucha que siguió, Spider-Man quedó atrapado debajo de un edificio derrumbado. Aparentemente condenado, Spider-Man fue finalmente capaz de recurrir a pura fuerza de voluntad, para reunir el poder para escapar. Más tarde se reveló que usó un tanque de buceo para escapar.</p> 
                        <p>Posteriormente, el Doctor Octopus intentó robar un dispositivo anulador del Departamento de Defensa, y le tiende una trampa a El Hombre Araña. Se convirtió en el inquilino de May Parker y luego se acercó lo suficiente para usar el anulador del Hombre Araña; a pesar de que tenía la esperanza de que no haría más que anular los lanza-redes de El Hombre Araña, la radiación en la sangre de El Hombre Araña dio lugar a una interacción entre el Nulificador y la biología única del Hombre Araña dejándolo amnésico, el Doctor Octopus posteriormente engaña al Hombre Araña para ayudarlo a él antes que a los demás y dejar su naturaleza para sus fines maléficos hasta que John Jameson utiliza el nulificador</p>
                        <p>El Doctor Octopus exhibió la capacidad de activar los brazos mecánicos de forma remota, y los utilizó para liberarse de la prisión. Su batalla resultante con el Hombre Araña dio como resultado la muerte del capitán de policía, George Stacy. El Doctor Octopus más tarde libró una guerra de bandas con Hammerhead, trató de casarse con May Parker con el fin de adquirir una isla con una planta atómica que recientemente había heredado sin saberlo. El Doctor Octopus escapó de la muerte cuando la isla fue destruida, y comenzó una vida como una persona sin hogar. Él luchó al lado del "fantasma" de Hammerhead, y fue capaz de volver a su forma humana y derrotarlo después de una alianza temporal con el Hombre Araña</p>
                        <p>Posteriormente el Doctor Octopus más tarde trató de secuestrar a un submarino atómico. También trató de envenenar la ciudad de Nueva York con tinta de imprenta, y luchó contra Punisher y el Hombre Araña. Enseguida, se enfrentaron al Búho y su banda. Lograron desactivar correctamente el reactor nuclear, en un laboratorio antes de la fusión. Más tarde, mostró síntomas de que el Sr. Fantástico es diagnosticado con un trastorno de personalidad múltiple. El Doctor Octopus fue llevado al Battleworld de Beyonder, donde batalló una horda de héroes y se presentó contra el Doctor Doom por el liderazgo del grupo de villanos. Él fue capaz de derrotar a los X-Men hasta que Magneto vino en ayuda de los mutantes.</p>
                    </div>
                </div>

                <div className='buttonNavContainer d-block d-sm-none'>
                  <Link to="/villanos"><button className='buttonNavigationSpiders'> <GiSpiderWeb/> Ir a Villanos</button></Link>
                </div>
    
                <div className='navegationPerson'> 
                    <Link to="/personaje/Electro"><button className='buttonNavigation'><FaArrowLeft/> Electro</button></Link>
                        <br/>
                    <Link to="/personaje/Venom"><button className='buttonNavigation'>Venom <FaArrowRight/> </button></Link>
                </div>
            </div>
        </div>
        </div>
    </div>
  )
}
