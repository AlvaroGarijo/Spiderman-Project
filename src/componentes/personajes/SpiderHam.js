import React from 'react';
import '../personajes/personajesStyle/personajes.css';
import { GiSpiderWeb } from 'react-icons/gi';
import { FaArrowLeft } from 'react-icons/fa';
import { FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export const SpiderHam = ({
    id = 'SpiderHam',
    realName = 'Peter Benjamin Porker.',
    personaje = 'Spider Ham',
    bornArea = 'Tierra-8311.',
    cause = 'Mordedura de una cientifica que inventó un secador atómico y salió regular la cosa.',
    powers = 'Fuerza, agilidad y durabilidad mejoradas, sentido arácnido precognitivo, cinta orgánica, capacidad de adherirse a las superficies.',
    first_apperance= 'Marvel Tails, el espectacular Spider-Ham (noviembre de 1983).',
    adds = '"Esto es asombroso! ¿Soy una araña con las limitaciones de un cerdo? ¿O un cerdo con la fuerza y ​​agilidad proporcionadas de una araña? Me he convertido en algo más grande que una araña o un cerdo... Me he convertido en una Araña - ¡Cerdo! " - Peter Porker, the Spectacular Spider-Ham # 15 (mayo de 1987).',
    creators= '	Larry Hama, Tom DeFalco y Mark Amstrong.',
    alias = 'Spider-Ham.'
}) => {
    const imagePath= `/assets/personajes/${id}.png`;
    return (
        <div className='wrappPerson'>
        <div className='personWrap1'>
            <div className='imgWrap'>
                <img src={imagePath} className='card-imgIndividual' alt='SpiderHam'/>
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
                   <Link to="/spiders"><button className='buttonNavigationSpiders'> <GiSpiderWeb/> Ir a Spiders</button></Link>
                </div>
                
            </div>
            <div className='dataWrap'>
                <div className='dataControl'>
                    <h3 className='titlePerson'>{personaje}</h3>
                    <div className='infoPersonWrap'>
                        <p className='infoPerson'>
                            <p>Spider-Ham ( Peter Porker ) es un superhéroe ficticio que aparece en los cómics estadounidenses publicados por Marvel Comics . El personaje es un cerdo antropomórfico y es una versión de parodia animal de dibujos animados de Spider-Man . Fue creado por el editor Larry Hama , Tom DeFalco y Mark Armstrong. </p>
                            <p>Apareció por primera vez en el cómic de humor de una sola toma Marvel Tails Starring Peter Porker, the Spectacular Spider-Ham (noviembre de 1983), al que luego siguió una serie bimensual en curso, Peter Porker, the Spectacular Spider-Ham , bajo Marvel's. Huella de Star Comics , con ambos títulos editados por Hama. El personaje existía en la Tierra-8311, que era un universo poblado por versiones de parodia antropomórficas de los superhéroes y supervillanos de Marvel.</p>
                            <p>Peter Porker nació como una araña (simplemente llamado Peter). Residía en el laboratorio del sótano de May Porker, una científica de animales un poco tonta que había creado "el primer secador de pelo atómico del mundo", con la esperanza de que "la introducción de la fusión nuclear en los salones de belleza de Estados Unidos" "revolucionaría la industria del cuidado del cabello". </p>
                            <p>Después de rociar su cabeza con agua y activar la secadora, May Porker se irradió accidentalmente y, en un ataque de delirio, mordió a Peter, quien luego se transformó en un cerdo antropomórfico muy parecido a la propia May Porker. Huyendo de la granja de Porker desorientado, Peter pronto se dio cuenta de que aún conservaba las habilidades de una araña:</p>
                            <p>"¡Esto es asombroso! ¿Soy una araña con las limitaciones de un cerdo? ¿O un cerdo con la fuerza y ​​agilidad proporcionadas de una araña? Me he convertido en algo más grande que una araña o un cerdo... Me he convertido en una araña- ¡Jamón! " - Peter Porker, the Spectacular Spider-Ham # 15 (mayo de 1987)</p> 
                            <p>Después de esta sorprendente serie de eventos, Peter (quien adoptó el apellido "Porker", el de su benefactora May Porker, quien después del accidente se sintonizó mentalmente con un estado en el que creía que era la tía amorosa de Peter) se dedicó a sí mismo y a su recién descubierto habilidades para luchar contra la injusticia y la parodia animal ocasional de los villanos establecidos de Marvel Comics. El genio científico de May Porker se transfirió a Peter, brindándole el conocimiento para diseñar sus guanteletes tejedores de telarañas para reemplazar su habilidad natural perdida.</p>
                            <p>Spider-Ham aparece en la película animada Spider-Man: Into the Spider-Verse , con la voz de John Mulaney .</p>                             
                        </p>
                    </div>
                    <div className='buttonNavContainer d-block d-sm-none'>
                   <Link to="/spiders"><button className='buttonNavigationSpiders'> <GiSpiderWeb/> Ir a Spiders</button></Link>
                </div>
                <div className='navegationPerson'>
                    <Link to="/personaje/SpiderGirlMayday"><button className='buttonNavigation'><FaArrowLeft/>  Spider Girl (Mayday)</button></Link>
                            <br/>
                    <Link to="/personaje/spidermanPavitr"><button className='buttonNavigation'>Spiderman (Pavitr) <FaArrowRight/></button></Link>  
                </div>
        </div>
        </div>
        </div>
    </div>
  )
}
