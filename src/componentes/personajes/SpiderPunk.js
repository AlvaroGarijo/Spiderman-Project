import React from 'react';
import '../personajes/personajesStyle/personajes.css';
import { GiSpiderWeb } from 'react-icons/gi';
import { FaArrowLeft } from 'react-icons/fa';
import { FaArrowRight } from 'react-icons/fa';

export const SpiderPunk = ({
    id = 'spiderPunk',
    realName = '',
    personaje = '',
    bornArea = '',
    cause = '',
    powers = '',
    first_apperance= '',
    adds = '',
    creators= '',
    alias = ''
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
                            <p></p>
                            <p></p>
                            <p></p>
                            <p></p>
                            <p></p> 
                            <p></p>
                            <p></p>
                            <p></p>
                            <p></p>                               
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
