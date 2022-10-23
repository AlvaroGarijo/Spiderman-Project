import React from 'react'
import '../personajes/personajesStyle/personajes.css';
import { GiSpiderWeb } from 'react-icons/gi';
import { FaArrowLeft } from 'react-icons/fa';
import { FaArrowRight } from 'react-icons/fa';

export const Chacal = ({
    id = 'Chacal',
    personaje = 'Chacal',
    realName = 'Miles Warren',
    bornArea = 'Estados Unidos',
    first_appearance = 'Amazing Spider-Man #129 (Feb. 1974)',
    cause = 'Warren desarrolla una segunda personalidad para llevar el peso de sus fechorías apodado "El Chacal"',
    powers = 'Genio en el campo de la genética, la bioquímica, la clonación y la ingeniería, maestro intrigante y manipulador, atleta entrenado, garras con drogas en la punta, o electro-aguijones, atributos físicos sobrehumanos',
    adds = 'Warren se enamora secretamente de Gwen Stacy, mucho más joven, hasta el punto de obsesión y celos de Parker, su novio.',
    creators = 'Gerry Conway y Ross Andru',
    alias = 'Chacal'
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
                        <p>El Chacal (Miles Warren) es un supervillano ficticio que aparece en los cómics estadounidenses publicados por Marvel Comics, comúnmente representado como un enemigo de Spider-Man. Hay dos encarnaciones del personaje: el primero y más conocido es Miles Warren, mientras que el segundo es Ben Reilly.</p>
                        <p>Miles Warren era profesor de bioquímica en la Universidad Empire State. Entre sus alumnos, se encontraba con Peter Parker y Gwendolyne Stacy. Durante su mandato allí, Warren se enamora secretamente de Gwen Stacy, mucho más joven, hasta el punto de obsesión y celos de Parker, su novio. Después de que Stacy es asesinada por el Duende Verde (Norman Osborn), Warren jura vengarse de Spider-Man, ya que los documentos de la época informaron que fue Spider-Man quien la mató. La muerte de Gwen lleva a Warren a la depresión, la desesperación y la locura como un genetista loco que finalmente se convierte en el Chacal. Miles también tiene un hermano llamado Raymond, que es profesor de ciencias en la escuela secundaria de Peter Parker.</p>
                        <p>Miles se convierte en asistente del Alto Evolucionador en la Montaña Wundagore después de obtener su doctorado en bioquímica. Warren ayuda al Alto Evolucionador en experimentos que involucran convertir animales en humanos y viceversa. Existe un conflicto entre Warren y el Alto Evolucionador porque Warren logra crear "Hombres Nuevos" que parecían prácticamente humanos, mientras que el Evolucionador no puede. Eventualmente, Warren desarrolla un chacal que exhibe una personalidad de Jekyll y Hyde. Cuando el sujeto de prueba escapa, el Evolucionador expulsa a Warren de Wundagore. Warren continúa su investigación y finalmente se establece con una mujer llamada Mónica, que le da a luz dos hijos, todos asesinados en lo que originalmente se creía que era un accidente automovilístico; Sin embargo, más tarde se revela que es el resultado de un asalto de su altamente evolucionado Hombre Chacal, envidioso de su creador.</p> 
                        <p>El día después de la muerte de Gwen Stacy, el asistente de laboratorio de Warren, Anthony Serba, revela que ha clonado con éxito una rana usando su tecnología de investigación. Warren le da a Serba muestras de tejido de Gwen Stacy y Peter Parker, diciéndole a Serba que son células de rata. Algún tiempo después, Serba se enfrenta a Warren, afirmando que los clones son humanos y deben ser destruidos de inmediato. En pánico, Warren intenta cubrir la boca de Serba para callarlo, asfixiándolo accidentalmente. Incapaz de aceptar la responsabilidad de sus acciones, Warren desarrolla una segunda personalidad para llevar el peso de sus fechorías apodado "El Chacal". Warren desarrolla aún más su alter ego al diseñar un traje verde y guantes con navajas afiladas en forma de garra en cada dedo, y entrenarse atléticamente.  Kaine es el primer intento exitoso de clonar a Peter Parker, a pesar de sufrir una degeneración de clonación lenta y tener habilidades regenerativas para eludir la muerte varias veces.</p>
                        <p>El odio del Chacal por Spider-Man se manifiesta en su creencia de que él es el único responsable de permitir que Gwen Stacy, a quien amaba, muera a manos del Duende Verde. Acosa a Spider-Man en numerosas ocasiones, enfrentándolo contra otros adversarios. Warren se alía con Punisher contra Spider-Man. El siguiente Chacal intenta incitar una guerra de pandillas entre Hammerhead y el Doctor Octopus.</p>
                        <p>Más tarde, equipa al luchador Maxwell Markham con el traje y el poderoso exoesqueleto del Grizzly y lo envía a asesinar al editor de periódicos J. Jonah Jameson. El Chacal retiene a Peter Parker como rehén en un plan para atrapar a Spider-Man. Algún tiempo después, descubre la identidad de Spider-Man.</p> 
                        <p>De sus numerosos intentos de clonar a Peter Parker, solo uno es una copia perfecta del original. También crea dos clones de sí mismo, uno una copia directa, el otro un clon modificado que alberga el virus Carroña. El Chacal ayuda a la Tarántula a escapar de la prisión, y los dos se convierten en socios. El Chacal captura a Spider-Man, pero lo deja ir rápidamente después de demostrar que no es rival para el Chacal en una pelea justa. Luego lo atrae al Shea Stadium lo manipula para luchar contra su clon atando al reportero de Daily Bugle, Ned Leeds, a una bomba que solo el Spider-Man original puede desarmar. Sin embargo, cuando el clon de Gwen Stacy arranca la máscara del Chacal y lo confronta por sus crímenes, Warren finalmente acepta la responsabilidad de sus acciones. Intenta corregir sus fechorías liberando a Ned Leeds, solo para quedar atrapado en la explosión de la bomba.</p>
                        <p>Antes de su regeneración, Miles Warren es un genio en los campos de bioquímica, genética y clonación, y es un talentoso gimnasta y artista marcial. Más tarde, el Chacal unió sus genes con la genética de un chacal, con la fuerza, la velocidad y la agilidad amplificadas a niveles sobrehumanos. El Chacal no se ve afectado por la purga mental mundial de la identidad de Spider-Man.</p>
                    </div>
                </div>
                <div className='buttonNavContainer d-block d-sm-none'>
                    <a href="/villanos"><button className='buttonNavigationSpiders'> <GiSpiderWeb/> Ir a Villanos</button></a>
                </div>
                <div className='navegationPerson'> 
                    <a href="/personaje/Camaleon"><button className='buttonNavigation'><FaArrowLeft/> Camaleón</button></a>
                    <br/>
                    <a href="/personaje/Morlun"><button className='buttonNavigation'>Morlun <FaArrowRight/></button></a>
                </div>
            </div>
        </div>
        </div>
    </div>
  )
}
