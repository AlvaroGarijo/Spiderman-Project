import React from 'react';
import '../personajes/personajesStyle/personajes.css';
import { GiSpiderWeb } from 'react-icons/gi';
import { FaArrowLeft } from 'react-icons/fa';
import { FaArrowRight } from 'react-icons/fa';

export const SpidermanNoir = ({
    id = 'spidermanNoir',
    realName = 'Peter Parker',
    personaje = 'Spider-Man Noir',
    bornArea = 'NY, Tierra-90214 (Earth Noir).',
    cause = 'Mordedura de araña.',
    powers = 'Fuerza, velocidad y agilidad proporcionadas de una araña, sentido arácnido, generación de telarañas orgánicas, hábil tirador y experto combatiente cuerpo a cuerpo, capacidad para aferrarse a superficies sólidas',
    first_apperance= 'Spider-Man: Noir #1 (February 2009).',
    adds = 'El joven se despierta en un capullo de telaraña negra y se libera, descubriendo que ahora tiene poderes de araña.',
    creators= '	David Hine, Fabrice Sapolsky, Carmine Di Giandomenico y Marko Djurdjevic',
    alias = '-'
}) => {
    const imagePath= `/assets/personajes/${id}.png`;
    return (
        <div className='wrappPerson'>
        <div className='personWrap1'>
            <div className='imgWrap'>
                <img src={imagePath} className='card-imgIndividual' alt='spidermanNoir'/>
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
                            <p>Spider-Man Noir ( Peter Parker ) es un superhéroe ficticio que aparece en los cómics estadounidenses publicados por Marvel Comics .</p>
                            <p>En la Tierra-90214 en el invierno de 1932, durante la Gran Depresión , la ciudad de Nueva York está plagada de bandas criminales. El fotoperiodista del Daily Bugle Ben Urich , conocido por algunos criminales como "la Araña", asiste a un discurso público sobre la lucha del ciudadano común de May Parker en Central Park y se hace amigo de su sobrino Peter Parker. Incapaz de asistir a la universidad por falta de dinero, Peter comparte que su tío Ben, que luchó en la Primera Guerra Mundial como piloto, fue asesinado recientemente por criminales que trabajaban para Norman Osborn, un industrial que se cree que es el señor del crimen llamado Goblin .</p>
                            <p>Peter recuerda las palabras de su tío Ben con respecto a la inutilidad y la naturaleza injusta de la Primera Guerra Mundial: "Si no se puede confiar en los que están en el poder, es responsabilidad de la gente eliminarlos". Peter trabaja para Urich y en diciembre de 1932 se aventura a un almacén de antigüedades robadas. Un artefacto, un ídolo de araña, se abre y libera una horda de arañas. Uno muerde a Peter, lo que hace que se desmaye y sueñe con un dios araña que afirma que le dará poder a Peter. El joven se despierta en un capullo de telaraña negra y se libera, descubriendo que ahora tiene poderes de araña.</p>
                            <p>Con una máscara, Peter se enfrenta a Norman Osborn y se sorprende al descubrir que Urich está presente. El reportero gráfico ha estado chantajeando a Osborn con su información sobre las actividades del jefe de la mafia a cambio de que Goblin alimente su adicción a las drogas. Inspirado por la determinación de Peter de luchar contra el Duende sin importar nada, Urich decide exponer los crímenes de Osborn, pero es asesinado.</p>
                            <p>Mientras tanto, Peter crea un disfraz usando elementos del uniforme de aviador de la era de la Primera Guerra Mundial de su tío , convirtiéndose en "el Hombre Araña". La ex amante de Urich, Felicia Hardy , dueña del club Black Cat, ayuda a Peter en la guerra contra el sindicato criminal de Osborn.</p> 
                            <p>En enero de 1933, Spider-Man mata a Vulture para salvar a su tía May, pero la mujer lo declara tan malo por dispararle a un hombre desarmado que podría haber dominado y capturado. Después de que la pandilla de Osborn es derrotada en gran parte, Spider-Man tiene la oportunidad de matar al Goblin, pero decide que la verdadera justicia significa que el hombre debe ser juzgado y la verdad se convierte en un registro público. Kraven the Hunter , uno de los otros compinches de Osborn que se está muriendo, ataca al Goblin y lo mata.</p>
                            <p>A medida que el invierno se convierte en primavera, Franklin D. Roosevelt ahora es presidente, Hitler asciende al poder en Europa, May Parker continúa siendo una activista de la gente común y Spider-Man Noir continúa luchando contra el crimen y la corrupción.</p>
                            <p>Peter Parker/Spider-Man Noir aparece en la película animada Spider-Man: Into the Spider-Verse , con la voz de Nicolas Cage. Esta versión habla en un dialecto estereotípico "transatlántico" de la década de 1930 similar al de Humphrey Bogart , James Cagney y Edward G. Robinson , en quienes Cage basó el personaje. Debido a que su universo es completamente en blanco y negro , Spider-Man Noir tampoco está familiarizado con los colores. </p>
                            <p> Llega al universo de Miles Morales junto con Spider-Ham y Peni Parker debido al súper colisionador de Kingpin .antes de unirse a sus compañeros Spider-People para regresar a sus respectivas dimensiones de origen. En el camino, le gusta un cubo de Rubik y se lo lleva para vendérselo a la gente de su mundo.</p>                               
                        </p>
                    </div>
                </div>
                <div className='navegationPerson'> 
            
                    <a href="/personaje/spidermanJ"><button className='buttonNavigation'><FaArrowLeft/></button></a>
                    <br/>
                    <a href="/personaje/spiderUK"><button className='buttonNavigation'><FaArrowRight/></button></a>
                </div>
        </div>
        </div>
    </div>         
  )
}
