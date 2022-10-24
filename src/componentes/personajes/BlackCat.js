import React from 'react'
import { Link } from 'react-router-dom';
import '../personajes/personajesStyle/personajes.css'
import { GiSpiderWeb } from 'react-icons/gi';
import { FaArrowLeft } from 'react-icons/fa';
import { FaArrowRight } from 'react-icons/fa';


export const BlackCat = ({

    id = 'Black_Cat',
    realName = 'Felicia Sara Hardy',
    personaje = 'Black Cat',
    bornArea = 'Queens, NY (EEUU).',
    cause = 'Manipulación Mágica inducida por el Dr.Extrange.',
    powers = 'visión nocturna, garras retráctiles en las puntas de sus dedos, velocidad sobrehumana, fuerza, agilidad y resistencia, proporcionales a un gato.',
    first_apperance= 'Amazing Spider-Man #194 (1979).',
    adds = 'Puede dar "mala suerte" despues de una prueba inducida.',
    creators= 'Brian Micha	Marv Wolfman y Dave Cockrum.',
    alias = 'Gata negra.'

}) => {

  const imagePath= `/assets/personajes/${id}.png`;
  return (
            <div className='wrappPerson'>
                <div className='personWrap1'>
                    <div className='imgWrap'>
                        <img src={imagePath} className='card-imgIndividual' alt='Black Cat'/>
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
                                <Link to="/villanos"><a href="/villanos"><button className='buttonNavigationSpiders'> <GiSpiderWeb/> Ir a Villanos</button></a></Link>
                        </div>
                    </div>
                    <div className='dataWrap'>
                        <div className='dataControl'>
                            <h3 className='titlePerson'>{personaje}</h3>
                            <div className='infoPersonWrap'>
                                <div className='infoPerson'>
                                    <p>Felicia Hardy nació en Queens, Nueva York. Su padre, Walter, pretendía ser un vendedor ambulante, pero era un gato ladrón de fama mundial que, antes de su arresto, la alentó a que nunca se conformara con el segundo mejor. Si amaba el baloncesto, debería trabajar para convertirse en jugadora de baloncesto y no solo en animadora.</p>
                                    <p>En Spider-Man / Black Cat: The Evil that Men Do, Hardy decidió utilizar sus nuevas habilidades para seguir los pasos de su padre. Después de acumular una fortuna en artículos robados, Felicia adoptó su identidad de disfraz.</p>
                                    <p>Primero se viste con el disfraz de Gata Negra para sacar a su padre de la cárcel. En la misma noche, ella se encuentra con Spider-Man. Su padre muere y ella simula su propia muerte</p>
                                    <p>A pesar de su antipatía hacia los hombres, Felicia siente una afinidad con este héroe solitario; Spider-Man es el primer hombre en el que sintió que podía confiar y creció a creer que estaba enamorada de él.</p>
                                    <p>Felicia busca la manera de ganarse su confianza y continúa con la imagen de la Gata Negra como un intento equivocado de atraer su afecto. Al ver lo bueno en Felicia, Spider-Man hace todo lo posible para que se elimine su historial criminal. Felicia es ingresada en una institución mental pero escapa. Ella une fuerzas con Spider-Man contra Maggia. Se le concede la amnistía condicional, y nuevamente convence a Spider-Man de que ella ha muerto.</p> 
                                    <p>La Gata Negra finalmente encuentra la oportunidad de demostrar su valía después de aprender que el Kingpin controla un detonador increíblemente poderoso.</p>
                                    <p>Gata Negra usa sus habilidades para robar el objeto primero y protegerlo de todas las partes. Ella le da el detonador a Spider-Man y se convierte en el objetivo de la venganza del Doctor Octopus. Aunque Spider-Man arranca sus apéndices mecánicos, Octopus aún puede controlarlos mentalmente y mantener a la Gata Negra quieta mientras sus hombres abren fuego. </p>
                                    <p>Spider-Man apenas la lleva al hospital a tiempo y mientras operan con las docenas de heridas de bala y cuchillo, Peter se da cuenta de lo mucho que se preocupa por Felicia</p>
                                    <p>Después de que ella se recupera, comienzan una relación y pronto Peter le revela su identidad. Felicia tiene dificultades para aceptar el hecho de que Peter es solo un hombre debajo de la máscara y no puede entender su necesidad de una vida civil. Peter está herido, pero continúa la relación ya que era la primera vez que no necesitaba ocultar su vida como Spider-Man de alguien.</p>                               
                                    <p>Inicialmente, la Gata Negra no tenía habilidades sobrehumanas. Más tarde, una prueba inducida por Kingpin le dio la capacidad psiónica de afectar los campos de probabilidad; esencialmente, ella podría producir "mala suerte" para sus enemigos. ​El poder de "mala suerte" implica que bajo estrés ella inconscientemente puede causar a cualquier persona en su vecindad inmediata que perciba como una amenaza para ser susceptible a accidentes extraños, como pistolas que se atascan y explotan, o tropezar con objetos. Esta habilidad también tuvo el efecto secundario de eventualmente causar problemas para cualquiera que pase largos períodos de tiempo a su alrededor.</p>
                                    <p>El Doctor Strange eventualmente manipuló sus poderes que le quitaron brevemente sus habilidades de mala suerte, junto con el efecto secundario no deseado. Sin embargo, esta manipulación mágica temporalmente la dotó de habilidades felinas, dándole visión nocturna, garras retráctiles en las puntas de sus dedos, velocidad sobrehumana, fuerza, agilidad y resistencia, proporcionales a un gato. Sus poderes de "mala suerte" fueron finalmente restaurados por Doc Tramma a través del uso de la cibernética.</p>
                                    <p>La Gata Negra tiene reflejos, agilidad y resistencia de un acróbata de nivel olímpico. Ella es físicamente muy fuerte y atlética y tiene una gran resistencia física. Es una excelente luchadora callejera capaz de enfrentarse a varios asaltantes armados e incapacitarlos sin que ella misma sea herida. Ella está entrenada en varios estilos de artes marciales. Hardy es una fotógrafa talentosa; mientras sale con Spider-Man toma fotos del héroe que él admite que son mejores que su propio trabajo.</p>
                                    <p>Ella también ha adquirido varios dispositivos del Tinkerer que aumentan su agilidad y aumentan su fuerza. Ella usa aretes que interactúan con los centros de equilibrio de su cerebro para otorgarle una mayor agilidad. Ella tiene lentes de contacto que le permiten ver en varios rangos del espectro electromagnético, como el infrarrojo y el ultravioleta. Su traje contiene micro servosque aumentan su fuerza por encima de los niveles humanos normales. Los guantes de su vestimenta contienen microfilamentos de acero, que forman garras retráctiles en las puntas de los dedos cuando flexiona los dedos (provocando un aumento magnético que condensa los filamentos en garras polarizadas) que le permiten rasgar la mayoría de las superficies y escalar fácilmente las paredes. Usando este equipo, el Gato Negro ha sido capaz de vencer a los enemigos que tienen habilidades sobrehumanas.</p>
                                    <p>La Gata Negra tiene un dispositivo de gancho de agarre en miniatura escondido en la "piel" de cada guante, diseñado por su padre Walter Hardy, que le permite columpiarse de los edificios de una manera similar a Spider-Man, aunque no tan rápido. También puede utilizar el cable de este dispositivo como cuerda floja, dispositivo de escala de pared, línea de oscilación o como arma en combate.</p>
                                </div>
                            </div>
                        <div className='buttonNavContainer d-block d-sm-none'>
                            <Link to="/villanos"><button className='buttonNavigationSpiders'> <GiSpiderWeb/> Ir a Villanos</button></Link>
                        </div>
                        <div className='navegationPerson'> 
                            <Link to="/personaje/shocker"><button className='buttonNavigation'><FaArrowLeft/> Shocker</button></Link>
                            <br/>
                            <Link to="/personaje/Morbius"><button className='buttonNavigation'>Morbius <FaArrowRight/></button></Link>
                        </div>
                        </div>
                   </div>
                </div>
            </div>
  

  )
}
