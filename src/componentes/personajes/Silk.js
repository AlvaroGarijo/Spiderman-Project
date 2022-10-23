import React from 'react';
import '../personajes/personajesStyle/personajes.css';
import { GiSpiderWeb } from 'react-icons/gi';
import { FaArrowLeft } from 'react-icons/fa';
import { FaArrowRight } from 'react-icons/fa';

export const Silk = ({
    id = 'Silk',
    realName = 'Cynthia "Cindy" Moon.',
    personaje = 'Silk',
    bornArea = 'Estados Unidos.',
    cause = 'Mordida por una araña alterada genéticamente.',
    powers = 'fisiología arácnida, agilidad superhumana, sentido arácnido, trepa muros, garras retractiles.',
    first_apperance= 'Amazing Spider-Man Vol 3 #1 (como Cindy Moon) abril de 2014.',
    adds = 'Tiene memoria eidética. Fue picada por el mismo tipo de araña que Peter Parker.',
    creators= 'Dan Slott y Humberto Ramos.',
    alias = 'Spider-Bride.'
}) => {
    const imagePath= `/assets/personajes/${id}.png`;
    return (
        <div className='wrappPerson'>
        <div className='personWrap1'>
            <div className='imgWrap'>
                <img src={imagePath} className='card-imgIndividual' alt='Silk'/>
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
                            <p>Cynthia "Cindy" Moon, también conocida por su alias Silk, Seda en España, es una superheroína ficticia de Marvel Comics, una joven que al ser mordida por una araña alterada genéticamente, adquiere habilidades especiales. La araña que le mordió, es la misma araña que le otorgó sus poderes a Peter Parker, para convertirse en el superhéroe Spider-Man.</p>
                            <p>Cuando Cindy era una niña, sus padres descubrieron que tenía memoria eidética. Por esta razón, su madre quería que se centrara en sus estudios, aunque Cindy tenía planes diferentes para su vida y enfocó su atención en el equipo de hockey de la escuela con su novio, Hector Cervantez. Una vez su madre se enteró sobre esta relación secreta, Cindy se vio obligada a ir a una excursión escolar realizada por la Corporación General Techtronics.</p>
                            <p>En un experimento científico auspiciado por la Corporación General Techtronics que implicaba el uso de rayos radiactivos, una araña fue expuesta accidentalmente a la radiación. En sus últimos momentos de vida, esta mordió el ser vivo más cercano, Peter Parker. Esto llevó a Peter a obtener poderes arácnidos y dio a luz al asombroso Spider-Man.</p>
                            <p>Sin embargo, Peter no fue el único mordido por la araña, Cindy también fue picada por el mismo arácnido. Al igual que Peter, Cindy pronto desarrollo poderes arácnidos que se salieron de control, lo cual preocupó a sus padres. Esta situación no duró mucho puesto que Ezekiel Sims se presentó ante la familia Moon y se ofreció para ayudar a Cindy. Bajo su tutela, la joven pulió sus habilidades arácnidas pero eventualmente Ezekiel la encerró en un búnker fortificado para protegerla de Morlun.</p>
                            <p>Tras descubrir acerca de Cindy por uno de los ojos del Watcher que liberó toda clase de secretos en Nueva York, Spider-Man la liberó del búnker convenciéndola de que Morlun estaba muerto. Después de balancearse alrededor de la ciudad, Cindy le pregunta como murió Morlun, por lo cual Peter responde que de hecho había matado a Morlun en dos ocasiones, noticia que pone a Cindy en cólera y ataca a Spider-Man al darse cuenta de que Morlun aún podría volver y que esos 13 años en el búnker habían sido para nada.</p>
                            <p>Durante su lucha, sin embargo, ambos sienten algún tipo de conexión a través de su sentido arácnido que Spider-Man había notado antes y el combate termina con los dos besándose.</p> 
                            <p>Silk y Spider-Man continúan explorando sus lazos a un nivel más íntimo pero Peter le pone fin a esto al momento en que Cindy intenta quitarle su máscara. Sin embargo Silk le hace saber a Spider-Man que conoce su identidad como Peter Parker, lo que deja muy sorprendido a Parker. Al analizar lo que les está pasando, Cindy explica que tal vez es una especie de conexión primitiva la que los une, lo cual se deba al ser ambos picados por la misma araña. Cuando Spider-Man dice que fue un error haberla liberado e insinúa regresarla al búnker, Silk le replica que ya es muy tarde para eso, además no quiere perder otros 10 años recluida en ese lugar.</p>
                            <p>En el apartamento de Peter, los dos siguen explorando en términos físicos su conexión, pero son sorprendidos en el acto por Anna Maria, Cindy de inmediato confronta a Marconi, dejándole en claro que Peter le pertenece aunque tras volver en sí, le explica que son sus lados arácnidos lo que les hace sentirse atraídos. Anna tilda esto como una justificación absurda y le comunica a Peter que debe ir en representación de Industrias Parker a una entrevista en Fact Channel para suplir a Sajani quien se encuentra desaparecida.</p>
                            <p>Cindy acompaña a Peter a Fact Channel, donde Parker le presenta a su hermanastro J. Jonah Jameson. Durante la entrevista entre Peter y la reportera Natalie Long, Cindy le advierte a Peter de un peligro inminente al ser su sentido arácnido más agudo que el de Spider-Man. Peter también se percata de la amenaza e inmediatamente son atacados por Electro acompañado de la Gata Negra, quienes están aquí para atraer la atención de Spider-Man.</p>
                            <p>Silk los confronta hasta que Spider-Man aparece en escena. En el combate, Cindy lucha contra Electro mientras Spider-Man lidia con la Gata Negra. Electro se enfurece al no ser capaz de asestar ninguno de sus ataques en Silk, que logra esquivarlos todos gracias a su hiper-sentido arácnido. La Gata Negra logra usar uno de los rayos de Electro para incapacitar a Spider-Man y usa esta oportunidad para tratar de exponer su identidad al público, ayudada también por J.Jonah Jameson que enfoca las cámaras hacia Spider-Man mientras Felicia se dispone a quitarle su máscara.</p>                               
                            <p>Antes de que las cámaras enfoquen el rostro de Spider-Man, Silk cubre el rostro de Peter con su telaraña y lo libera de la Gata Negra. Enfurecidos por su intromisión, los dos villanos atacan a Silk pero su agilidad le permite esquivar sus ataques y escapar a salvo con Peter en sus brazos. Una vez fuera de los estudios de Fact Channel, Silk lleva a Peter a su apartamento. </p>
                            <p>En este lugar, Anna Maria remueve las telarañas de Peter con el disolvente de Otto Octavius y le informa que debe presentarse en una exhibición de Industrias Parker, en la cual estará presente el jefe de policía Pratchett. Silk también se une a esta invitación y cuando van de camino a la demostración en el auto de Ana Maria, Cindy detecta la presencia de la Gata Negra y Electro con su sentido arácnido. Antes de salir a combatir, Silk cubre a Peter con sus redes para brindarle un electro-aislamiento extra. </p>
                            <p>Los dos héroes arácnidos confrontan nuevamente al dúo criminal, Electro furioso ante la intrusión ataca a Spider-Man pero gracias a las redes aislantes de Silk sale ileso, por esta razón Peter le pide a Cindy que utilice esas mismas telarañas contra Electro. Aunque en ese momento, la Gata Negra sobrecarga a Electro usando la máquina de Industrias Parker, lo que libera una descarga eléctrica que derriba un helicóptero de Fact Channel. Actuando de forma rápida, Silk usa sus redes para amortiguar la caída de la aeronave, salvando exitosamente a los tripulantes de la misma.</p>
                            <p>Cuando Spider-Man y Electro están siendo afectados por la fuerza electromagnética de la máquina, Silk los saca de su rango de alcance y luego se envuelve junto a ellos en un capullo hecho de telaraña que los protege de la enorme explosión. Luego del incidente, Cindy se reúne con Nataile Long y es contratada como reportera interna en Fact Channel, trabajo que Moon acepta para encontrar a su familia con los recursos informativos que posee el estudio.</p>
                        </p>
                    </div>
                <div className='buttonNavContainer d-block d-sm-none'>
                    <a href="/spiders"><button className='buttonNavigationSpiders'> <GiSpiderWeb/> Ir a Spiders</button></a>
                </div>
                <div className='navegationPerson'> 
                    <a href="/personaje/ScarletSpider"><button className='buttonNavigation'><FaArrowLeft/> Scarlet Spider</button></a>
                    <br/>
                    <a href="/personaje/SpiderGirl"><button className='buttonNavigation'>Spider Girl <FaArrowRight/></button></a>
                </div>
        </div>
        </div>
        </div>
    </div>
  )
}
