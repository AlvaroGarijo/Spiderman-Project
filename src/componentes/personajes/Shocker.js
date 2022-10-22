import React from 'react'
import '../personajes/personajesStyle/personajes.css';
import { GiSpiderWeb } from 'react-icons/gi';
import { FaArrowLeft } from 'react-icons/fa';
import { FaArrowRight } from 'react-icons/fa';
export const Shocker = ({
    id = 'Shocker',
    personaje = 'Shocker',
    realName = 'Herman Schultz',
    bornArea = 'Estados Unidos',
    first_appearance = 'The Amazing Spider-Man #46 (marzo de 1967)',
    cause = 'Desarrolló un par de guanteletes diseñados para disparar ráfagas de aire, vibrando a alta frecuencia.',
    powers = 'Su traje desvía golpes y lo hace difícil de agarrar. Sus guantes lanzan ondas sísmicas, ráfagas de aire y altas frecuencias.',
    adds = 'Se convirtió en un ladrón exitoso y el mejor crackeador del mundo (según él en las historias posteriores).',
    creators = 'Stan Lee y John Romita Sr.',
    alias = 'Quilty'
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
                        <p>Shocker (Herman Schultz) es un supervillano ficticio que aparece en los cómics estadounidenses publicados por Marvel Comics. Creado por Stan Lee y John Romita Sr., el personaje debutó en The Amazing Spider-Man #46 en marzo de 1967. Generalmente se lo representa como un enemigo del superhéroe Spider-Man, y pertenece al colectivo de adversarios que conforman su galería de villanos.</p>
                        <p>Herman Schultz, un ingeniero autodidacta y renombrado cracker de cajas fuertes, inventó un par de guanteletes capaces de producir poderosas ondas vibratorias de choque. Incorporó estos guanteletes en un traje de batalla protector y se convirtió en mercenario a sueldo. Como Shocker, Schultz ascendió rápidamente en el inframundo criminal de la ciudad de Nueva York y ha sido empleado por varios señores del crimen, lo que a menudo lo ha puesto en conflicto con Spider-Man.</p>
                        <p>El personaje fue clasificado como el 23º mayor enemigo de Spider-Man por IGN. Shocker ha sido adaptado de los cómics a varias formas de medios, habiendo sido expresado su voz por Jim Cummings en Spider-Man: The Animated Series, Jeff Bennett en The Spectacular Spider-Man y David B. Mitchell en el videojuego Spider-Man. Dos iteraciones del personaje aparecieron en la película de Marvel Cinematic Universe Spider-Man: Homecoming (2017), con Herman Schultz interpretado por Bokeem Woodbine y Jackson Brice interpretado por Logan Marshall-Green.</p>
                        <p>Herman Schultz nació en la ciudad de Nueva York. Era un desertor de la escuela secundaria que tenía brillantes talentos como inventor e ingeniero. En lugar de utilizar tales talentos para obtener un empleo legítimo, se convirtió en un ladrón exitoso y el mejor crackeador del mundo (según él en las historias posteriores). Después de ser finalmente capturado y encarcelado por sus crímenes, desarrolló un par de guanteletes diseñados para disparar ráfagas de aire, vibrando a alta frecuencia. Schultz usa sus guanteletes para escapar de la prisión y se convierte en el supervillano conocido como "El Shocker". Derrota a Spider-Man en su primer enfrentamiento (ya que Spider-Man estaba en desventaja debido a un esguince de brazo izquierdo en una batalla anterior con Lagarto.)durante un robo. Mientras robaba un banco, fue golpeado y enviado a prisión después de que Spider-Man apartó los pulgares de Schultz de los gatillos de los guanteletes y luego lo noqueó.</p>
                        <p>Shocker luego robó una antigua tableta de piedra con una inscripción para una fórmula que podría restaurar la juventud, que había sido robada anteriormente por Kingpin. Probablemente, la hazaña en solitario más ambiciosa de Schultz fue su intento de retener a la ciudad de Nueva York en busca de rescate mediante el desmantelamiento de varias redes eléctricas para deletrear su nombre, y extorsionar un millón de dólares de la ciudad. ​Luego ganó un millón de dólares al acosar a un corredor de bolsa. Shocker más tarde se unió a los Maestros del Mal de Egghead (con Hombre Radioactivo, Tiburón Tigre, Moonstone y el Escarabajo) para incriminar al Dr. Henry Pym, entonces en juicio por traición. Los Maestros lucharon contra los Vengadores en este encuentro; Shocker fue lavado el cerebro y deliberadamente abandonado por Egghead para entregar un falso testimonio, y posteriormente cooperó con las autoridades para exonerar al ex vengador.</p>
                        <p>Shocker fue contratado más tarde por el criminal de guerra nazi Baron Von Lundt para matar a Dominic Fortune, y construyó las unidades de vibro shock en todo su uniforme para hacerlo. Shocker fue contratado por Camaleón y Hammerhead para inducir a Electro a unirse a su organización. ​Shocker luego intentó robar miles de dólares de caridad en la recaudación de fondos de celebridades para la Biblioteca de la Ciudad de Nueva York. Es capturado por Spider-Man y enviado a prisión. Más tarde escapa con la ayuda de su compañero interno Boomerang. En este momento, ha desarrollado serios problemas de confianza y se ha aterrorizado de que el Azote del Inframundo lo va a matar en un punto de inflexión ocurre cuando Spider-Man lo detiene y parece no tomarlo en serio. Enfurecido, Shocker derrota a Spider-Man y está a punto de acabar con él cuando un impostor Scourge interviene, causando que Shocker huya. Cuando apareció por segunda vez, sus problemas de confianza desaparecieron. Su objetivo es cazar al Scourge y matarlo primero.</p> 
                        <p>Shocker lleva dos guanteletes que le permiten lanzar ondas vibratorias de choque que funcionan de manera similar a las pistolas de aire comprimido, creando una serie de ráfagas de aire a altas presiones en rápida sucesión que se traducen en una serie de poderosos impactos. Estos impactos, proyectados a distancia, crean vibraciones destructivas que pueden hacer pedazos el cemento y causar enormes daños al cuerpo humano y sus órganos internos. Cuando agarra un objeto y activa sus vibraciones, el objeto se deshace. Si lo que sujeta es un ser vivo, la víctima sufriría daños internos potencialmente fatales.</p>
                        <p>Shocker posee una fuerza aumentada por sus unidades de vibraciones de choque, por lo que es capaz de dejar fuera de combate a una persona que posea fuerza sobrehumana, como puede ser Spiderman, y sus vibraciones pueden someter incluso a personajes con resistencia sobrehumana como She-Hulk. Sin embargo, esto no se traduce en la capacidad de levantar un mayor peso. Adicional a esto Shocker ha diseñado un traje acolchado que está provisto de su propia fuente de energía, crea también un escudo vibracional que deflecta o amortigua los golpes que recibe y le permite escapar de cualquier atrape, incluso de ser sujetado por las redes de Spiderman, aun así la principal función del traje es proteger a Shocker de las vibraciones que producen sus guantes al activarlos.</p>
                        <p>Mientras que la mayoría de los villanos de Spider-Man generalmente cambian de sus objetivos originales a una venganza contra Spider-Man, el Shocker todavía se preocupa principalmente por ganarse la vida y proteger su reputación. Como tal, el personaje se retrata generalmente como comportándose de una manera más profesional que la mayoría de sus pares maníacos.</p> 
                        <p>Shocker tiene una personalidad notablemente racional entre los enemigos de Spider-Man. A menudo se ha demostrado que reconoce sus propias limitaciones en un universo de individuos superpoderosos. Una vez se vio afectado por la ansiedad crónica y la paranoia (en la serie Deadly Foes of Spider-Man) debido a sus temores de ser blanco de los antihéroes Scourge y Punisher (sorprendentemente, ha sobrevivido a encuentros con ambos). Mientras estuvo asociado con Trapster, menciona que se dedica a la psicoterapia.</p>
                        <p>En historias recientes ("Venomous" y "Senseless Violence"), Shocker ha revelado que está extremadamente frustrado con su lugar en la vida, ya que no quiere ser conocido como un saco de arena para superhéroes como Spider-Man. Sin éxito, intenta comprar el simbionte Venom en una subasta para ganar algo de respeto. Cuando se asoció temporalmente con Hydro-Man, reprueba la sugerencia de Morrie de que maten a Spider-Man, estando mucho más interesado en empresas más lucrativas y tratando de reconstruir una reputación profesional.</p>
                        
                    </div>
                </div>
                <div className='buttonNavContainer'>
                    <a href="/villanos"><button className='buttonNavigationSpiders'> <GiSpiderWeb/> Ir a Villanos</button></a>
                </div>
                <div className='navegationPerson'> 
                    <a href="/personaje/MrNegativo"><button className='buttonNavigation'><FaArrowLeft/> Mr. Negativo</button></a>
                    <br/>
                    <a href="/personaje/Black_Cat"><button className='buttonNavigation'>Black Cat <FaArrowRight/></button></a>
                </div>
            </div>
        </div>
        </div>
    </div>
  )
}
