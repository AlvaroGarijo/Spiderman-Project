import React from 'react';
import '../personajes/personajesStyle/personajes.css';
import { GiSpiderWeb } from 'react-icons/gi';
import { FaArrowLeft } from 'react-icons/fa';
import { FaArrowRight } from 'react-icons/fa';

export const SpiderWomanMattie = ({
    id = 'SpiderWomanMattie',
    realName = 'Martha "Mattie" Franklin',
    personaje = 'Spider Woman (Mattie Franklin)',
    bornArea = 'Estados Unidos',
    cause = 'ella toma el lugar de su padre durante La Reunión y fue dotada de los imponentes poderes que Norman Osborn deseaba para sí mismo.',
    powers = 'Fuerza y reflejos proporcional a una araña, trepar por las paredes, telarañas y patas psionicas, destellos psíquicos, telepatía moderada y sentido arácnido.',
    first_apperance= 'Spectacular Spider-Man #263 en noviembre de 1998',
    adds = 'Franklin no tiene ningún entrenamiento o experiencia de las anteriores mujeres que han llevado el manto de Spider-Woman.',
    creators= 'John Byrne y Rafael Kayanan',
    alias = 'Mattie, Tu buena y vecina la tercera Mujer Araña, Mujer Araña, La Trepamuros'
}) => {
    const imagePath= `/assets/personajes/${id}.png`;
    return (
        <div className='wrappPerson'>
        <div className='personWrap1'>
            <div className='imgWrap'>
                <img src={imagePath} className='card-imgIndividual' alt='Spider Woman MattieFranklin'/>
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
                            <p>Spider-Woman (Mattie Franklin) es una superheroína ficticia que aparece en los cómics estadounidenses publicados por Marvel Comics. Ella es la tercera personaje que se llamará La tercera Mujer Araña.</p>
                            <p>Martha" Mattie" Franklin era una joven con problemas que creció con su padre después de que su madre llamada Kate Franklin murió. A Ella se le concedierón sus poderes cuando, después de oír por casualidad una llamada telefónica entre su padre y Norman Osborn sobre La Reunión de los 5, ella toma el lugar de su padre durante La Reunión y fue dotada de los imponentes poderes que Norman Osborn deseaba para sí mismo.</p>
                            <p>Durante uno de los retiros temporales de Spider-Man, ella lleva un traje casi idéntico y se llena para él. Mattie ha sido durante mucho tiempo una fanática obsesiva de Spider-Man que inspiró su carrera en un superhéroe. Esta obsesión se acompaña de sentimientos románticos reprimidos por él, que ella reveló durante un estado de delirio después de sufrir una lesión en la cabeza en la batalla.</p>
                            <p>Ella es derrotada por Shadrac, obligando a Spider-Man a volver al traje y salvarla. Después del regreso de Spider-Man, ella asume la identidad de Spider-Woman. Eventualmente Charlotte Witter, una Cuarta Mujer Araña pero villana que también paso por el nombre de la Mujer Araña , la atacó y robó sus poderes. Mattie continuó peleando contra Witter y no sólo logró reabsorber sus propios poderes, también absorbió los poderes de ambas Spider-Woman anteriores. Asistida por Madame Web y Jessica Drew, ella busca a los supervillanos donde pueda encontrarlos.</p>
                            <p>Solitaria por tener solo a su padre que trabaja constantemente para vivir, Franklin se muda con J. Jonah Jameson, un amigo cercano de su padre, y su esposa llamada Marla, que resulta ser su tía. Tienen a Franklin (una estudiante "A" directa) inscrita en una escuela privada, donde una compañera de clase, Cheryl, la ve usando sus poderes y se convierte en su amiga y fan más grande. Durante este tiempo, los poderes que Mattie absorbió de las anteriores Spider-Women comienzan a regresar a sus dueños originales.</p> 
                            <p>Ella aparece en la serie Concurso de Campeones II. Habiendo escapado de las brutales peleas de gladiadores en las que otros superhéroes de la Tierra se lavaron el cerebro sin saberlo, huye a una misteriosa jungla y casi es asesinada por un enemigo y un amigo ingenuo por igual. Finalmente, se une a todos los héroes y veteranos originales, Iron Man y Psylocke.</p>
                            <p>Mientras que en una primera cita, Mattie se deslizó una droga de violación de fecha. Ya que en ese momento ella ha perdido completamente el poder de resistencia a las toxinas que absorbió Jessica Drew, se ha quedado sin sentido. Un pequeño narcotraficante la explota para producir una droga llamada Hormona somatotrópica Mutante, y la utiliza para la prostitución. Con el fin de mantenerla prisionera, él regularmente la administra con drogas psicoactivas. La investigadora privada Jessica Jones, con la ayuda de Jessica Drew, rescata a Mattie y la devuelve a Jonah y Marla. Mattie recibe asesoramiento para superar su dependencia de las drogas con las que estaba sedada.</p>                              
                        </p>
                    </div>
                
                <div className='navegationPerson'> 
                    
                    <a href="/personaje/SpiderWomanJessica"><button className='buttonNavigation'><FaArrowLeft/> Spider Woman (Jessica)</button></a>
                    <br/>
                    <a href="/personaje/SpidergirlMayday"><button className='buttonNavigation'>Spider Girl (Mayday) <FaArrowRight/></button></a>
                </div>
        </div>
        </div>
        </div>
    </div>
  )
}
