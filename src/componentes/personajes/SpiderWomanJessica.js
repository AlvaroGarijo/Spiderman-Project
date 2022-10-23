import React from 'react';
import '../personajes/personajesStyle/personajes.css';
import { GiSpiderWeb } from 'react-icons/gi';
import { FaArrowLeft } from 'react-icons/fa';
import { FaArrowRight } from 'react-icons/fa';

export const SpiderWomanJessica = ({
    id = 'SpiderWomanJessica',
    realName = 'Jessica Drew',
    personaje = 'Spider Woman (Jessica Drew).',
    bornArea = 'EEUU y UK',
    cause = 'Inyección de un suero experimental de sangre de araña.',
    powers = 'Fuerza, velocidad, resistencia, agilidad, reflejos y sentidos sobrehumanos, Vuelo limitado a distancias cortas, creación de feromonas, adherencia a superficies, descarga de energía desde sus manos. Inmunidad a radiación y venenos.',
    first_apperance= 'Marvel Spotlight #32 (febrero de 1977).',
    adds = 'Su primera misión fue asesinar al Director de S.H.I.E.L.D., Nick Furia, pero tras descubrir las malvadas intenciones de HYDRA, Jessica traicionó a la organización y huyó.',
    creators= 'Archie Goodwin y Marie Severin.',
    alias = 'Arachne, Ariadne Hyde, Hunter.'
}) => {
    const imagePath= `/assets/personajes/${id}.png`;
    return (
        <div className='wrappPerson'>
        <div className='personWrap1'>
            <div className='imgWrap'>
                <img src={imagePath} className='card-imgIndividual' alt='Spider Woman JessicaDrew'/>
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
                            <p>Spider-Woman (Jessica Drew) es una superheroína ficticia que aparece en los cómics estadounidenses publicados por Marvel Comics. El personaje apareció por primera vez en Marvel Spotlight # 32 (con fecha de portada en febrero de 1977) y siguieron 50 números de una serie en curso titulada Spider-Woman. En su conclusión, fue asesinada y, aunque resucitó más tarde, cayó en desuso, suplantada por otros personajes con el nombre de Spider-Woman.</p>
                            <p>En 2009, el personaje recibió su segunda serie limitada autotitulada, escrita por Bendis, que se publicó en siete números. Como parte del evento "Spider-Verse" de 2014, Spider-Woman comenzó su tercera serie en curso, escrita por Dennis Hopeless. La serie fue interrumpida por el evento "Secret Wars" de Marvel en 2015, y terminó con el número 10. Spider-Woman se relanzó varios meses después con un nuevo número # 1, aún escrito por Hopeless y continuando la historia del volumen anterior.</p>
                            <p>Jessica Drew es la hija del antropólogo estadounidense Johnatan Drew y su esposa británica Merriam. No habiendo cumplido Jessica los dos años de edad, sus padres se trasladaron a la región balcánica de Transia. Su padre y el compañero de este, Herbert Wyndham habían adquirido una parcela de tierra en la Montaña Wundagore, dentro de las fronteras transianas, siendo su intención establecer un pequeño centro de investigación científica allí. Tras descubrir uranio en la propiedad, ambos científicos se enriquecieron e invirtieron sus ganancias en desarrollar toda una ciudadela tecnológica.</p>
                            <p>Coincidiendo con la terminación de la ciudadela, cinco años después, Jessica enfermó mortalmente debido a la exposición a la radiación del uranio. Para salvar su vida, su padre inyectó en ella un suero experimental de sangre de araña, ya que sus experimentos habían demostrado que las arañas poseen mayor resistencia a la radiactividad que los seres humanos. Sin embargo, Jessica no respondió inmediatamente al tratamiento, de modo que Wyndham la metió en un acelerador genético diseñado por él mismo para un tratamiento más avanzado.</p>
                            <p>Poco después, Merriam murió y Johnatan volvió a Estados Unidos. Wyndham se hizo cargo de Jessica, manteniéndola parcialmente criogenizada durante décadas, envejeciendo a 1/7 de lo normal, y recibiendo educación mediante grabaciones</p> 
                            <p>Cuando Wyndham determinó que la radiación había dejado de hacer efecto sobre ella, fue liberada de su estado de animación suspendida. Jessica contaba por aquel entonces con catorce años. Wyndham, que ahora se hacía llamar el Alto Evolucionador, la evaluó y llegó a la conclusión de que el tratamiento había mutado su estructura genética, dándole una gran fuerza, una enorme resistencia a todo tipo de venenos y radiaciones, además de un exceso de energía bioeléctrica que podía descargar en forma de chispazos. El Alto Evolucionador la puso a cargo de Bova, una niñera evolucionada artificialmente por Wyndham. Un año después, la ciudadela de Wundagore abandonó la Tierra, pero ellas dos se quedaron atrás.</p>
                            <p>Consciente de su humanidad, Jessica se obsesionó con encontrar a sus padres; buscando a su padre, se encontró con Magnus, el espíritu del mago que había poseído un tiempo atrás a su padre y que ahora ocupaba el cuerpo de un sastre excéntrico. Magnus sintió que debía a Drew una importante deuda por haber estado ocupando su cuerpo y decidió pagarla ayudando a su hija. Así, ambos viajaron hasta Los Ángeles, donde en un momento dado descubrieron que Drew había sido asesinado meses antes por una organización disidente que él había relacionado con Pyrotechnics, Inc.</p>
                            <p>Tras capturar a los asesinos de su padre, Jessica decidió establecerse en Los Ángeles. Allí hizo frente a numerosos enemigos, como la hechicera del siglo VI Morgana Le Fey.</p>
                            <p>Consciente de que se estaba implicando emocionalmente demasiado con Jessica, Magnus abandonó precipitadamente el cuerpo que había tomado para volver a Londres. Jessica, por su parte, dudó durante una temporada sobre qué hacer con su vida y sus poderes.</p>
                            <p>No podía abandonar la sensación de libertad que le producía ser Spiderwoman, de modo que trató de evitar que el conocimiento de la existencia de la heroína se propagase. Finalmente, sin embargo, en asociación con el criminólogo Scott McDowell, se dio a conocer públicamente como cazadora de recompensas.</p>                               
                        </p>
                    </div>
                <div className='buttonNavContainer d-block d-sm-none'>
                    <a href="/spiders"><button className='buttonNavigationSpiders'> <GiSpiderWeb/> Ir a Spiders</button></a>
                </div>
                <div className='navegationPerson'> 
                    <a href="/personaje/SpidermanSuperior"><button className='buttonNavigation'><FaArrowLeft/> Spiderman Superior</button></a>
                    <br/>
                    <a href="/personaje/SpiderWomanMattie"><button className='buttonNavigation'>Spider Woman (Mattie)<FaArrowRight/></button></a>
                </div>
        </div>
        </div>
        </div>
    </div>
  )
}
