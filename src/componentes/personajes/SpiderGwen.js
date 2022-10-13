import React from 'react';
import '../personajes/personajesStyle/personajes.css';
import { GiSpiderWeb } from 'react-icons/gi';
import { FaArrowLeft } from 'react-icons/fa';
import { FaArrowRight } from 'react-icons/fa';

export const SpiderGwen = ({
    id = 'spiderGwen',
    realName = 'Gwen Stacy',
    personaje = 'Spider Gwen',
    bornArea = 'Nueva York',
    cause = 'Mordida por la araña radiactiva',
    powers = 'Sexto sentido de peligro, fuerza sobrehumana, velocidad, agilidad, resistencia y durabilidad, factor de curación, sentido arácnido, piel adherente.',
    first_apperance= ' aparición	Borde del Spider-Verse #2 (2014)',
    adds = 'Siendo la hija del capitán de policía, George Stacy, que se representa como teniendo habilidades de detección y el pensamiento analítico. Ella es inexperta en la lucha y sólo aprendió en la lucha de las películas de kung fu. Ella también está representado como experta en la batería.',
    creators= 'Jason Latour y Robbi Rodríguez',
    alias = 'white Widow, Ghost Spider'
}) => {
  const imagePath= `/assets/personajes/${id}.png`;
  return (
        <div className='wrappPerson'>
        <div className='personWrap1'>
            <div className='imgWrap'>
                <img src={imagePath} className='card-imgIndividual' alt='SpiderGwen'/>
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
                            <p>En la realidad alternativa designada como la Tierra-65, Gwen Stacy de la Escuela Midtown High de 15 años , es mordida por una araña radioactiva y se convierte en una superheroína llamada Spider-Woman. Ella es también un miembro de una banda junto a Mary Jane Watson, Betty Brant y Gloria Grant, llamadas simplemente las Mary Janes.</p>
                            <p>Poco después de que ella comience a combatir el crimen, uno de sus compañeros de clase, Peter Parker intenta vengarse de los que lo han intimidado en Midtown High, convirtiéndose en el enemigo inicial del Universo Tierra-65, llamado Lagarto. Gwen lo somete, pero Peter muere hacia el final de la batalla debido a la química que ha utilizado.</p>
                            <p>Spider-Woman es culpada de su muerte, provocando una protesta por su arresto, dirigido por J. Jonah Jameson. Su padre, George Stacy, jefe de policía de la policía de Nueva York, comienza a buscarla junto con el capitán Frank Castle y la detective Jean DeWolff.</p>
                            <p>Mientras las Mary Janes intentan actuar en un concierto, un asesino se envía después del padre de Gwen Stacy, que está en la audiencia. Como Spider-Woman, ella derrota con éxito al asesino. Durante la batalla, el Capitán Stacy sostiene a Spider-Woman a puntar con su pistola, y Gwen Stacy se quita la máscara para revelar quién es ella a su padre. Sorprendido al conocer la identidad de Spider-Woman, él le dice que corra antes de cambiar de opinión.</p>
                            <p>En la serie de cómics Spider-Gwen, ella lucha contra varias versiones alternativas de los villanos de Spider-Man, como Buitre, Kraven el Cazador y Harry Osborn como el Duende Verde.</p> 
                            <p>Spider-Gwen en el estilo de vida del crimen junto con Frank Castle que la persigue como vigilante.</p>
                            <p>A pesar de sus enemigos, también trata con aliados heroicos en la Tierra-65, como el Capitán América (Samantha Wilson), Reed Richards y Peggy Carter, la líder de S.H.I.E.L.D.</p>
                            <p>Gwen Stacy protagoniza junto a Jessica Drew y Silk, de Tierra-616, en una trama de cómic crossover titulada Spider-Women. La trama consiste en que sus dos compañeras quedaron atrapadas en su mundo después de batallar con Super-Adaptoide cuando su reloj de pulsera dimensional, que obtuvo de "Spider-Verse", fue robado.</p>
                            <p>Finalmente, descubren que la versión Tierra-65 de Cindy Moon, líder de SILK, fue la mente maestra detrás del robo del reloj de pulsera. Cindy Moon de Tierra-65 reveló a Silk y Gwen Stacy que ella robó la tecnología para conquistar el mundo. Cindy de la Tierra 65 también reveló que una de sus arañas estaba detrás de la picadura que le dio a Gwen Stacy sus poderes. </p>
                            <p>Ella procedió a quitarle el poder a esta última con el uso de su tecnología y enmarcó su contraparte de la Tierra-616 de Silk. Gwen, Jessica y Cindy se unieron para derrotar a Cindy de la Tierra-65.</p>
                            <p>Las consecuencias de la historia tratan sobre los efectos de la pérdida de poder de Gwen y su necesidad de isótopos para recuperar su poder.</p>                               
                        </p>
                    </div>
                
                <div className='navegationPerson'> 
                    <a href="/personaje/MilesMorales"><button className='buttonNavigation'><FaArrowLeft/> Miles Morales</button></a>
                    <br/>
                    <a href="/personaje/Ezekiel_Sims"><button className='buttonNavigation'>Ezekiel Sims <FaArrowRight/></button></a>
                </div>
        </div>
        </div>
        </div>
    </div>
  )
}
