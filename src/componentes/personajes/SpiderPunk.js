import React from 'react';
import '../personajes/personajesStyle/personajes.css';
import { GiSpiderWeb } from 'react-icons/gi';
import { FaArrowLeft } from 'react-icons/fa';
import { FaArrowRight } from 'react-icons/fa';

export const SpiderPunk = ({
    id = 'spiderPunk',
    realName = 'Hobart Brown.',
    personaje = 'Spider-Punk',
    bornArea = 'Tierra-138.',
    cause = 'Transformado por una araña irradiada con vertidos tóxicos',
    powers = 'Fuerza, velocidad, reflejos, agilidad, coordinación y equilibrio sobrehumanos, capacidad para aferrarse a superficies sólidas. Curación acelerada. Intelecto a nivel de genio. Científico e ingeniero competente. Habilidad precognitiva del sentido arácnido. Utilizando tiradores web montados en la muñeca, Músico. Combatiente experto',
    first_apperance= 'The Amazing Spider-Man Vol. 3 #10 (January 2015).',
    adds = 'Spider-Punk logró matar a Osborn durante un motín golpeando al presidente con su guitarra.',
    creators= 'Dan Slott y Olivier Coipel.',
    alias = 'Spider-Punk'
}) => {
    const imagePath= `/assets/personajes/${id}.png`;
    return (
        <div className='wrappPerson'>
        <div className='personWrap1'>
            <div className='imgWrap'>
                <img src={imagePath} className='card-imgIndividual' alt='Spider Punk'/>
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
                            <p>Spider-Punk ( Hobart Brown ) es un superhéroe ficticio que aparece en los cómics estadounidenses publicados por Marvel Comics . Es una versión alternativa de Hobie Brown y Spider-Man que se opone al presidente Norman Osborn , VENOM y los herederos .</p>
                            <p>Durante la historia de " Spider-Geddon ", se muestra que Spider-Punk está luchando contra Thunderstrike mientras que los otros Web Warriors están desmantelando Loomworld. Spider-Punk (que está empezando a llamarse Spider-Man) derrota a Thunderstrike. Cuando Spider-Punk le dice a Eric Masters que lleve un mensaje a Red Skull sobre la toma de Bowery, Kang the Conglomerator reduce a Eric a un esqueleto y afirma que tiene los derechos de su nombre en el futuro para su empresa KangCo.</p>
                            <p> Cuando Spider-Punk se lanza al ataque, Kang convoca a algunos muñecos Spider-Punk para que lo ayuden. Después de luchar contra ellos, Spider-Punk se aleja de ellos y le pide una cinta al Capitán Anarquía .que está ocupado luchando contra la ola de aniquilación cuando emergieron en Harlem de la Zona Negativa. </p>
                            <p>Cuando las muñecas Spider-Punk se ponen al día, se pelean con Annihilation Wave, donde una de ellas se come la cinta que el Capitán Anarchy le iba a dar a Spider-Punk. Después de sacar la cinta de la boca del insectoide, Spider-Punk se sorprende cuando Kang lo alcanza. Mientras el Capitán Anarquía mantiene a raya a Kang, Spider-Punk se aleja. Al reunirse con Robbie Banner , Hobie intenta convencerlo de que lo ayude mientras le recuerda cómo ayudó en las batallas contra los U-Foes , la Iglesia Universal de la Verdad .e Hidra.</p>
                            <p>Cuando Kang vuelve a ponerse al día, Robbie reproduce la cinta y se convierte en Hulk para atacar a Kang. Cuando Kang es derrotado, afirma que el Capitán Anarquía no es comercializable y murió viejo mientras que Hobie murió joven.</p> 
                            <p>Después de que Kang desaparece con Hulk confundido sobre lo que Kang quiso decir, Spider-Girl aparece y dice que algo grande se avecina, y Spider-Punk accede a ir con ella.</p>
                            <p>Spider-Punk luego visitó una realidad sin nombre y salvó la versión de Norman Osborn de Spider-Man del colapso de la Torre Oscorp. Hace siete meses, Spider-Punk ayudó a Spider-Girl , Pavitr Prabhakar , Spider-UK y Karn .como el Maestro Tejedor ha estado vigilando a los Herederos mientras envían un Spider-Bot a la Tierra-3145 para controlar a los Herederos. Spider-Girl y Pavitr consideran que Spider-Punk es el peor Spider-Man. </p>
                            <p>Spider-Punk se encuentra entre los personajes con poderes de araña que reclutan a Miles Morales para enfrentarse a Superior Octopus cuando se descubre que su máquina de clonación se hizo con la tecnología de los Herederos. ntentan advertir a Superior Octopus, pero ya era demasiado tarde cuando los Herederos comienzan a emerger y matan a Spider-Man Noir y Spider-UK . [8] Después de que emergen los Herederos, Spider-Punk y Superior Octopus idean un plan para matar a los Herederos.</p>
                            <p> Spider-Punk informa al resto del grupo de Superior Spider-Man las malas noticias cuando Octavia Otto de Earth-1104 descubrió que Solus vive de nuevo. Cuando el grupo de Miles Morales se une al grupo de Superior Spider-Man para luchar contra los herederos, Spider-Punk se da cuenta de que Jennix se volvió loca y Verna está desaparecida. </p>                               
                        </p>
                    </div>
                </div>
                <div className='navegationPerson'> 
                    {/* <a href="/spiders"><button className='buttonNavigationSpiders'>Spiders</button></a>
                    <br/> */}
                    <a href="/personaje/peniParker"><button className='buttonNavigation'><FaArrowLeft/></button></a>
                    <br/>
                    <a href="/personaje/MilesMorales"><button className='buttonNavigation'><FaArrowRight/></button></a>
                </div>
        </div>
        </div>
    </div>          
  )
}
