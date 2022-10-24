import React from 'react';
import '../personajes/personajesStyle/personajes.css';
import { GiSpiderWeb } from 'react-icons/gi';
import { FaArrowLeft } from 'react-icons/fa';
import { FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export const MiguelOhara = ({
    id = 'MiguelOhara',
    realName = 'Miguel O`hara.',
    personaje = 'Spider-Man 2099',
    bornArea = 'México.',
    cause = 'Explosión Accidental en laboratorio.',
    powers = 'Fuerza y agilidad proporcionales a las de las arañas, garras en las yemas de los dedos, antebrazos que generan telarañas, visión mejorada, colmillos que pueden inocular veneno paralizante.',
    first_apperance= 'The Amazing Spider-Man núm. 365 (agosto de 1992).',
    adds = 'Es muy sensible a la luz directa y no posee sentido arácnido pero ha podido desarrollar algo similar.',
    creators= '	Peter David y Rick Leonardi.',
    alias = 'Miggi.'
}) => {
    const imagePath= `/assets/personajes/${id}.png`;
    return (
        <div className='wrappPerson'>
        <div className='personWrap1'>
            <div className='imgWrap'>
                <img src={imagePath} className='card-imgIndividual' alt='Miguel O`hara'/>
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
                            <p>Miguel Hernández es un joven científico de origen mexicano que trabaja para la corporación Alchemax en un proyecto para crear seres humanos mejorados genéticamente, inspirándose en las habilidades del Spider-Man del siglo xx. Pese a su oposición a realizar pruebas en humanos en una fase tan temprana de sus investigaciones, la empresa le presiona para que demuestre sus avances con un voluntario, un reo condenado a 40 años de cárcel. </p>
                            <p>Tal y como temía Miguel, el preso se transforma en un ser deforme que, aunque posee una gran fuerza, muere instantes después de que su estructura genética haya sido alterada. Tras este hecho, Miguel presenta la dimisión ante su jefe, Tyler Stone. Este intenta persuadirle, intoxicándole con Éxtasis líquido sin que lo sepa. </p>
                            <p> Así, Stone le hace saber que desde ese momento es adicto a dicha sustancia, y que su corporación es la única distribuidora legal de la misma, por lo cual debería reconsiderar su idea de marcharse. En un intento de librarse de la adicción a la droga, Miguel se cuela por la noche en su laboratorio para modificar su estructura genética y eliminar el Éxtasis de su organismo.</p>
                            <p>Entonces, Áaron Delgado, un colega de laboratorio, envidioso de su trabajo y harto de los ultrajes a los que le sometía Miguel, altera los parámetros del ADN que había introducido Miguel y los mezcla con el ADN del proyecto para crear súper humanos con poderes similares a Spiderman. Al ser manipulado el sistema, tiene lugar una explosión y de entre el humo surge Miguel luciendo unas garras y unos colmillos amenazadores.</p>
                            <p>Áaron, presa del pánico, comienza a dispararle causando otra explosión, esta vez mayor. La fuerza de ésta le arroja al vacío y aunque Miguel le agarra en el último instante, no puede evitar que caiga. Miguel logra huir de las fuerzas del orden ("El Ojo Público") gracias a sus nuevas habilidades y la ayuda de un admirador de Thor, que le proporciona un pedazo de tela que le permite planear.</p> 
                            <p>Ya en su hogar, gracias a su visión mejorada, puede ver cómo se acerca a su piso Venture, un cyborg contratado por Alchemax para investigar lo sucedido en el laboratorio. Temiendo que pueda llegar hasta su casa y averiguar que estuvo implicado en la explosión del laboratorio, Miguel se enfunda la única ropa que no puede romper con sus garras, un disfraz del Día de Muertos de México y adhiere el trozo de tela que le entregó el seguidor de thor a su espalda. De esta manera, se enfrenta a Venture alejándolo de su casa para proteger su identidad. Se desencadena una pelea por toda la ciudad mientras Miguel va desarrollando sus habilidades y descubriendo otras nuevas, como que sus antebrazos pueden generar y lanzar telas de araña.</p>
                            <p>Aunque la batalla se decanta a favor de Miguel, este se encuentra ahora perseguido por "El Ojo Público", investigado por Alchemax y con su vida destrozada. Intentará arreglar la situación y vengarse de Tyler Stone y Alchemax, adoptando el papel de Spiderman en esta época.</p>
                            <p>Miguel pasa por varias aventuras, entre estas reencontrarse con su hermano Gabriel O'Shea, salvar en un par de ocasiones la Tierra 616 y el 2099 con el Spider-Man original y descubrir que Tyler Stone es su verdadero padre y que su madre tuvo relaciones con él antes de casarse, pero que se quedó con Miguel como un O'Shea y no como Stone. Y su accidente/origen de Spider-Man 2099 no tenía sentido ya que descubrió que Stone lo engañó con droga falsa para que creyera que era adicto a ella.</p>
                            <p>Además, obtiene un programa inteligente al que llama Lyla, con aspecto de mujer. Este programa le ayuda a cambiar de traje con tecnología holográfica para que parezca normal ya que él no puede quitarse su traje.</p>
                            <p>Tras el cambio destructor de Age of Ultron, Tyler Stone desaparece dado que su padre, Tiberius Stone iba a morir en el 2013, destruyendo a Tyler y por consecuente, pronto a Miguel. Miguel viaja al pasado-presente en la Tierra 616. Al intentar proteger a Stone abuelo, Miguel se encuentra con The Superior Spiderman, quien busca destruir a Stone abuelo y ambos luchan hasta que Tiberius activa un detonador de spider-sense dejando débil a Otto y Miguel llevándose a Tiberius.</p>
                            <p> Miguel intenta cambiar su historia cuando se entera que Horizon Lab's explotará y se convertirá en la malvada Alchemax, pero Superior Spider-Man se interpone y la historia sigue igual. Tyler se recupera en el futuro y destruye la máquina del tiempo dejando atrapado a Miguel en la Era Heroica.</p>                               
                        </p>
                    </div>
                <div className='buttonNavContainer d-block d-sm-none'>
                   <Link to="/spiders"><button className='buttonNavigationSpiders'> <GiSpiderWeb/> Ir a Spiders</button></Link>
                </div>
                <div className='navegationPerson'> 
                    <Link to="/personaje/SpiderGirl"><button className='buttonNavigation'><FaArrowLeft/>  Spider Girl</button></Link>
                            <br/>
                    <Link to="/personaje/SpidermanSuperior"><button className='buttonNavigation'>Spiderman Superior <FaArrowRight/></button></Link>
                </div>
        </div>
        </div>
        </div>
    </div>
  )
}
