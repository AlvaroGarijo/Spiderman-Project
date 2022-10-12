import React from 'react'
import '../personajes/personajesStyle/personajes.css';
import { GiSpiderWeb } from 'react-icons/gi';
import { FaArrowLeft } from 'react-icons/fa';
import { FaArrowRight } from 'react-icons/fa';

export const Buitre = ({
    id = 'Buitre',
    personaje = 'Buitre',
    realName = 'Adrian Toomes',
    bornArea = 'Staten Island, NY.',
    first_appearance = 'Amazing Spider-Man (vol. 1) #2 (1963)',
    cause = 'Decepción por un socio de negocios',
    powers = 'Atributos físicos aumentados y vuelo, los cuales derivan de su arnés especial',
    adds = 'Las plumas de sus alas son tan afiladas como espadas y pueden ser utilizadas como armas arrojadizas.',
    creators = 'Stan Lee y Steve Ditko',
    alias = 'Adrian Toomes'
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
                        <p>El Buitre es un alias utilizado por varios supervillanos ficticios que aparecen en los cómics estadounidenses publicados por Marvel Comics. El primer personaje en usar el alias es Adrian Toomes (/ tümz/), un enemigo recurrente de Spider-Man, y el segundo villano que se encontró, después del Camaleón. Con los años, otros personajes han tomado el manto como enemigos de Spider-Man, pero Toomes sigue siendo el Buitre más recurrente y conocido.</p>
                        <p>El personaje ha sido representado en numerosas caricaturas y videojuegos de Spider-Man. Además, Michael Keaton interpretó al Buitre haciendo su debut en el cinematográfico del personaje, en la película del Universo cinematográfico de Marvel Spider-Man: Homecoming (2017) y será el villano del Spider-Man después volverá a interpretar el papel en la película de 2022, Morbius ambientada en el Universo Spider-Man de Sony.</p>
                        <p>Adrian Toomes nació en Staten Island, Nueva York. Es un exingeniero electrónico que alguna vez fue socio de un hombre llamado Gregory Bestman; Bestman manejaba las finanzas, mientras que Toomes manejaba las invenciones. Un día, después de crear un arnés de vuelo, un entusiasmado Toomes corrió a la oficina de Bestman para compartir la feliz noticia. Sin embargo, Bestman no estaba ahí, y Toomes descubrió que Bestman secretamente había malversado los fondos y que él no tenía ningún recurso legal, lo que significa que perdió su trabajo. Enfurecido, Toomes destrozó el negocio, descubriendo que el arnés también le daba fuerza sobrehumana. A continuación decidió dedicarse al crimen profesional como el Buitre.</p> 
                        <p>Las plumas de sus alas son tan afiladas como espadas y pueden ser utilizadas como armas arrojadizas. Al lanzarlas, éstas se regeneran para que pueda mantener su capacidad de vuelo.</p>
                        <p>El Buitre emplea un arnés especial de su propia invención para poder volar; su vuelo es dirigido por un par de alas llevadas en sus brazos. El arnés también le dota de una mayor resistencia y, según algunas fuentes, aumenta su tiempo de vida. Aunque Toomes está en una edad avanzada, es un peleador fuerte y un asesino despiadado. En una ocasión, restauró su juventud mediante bioquímicos, aunque esto se perdió tras exponerse al cadáver de un sobrehumano elemental. En un momento dado, había utilizado un dispositivo para robar la juventud de Spider-Man, dejando al Buitre joven y a Peter como un anciano, pero ese efecto desapareció en cuestión de horas.</p>
                        <p>El Buitre se enfrentó por primera vez a Spider-Man cuando estaba en una oleada de robos en la Ciudad de Nueva York. Spider-Man se dio cuenta por primera vez que podría vender fotos a Jameson después de que el Daily Bugle ofreció una recompensa por fotos del Buitre. En la primera batalla, Spider-Man fue derrotado y sellado en un tanque de agua con lados muy resbaladizos al subir, pero aun así fue capaz de liberarse. El Buitre entonces desafió a la policía, diciendo que robaría diamantes; sin embargo, escapó a través de la red de alcantarillado. Spider-Man había creado un dispositivo que desactivaba el arnés del Buitre, y lo activó durante una pelea en el aire con el Buitre, dejando a Toomes inconsciente, por lo cual fue arrestado.</p> 
                        <p> El Buitre modificó su arnés, y trató de robar la nómina del Daily Bugle. Se unió a los Seis Siniestros del Doctor Octopus, y envió un mensaje al Daily Bugle de que habían capturado a Betty Brant. También fue el último enemigo en pelear contra Spider-Man antes del Doctor Octopus. Obligó a Spider-Man a eliminar sus lanza-telarañas, amenazándolo con echarse a volar, luego roció aceite en el techo del edificio, y trató de empujar a Spider-Man utilizando un viento creado por sus alas, pero Spider-Man escapó de esto. El Buitre fue capturado después de que Spider-Man se balanceara sobre él con un lazo que el Buitre trataba de usar en su contra. Entonces le dijo a Spider-Man la localización de la guarida del Doctor Octopus, y al igual que el resto del equipo fue encarcelado en el final de la historia. </p>
                        <p>Más tarde, creyendo estar muerto en prisión debido a sus lesiones en el taller de la prisión, Toomes le reveló la ubicación de un equipo extra del Buitre en los terrenos de la prisión a su compañero de celda, Blackie Drago, quien se convirtió en el segundo Buitre. Blackie le revela a Toomes que causó el accidente por este propósito. Toomes se enfurece, pero parece caer inconsciente en los próximos minutos. Blackie noquea a un guardia, desentierra las alas y escapa. Drago, como el Buitre, se asocia con Kraven contra Spider-Man. Toomes finalmente sale de la cárcel y derrota a Drago, al igual que a Spider-Man. Algún tiempo después, el Dr. Clifton Shallot mutó su cuerpo en una forma semejante a la de Toomes, pero poseyendo alas naturales y la capacidad de volar.</p>
                        <p>Más tarde, el Buitre humilló a un criminal mafioso, el Sr. Morgan, quien contrató a Hitman para matar a Spider-Man, tratando de robar al Buitre por su venganza. El Buitre entonces organizó el asesinato de los principales mafiosos de Nueva York para convertirse en el nuevo señor del crimen de la ciudad, y luchó contra Spider-Man. El Buitre después escapó de la cárcel, y una vez más se enfrentó a Spider-Man.</p> 
                        <p>El Buitre más tarde salió de su retiro para cobrar venganza de Gregory Bestman, su ex-compañero de investigación que lo malversó en sus beneficios. Luego se enfrentó a los Vulturians, un grupo de jóvenes que habían robado sus diseños. </p>
                        <p>Él estuvo involucrado en un crimen en un casino de Atlantic City para prepararse para su propio funeral ostentoso, pero sus planes fueron frustrados por el Hobgoblin. Más tarde, el Buitre movió sus operaciones a Las Vegas, donde atacó a Snake Diamond en medio del desierto para robar su fórmula por un fluido especial de embalsamamiento. Luego se enfrentó a los mutantes Rusty Collins y Skids, en un intento de liberar a Nitro.</p>
                        <p>En más de una ocasión, Toomes ha estado aliado con otros villanos de Spider-Man con el fin de destruir al "trepa-muros". El Buitre ha estado en todas las encarnaciones de los Seis Siniestros, y apareció con los Doce Siniestros. Él tiene una gran amistad con el también villano Electro; los dos casi vencieron a Spider-Man a la muerte</p> 
                        <h3>Otros Personajes llamados Buitre</h3>
                            <ul>
                                <li>Raniero "Blackie" Drago</li>
                                <li>Clifton Shallot</li>
                                <li>Vulturions</li>
                                <li>Jimmi Natale</li>
                                <li>Isidoro Scarlotti</li>
                            </ul>
                    </div>
                </div>
    
                <div className='navegationPerson'> 
                    <a href="/personaje/Lagarto"><button className='buttonNavigation'><FaArrowLeft/> Lagarto</button></a>
                    <br/>
                    <a href="/personaje/Escorpion"><button className='buttonNavigation'>Escorpión <FaArrowRight/></button></a>
                </div>
            </div>
        </div>
        </div>
    </div>
  )
}
