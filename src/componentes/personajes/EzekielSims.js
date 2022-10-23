import React from 'react';
import '../personajes/personajesStyle/personajes.css';
import { GiSpiderWeb } from 'react-icons/gi';
import { FaArrowLeft } from 'react-icons/fa';
import { FaArrowRight } from 'react-icons/fa';

export const EzekielSims = ({
    id = 'Ezekiel_Sims',
    realName = 'Ezekiel Sims',
    personaje = 'Ezekiel Sims',
    bornArea = 'Estados Unidos',
    cause = 'Ganó "ritualmente" poderes similares a los de Spider-Man.',
    powers = 'Agilidad, reflejos, fuerza, resistencia y equilibrio aumentados. Habilidad para adherirse y trepar en superficies verticales. Algún tipo de "sentido arácnido" alertándolo del peligro.',
    first_apperance= 'Amazing Spiderman volumen 2, N.º 30 (2001)',
    adds = 'Ezekiel Sims fue un rico hombre de negocios y un hombre de negocios altamente calificado y propietario de una compañía con conexiones internacionales. Al igual que con Spider-Man, él es un formidable combatiente mano a mano aunque no ha tenido un entrenamiento formal.',
    creators= 'J. Michael Straczynski y John Romita Jr.',
    alias = 'Ezekiel'
}) => {
    const imagePath= `/assets/personajes/${id}.png`;
    return (
        <div className='wrappPerson'>
        <div className='personWrap1'>
            <div className='imgWrap'>
                <img src={imagePath} className='card-imgIndividual' alt='Ezekiel Sims'/>
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
                            <p>Ezekiel Sims fue un rico hombre de negocios que, en sus años más jóvenes, ganó ritualmente poderes similares a los de Spider-Man. Quería usar sus poderes para ser un héroe, pero inicialmente los usó para fundar una corporación, creyendo que no podía hacer nada sin una base de operaciones, y rápidamente se volvió demasiado ocupado para usar sus poderes a diario.</p>
                            <p>Cuando surgió Spider-Man, Ezekiel contrató a media docena de detectives privados independientes para investigar la vida de Spider-Man, lo que le permitió saber quién era Spider-Man a partir de las diversas piezas de información que le proporcionaron. Felicia Hardy fue uno de sus investigadores, contratado específicamente para rastrear las apariciones de Spider-Man en países extranjeros.</p>
                            <p>Ezequiel, en sus 50 años, se contactó con Spider-Man y le explicó la naturaleza de los tótems animales: personas que adquieren habilidades sobrenaturales a partir de un vínculo místico con ciertos animales. </p>
                            <p>Sugirió que la araña que mordió a Peter Parker no fue mutada por la radiación, sino que en realidad trató de darle a Peter sus poderes antes de que la radiación lo matara. Esto significaba que Spider-Man ahora era parte de la cadena alimenticia sobrenatural, y se convirtió en un objetivo para otros tótems y seres que se alimentan de tótems (de ahí que muchos de los enemigos de Spider-Man se basaran en animales; en cierto nivel, sintieron "que Peter era un verdadero tótem, mientras que ellos eran simplemente impostores y, por lo tanto, fueron obligados a destruirlo)</p>
                            <p>Posteriormente ayudó a Spider-Man a luchar contra un ser conocido como Morlun, una entidad parecida a un vampiro que se "alimentaba" de tótems, aparentemente a costa de su vida, pero más tarde se reveló que sobrevivió y se fue a África, donde ayudó a Spider-Man a lidiar con Shathra, otra amenaza basada en lo sobrenatural, llevando a Peter a un área donde tendría la ventaja sobre Shathra.</p> 
                            <p>Se reveló que una variedad de amenazas sobrenaturales que Spider-Man había enfrentado realmente estaban detrás de Ezekiel, y Ezekiel intentó dirigir las consecuencias de ganar sus poderes sobre Spider-Man mismo, llevando a Spider-Man al templo donde se le había dado su poderes y extracción de sangre para atraer a una araña masiva que tomaría al "falso" guerrero totémico como un sacrificio.</p>
                            <p>Sin embargo, en sus últimos momentos, se dio cuenta de que no había hecho nada con sus poderes, sino ayudarse a sí mismo, mientras que Peter había arriesgado su vida desinteresadamente para salvar a otros una y otra vez. Con esto en mente, atacó a la araña que se habría comido a Peter, dando su propia vida para salvar a su amigo en reconocimiento del héroe que realmente era Peter, y de ese modo tuvo una oportunidad de redención que nunca habría tenido de nuevo.</p>
                            <p>en Grim Hunt, parecía como si un Ezequiel reanimado (cubierto de arañas) apareciera ante Spider-Man y Arachne</p>
                            <p>Desconocido para Spider-Man, el Ezequiel que apareció ante él era realmente el Camaleón disfrazado, llevando a Spider-Man a una trampa con los Kravinoff para llevar a cabo la resurrección de Sergei Kravinoff que requería la sangre de Spider-Man.</p>                   
                            <p>Durante la historia de Original Sin siguiendo sobre el asesinato de Uatu el Vigilante la exposición de Spider-Man al ojo de Uatu durante la confrontación con el Orbe reveló que Cindy Moon, la segunda receptora de la picadura radioactiva que creó a Spider-Man, tenía Ezequiel la mantuvo aislada, le dio algo de entrenamiento en sus poderes, pero luego la mantuvo encerrada en una habitación secreta debajo de su oficina</p>
                            <p>También se le apareció a ella y a Spider-Man en forma de un mensaje pregrabado que le dice a Silk que si ella sale de la guarida, no hay esperanza para todos (es probable que se refiera a los Spider-Totems).</p>
                            <p>También se revela que Ezequiel había mantenido a Silk a salvo en su guarida para evitar que Morlun se enterara. Años más tarde, Spider-Man aprende sobre Silk y la libera del búnker de Ezequiel, lo que le permite comenzar una nueva vida y una nueva carrera. Esto termina provocando la caza multiversal de todas las arañas, ya que los herederos ahora son conscientes de la existencia de Silk como la "Novia".</p>
                        </p>
                    </div>
                <div className='buttonNavContainer d-block d-sm-none'>
                    <a href="/spiders"><button className='buttonNavigationSpiders'> <GiSpiderWeb/> Ir a Spiders</button></a>
                  </div>  
                <div className='navegationPerson'> 
                    <a href="/personaje/spiderGwen"><button className='buttonNavigation'><FaArrowLeft/> Spider Gwen</button></a>
                    <br/>
                    <a href="/personaje/MadameWeb"><button className='buttonNavigation'>Madame Web<FaArrowRight/></button></a>
                </div>
        </div>
        </div>
        </div>
    </div>
  )
}
