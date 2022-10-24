import React from 'react';
import '../personajes/personajesStyle/personajes.css';
import { GiSpiderWeb } from 'react-icons/gi';
import { FaArrowLeft } from 'react-icons/fa';
import { FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export const ScarletSpider = ({
    id = 'ScarletSpider',
    realName = 'Kaine Parker',
    personaje = 'Scarlet Spider',
    bornArea = 'Estados Unidos',
    cause = 'Clon Spiderman',
    powers = 'Mayor fuerza, velocidad y agilidad, telarañas orgánicas.visión nocturna, marca de Kaine, comunicación con artrópodos, dos aguijones retráctiles, con su traje:invisibilidad e inmunidad a ataques sónicos.',
    first_apperance= 'Web of Spider-Man #119 (1994)',
    adds = 'Kaine no ha tenido ningún entrenamiento formal, pero aun así es un combatiente formidable mano a mano, y utiliza un tipo inusual de técnica muy similar al estilo de Spider-Man, aunque Kaine no tiene reparos al combatir con un estilo más brutal.',
    creators= 'Terry Kavanagh y Steven Butler',
    alias = 'La Tarántula, Kaine Parker, La Araña Escarlata'
}) => {
    const imagePath= `/assets/personajes/${id}.png`;
    return (
        <div className='wrappPerson'>
        <div className='personWrap1'>
            <div className='imgWrap'>
                <img src={imagePath} className='card-imgIndividual' alt='Scarlet Spider'/>
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
                            <p>Tras la pérdida de su forma de tarántula durante Spider-Island, se invierte su degeneración. Kaine ahora parece ser un clon perfecto de Peter Parker (como Ben Reilly).</p>
                            <p>Kaine conserva su fuerza, velocidad y agilidad sobrehumanas, así como los aguijones retráctiles y la Marca de Kaine. Pero ahora además posee telarañas orgánicas y han desaparecido sus cicatrices. También tiene visión nocturna y alguna forma de comunicación telepática con artrópodos. Ha perdido el sentido arácnido y ya no puede ver el futuro ni ser alertado de amenazas inminentes</p>
                            <p>Kaine utiliza el traje de sigilo que Peter Parker creó durante Spider-Island, que puede darle invisibilidad visual y de audio e inmunidad a ataques sónicos.</p>
                            <p>Kaine y los nuevos guerreros son atacados por Daemos miembro de los Inerithors familia que se alimenta de la esencia de los animales. Daemos deja gravemente heridos a los Nuevos Guerreros y a Kaine. </p>
                            <p>Entonces un grupo de Spiders viene en su rescate contra Daemos. En el rescate Spider-man y Bruce Banner pierden la vida.</p> 
                            <p> Kaine se recupera con los demás spiders. De ahí, llega Superior Spider-Man (Otto Octavius) a través de un portal junto con más Spiders.</p>
                            <p> Luego es enviado junto con Ben Reilly (tierra 64) y Jessica Drew de la tierra 1610 (o tierra Ultimate) a una realidad donde Jennix parte de la familia de los Inerithors hace una fábrica de clones donde se clona a sí mismo. Los clones Ben y Jess se camuflan para entrar en la fábrica, donde se visten como las personas que Jennix tiene bajo control mental.</p>
                            <p>Tras lo que han visto, Ben decide sacrificarse destruyendo la fábrica. Al hacer esto Kaine y Jess salen de la fábrica mientras estalla todo. Kaine al ir a los escombros solo ve la máscara de Reilly, triste y rabioso decide ir a Loomworld, lugar donde viven los Inerithors. Al hacer esto él sabía que se estaba jugando la vida. Entonces Morlun y su familia huelen que han venido Silk y el otro Kaine.</p>
                            <p> Ahí kaine se convierte en una araña gigante y el padre de los Inerithors va a detener a Kaine, entonces Kaine lo atraviesa con sus aguijones que posee en las patas. Después de esto mata a Solus. Molesto, Morlun va a matar a Kaine pero Solus le dice que lo necesitan vivo, Morlun le dice que solo necesitan su sangre para un ritual entonces presuntamente mata a Kaine, después de que las arañas acabaran con los inheritors. Spider-man dice que ya han perdido muchos héroes. En el final de The Amazing Spider-man Número 15, Kaine sale de la araña gigante.</p>                               
                        </p>
                    </div>
                <div className='buttonNavContainer d-block d-sm-none'>
                   <Link to="/spiders"><button className='buttonNavigationSpiders'> <GiSpiderWeb/> Ir a Spiders</button></Link>
                </div>
                <div className='navegationPerson'> 
                    <Link to="/personaje/MadameWeb"><button className='buttonNavigation'><FaArrowLeft/>  Madame Web</button></Link>
                        <br/>
                    <Link to="/personaje/Silk"><button className='buttonNavigation'>Silk <FaArrowRight/></button></Link> 
                </div>
        </div>
        </div>
        </div>
    </div>
  )
}
