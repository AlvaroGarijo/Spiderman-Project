import React from 'react';
import '../personajes/personajesStyle/personajes.css';
import { GiSpiderWeb } from 'react-icons/gi';
import { FaArrowLeft } from 'react-icons/fa';
import { FaArrowRight } from 'react-icons/fa';

export const DuendeVerde = ({
        id = 'DuendeVerde',
        personaje = 'Duende Verde',
        realName = 'Norman Obsborn',
        bornArea = 'New Haven, Connecticut',
        first_appearance = 'The Amazing Spider-Man #14 (julio de 1964)',
        cause = 'Debido a la "Fórmula Duende", Norman y la mayoría de los sucesores de la persona Duende poseen fuerza sobrehumana ',
        powers = 'Fuerza sobrehumana, resistencia, durabilidad, agilidad y reflejos debido a la ingesta de la Fórmula Duende.',
        adds = 'Factor de curación regenerativa, intelecto a nivel de genio, habilidad en combate cuerpo a cuerpo y artes marciales utiliza armas con temática de Duende y un planeador Duende que tiene una variedad de armas ofensivas como parafernalia.',
        creators = 'Stan Lee y Steve Ditko',
        alias = 'El Rey Duende, El Caballero Duende, El Duende Rojo'
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
                            <p>El Duende Verde fue el alias de varios supervillanos de ficción que aparecen en los cómics estadounidenses publicados por Marvel Comics. La primera y más conocida encarnación, Norman Osborn, creado por Stan Lee y Steve Ditko, generalmente se considera en el archienemigo del Hombre Araña. Originalmente una manifestación de locura inducida químicamente, otros, como el hijo de Norman, Harry Osborn, adoptaría la personalidad. El Duende Verde es un supervillano con temática de Halloween cuyas armas se asemejan a murciélagos, fantasmas y linternas de calabaza y en la mayoría de las encarnaciones usa un hoverboard o planeador para volar.</p>
                            <p>El periodista e historiador del cómic, Mike Conroy escribe del personaje: "De todos los villanos disfrazados que han plagado a Spider-Man a lo largo de los años, el más desaliñado y aterrador de todos es el Duende Verde". El Duende Verde ha aparecido en varias películas, entre ellas Spider-Man (2002), Spider-Man 2 (2004), y Spider-Man 3 (2007) con Willem Dafoe como Norman Osborn, y The Amazing Spider-Man 2 (2014) con Dane DeHaan como Harry Osborn. La película de 2007 también retrató a James Franco como una versión del personaje del Duende Verde. Dafoe volvió intepretar por última vez en el papel en Spider-Man: No Way Home (2021), ambientada en el Universo cinematográfico de Marvel y será el villano del Hombre Araña.</p>
                            <h2>Norman Obsborn</h2>
                            <p>Norman Osborn es el personaje principal relacionado con el alias que desarrolló el equipo utilizado por los otros Duendes Verdes desde que estuvo expuesto a la Fórmula Duende. También fue la causa de la muerte de Gwen Stacy. Luego murió poco después, pero pronto fue revivido por la fórmula dentro de él. </p>
                            <h2>Harry Obsborn</h2>
                            <p>Harry Osborn, el hijo de Norman Osborn, se convierte en el segundo Duende Verde. Después de ser derrotado y puesto bajo el cuidado del Dr. Bart Hamilton, Harry, mientras se encuentra bajo hipnosis, revela muchos secretos del Duende Verde y Hamilton decide convertirse en el tercer Duende Verde. Harry se recupera y lucha contra Hamilton hasta que una explosión hace que Harry sea amnésico de su época como el Duende Verde y mata a Hamilton. Años después, los recuerdos de Harry regresan y usa un nuevo suero Duende más fuerte para aumentar su poder, pero muere a causa de él. Más tarde, Harry regresaría gracias a las maquinaciones de Mephisto en "One More Day".</p>
                            <h2>Dr Hamilton</h2>
                            <p>El Dr. Barton "Bart" Hamilton fue un psicólogo nacido en Scarsdale, Nueva York. Antes de su muerte, Harry está bajo la atención médica del Dr. Hamilton, quien logra que Harry entierre su vendetta y su identidad como el Duende en su subconsciente a través de la hipnosis. El Dr. Hamilton usa los secretos de Harry para convertirse en el tercer Duende Verde. Sin embargo, Harry no tiene conocimiento de dónde se encuentra la fórmula para mejorar la fuerza de Duende Verde y, por lo tanto, Hamilton no puede ubicarla. Trama un complot complicado para matar a Silvermane, pero Harry Osborn retoma la identidad del Duende Verde para detenerlo. Luchan y Hamilton es asesinado accidentalmente por una bomba con la que él quería matar a Spider-Man, y Harry se vuelve amnésico. Años más tarde, hubo especulaciones de que Hamilton era el Hobgoblin, pero esto es refutado. Un Duende Verde que es presumiblemente Hamilton aparece como miembro de la segunda encarnación de la Legión de los No-Vivos, creada por el Gran Maestro. Después de enfrentarse a los Vengadores, el grupo y su maestro son vencidos por la Muerte. Durante la historia de Dead No More: The Clone Conspiracy, la forma de Duende Verde de Bart Hamilton es clonado por Chacal y su compañía New U Technologies.</p>
                            <h2>Phil Ulrich</h2>
                            <p>Luego de la recaída de la locura de Harry, se convierte nuevamente en el Duende Verde en numerosas ocasiones hasta que muere debido a los efectos secundarios de un suero Duende modificado, su equipo y la identidad del Duende Verde son utilizados brevemente por Philip Benjamin "Phil" Urich (sobrino de Ben Urich del Daily Bugle) que intenta ganarse la reputación de superhéroe, aunque a veces se le considera tan maníaco como sus antecesores villanos. Cuando su equipo se daña durante una batalla contra un Centinela en el cruce de Onslaught, Phil no puede repararlo ni reemplazarlo, y el cuarto Duende Verde se retira. Más tarde forma el equipo Excelsior. Actualmente, Phil se ha convertido en el nuevo Hobgoblin, pero después de ser atrapado por Spider-Man, sale de la cárcel y se convierte en el Caballero Duende en un sirviente del Duende Verde.</p>
                            <h2>Construcción sin nombre</h2>
                            <p>Después de regresar de entre los muertos, Norman comienza a tratar de convencer al público de que nunca fue el Duende Verde, por lo que tiene un asociado llamado Doctor Angst. Ingeniero genético de un nuevo Duende Verde, uno de ellos servilmente dedicado a él, para ayudarlo en su caso. Norman usa al Duende como guardaespaldas, para atormentar a Spider-Man, y en trucos (como el secuestro de Normie Osborn por rescate) diseñado para atraer la simpatía pública. Después de que Norman se encuentra incapacitado por la Reunión de los Cinco, el Duende se queda solo y comienza a degenerar debido a que ya no tiene acceso a la fórmula requerida para mantenerlo estable. El Duende persigue a la esposa de Harry Osborn, Liz Allan, en un intento desesperado por encontrar una cura para su condición, pero Spider-Man lo expulsa. Durante un segundo intento de capturar a Liz, el Duende se desenmascara frente a Spider-Man (arrastrando los ojos en una variedad de rostros, el más prominente es Harry, después de hacerlo) y se funde en un montón de goo mientras reclama a Norman volvería</p>
                        </div>
                    </div>
                    <div className='buttonNavContainer d-block d-sm-none'>
                    <a href="/villanos"><button className='buttonNavigationSpiders'> <GiSpiderWeb/> Ir a Villanos</button></a>
                </div>
                <div className='navegationPerson'> 
                    <a href="/personaje/Morlun"><button className='buttonNavigation'><FaArrowLeft/> Morlun</button></a>
                    <a href="/personaje/Electro"><button className='buttonNavigation'>Electro <FaArrowRight/></button></a>
                </div>
            </div> 
            </div>
            </div>
        </div>
    )
}
