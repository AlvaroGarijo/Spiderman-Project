import React from 'react'
import '../personajes/personajesStyle/personajes.css';
import { GiSpiderWeb } from 'react-icons/gi';
import { FaArrowLeft } from 'react-icons/fa';
import { FaArrowRight } from 'react-icons/fa';

export const HobGoblin = ({
    id = 'HobGoblin',
    personaje = 'HobGoblin',
    realName = 'Roderick Kingsley',
    bornArea = 'Huntington (Nueva York)',
    first_appearance = 'The Amazing Spider-Man #18 (noviembre de 1964)',
    cause = 'Kingsley no solo recreaba la fórmula Duende, sino que la perfeccionaba eliminando sus efectos secundarios.',
    powers = 'Maestro de la hipnosis y el control mental inducido por las drogas, organizador criminal y de negocios altamente cualificado, diseñador de moda con talento, atributos e inteligencia sobrehumanos, uso de armas y parafernalia con temática de duendes.',
    adds = 'Kingsley era un maestro de la hipnosis y el control mental inducido por las drogas.',
    creators = 'Stan Lee y Steve Ditko',
    alias = 'Hobgoblin, Devil-Spider'
}) => {
const imagePath= `/assets/personajes/${id}.png`;
return (
    <div className='wrappPerson'>
    <div className='personWrap1'>
         <div className='imgWrap'>
            <img src={imagePath} className='card-imgIndividual' alt='Duende Verde'/>
            <div className='dataControlSmall'>
                <ul className='listDataControl'>
                    <li className='listData'>Nombre: <span className='styleData'>{ realName }</span></li>
                    <li className='listData'>Lugar de Nacimiento: <span className='styleData'>{ bornArea }</span></li>
                    <li className='listData'>Causa de sus poderes: <span className='styleData'>{ cause }</span></li>
                    <li className='listData'>Poderes: <span className='styleData'>{ powers }</span></li>
                    <li className='listData'>Añadidos: <span className='styleData'>{ adds }</span></li>
                    <li className='listData'> Primera aparición: <span className='styleData'>{ first_appearance }</span></li>
                    <li className='listData'>Creadores: <span className='styleData'>{ creators }</span></li>
                    <li className='listData'>Alias: <span className='styleData'>{ alias }</span></li>
                </ul>
            </div>
            <div className='buttonNavContainer d-none d-sm-block'>
                <a href="/villanos"><button className='buttonNavigationSpiders'> <GiSpiderWeb/> Ir a Villanos</button></a>
            </div>

        </div>
         <div className='dataWrap'>
            <div className='dataControl'>
                <h3 className='titlePerson'>{ personaje }</h3>
                <div className='infoPersonWrap'>
                    <div className='infoPerson'>
                        <p>Roderick Kingsley es un personaje ficticio, un supervillano que aparece en los cómics estadounidenses publicados por Marvel Comics. Apareció por primera vez en Peter Parker, The Spectacular Spider-Man # 43 (junio de 1980), y fue creado por Roger Stern, Mike Zeck y John Romita Jr.2​Un multimillonario y diseñador de modas que estaba obsesionado con cometer crímenes. El primer personaje en usar el alias de Hobgoblin.</p>
                        <p>En 2009, el Hobgoblin fue clasificado por IGN como el 57º mejor villano de cómics de todos los tiempos.</p>
                        <p>Roderick Kingsley comenzó como un diseñador de moda y multimillonario, que tenía conexiones con el inframundo criminal y había logrado su riqueza a través de prácticas comerciales poco éticas y allanamiento corporativo. Casualmente, Kingsley también fue el empleador de Mary Jane Watson por un tiempo. ​Como medio de evitar el ejercicio de las apariencias del día a día, hizo que su tímido hermano gemelo, Daniel Kingsley, se hiciera pasar por él para dirigir su corporación día a día.</p> 
                        <p>Las actividades de Kingsley le dieron muchos enemigos, uno de los cuales es Narda Ravanna, una diseñadora de moda rival cuyo negocio había arruinado. Tomando la identidad de Belladonna, Narda intenta vengarse de Kingsley, pero se ve frustrada dos veces por Spider-Man. Después de estos incidentes, Kingsley busca protegerse a sí mismo y a su imperio ganando más poder. El matón George Hill informa a Kingsley de haber tropezado con la guarida secreta de Norman Osborn con la esperanza de ganar una recompensa. Kingsley, en cambio, mata a Hill para asegurarse de que nadie más se dé cuenta del descubrimiento.</p>
                        <p>Al examinar la guarida y desenterrar sus secretos, Kingsley decide utilizar el equipo Duende. Pero llegando a la conclusión de que todos los portadores anteriores del manto del Duende Verde se volvieron locos, en su lugar crea un manto similar pero diferente: la identidad de los Hobgoblins. Poco después de adoptar esta nueva identidad, se encuentra con Spider-Man. Utiliza algunos de los archivos de Osborn para chantajear a figuras prominentes, e intenta comprar la antigua corporación de Osborn y fusionarse con la suya. Estos esquemas lo ponen en conflicto con Spider-Man. Entre las notas de Osborn, Kingsley también encuentra remanentes incompletos de la poción para mejorar la fuerza del Duende. Se obsesiona con encontrar la fórmula completa o perfeccionar las notas incompletas. En sus diversas actividades criminales, Kingsley pierde repetidamente a Spider-Man, ya que carece de poder físico en bruto.</p>
                        <p>Kingsley finalmente recupera la fórmula del Duende que mejora la fuerza. Consciente de que la fórmula había vuelto loco a Osborn, Kingsley opta por probarlo en otra persona primero. Él engaña a Lefty Donovan, pequeño capo, para que administre la fórmula y luego usa el control mental para forzar a Donovan en el disfraz de Hobgoblin a luchar contra Spider-Man. Desde la distancia, Kingsley controla los signos vitales y el comportamiento de Donovan. Cuando Spider-Man abruma y desenmascara a Donovan y el lavado de cerebro comienza a fallar, Kingsley actúa para proteger su identidad programando el planeador de Donovan para que se estrelle, matando instantáneamente a Donovan. A  juzgar por el éxito del experimento, Kingsley se sumerge en su derivado completo de la fórmula y gana más fuerza que el Duende original. Él usa esta nueva fuerza para luchar contra Spider-Man y la Gata Negra.</p> 
                        <p>A pesar de su aumento de habilidades, Spider-Man sigue derrotándolo. Peor aún, atrae la atención de poderosos intereses criminales que lo perciben como una amenaza, incluido el Kingpin. Después de un amargo encuentro con Spider-Man, Kingsley descubre que había sido seguido por el reportero del Daily Bugle, Ned Leeds, que había descubierto su guarida. Kingsley captura a Leeds y le lava el cerebro al periodista con hipnosis y alucinógenos para que sea el Hobgoblin. Kingsley descubre que Leeds había estado trabajando con Richard Fisk en un plan para derribar el imperio de Kingpin cuando Richard adoptó la identidad de Rosa para hacerse pasar por un señor del crimen. Kingsley usa Leeds para manejar algunas de las negociaciones, engañando a muchos criminales para que crean que Leeds es el Hobgoblin. Espera utilizar la caída del Kingpin como una oportunidad para promover sus propios intereses. Después de que Leeds se vuelve demasiado errático como para seguir funcionando como un "señuelo", Kingsley se encarga de asesinar a Leeds durante un viaje a Berlín, y decide retirarse de su identidad criminal.</p>
                        <p>Al comienzo de su carrera, Kingsley no tenía habilidades sobrehumanas, pero poseía un agudo intelecto analítico con suficiente conocimiento de química y biología para comprender las notas de Norman Osborn sobre la fórmula del Duende verde originalmente concebida por el Dr. Mendel Stromm. Kingsley no solo recreaba la fórmula, sino que la perfeccionaba eliminando sus efectos secundarios. Además, actualizó muchos de los diversos inventos de Osborn. Kingsley era un maestro de la hipnosis y el control mental inducido por las drogas. Kingsley era experto en el manejo de organizaciones criminales y negocios profesionales manejados legalmente.</p>
                        <p>Debido a la solución química verde con la que se bañó, Kingsley posee una fuerza sobrehumana a la par con Spider-Man7​y más fuerte que Norman Osborn. Del mismo modo, sus reflejos, velocidad, resistencia e intelecto también se mejoraron a niveles sobrehumanos.</p> 
                        <p>Como el Hobgoblin, llevaba un correo a prueba de balas con una túnica, capa y capucha superpuestas. Un sistema computadorizado cibernéticamente provoca que los atacantes de dedos varíen aleatoriamente sus vectores de ataque cuando se entrenan en un objetivo en particular. Utiliza un Duende Planeador, un vehículo impulsado por un turbo ventilador en miniatura, con control cibernético. Puede alcanzar altas velocidades y es extremadamente maniobrable. Utiliza Jack O'Lanterns, que son contusiones e incendiarias, bombas de humo y humo con forma de espectro, cuchillas para lanzar cuchillas con forma de murciélago, y guantes tejidos con filamentos conductores de energía microcircuitados que canalizan descargas de electricidad por impulsos. Llevaba una bandolera para llevar su armamento pequeño y portátil.</p> 
                    </div>
                </div>
                <div className='buttonNavContainer'>
                    <a href="/villanos"><button className='buttonNavigationSpiders'> <GiSpiderWeb/> Ir a Villanos</button></a>
                </div>
                <div className='navegationPerson'> 
                    <a href="/personaje/Rhino"><button className='buttonNavigation'><FaArrowLeft/> Rhino</button></a>
                    <br/>
                    <a href="/personaje/Kingpin"><button className='buttonNavigation'>Kingpin <FaArrowRight/></button></a>
                </div>
            </div>
        </div>
        </div>
    </div>
  )
}
