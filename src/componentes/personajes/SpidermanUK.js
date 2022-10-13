import React from 'react';
import '../personajes/personajesStyle/personajes.css';
import { GiSpiderWeb } from 'react-icons/gi';
import { FaArrowLeft } from 'react-icons/fa';
import { FaArrowRight } from 'react-icons/fa';

export const SpidermanUK = ({
    id = 'spiderUK.',
    realName = 'William "Billy" Braddock.',
    personaje = 'Spider-UK',
    bornArea = 'Tierra-833.',
    cause = 'Mordedura araña.',
    powers = 'Fuerza, velocidad, agilidad, resistencia, reflejos y durabilidad sobrehumanos. Factor de curación Sentido arácnido precognitivo Lanza telarañas mecánicas. Uso de un dispositivo de viaje interdimensional. Capacidad para adherirse a la mayoría de las superficies',
    first_apperance= 'Edge of Spider-Verse #2 (September 2014).',
    adds = '"¿En cuántos mundos has estado? Yo he visto multitudes, todos son hermosos... Y diferentes"',
    creators= 'Jason Latour, Robbi Rodriguez.',
    alias = 'Spider-UK.'
}) => {
    const imagePath= `/assets/personajes/${id}.png`;
    return (
        <div className='wrappPerson'>
        <div className='personWrap1'>
            <div className='imgWrap'>
                <img src={imagePath} className='card-imgIndividual' alt='spiderman UK'/>
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
                <div className='buttonNavContainer'>
                    <a href="/spiders"><button className='buttonNavigationSpiders'> <GiSpiderWeb/> Ir a Spiders</button></a>
                </div>
                
            </div>
            <div className='dataWrap'>
                <div className='dataControl'>
                    <h3 className='titlePerson'>{personaje}</h3>
                    <div className='infoPersonWrap'>
                        <p className='infoPerson'>
                            <p>Spider-UK es un superhéroe que aparece en los cómics estadounidenses publicados en Marvel Comics . Se le presenta como un Spider-Man con sede en Gran Bretaña y el líder de los Web Warriors.</p>
                            <p>Originario de la Tierra-833, Billy Braddock es uno de los reclutas más nuevos del Cuerpo del Capitán Gran Bretaña que opera como Spider-UK. Explorando otros universos durante la historia de " Spider-Verse ", ha visto la muerte de versiones alternativas de Spider-Man por parte de los Herederos . La heredera Jennix detecta a Billy mirándolos e inmediatamente corta la alimentación del escáner. Mientras Saturnyne y Lady Roma discuten sus preocupaciones sobre las Incursiones que están destruyendo muchas dimensiones, Spider-UK intenta explicar sobre los asesinatos de las arañas en todo el multiverso. Saturnyne lo rechaza, pero un Roma comprensivo le da un talismán que le permite viajar a través de la red de la vida para salvar a las Arañas restantes.</p>
                            <p>Se vio por primera vez que Spider-UK llegó a la Tierra-65, donde ve a Spider-Woman como un posible recluta para el ejército de Spider-Men. Spider-UK luego acompaña a Spider-Woman , Spider-Girl , Spider-Man 2099 , Spider-Girl of Earth-982 y Spider-Ham a reunirse con Spider-Man y Silk . Spider-UK explica que son las Arañas de otras dimensiones y que todos los hilos de la Gran Red están convergiendo en la Tierra-616. </p>
                            <p>Pedro Spider-UK le dice que el hermano mayor de Morlun, Daemos, viene a la Tierra-616 y todos se dirigen a un portal a otra dimensión. Cuando está en Earth-13, Spider-UK y Spider-Man de Earth-13 le dicen a Spider-Man que nunca perdió la Fuerza Enigma que se avecina una guerra y que Spider-Man es el mejor Spider-Man de todos.</p>
                            <p>Spider-UK y Spider-Man of Earth-13 explican que Spider-Man es el único Spider-Man que se enfrentó a un Heredero y ganó. Spider-UK obtiene una lectura sobre el segundo equipo y Old Man Spider-Man of Earth-4 dice que deben actuar rápidamente para reclutarlos.</p> 
                            <p>Cuando Morlun y su padre Solus atacan la Tierra-13, Spider-UK llama a Spider-Man y le dice que la Zona Segura está perdida. Kwaku Anansi de Earth-7082 es un tótem araña que es reclutado por Spider-UK. Antes de poder unirse, Anansi necesita engañar a un semidiós Mister Mighty después de robarle sus ovejas y luego escapar de Shungo, el Dios de la Tormenta. En Earth-TRN521, Spider-UK recluta al Spider-Man mexicano llamado Arácnido.</p>
                            <p>Spider-UK se convirtió en el único sobreviviente de la Tierra-833 después de que la realidad de su hogar fuera destruida durante la historia de Time Runs Out y eligió permanecer en la realidad de los herederos derrotados junto con Anya Corazon.</p>
                            <p>Eventualmente se unieron a Spider-Woman of Earth-65, Spider-Ham, Spider-Man Noir y Spider-Man of India sin que ninguno de ellos recordara su encuentro anterior durante el Spider-Verse original.</p>
                            <p>Después de que Gwen Stacy se reúna con los otros héroes basados ​​en arañas después de su visita a Oscorp , son interrumpidos por la llegada de Sinister Six (que consiste en Doctor Octopus , Electro ,Kraven the Hunter , Sandman , Scorpion y Vulture ). Los Seis Siniestros derrotan a los Spider-Men y se los llevan al alcalde Norman Osborn , quien dice que quiere ayudarlos. Esto hace que Spider-UK y los otros Spider-Men permanezcan alrededor de Oscorp por un tiempo. Spider-UK y los otros Spider-Men se unen a Spider-Woman of Earth-65 y Arachnia's Spider-Man para derrotar a Norman Osborn y los Sinister Six.</p>                               
                        </p>
                    </div>
                
                <div className='navegationPerson'> 
                    
                    <a href="/personaje/spidermanNoir"><button className='buttonNavigation'><FaArrowLeft/> Spiderman Noir</button></a>
                    <br/>
                    <a href="/personaje/peniParker"><button className='buttonNavigation'>Peni Parker <FaArrowRight/></button></a>
                </div>
        </div>
        </div>
        </div>
    </div>           
    )
}
