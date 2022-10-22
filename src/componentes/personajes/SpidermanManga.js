import React from 'react';
import '../personajes/personajesStyle/personajes.css';
import { GiSpiderWeb } from 'react-icons/gi';
import { FaArrowLeft } from 'react-icons/fa';
import { FaArrowRight } from 'react-icons/fa';

export const SpidermanManga = ({
    id = 'spidermanManga',
    realName = 'Peter Parker',
    personaje = 'Spider-Man (Mangaverso)',
    bornArea = 'Tierra 2301.',
    cause = 'Entrenamiento Ninja y Objetos mágicos.',
    powers = 'Artes marciales, sentido arácnido.',
    first_apperance= 'Marvel Mangaverse: Spider-Man (2002)',
    adds = 'Tanto Peter Parker como Mary Jane Watson y Feicia Hardy son adolescentes.',
    creators= 'Kaare Andrews',
    alias = '-'
}) => {
    const imagePath= `/assets/personajes/${id}.png`;
    return (
        <div className='wrappPerson'>
        <div className='personWrap1'>
            <div className='imgWrap'>
                <img src={imagePath} className='card-imgIndividual' alt='Spiderman Manga'/>
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
                            <p>Spider-Man ( Peter Parker ) de Marvel Mangaverse es una versión alternativa de Spider-Man creada por Kaare Andrews . Él es solo uno de los muchos ejemplos de diferentes Spider-Men culturales como Spider-Man (Pavitr Prabhakar) , Spider-Man 2099 y Miles Morales </p>
                            <p>Marvel Mangaverse es un universo de cómics que se estableció en Marvel Comics Multiverse creado por Ben Dunn . La encarnación del universo de Peter Parker debutaría en Marvel Mangaverse: Spider-Man (2002), la primera de una miniserie de cinco partes, que fue creada, escrita y dibujada por Kaare Andrews. Andrews representó esta versión de Spider-Man como un ninja y el último del Clan Araña después de que Venom matara a su tío Ben. </p>
                            <p>El Mangaverse Spider-Man apareció por primera vez en la primera serie (creada, escrita y dibujada por Kaare Andrews ) donde su origen era muy diferente del Marvel Spider-Man normal. En el Mangaverse, Peter Parker es el último miembro del Clan Araña de ninjas y su sensei , el tío Ben , le ha enseñado artes marciales . Después del asesinato de Ben por parte de Venom , un subordinado de Kingpin , Peter comienza a entrenar en secreto para ser lo suficientemente fuerte como para vengarse.</p>
                            <p>En esta versión de Spider-Man, la tía May es la hermana de la madre de Peter en lugar de que el tío Ben sea el hermano de su padre. El Mangaverse Spider-Man regresó para su propia miniserie (nuevamente escrita por el creador original Kaare Andrews) en la que se encuentra con una versión cibernética de Black Cat , así como con el simbionte Venom.</p>
                            <p>Este simbionte no se convierte en Venom y tiene orígenes místicos y conexiones con un clan 'malvado' de Ninja que está afiliado a Spiders, aparentemente una contraparte del propio clan ninja de Spider-Man. Norman Osborn , más conocido como el Duende Verde , tiene una aparición menor en la serie.</p> 
                            <p>En New Mangaverse: The Rings of Fate , se hacen referencias tanto a la muerte del Capitán América como en la miniserie Spider-Man: Legend of the Spider Clan que presentó su traje negro y el Mangaverse Black Cat. Durante el transcurso de esta serie, Spider-Man desarrolla la habilidad inesperada de disparar telarañas, lo que lo sorprende por completo. También es objeto de afecto tanto para Black Cat (aunque más tarde resulta haber estado aliada con Mangaverse Nick Fury , su verdadera lealtad desconocida) como para Mary Jane Watson, quien se convierte en la versión Mangaverse de Spider-Woman. y se muestra que Peter lo está entrenando en los caminos del Clan Araña.</p>
                            <p>A diferencia de la línea principal del Universo Marvel, donde Peter Parker, Mary Jane Watson y Felicia Hardy ahora son adultos, los tres están entre los primeros y mediados de la adolescencia en este punto, y posiblemente entre los primeros y finales de la adolescencia en el momento de la Nuevo mangaverso. Esta versión de Spidey tiene guantes envueltos, una mochila adornada con el símbolo de la araña y tenis.</p>
                            <p>La encarnación de Mangaverse aparece más tarde en la historia del cómic cruzado titulada Spider-Verse. Fue uno de los personajes protagonizados en el cómic de antología Spider-Verse # 1 protagonizando la historia "Spider Clan: The Many" que continúa la serie Marvel Mangaverse que protagonizó antes. La historia está escrita por Skottie Young y Jake Andrews.</p>
                            <p>Jesse Schedeen de IGNexplicó que a pesar de que "los fanáticos del Mangaverse Spider-Man estarán encantados de ver que regresa Peter Parker", expresó que Kaare Andrews no regresó como desafortunado y también expresó su decepción con los nuevos escritores. Sintió que Young "hace un gran esfuerzo para enviar a Peter en un viaje para confrontar su herencia, solo para que al final no importe mucho". También lo comparó como Avatar: The Last Airbender -lite que estar verdaderamente inspirado en el manga. Mientras tanto, el escritor de cómics Nick Lowe elogió su trabajo calificándolo de "genial".</p>                               
                        </p>
                    </div>
                <div className='buttonNavContainer'>
                    <a href="/villanos"><button className='buttonNavigationSpiders'> <GiSpiderWeb/> Ir a Villanos</button></a>
                </div>
                <div className='navegationPerson'> 
                    <a href="/personaje/spidermanPavitr"><button className='buttonNavigation'><FaArrowLeft/> Spiderman (Pavitr)</button></a>
                    <br/>
                    <a href="/personaje/spidermanJ"><button className='buttonNavigation'>Spiderman J <FaArrowRight/></button></a>
                </div>
        </div>
        </div>
        </div>
    </div>
  )
}
