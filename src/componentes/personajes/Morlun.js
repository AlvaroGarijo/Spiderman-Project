import React from 'react';
import '../personajes/personajesStyle/personajes.css';
import { GiSpiderWeb } from 'react-icons/gi';
import { FaArrowLeft } from 'react-icons/fa';
import { FaArrowRight } from 'react-icons/fa';

export const Morlun = ({
    id= 'Morlun',
    personaje= 'Morlun',
    realName= 'Morlun D`Snideed',
    bornArea= 'Tierra 616',
    first_appearance= 'The Amazing Spider-Man vol. 2, Nº30 (2001)',
    cause= 'Es una entidad de Tierra-001 que caza todos los tótems de araña para viajar a los muchos multiversos de Marvel Comics.',
    powers= 'Fuerza, velocidad, resistencia y reflejos sobrehumanos. Drena la fuerza vital de sus víctimas.',
    adds= 'Morlun atormenta a Spider-Man por apariciones repentinas y misteriosas, advirtiéndole que lo va a asesinar.',
    creators= 'J. Michael Straczynski y John Romita Jr.',
    alias= 'Devorador de tótems'
}) => {
    const imagePath= `/assets/personajes/${id}.png`;
    return (
        <div className='wrappPerson'>
        <div className='personWrap1'>
            <div className='imgWrap'>
                <img src={imagePath} className='card-imgIndividual' alt='Morlun'/>
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
                <div className='buttonNavContainer'>
                    <a href="/villanos"><button className='buttonNavigationSpiders'> <GiSpiderWeb/> Ir a Villanos</button></a>
                </div>
                
            </div>
            <div className='dataWrap'>
                <div className='dataControl'>
                    <h3 className='titlePerson'>{ personaje }</h3>
                    <div className='infoPersonWrap'>
                        <div className='infoPerson'>
                            <p>
                                <strong style={{ fontSize:22 }}>El Otro</strong><br/>
                                En el argumento de Spider-Man: el otro, Morlun atormenta a Spider-Man por apariciones repentinas y misteriosas, advirtiéndole que lo va a terminar. Spider-Man, por una razón no explicable por la ciencia, estaba muriendo, y Morlun deseaba observar las causas y los efectos de su enfermedad. En una batalla climática, Morlun golpea a Spider-Man gravemente, arrancando uno de sus globos oculares, pero se marcha cuando llega la policía, optando por un momento más apropiado para absorber la fuerza vital de Spider-Man, dejando la telaraña en la puerta de la muerte.
                                Regresando poco después, Morlun entra en la habitación de Spider-Man en la Sala de Emergencias y se prepara para un banquete, aparentemente sin preocuparse por la presencia de los Vengadores en el hospital. Mary Jane, que llega a la habitación de Peter justo cuando Morlun está a punto de alimentarse, trata de detenerlo, pero le rompe el antebrazo y la arroja a un lado. Spider-Man cobra vida repentinamente en una exhibición feroz de nuevos poderes, incluidos los aguijones que brotan de sus brazos que usaba para sujetar a Morlun y los colmillos que usa para desgarrar la garganta de Morlun. Morlun aparentemente muere una vez más, convirtiéndose en polvo.
                            </p>
                            <p>
                                <strong style={{ fontSize:22 }}>Dark Reign</strong><br/>
                                Durante la historia de Dark Reign, un grupo secreto resucita a Morlun para que pueda devorar el tótem de Pantera en peligro con la Pantera Negra gravemente herido y, a su vez, debilitar a la nación de Wakanda Para empezar, Morlun mata al adversario Pantera a largo plazo de Hombre Mono. Fue derrotado por la nueva Pantera Negra, Shuri, quien, con la ayuda de un médico brujo, envió a Morlun al limbo como sacrificio para garantizar que T'Challa pudiera recuperar la salud de forma segura, donde se vio obligado a luchar contra las hordas interminables de la muerte.
                            </p>
                            <p>
                                <strong style={{ fontSize:22 }}>Pecado Original</strong><br/>
                                Durante la historia de Original Sin, Morlun percibe la apertura de la bóveda en la que una niña llamada Cindy Moon fue encarcelada, luego de ser mordida por la misma araña que le dio a Spider-Man sus habilidades sobrehumanas. Morlun se refiere a Moon como la Spider-Bride y el spinner en el centro de la red.
                            </p>
                            <p>
                                <strong style={{ fontSize:22 }}>Puesta en escena</strong><br/>
                                En el libro de 2014, Spider-Man: Staging Ground, Morlun luego aparece vivo, mientras viaja a la Tierra-311 y mata y drena la esencia vital del Spider-Man de ese universo, Peter Parquagh.  
                            </p>
                            <p>
                                <strong style={{ fontSize:22 }}>Spider-Verse</strong><br/>
                                Durante la historia de Spider-Verse, el misterioso pasado de Morlun fue revelado que pertenece a un universo designado como Tierra-001 y que Morlun y su familia separada conocida como los Herederos participaron en una batalla contra el Maestro Weaver y lograron capturarla a costa de la vida de los herederos sin nombre de la matriarca. Con el poder del Maestro Tejedor, usan su poder para conquistar la Tierra-001. Luego usaron los poderes del Maestro Tejedor para viajar entre dimensiones y cazar todos los avatares de Spider-Totem. A Morlun, junto con los herederos, se les ha mostrado matar varias versiones de Spider-Man de un universo alternativo, algunas de las cuales son presenciadas por Spider-UK, un miembro con temática de araña del Cuerpo del Capitán Bretaña. Spider-UK se propone viajar a través de la red de la vida para salvar a todos los Spider-Men restantes de los Herederos. Más tarde, Morlun mata a la contraparte de Spider-Man 2099, y mientras intenta llegar a la Tierra-616, el portal se cierra y Morlun expresa su temor de que la Tierra-616 Spider-Man siga su última pelea. Spider-Man 2099 se va y advierte a Peter Parker que le haga saber lo que sucedió. Mientras tanto, los herederos de la enorme mesa de la cena cargada de tímidos Spider-Totems están esperando a Morlun mientras regresa con Spider-Totem. Morlun está furioso con su hermano, Daemos, teniendo caza en la Tierra-616 le dice que es su tótem araña mientras luchan hasta que su padre, Solus, los intimida. Solus les recuerda que siempre ha sabido dónde se encuentran la Novia, el Otro y el Scion, y sobre una profecía que traerá la caída de los herederos. Le pregunta a su hijo cuál es su deseo. Morlun responde que su deseo es ser el heredero elegido de su padre, la Gran Web es su legado y su obligación. Solus lo corrige afirmando que la Red es todas las cosas y en todas partes y que es su reino el que los hace Herederos de toda la creación.</p> 
                                Morlun y los Herederos invaden la Tierra-13 donde un gran grupo de hombres araña se reúnen para luchar. Los herederos no pueden enfrentarse al poder de la versión del Capitán Universo, Spider-Man, que destruye a los miembros de los Herederos, pero revelan que todos los miembros de los Herederos pueden regenerarse de un proceso de clonación en el universo alternativo de la Tierra-802, lo que explica la misteriosa resurrección de Morlun de entre los muertos. dos veces. Cuando su padre, Solus, desprovisto de poder, mata al Capitán Universo, la zona de seguridad finalmente se ve comprometida, Morlun luego agarra al hermano infantil de Spider-Girl, Benjy y lo proclama como el Spider-Scion.
                                <p>
                                Mientras Morlun se dirige hacia el teletransportador con Benjy, Solus ataca a los Hombres Araña en la Tierra-13 mientras que todos los Spider-Men huyen para encontrar la nueva zona segura. Más tarde, Morlun le pide a sus mellizos Bora y Brix que sostengan a Benjy como él tenía otro trabajo que hacer. Morlun, quien se esperaba en la mesa de la cena con su sirviente de la versión Jessica Drew, no sabía que en realidad era Spider-Woman de la Tierra-616 y se había infiltrado y estaba permanentemente en la Tierra-001. Spider-Woman se enfrenta al Maestro Weaver en la cárcel y él le entrega el rollo de profecía que puede ser la clave para detener a los Herederos instigados. Ella luego teletransporta el pergamino a los Spider-Men. Kaine y las versiones clónicas de Spider-Man destruyen la facilidad de clonación en la Tierra-802 para que los Herederos no puedan revivir de los clones nuevamente. Los Herederos sienten que Silk y Kaine llegaron a la Tierra-001 mientras persiguen a los tótems de araña para el ritual. Morlun y los herederos luchan contra Kaine y se transforman en un monstruo araña del Otro y matan a su padre, Solus. Morlun y Daemos observan con horror mientras logran someterlo y luego lo llevan al ritual.
                                </p>
                                En la confrontación final, los Spider-Men habían vencido a los herederos y habían detenido el ritual para terminar con todos ellos, aunque el Superior Spider-Man mata al Maestro Tejedor para que los herederos no puedan viajar entre dimensiones con sus poderes. Enfurecido, Morlun intenta atacar a Peter Parker de la Tierra-616, pero usa el teletransportador para atrapar a Morlun en la Tierra-3145, un mundo diezmado por una explosión nuclear que sostiene que no está matando a Morlun porque está preparado para morir allí también. Morlun podría llegar a un búnker cercano, construido por el Ezequiel local, para mantener la protección del Spider-Totem local. Sin embargo, Peter es posteriormente rescatado por Silk, dejando a Morlun y los otros herederos atrapados en la Tierra-3145. Antes de que todos los Spider-Men puedan regresar a sus dimensiones de hogar, Silk le pregunta a Karn (quien se convirtió en el nuevo Maestro Tejedor) si Morlun y los Herederos podrán sobrevivir sin Spider-Totems. El Maestro Tejedor comenta que Morlun y los Herederos se están alimentando solo de las formas de vida supervivientes en la Tierra-3145, que son arañas mutadas.
                                                      
                        </div>
                    </div>
                
                <div className='navegationPerson'> 
                    <a href="/personaje/Chacal"><button className='buttonNavigation'><FaArrowLeft/> Chacal</button></a>
                    <br/>
                    <a href="/personaje/DuendeVerde"><button className='buttonNavigation'>Duende Verde <FaArrowRight/></button></a>
                </div>
        </div>
        </div>
        </div>
    </div>
    )
}
