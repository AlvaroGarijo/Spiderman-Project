import React from 'react';
import '../personajes/personajesStyle/personajes.css';
import { GiSpiderWeb } from 'react-icons/gi';
import { FaArrowLeft } from 'react-icons/fa';
import { FaArrowRight } from 'react-icons/fa';

export const SpiderGirlAnya = ({
    id = 'SpiderGirl',
    realName = 'Anya Sofia Corazón',
    personaje = 'Spider Girl (Anya Corazon)',
    bornArea = 'Estados Unidos',
    cause = 'Un ritual es realizado en ella al darle un tatuaje con forma de araña que le dota de poderes de araña.',
    powers = 'fuerza mejorada, velocidad, reflejos/reacciones, agilidad, coordinación, equilibrio y resistencia.',
    first_apperance= 'Amazing Fantasy #1 (agosto de 2004).',
    adds = 'Araña junta cuerdas con discos que son aproximadamente del tamaño de su palma y que tienen ocho patas rojas capaces de agarrarse a los objetos.',
    creators= '	Fiona Avery (guionista), Mark Brooks (artista).',
    alias = 'Araña, Spider-girl, "Chica Araña"'
}) => {
    const imagePath= `/assets/personajes/${id}.png`;
    return (
        <div className='wrappPerson'>
        <div className='personWrap1'>
            <div className='imgWrap'>
                <img src={imagePath} className='card-imgIndividual' alt='Spider Girl Anya'/>
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
                            <p>En su primer día en Milton Summers High School en Fort Greene, Brooklyn, Anya Corazón es reclutada por Miguel, un mago de un clan místico llamado The Spider Society para que actúe como su cazadora. </p>
                            <p>Un ritual es realizado en ella al darle un tatuaje con forma de araña que le dota de poderes de araña. WebCorps ofrece a Araña varios trajes, pero Araña decide hacer su propio disfraz.</p>
                            <p>Ella diseña un traje con zapatillas de deporte rojas y azules, pants azules, mochila roja, guantes rojos con muchos bolsillos y grandes gafas de sol de ojos saltones. Como parte de sus poderes un exoesqueleto cubre la mayor parte de su cuerpo como una piel azulada.</p>
                            <p>En lugar de equipos como web-shooters o traqueadores de araña, Araña junta cuerdas con discos que son aproximadamente del tamaño de su palma y que tienen ocho patas rojas capaces de agarrarse a los objetos. Araña lucha contra un Cazador de The Sisterhood of the Wasp, los adversarios de The Spider Society.</p>
                            <p>Anya acepta el apodo de "Spider-Girl" y comienza a operar sola, a pesar de que con frecuencia se relaciona con sus ex compañeros de equipo de Young Allies como Rikki Barnes, así como Spider-Man y la Mujer Invisible.</p> 
                            <p>Cuando muere el padre de Anya inicialmente cree que Red Hulk es responsable y lucha contra él. Con el tiempo el la convence de que él no mató a su padre, sino que él también era un objetivo del atentado. Con el tiempo es capaz de detener a la organización que asesinó a su padre,y en el tiempo intermedio luchó contra Ana Kravinoff, el nuevo Duende, y Screwball.</p>
                            <p>Más tarde, Young Allies y varios miembros de la Avengers Academy son secuestrados por Arcade. Anya logra escapar, y trabaja con Reptil para rescatar a los restantes. Los dos adolescentes empiezan a coquetear el uno con el otro, y Anya termina dando a Reptil su número de teléfono una vez que Arcade es derrotado.</p>
                            <p>Durante Miedo encarnado, Anya, X-23, Amadeus Cho, Power Man, y Thunderstrike son teletransportados a una estación en el medio del Océano Pacífico, donde pelean contra hombres samurai tiburón. Más tarde, Anya y los Young Allies son casi derrotados por Hydro-Man hasta que Spider-Man aparece.</p>
                            <p>En Televisón, Anya Corazon hace su debut animado en Spider-Man, con la voz de Melanie Minichino. Esta versión es un personaje central junto a Peter Parker, Miles Morales, Gwen Stacy (con quien es la mejor amiga) y Harry Osborn. Presentada en la primera temporada, se la representa como una de las mejores estudiantes de Horizon High antes de asumir el alias de Spider-Girl en la segunda temporada.</p>                               
                        </p>
                    </div>
                
                <div className='navegationPerson'> 
                    
                    <a href="/personaje/Silk"><button className='buttonNavigation'><FaArrowLeft/> Silk</button></a>
                    <br/>
                    <a href="/personaje/MiguelOhara"><button className='buttonNavigation'>Miguel O`hara <FaArrowRight/></button></a>
                </div>
        </div>
        </div>
        </div>
    </div>
  )
}
