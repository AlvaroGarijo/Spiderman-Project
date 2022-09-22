import React from 'react';
import '../personajes/personajesStyle/personajes.css';
import { GiSpiderWeb } from 'react-icons/gi';
import { FaArrowLeft } from 'react-icons/fa';
import { FaArrowRight } from 'react-icons/fa';

export const PeniParker = ({
    id = 'peniParker',
    realName = 'Peni Parker.',
    personaje = 'Peni Parker',
    bornArea = 'Tierra-14512',
    cause = 'Conexión psiquica con robot creado por su padre.',
    powers = 'Sentido arácnido, Intelecto de genio, Conexión psíquica con SP//dr, Fuerza mejorada en SP//dr',
    first_apperance= 'Edge of Spider-Verse #5 (octubre de 2014)',
    adds = 'SP//dr (Araña robot).',
    creators= 'Gerard Way y Jake Wyatt.',
    alias = 'Peni'
}) => {
    const imagePath= `/assets/personajes/${id}.png`;
    return (
        <div className='wrappPerson'>
        <div className='personWrap1'>
            <div className='imgWrap'>
                <img src={imagePath} className='card-imgIndividual' alt='Peni Parker'/>
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
                    <a href="/spiders"><button className='buttonNavigationSpiders'> <GiSpiderWeb/> Go to Spider-Verse</button></a>
                </div>
                
            </div>
            <div className='dataWrap'>
                <div className='dataControl'>
                    <h3 className='titlePerson'>{personaje}</h3>
                    <div className='infoPersonWrap'>
                        <p className='infoPerson'>
                            <p>Peni Parker es una superheroína que aparece en publicaciones de Marvel Comics . Ella es una versión alternativa de Spider-Man . El personaje es representado como un estudiante de secundaria de 14 años que fue adoptado por la tía May y el tío Ben tras la muerte de su padre/cuidador. Ella pilota un traje mecánico de energía psíquica construido por su padre conocido como SP//dr , que está parcialmente controlado por una araña radiactiva que también comparte un vínculo psíquico con ella.</p>
                            <p>anto Peni Parker como SP//dr han hecho escasas apariciones en los medios, siendo la más destacada la película animada Spider-Man: Into the Spider-Verse , en la que Kimiko Glenn da voz a la primera .</p>
                            <p>El padre de Peni actuó como el piloto original del SP//dr mecha, en el que protegía a Nueva York del crimen y otros peligros. Después de su misteriosa muerte, su tía May y su tío Ben se acercan a Peni para que se convierta en la nueva piloto del SP//dr. Sin embargo, para hacerlo, tiene que ser mordida por la araña radiactiva sensible que controla parte del traje.</p>
                            <p>Poco después de ser mordida, Peni se convierte en la nueva protectora de la ciudad. Cinco años después, lucha contra la versión de Mysterio de su universo, un fanático suyo obsesionado. Peni finalmente se une a la versión de su universo de Daredevil , que había conocido a su padre, para luchar contra un grupo de criminales antes de que Spider-Ham y Old Man Spider se le acercaran.para unirse al Spider-Army para luchar contra los herederos</p>
                            <p>Después de los eventos de " Spider-Verse ", Peni es abordada por una chica llamada Addy Brock , quien se pregunta si ella es realmente la piloto de SP//dr. Peni la ignora, pero Addy responde que no es tan especial como cree. En casa, Peni intenta hablar con Ben y May sobre ser especial, pero la ignoran. Mientras mejora los disparadores de telarañas del SP//dr, se da cuenta de que Addy camina por la base y la sigue; solo para encontrar otro traje mecánico similar al SP // dr, solo que en negro y propulsado por un motor simbólico llamado VEN#m , con Addy como piloto. </p> 
                            <p>Peni se enfurece con su tía y su tío por no contarle esto. Cuando una criatura parecida a un kaiju llamada MORBIUScomienza a drenar la energía eléctrica de la ciudad, SP//dr lo persigue, pero es derrotado rápidamente. </p>
                            <p>Para derrotar a MORBIUS, la tía y el tío de Peni envían a VEN#m para derrotar a la criatura. Tiene éxito, pero la criatura hace que VEN#m funcione mal; haciendo que el traje mecánico adquiera conciencia y consuma a Addy. </p>
                            <p>Cuando May vuela para arreglar el problema manualmente, también la consume a ella. SP//dr se enfrenta a VEN#m, pero el traje mecánico negro la domina hasta que usa sus tiradores web mejorados para derrotarlo. Sin embargo, es demasiado tarde para salvar a su tía May y Addy, que han desaparecido del interior del traje. Después de la batalla, Peni y Ben tienen una conversación sincera, pero Spider-Ham reaparece para reclutar a Peni para ayudar a derrotar a los Herederos una vez más durante los eventos de Spider-Geddon </p>                              
                        </p>
                    </div>
                </div>
                <div className='navegationPerson'> 
                   
                    <a href="/personaje/spiderUK"><button className='buttonNavigation'><FaArrowLeft/></button></a>
                    <br/>
                    <a href="/personaje/spiderPunk"><button className='buttonNavigation'><FaArrowRight/></button></a>
                </div>
        </div>
        </div>
    </div>          
    
  )
}
