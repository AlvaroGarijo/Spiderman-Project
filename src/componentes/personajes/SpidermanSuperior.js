import React from 'react';
import '../personajes/personajesStyle/personajes.css';
import { GiSpiderWeb } from 'react-icons/gi';
import { FaArrowLeft } from 'react-icons/fa';
import { FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export const SpidermanSuperior = ({
    id = 'SpidermanSuperior',
    realName = 'Otto Octavius.',
    personaje = 'Spiderman Superior',
    bornArea = 'Schenectady, Nueva York.',
    cause = 'Otto Octavius dentro del cuerpo de Peter Parker.',
    powers = 'Fisiología arácnida, fuerza, resistencia, velocidad sobrehumanas, factor de curación, reflejos mejorados, agilidad, trepamuros, habilidad de salto, sentido arácnido, equilibrio perfecto.',
    first_apperance= 'Amazing Spider-Man Vol 1 698 (Enero de 2013, como Spider-Man).',
    adds = 'Usando un Octobot cambia mentes, Otto Octavius trasplanto su mente en el cuerpo de Spider-Man.',
    creators= '	Dan Slott, Ryan Stegman y Humberto Ramos.',
    alias = 'Superior Spiderman.'
}) => {
    const imagePath= `/assets/personajes/${id}.png`;
    return (
        <div className='wrappPerson'>
        <div className='personWrap1'>
            <div className='imgWrap'>
                <img src={imagePath} className='card-imgIndividual' alt='Spiderman Superior'/>
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
                            <p>Usando un Octobot cambia mentes, Otto Octavius trasplanto su mente en el cuerpo de su némesis Spider-Man. Octavius conservo todos los recuerdos de Peter, y así fue capaz de engañar a toda la familia y amigos de Parker, desde Mary Jane, la tía May e incluso a los Vengadores. La mente de Peter, por su parte, estaba en el cuerpo moribundo de Octavius.</p>
                            <p>Tras darse cuenta de que Peter, en el cuerpo del Doctor Octopus, había escapado de la Balsa, Otto decidió mantener a todas las personas que Peter conocía en una sala de seguridad en la Torre Stark y esperó al "Doctor Octopus" en este lugar. Luego distrajo a los demás Vengadores con Octobots gigantes alrededor del mundo, sabiendo que Peter buscaría la ayuda de Iron Man.</p>
                            <p>Ambos enemigos lucharon hasta que cayeron de la torre, hiriendo fatalmente a Dock Ock/Peter. Cuando Ock/Peter trato de usar el Octobot de intercambio de mentes, Spider-Man/Otto le revelo que él estaba usando un casco de Carbonadium, haciendo que su cerebro fuera totalmente inaccesible para el cambio de mentes. Otto entonces declaro su victoria final contra Parker, dándole un golpe letal que lo dejo moribundo.</p>
                            <p>Los dos entonces descubrieron que el Octobot logró conectar sus mentes aunque no pudo intercambiarlas, y Peter obligo a Otto a revivir sus experiencias y recuerdos más tristes como Spider-Man, haciéndole caer en cuenta de la responsabilidad con la que venía su poder. </p>
                            <p>Ante tal situación, Otto le dijo a Peter que él no quería esto, pero no podian cambiar sus cuerpos de vuelta. Finalmente, Otto le prometió a Peter continuar su legado, tanto como Spider-Man y Peter Parker. Más adelante, Otto no sólo se dio cuenta de que podía ser un mejor Spider-Man, sino que también podría ser un hombre mejor del que fue como Doctor Octopus, convirtiéndose así en un Superior Spider-Man.</p> 
                            <p>Fue al intentar acceder a una de sus antiguas bases que se dio cuenta que por mucho que intentara menospreciar a Spider-Man, su enemigo siempre lo había derrotado y por ello decidió asumir por completo el reto de ocupar su lugar.</p>
                            <p>Sus primeros pasos fueron luchar contra un nuevo grupo de los Seis Siniestros y apoderarse de Living Brain a quien convirtió en su ayudante en Horizons Labs, además desplegó por toda la ciudad un ejército de octobots para que le sirvieran de ojos y pudieran avisarle de cualquier amenaza y al descubrir que Peter todavía no se había doctorado decidió inscribirse de nuevo en la Universidad Empire State para obtener el título. Fue allí donde conoció a Anna Maria Marconi.</p>
                            <p>Más tarde Peter/Otto empieza a salir con Mary Jane, sin ella sospechar nada del cambio de mentes pero su cita es interrumpida nuevamente por los Seis Siniestros que atacan Horizon con la idea de robar una máquina del clima, pero esta vez Otto va preparado, ha rastreado sus comunicaciones y los vence casi sin ningún problema, cuando se dispone a matar a Boomerang es detenido por una extraña manifestación de Peter Parker que ni siquiera el mismo Otto puede sentir y que está dispuesto a recuperar su cuerpo.</p>
                            <p>Poco después la prensa recibe a Spider-Man como un héroe y Jameson lo reconoce como tal, mientras el fantasma de Peter no puede creer lo que ve, Otto crea una mejora de sus Octobots llamándolos Spider-Bots para que vigilen la ciudad por él y le informen de crímenes.</p>                               
                        </p>
                    </div>
                <div className='buttonNavContainer d-block d-sm-none'>
                    <Link to="/spiders"><button className='buttonNavigationSpiders'> <GiSpiderWeb/> Ir a Spiders</button></Link>
                </div>
                <div className='navegationPerson'>
                    <Link to="/personaje/MiguelOhara"><button className='buttonNavigation'><FaArrowLeft/>  Miguel O`hara</button></Link>
                            <br/>
                    <Link to="/personaje/SpiderWomanJessica"><button className='buttonNavigation'>Spider Woman (Jessica) <FaArrowRight/></button></Link>  
                </div>
        </div>
        </div>
        </div>
    </div>
  )
}
