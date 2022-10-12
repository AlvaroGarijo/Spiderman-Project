import React from 'react'
import '../personajes/personajesStyle/personajes.css';
import { GiSpiderWeb } from 'react-icons/gi';
import { FaArrowLeft } from 'react-icons/fa';
import { FaArrowRight } from 'react-icons/fa';

export const Rhino = ({
    id = 'Rhino',
    personaje = 'Rhino',
    realName = 'Aleksei Mikhailovich Sytsevich',
    bornArea = 'Rusia',
    first_appearance = 'The Amazing Spider-Man #41 (octubre de 1966)',
    cause = 'Un día fue contactado por unos agentes que le ofrecieron mucho dinero a cambio de participar como sujeto de prueba en un experimento.',
    powers = 'Posee poderes sobrehumanos como fuerza, velocidad, resistencia y durabilidad.',
    adds = 'El traje es altamente impasible a los daños y a temperaturas extremas, y también está equipado con un cuerno.',
    creators = 'Stan Lee y John Romita Sr.',
    alias = 'Alex O`Hirn'
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
            <div className='buttonNavContainer'>
                <a href="/villanos"><button className='buttonNavigationSpiders'> <GiSpiderWeb/> Go to Villains</button></a>
            </div>

        </div>
         <div className='dataWrap'>
            <div className='dataControl'>
                <h3 className='titlePerson'>{ personaje }</h3>
                <div className='infoPersonWrap'>
                    <div className='infoPerson'>
                        <p>Rhino (Aleksei Sytsevich) es un supervillano ficticio que aparece en los cómics estadounidenses publicados por Marvel Comics como un adversario de Spider-Man, aunque también ha entrado en conflicto con Hulk. Aunque más de un personaje ha asumido la identidad de Rhino, el primero de ellos, y el asociado principalmente con esa identidad, es Aleksei Sytsevich, que fue creado por el escritor Stan Lee y el artista John Romita, Sr., y apareció por primera vez en The Amazing Spider-Man # 41 (octubre de 1966).</p>
                        <p>Debutando en la era plateada de los cómics, Rhino ha aparecido en otros productos respaldados por Marvel, como series de televisión animadas, videojuegos y juegos de arcade, y mercaderías como figuras de acción y cromos.</p>
                        <p>Una versión del Rhino que usa una armadura de combate con poder, interpretado por Paul Giamatti, apareció en la película de 2014 The Amazing Spider-Man 2: Rise of Electro.</p>
                        <p>Aleksei Sytsevich era un pobre inmigrante ruso de gran tamaño y fuerza que se trasladó a Estados Unidos, para conseguir trabajo y enviarle dinero a su familia. Con una inteligencia no demasiado alta y ningún tipo de estudios, los trabajos que le ofrecían solo eran para utilizar su impresionante fuerza y envergadura por lo que no podía salir de la pobreza. Un día fue contactado por unos agentes que le ofrecieron mucho dinero a cambio de participar como sujeto de prueba en un experimento. Sytsevich aceptó y su cuerpo fue sometido a un tratamiento intensivo de radiación, el cual consiguió aumentar su ya descomunal fuerza y velocidad. Desde ese momento utilizó su nombre en código: Rhino.</p>
                        <p>Después de su transformación, es encomendado por los agentes que le dieron sus poderes a secuestrar al coronel John Jameson por su conocimiento de secretos militares. Sin embargo, Rhino, los traiciona y causa un alboroto, siendo derrotado por el superhéroe Spider-Man. Es encarcelado y mantenido allí con sedantes, pero estalla poco después y continúa tratando de secuestrar a Jameson. Spider-Man utiliza una telaraña desarrollada por el doctor Connors que atraviesa la armadura de Rhino dejándolo inconsciente. Finalmente se acercó por los mismos científicos con otro palo más potente, el rinoceronte se compromete a encontrar y secuestrar a Bruce Banner (el alter ego de Hulk), por su conocimiento de la radiación gamma.</p>
                        <p>El villano encuentros Hulk pero aparentemente es asesinado por graves heridas de una explosión de camión antes de que se puede producir una importante batalla. Hulk logra sobrevivir intento de Rhino para derribar a su enemigo con él, con su último bit de fuerza para un ataque por detrás, y el villano pasa en puño de Hulk, desafiantemente alegando que habría derrotado a Hulk en una lucha justa</p> 
                        <p>El personaje es revivido y curado por otro enemigo de Hulk, el líder. Aumentar fuerza de Rhino con rayos gamma, el líder dirige el villano para impedir la boda de Bruce Banner y Betty Ross. Banner se convierte en Hulk y lucha contra el rinoceronte, que se escapa y persigue al líder una vez dándose cuenta de que ha sido utilizado. El rinoceronte es atrapado en una explosión al atacar el barco del líder y quedó en coma. Rhino hace una breve reaparición como una ilusión cuando el líder intenta sin éxito torturar a Hulk con imágenes de los últimos enemigos. El líder, paralizado después de un encuentro anterior con Hulk, encuentra y toma el control mental del cuerpo sigue en coma y ataca el Hulk. La batalla finalmente lleva a un extranjero mundial, donde el líder abandona el control del rinoceronte y huye. Bruce Banner y un rinoceronte inconsciente pero ahora recuperado viajan a la tierra a través de un cohete.</p>
                        <p>Rhino reaparece con su compañero enemigo de Hulk la abominación y el par activa una bomba gamma en la base en un intento de destruir el Hulk Hulkbuster. Compañero de Hulk de la época, Jim Wilson, desactiva la bomba y el Hulk trucos a los villanos durante el combate, obligándolos a chocar y golpear otra inconsciente.El personaje reaparece como un miembro del equipo de supervillanos de los Emisarios del mal (conformado por líder Cerebrito; el Hombre de cobalto; Solarr y el rinoceronte), que buscan una rara joya. Opuesto por grupo de superhéroes los defensores, Rhino y Solarr inicialmente mantienen sus propios hasta derrotaron por Doctor extraño. Mientras que en la clandestinidad, el rinoceronte se encuentra por el científico Doc Samson, ser burlado y derrotado.</p>
                        <p>El personaje posee un traje extremadamente grueso similar a la piel de un rinoceronte, cubriendo todo su cuerpo excepto su cara. El traje es altamente impasible a los daños y a temperaturas extremas, y también está equipado con un cuerno. La química mutagénica y tratamientos con radiación, incluyendo el bombardeo de rayos gamma, provee al personaje de fuerza sobrehumana, aumento de los niveles de velocidad y resistencia, y un alto grado de durabilidad.</p> 
                        <p>El segundo Rhino lleva una armadura de alta tecnología y empuña un hacha de guerra con sus hojas en forma de cuerno de rinoceronte.</p> 
                    </div>
                </div>
    
                <div className='navegationPerson'> 
                    <a href="/personaje/Escorpion"><button className='buttonNavigation'><FaArrowLeft/> Escorpión</button></a>
                    <br/>
                    <a href="/personaje/HobGoblin"><button className='buttonNavigation'>Hob Goblin <FaArrowRight/></button></a>
                </div>
            </div>
        </div>
        </div>
    </div>
  )
}
