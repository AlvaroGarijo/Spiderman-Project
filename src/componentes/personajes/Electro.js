import React from 'react'
import '../personajes/personajesStyle/personajes.css';
import { GiSpiderWeb } from 'react-icons/gi';
import { FaArrowLeft } from 'react-icons/fa';
import { FaArrowRight } from 'react-icons/fa';

export const Electro = ({
    id = 'Electro',
    personaje = 'Electro',
    realName = 'Maxwell "Max" Dillon',
    bornArea = 'Estados Unidos',
    first_appearance = 'The Amazing Spider-Man #9 (febrero de 1964)',
    cause = 'Un extraño accidente de rayos causó un cambio mutagénico que lo transformó en un condensador eléctrico vivo.',
    powers = 'Genera y almacena hasta 1.000.000 de voltios de energía eléctrica, manipulación mental de dispositivos eléctricos, habilidad de cabalgar la electricidad, vuelo por la electricidad.',
    adds = 'Electro puede anular cualquier dispositivo accionado eléctricamente y manipularlo según sus órdenes mentales.',
    creators = 'Stan Lee y Steve Ditko',
    alias = 'Electro, Max, Dillon'
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
                <a href="/villanos"><button className='buttonNavigationSpiders'> <GiSpiderWeb/> Ir a Villanos</button></a>
            </div>

        </div>
         <div className='dataWrap'>
            <div className='dataControl'>
                <h3 className='titlePerson'>{ personaje }</h3>
                <div className='infoPersonWrap'>
                    <div className='infoPerson'>
                        <p>Mientras que Maxwell "Max" Dillon un ingeniero eléctrico y liniero, estaba reparando una línea eléctrica, un extraño accidente de rayos causó un cambio mutagénico que lo transformó en un condensador eléctrico vivo. Sus poderes inicialmente eran débiles, por lo que pasó algún tiempo robando equipos eléctricos de Industrias Stark para cargarse. Durante este tiempo, fue abordado por Magneto, quien lo consideró un recluta potencial para su Hermandad de Mutantes, alegando que el poder de Dillon rivalizaba con el suyo, pero Dillon se negó. Al día siguiente, Dillon fue confrontado por un matón de poca monta del que había estado pidiendo prestado dinero para pagar la maquinaria que necesitaba. Cuando el matón lo apuntó con un arma porque todavía no le había devuelto el dinero, respondió disparando un rayo en el pecho del matón, la primera vez que Dillon mató a alguien. Luego, tomando el nombre de "Electro", recurrió a la vida de un criminal profesional, siendo su primera víctima J. Jonah Jameson. Electro irrumpió en el Daily Bugle. Construyendo y robando de la caja fuerte de Jameson justo en frente de él. Jameson acusó a Spider-Man de ser una identidad alternativa de Electro, lo que provocó que Spider-Man demostrara que el editor estaba equivocado. Durante su primer enfrentamiento, Spider-Man casi muere después de tocar al villano con carga eléctrica. Spider-Man finalmente usó una manguera contra incendios para cortocircuitar a Electro mientras usaba guantes de goma para protegerse.</p>
                        <p>Electro confrontó a Daredevil por primera vez cuando intentaba ingresar al Edificio Baxter. Él fue nuevamente derrotado. Electro más tarde se unió al original Seis Siniestros, y fue el primer miembro del grupo en luchar contra Spider-Man, luchando contra él en una planta de Stark, cuando Spider-Man esquivó un rayo de electricidad y se dio cuenta de que sus poderes habían regresado. Electro perdió su poder cuando el poder fue cortado por Spider-Man. Spider-Man recibió una carta de él que lo llevó a luchar contra Kraven el Cazador. Electro atacó a los Cuatro Fantásticos en la boda de Sue Storm y Reed Richards, bajo el control del Doctor Doom, es una máquina de control mental, pero debido a Mr. Fantástico él, al igual que los otros villanos, no tiene memoria del incidente. Más tarde reclutó los segundos Emisarios del Mal en un complot de venganza contra Daredevil por derrotas anteriores. Este grupo consistía en Gladiador, Zancudo, Leap-Frog y Matador</p>
                        <p>Electro fue contratado más tarde por J. Jonah Jameson para derrotar a Spider-Man en la televisión nacional. Se encontró con Daredevil nuevamente en San Francisco, en ese momento se puso temporalmente un disfraz modificado. Luego tomó el control de un androide Protarian que buscaba la destrucción de Omega. Luego, Electro se asoció con Ventisca contra Spider-Man y Daredevil. Electro luego intentó ayudar a una banda de delincuentes que escapaban de los Defensores.</p>
                        <p>Electro más tarde se unió a Los 4 Terribles. Como parte de los Cuatro Terribles, utilizó a Spider-Man como cebo para atrapar a los Cuatro Fantásticos. Posteriormente, luchó contra Falcon pero fue derrotado, en parte porque no consideró que Falcon fuera una amenaza seria. Electro más tarde se enteró de que puede alterar electroestáticamente la habilidad de Spider-Man para trepar en la pared. El Camaleón y Hammerhead luego enviaron al Shocker para tratar de reclutar a Electro en su organización. En cambio, luego aceptó la invitación del Doctor Octopus para reunirse con los Seis Siniestros, y luchó contra Spider-Man.</p>
                        <p>Electro luchó contra Spider-Man en innumerables ocasiones, solo o como parte de un grupo como los Seis Siniestros. También luchó contra otros héroes como Daredevil, los Cuatro Fantásticos y los Nuevos Vengadores. A pesar de su inmenso poder, casi siempre ha sido derrotado, generalmente como resultado de que sus enemigos lo burlen o aprovechen su debilidad para regar mientras están cargados. Como resultado de sus frecuentes y a menudo embarazosas derrotas, Electro intentó tomar el suministro de energía de la ciudad de Nueva York en un intento de gloria y respeto. Spider-Man frustró este plan, sin embargo, y convenció a Electro para que abandonara su carrera criminal. Cuando Kaine (el clon loco de Spider-Man) comenzó a matar a los enemigos de Spider-Man, Electro comenzó a temer por su vida y se unió temporalmente a los Siete Siniestros de Mysterio, que se había formado para combatir a Kaine. Este grupo se disolvió rápidamente, y después de la posterior desaparición de Kaine, Electro volvió a la jubilación.</p>
                        <p>Esto cambió cuando Rose decidió financiar una técnica experimental que amplificaría las habilidades de Electro, a cambio de los servicios de Electro como ejecutor. Al ver esto como una oportunidad para elevarse por encima de la cadena de fallas que habían constituido gran parte de su vida, Electro se sometió al procedimiento. Después de pagar su deuda con la Rosa al derrotar a varios miembros de The True Believers (una rama de la famosa secta ninja llamada La Mano), un grupo de asesinos ninja que habían estado interfiriendo en las operaciones de Rose, Electro intentó demostrar su recién amplificado poderes para el mundo, una vez más tratando de tomar el control del suministro de energía de la ciudad de Nueva York. Vistiendo un traje aislado, Spider-Man lo detuvo. Electro, en un esfuerzo por hacer un gran gesto final, se arrojó al Río Hudson, mientras que su cuerpo estaba muy cargado, aparentemente matándose en una explosión.</p>
                        <p>De alguna manera sobreviviendo, Electro resurgió más tarde como parte de los Seis Siniestros reformados, formados para matar al Senador Stewart Ward y al Doctor Octopus (a quienes los otros miembros de los Seis odiaban debido a su arrogancia). Sus poderes aparentemente habían vuelto a su nivel de preamplificación, y vestía un nuevo traje azul y blanco. Cuando Venom traicionó a sus compañeros miembros Seis Siniestros, intentando matarlos uno por uno, atacó a Electro y lo dejó por muerto. Una vez más, Electro sobrevivió, y cuando volvió a aparecer había vuelto a su traje amarillo y verde.</p>
                        <p>Electro estaba trabajando con el Buitre cuando fueron atacados por Spider-Man que pensó que habían secuestrado a su tía May. Electro logró llevar a Spider-Man al borde de la derrota, utilizando sus poderes de manera más inteligente y explotando una gran cantidad de autos, incluso algunos con niños en ellos. Después de una batalla devastadora, Spider-Man lo derrotó combatiéndolo contra una refinería de gas. El Electro mal herido se recuperó bastante rápido, y poco después se unió a los Doce Siniestros, dirigido por el Duende Verde, aunque él y el resto del equipo fue derrotado gracias a la intervención de los Cuatro Fantásticos, Daredevil, Capitán América, Iron Man y Yellowjacket.</p> 
                        <p>Más tarde, por separado, fue contratado por Skrull Pagon (haciéndose pasar por Elektra) para liberar a Karl Lykos (también conocido como Sauron) de La Balsa, una prisión de máxima seguridad para supervillanos. Después de causar disturbios, Electro intentó huir con su novia camarera, pero fue capturado por los Nuevos Vengadores, y posteriormente se desmayó ante la perspectiva de ser golpeado por Luke Cage, usando la red de Spider-Man para protegerse de Electro</p> 
                        <p>Tras la conclusión de la historia de The Superior Spider-Man que devuelve al verdadero Spider-Man, Electro ingresa al Bar sin nombre y es presentado a los sirvientes de Hobgoblin por su amigo y cantinero Deke. Los villanos comienzan a bromear sobre el sombrío Electro. Uno menciona cómo Thor lo lanzó al espacio. Otro sobre cómo "Spider-Man" lo hizo parte de los Seis Superiores. Y otra más acerca de cómo Electro fue sacado por el Punisher a pesar de la falta de poderes de este último. Electro se enoja y comienza a chispear, pero el cantinero controla la situación comentando lo malo que es el Castigador y con cumplidos como sacar a tantos villanos de la Balsa, lo que le valió el respeto de Crossbones y el Conde Nefaria. Esto no detiene a los demás, sin embargo. Decidido a ser respetado, Electro regresa a la Balsa, listo para otra escapada a pesar de que el Duende Verde ha hecho lo mismo recientemente y el hecho de que fue rebautizado como Spider-Island II. Él envía una mancha de electricidad, pero crece excesivamente grande y Electro no puede apagarlo. Finalmente agota todo su poder, pero cuando esto sucede, se desmaya y muchos de los villanos que intentó escapar ahora están muertos. Jurando venganza, Electro pronto se da cuenta de lo que le causó esto: experimentos realizados por "Spider-Man". Electro más tarde visita a su amiga Francine Frye y mantiene su distancia debido a sus poderes incontrolables. Francine comienza a besar a Electro solo para terminar muriendo por electrocución.</p> 
                    </div>
                </div>
            
            <div className='navegationPerson'> 
                <a href="/personaje/DuendeVerde"><button className='buttonNavigation'><FaArrowLeft/> Duende Verde</button></a>
                <br/>
                <a href="/personaje/Dr_Octopus"><button className='buttonNavigation'> Dr. Octopus <FaArrowRight/></button></a>
            </div>
        </div>
        </div>
        </div>
    </div>
  )
}
