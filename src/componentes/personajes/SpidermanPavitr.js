import React from 'react';
import '../personajes/personajesStyle/personajes.css';
import { GiSpiderWeb } from 'react-icons/gi';
import { FaArrowLeft } from 'react-icons/fa';
import { FaArrowRight } from 'react-icons/fa';

export const SpidermanPavitr = ({
    id = 'spidermanPavitr',
    realName = 'Pavitr Prabhakar',
    personaje = 'Spider-Man (Pavitr Prabhakar)',
    bornArea = 'India',
    cause = 'Se encuentra con un anciano "yogui" que le otorga los poderes de una araña',
    powers = 'Fuerza, velocidad, reflejos, agilidad, durabilidad, resistencia, coordinación y equilibrio sobrehumanos, capacidad para aferrarse a superficies sólidas. Curación acelerada, Intelecto a nivel de genio, Habilidad precognitiva del sentido arácnido, Utilizando tiradores web montados en la muñeca',
    first_apperance= 'Spider-Man: India #1 (enero de 2005).',
    adds = 'Es una versión alternativa de Spider-Man que vive en la India.',
    creators= 'Jeevan J. Kang, Suresh Seetharaman, Sharad Devarajan.',
    alias = 'Spiderman Indio.'
}) => {
    const imagePath= `/assets/personajes/${id}.png`;
    return (
        <div className='wrappPerson'>
        <div className='personWrap1'>
            <div className='imgWrap'>
                <img src={imagePath} className='card-imgIndividual' alt='spiderman Pavitr'/>
                <div className='dataControlSmall'>
                    <ul className='listDataControl'>
                        <li className='listData'>Nombre: <span className='styleData'>{ realName }</span></li>
                        <li className='listData'>Lugar de Nacimiento: <span className='styleData'>{ bornArea }</span></li>
                        <li className='listData'>Causa de sus poderes: <span className='styleData'>{ cause }</span></li>
                        <li className='listData'>Poderes: <span className='styleData'>{ powers }</span></li>
                        <li className='listData'>Añadidos: <span className='styleData'>{ adds }</span></li>
                        <li className='listData'> Primera aparición: <span className='styleData'>{ first_apperance }</span></li>
                        <li className='listData'>Creadores: <span className='styleData'>{ creators }</span></li>
                        <li className='listData'>Alias: <span className='styleData'>{ alias }</span></li>
                    </ul>
                </div>
                <div className='buttonNavContainer d-none d-sm-block'>
                    <a href="/spiders"><button className='buttonNavigationSpiders'> <GiSpiderWeb/> Ir a Spiders</button></a>
                </div>
                
            </div>
            <div className='dataWrap'>
                <div className='dataControl'>
                    <h3 className='titlePerson'>{personaje}</h3>
                    <div className='infoPersonWrap'>
                        <p className='infoPerson'>
                            <p>Spider-Man ( Pavitr Prabhakar ) es un superhéroe que aparece en los cómics estadounidenses publicados por Marvel Comics.</p>
                            <p>Pavitr Prabhakar, un sencillo niño indio de un pueblo remoto, se muda a Mumbai con su tía Maya y su tío Bhim para estudiar después de obtener la mitad de una beca. Sus padres murieron hace algunos años. Otros estudiantes de su nueva escuela se burlan de él y lo golpean por su naturaleza estudiosa y sus antecedentes simples. Sabe que su tío Bhim está luchando para mantenerlo a él y a su tía Maya y pagar la matrícula escolar. Solo Meera Jain, una chica popular de su escuela, se hace amiga de él.</p>
                            <p>Mientras tanto, un señor del crimen local llamado Nalin Oberoi usa un amuleto para realizar un antiguo ritual en el que está poseído por un demonio comprometido a abrir una puerta para que otros demonios invadan la Tierra. Mientras es perseguido por matones, Pavitr Prabhakar se encuentra con un anciano yogui que le otorga los poderes de una araña .para luchar contra el mal que amenaza al mundo.</p>
                            <p>Mientras descubre sus poderes, Pavitr Prabhakar se niega a ayudar a una mujer que está siendo atacada por varios hombres. Abandona el lugar, pero regresa cuando escucha a su tío gritar y descubre que ha sido asesinado. Se entera de que Bhim fue apuñalado cuando trató de ayudar a la mujer. Pavitr Prabhakar entiende que un gran poder conlleva una gran responsabilidad y jura usar sus poderes para el bien de los demás.</p>
                            <p>Nalin Oberoi vuelve a ser humano brevemente y transforma a un médico de buenos modales en un demonio con cuatro tentáculos mágicos (la versión india del Doctor Octopus) y lo envía a matar a Spider-Man, siguiendo las instrucciones de las voces del demonio. "Doc Ock" falla y Spider-Man hace su debut público como héroe. Los periódicos, sin embargo, lo etiquetan como una amenaza.</p> 
                            <p>Oberoi secuestra a la tía de Pavitr Prabhakar y la lleva a una refinería en las afueras de Mumbai. Allí traiciona al Doctor Octopus, arrojándolo al océano. Spider-Man llega y lucha contra Oberoi, quien también secuestró a Meera. Deja caer tanto a Maya como a Meera desde lo alto de la refinería. Spider-Man se lanza en busca de su tía, pero no logra rescatar a Meera, quien es salvada por el Doctor Octopus. Pavitr le revela su identidad a Meera y le pide que lleve a su tía a un lugar seguro.</p>
                            <p>Oberoi se deshace del Doctor Octopus para siempre y toca a Spider-Man con el amuleto. Una criatura parecida a Venom emerge del amuleto e intenta atraer a Spider-Man al lado oscuro. Pavitr recuerda el dicho de su tío sobre la responsabilidad y rechaza el mal, rompiendo el vínculo entre los demonios y Oberoi y haciendo que Oberoi sea humano nuevamente. Spider-Man arroja el amuleto al océano y Oberoi es enviado a una institución mental.</p>
                            <p>Finalmente, la paz se restaura en Mumbai. Pavitr Prabhakar comienza un romance con Meera y se muestra celebrando el festival Diwali con su tía. La historia termina con una cita del Bhagavad Gita , que muestra que el Venom-Demon sigue vivo.</p>
                            <p>Durante la historia de Spider-Verse , que presentaba a Spider-Men de varias realidades alternativas, se vio a Pavitr Prabhakar luchando contra un misterioso nuevo villano llamado Karn, a quien confundió con un demonio. Superior Spider-Man ( la mente del Doctor Octopus en el cuerpo de Peter Parker) logró salvarlo y lo reclutó en su ejército de arañas.</p>
                        </p>
                    </div>
                <div className='buttonNavContainer'>
                    <a href="/villanos"><button className='buttonNavigationSpiders'> <GiSpiderWeb/> Ir a Villanos</button></a>
                </div>
                <div className='navegationPerson'> 
                    <a href="/personaje/SpiderHam"><button className='buttonNavigation'><FaArrowLeft/> Spider Ham</button></a>
                    <br/>
                    <a href="/personaje/spidermanManga"><button className='buttonNavigation'>Spiderman Manga <FaArrowRight/></button></a>
                </div>
        </div>
        </div>
        </div>
    </div>
  )
}
