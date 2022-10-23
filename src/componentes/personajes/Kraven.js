import React from 'react'
import '../personajes/personajesStyle/personajes.css';
import { GiSpiderWeb } from 'react-icons/gi';
import { FaArrowLeft } from 'react-icons/fa';
import { FaArrowRight } from 'react-icons/fa';

export const Kraven = ({
    id = 'Kraven',
    personaje = 'Kraven "El Cazador"',
    realName = 'Sergei Kravinov',
    bornArea = 'Rusia',
    first_appearance = 'The Amazing Spider-Man #15 (agosto 1964)',
    cause = 'Kraven es un gran cazador de piezas mayores que busca derrotar a Spider-Man para demostrar que es el mejor cazador del mundo. ',
    powers = 'Fuerza y velocidad de las bestias salvajes, aumentadas por ingestión de pociones místicas',
    adds = ' Kraven es un atleta de nivel olímpico y un talentoso táctico, cazador y combatiente cuerpo a cuerpo.',
    creators = 'Stan Lee y Steve Ditko',
    alias = 'Kraven, Sergei'
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
                        <p>Kraven el Cazador (Sergei Krávinov) es un supervillano Ruso que aparece en los cómics estadounidenses publicados por Marvel Comics. Debutando en el número 15 de The Amazing Spider-Man (agosto de 1964) como adversario del superhéroe llamado Spider-Man, desde entonces ha resistido como uno de los enemigos más formidables del lanzaredes y es parte del colectivo de adversarios que conforman la galería de villanos de Spider-Man. Sergei también ha entrado en conflicto con otros héroes, como La Pantera Negra y Tigra. Sergei es el hermanastro y enemigo del Camaleón y uno de los miembros fundadores de Los Seis Siniestros.</p>
                        <p>Sergei es típicamente retratado como un reconocido cazador de caza mayor cuyo objetivo en la vida es superar a Spider-Man para demostrar que es el mejor cazador del mundo. Aunque a menudo confía demasiado en sus propias habilidades, de las que se jacta, posee un gran sentido del honor y trata a sus adversarios como iguales hasta que se demuestre lo contrario. Debido a esto, Kraven también ha sido representado como un antihéroe y aliado de la Chica Ardilla y, a veces, del propio Spider-Man, a quien llegó a respetar profundamente por las numerosas veces que derrotó a Kraven.</p>
                        <p>El personaje ha aparecido en numerosas adaptaciones de Spider-Man, incluyendo series animadas y videojuegos. Él es ampliamente considerado como uno de los enemigos más formidables. El personaje ganó considerable atención luego de la historia La última cacería de Kraven. En 2009, Kraven se clasificó como IGN 53 a más grande villano de cómic de todos los tiempos.</p> 
                        <p>El verdadero nombre de Kraven es Sergei Kravinoff. Él es un inmigrante ruso, el hijo de un aristócrata que huyó a los Estados Unidos con su familia en 1917 después de que la nobleza rusa fue diezmada por la Revolución de febrero y el posterior colapso del reinado del zar Nicolás II.</p>
                        <p>Kraven es un gran cazador de piezas mayores que busca derrotar a Spider-Man para demostrar que es el mejor cazador del mundo. A diferencia de otros cazadores, él generalmente desdeña el uso de armas de fuego o arco y flechas, y prefiere derribar grandes animales peligrosos con sus propias manos. También vive de acuerdo con un código de honor, eligiendo cazar su juego de manera justa. Él consume un suero místico para darse mayor fuerza y ralentizar dramáticamente el proceso de envejecimiento. Kraven fue entrenado como cazador en gran parte por un hombre misterioso llamado Gregor, un mercenario que luchó contra Ka-Zar. En un momento, Kraven era amante de la sacerdotisa vudú Calipso.</p>
                        <p>Él es contactado por su medio hermano Camaleón para derrotar a Spider-Man. Lleva a Spider-Man a Central Park con la ayuda de Camaleón, que se disfraza de Kraven para usarlo como señuelo mientras el verdadero Kraven embosca al héroe. Sin embargo, a pesar de que Kraven ha debilitado a Spider-Man con un dardo venenoso, Spider-Man prevalece al final. Spider-Man demuestra ser una cantera frustrante porque Kraven continuamente subestima el ingenio del superhéroe.</p> 
                        <p>Kraven se convierte en miembro fundador de los Seis Siniestros cuando acepta la oferta del Doctor Octopus de formar un equipo para luchar contra Spider-Man, donde capturan a la Tía May y Betty Brant. Ataca a Spider-Man en Central Park con tres tigres. Spider-Man lucha fácilmente contra los atacantes y asegura la siguiente pista de dónde se encuentran la tía May y Betty Brant. Después de que la tía May y Betty Brant son rescatadas, Kraven el Cazador y el resto de los Seis Siniestros son arrestados por la policía.</p>
                        <p>Mientras estaba en la Tierra Salvaje, Kraven el Cazador encontró a Gog en una nave espacial con la que tropezó. Al darse cuenta de cuán útil puede ser Gog, Kraven el Cazador decide usarlo en un plan para conquistar la Tierra Salvaje. Después de secuestrar a la visita de Gwen Stacy de un campamento en la Tierra Salvaje, Kraven y Gog luchan contra los héroes Ka-Zar y Spider-Man. Mientras Ka-Zar trata con Kraven, Spider-Man vence a Gog atrayéndolo hacia un parche de arenas movedizas del que se hunde hasta el fondo.</p>
                        <p>Decidido a terminar con su vida a medida que envejece, frustrado por su mala salud y fracaso continuo para vencer a Spider-Man, Kraven establece una última búsqueda de Spider-Man. Después de capturar a Spider-Man, le dispara con una droga inductora de coma y lo entierra vivo en su propiedad. Para completar su victoria, intenta convertirse en el superior claro de Spider-Man al hacerse pasar por una brutal campaña de vigilantes y capturar a Alimaña, el único enemigo que Spider-Man nunca pudo vencer por su cuenta (la última batalla de Spider-Man con Alimaña requirió la asistencia del Capitán América)</p> 
                        <p>Kraven es resucitado de la muerte por Sasha Kravinoff y la familia Kraven con un ritual que usa la sangre de Spider-Man. Se muestra que ahora es explosivamente psicópata y frío con su familia, golpeando a su hijo e hija y expresando poca atención hacia su esposa. Después de ser apuñalado por su hija Ana, Sergei se recupera al afirmar que Sasha lo restauró con sangre corrompida, a la que llama "no vida". Se quita la máscara del cadáver de Spider-Man colgado en la repisa de la chimenea y descubren que Kaine tiene el traje de Spider-Man. Spider-Man, con su traje negro, se enfrenta a Kraven y al resto de la Familia Kravinoff. Spider-Man está tentado de matar a Kraven, pero se niega a hacerlo cuando Julia Carpenter (que ha heredado los poderes de Madame Web después de su muerte) que cometer asesinato no en su código moral. Tras su derrota por Spider-Man, Kraven y su familia escapan a la Tierra Salvaje. Mientras estuvo allí, Kraven mata brutalmente a Sasha (quien se quejó de que Kraven tendría que cazarlos para probar su lugar en la familia Kravinoff) y eutanasia a Vladimir. Alyosha huye con disgusto después. Kraven y Ana hablan sobre la reconstrucción de la familia Kravinoff, lo que lleva a Ana a correr a buscar a Alyosha para demostrar que es digna de Kraven y reconstruir la familia Kravinoff.</p>
                        <h3>El legado de Kraven</h3>
                        <ul>
                            <li>Vladimir Kravinoff tomó el nombre de "Cazador Siniestro" y decidió perseguir a Spider-Man y varios de sus enemigos. Durante la pelea con Spider-Man, es asesinado por un loco clon de Spider-Man llamado Kaine. Sasha Kravinoff luego sacrifica a Mattie Franklin como parte de un ritual que revive a Vladimir en forma de león humanoide durante la historia de Grim Hunt. Más tarde, Sasha le dijo a Kraven que la aparición de Vladimir fue el resultado de un ritual de reactivación de pruebas para ver si podía devolverle la vida. Vladimir fue sacrificado por Kraven (lo que hace debido al "respeto por los muertos") en la Tierra Salvaje al concluir el arco de The Grim Hunt.</li>
                            <li>Algún tiempo después de la muerte de Vladimir, su medio hermano y mutante, Alyosha Kravinoff, se convierte en el segundo Kraven. Ana Kravinoff más tarde lo mató para probarse ante su padre después de que Kraven sacrificara a Vladimir.</li>
                            <li>Hubo un tercer hijo llamado Nedrocci "Ned" Tannengarden que intenta matar a Alyosha, pero fue asesinado por el Camaleón (que durante ese tiempo se creyó el original Kraven el Cazador).</li>
                            <li>La esposa de Kraven, Sasha Kravinoff, y su hija Ana, fueron parte de un Guantelete en la vida de Spider-Man causando caos y debilitando al cruzado web antes de los eventos que llevaron a resucitar a Kraven de la tumba.</li>
                        </ul>
                        <p>Al ingerir regularmente la poción hecha de varias hierbas de la jungla sin nombre, Kraven se concede una serie de habilidades que incluyen suficiente fuerza sobrehumana, velocidad, resistencia, agilidad y reflejos para convertirlo en una amenaza física para Spider-Man, aunque estos poderes no son tan desarrollados como aquellos poseídos por Spider-Man. El cuerpo de Kraven también es más duradero y más resistente a ciertas formas de lesiones que el cuerpo de un humano normal. Puede soportar grandes fuerzas de impacto, como caer desde una gran altura o ser golpeado repetidamente por un oponente sobrehumano fuerte. Esto, que podría fácilmente lesionar de gravedad o matar a un humano normal, no daña apenas a Kraven. Los efectos de la poción han alterado drásticamente el proceso de envejecimiento de Kraven hasta el punto de que ha envejecido poco o nada en varias décadas,a pesar de tener más de 70 años de edad,</p>
                        <p>La poción mejora la vista, el oído y el olfato de Kraven a niveles sobrehumanos, lo que aumenta sus ya impresionantes habilidades de rastreo. Él puede ver más lejos, y con mucha mayor claridad, que un humano normal. Su audición se ha mejorado de manera similar, lo que le permite detectar sonidos que un humano ordinario no puede o sonidos que un humano normal podría detectar, pero a distancias mucho mayores. Kraven puede usar su sentido del olfato para rastrear a un objetivo por esencia, al igual que algunos animales, incluso si el olor ha sido erosionado por factores naturales.</p>
                        <p>Incluso sin sus poderes sobrehumanos, Kraven es un atleta de nivel olímpico y un talentoso táctico, cazador y combatiente cuerpo a cuerpo. También posee un gran conocimiento de los puntos de presión, tanto en la anatomía de los humanos como en muchos animales. Puede atacar estos grupos de nervios con precisión milimétrica, lo que le permite incapacitar a oponentes o animales más poderosos. Está familiarizado con muchos venenos y tranquilizantes exóticos, que a menudo usa durante sus cacerías.</p>
                        <p>Debido a un defecto en la ceremonia que lo resucitó, Kraven recibió "la falta de vida... la maldición eterna", como descubrió cuando su hija lo apuñaló en el corazón. Según Kraven, ahora solo puede morir por mano de Spider-Man. Sin embargo, esta maldición aparentemente se rompió cuando Kaine mató temporalmente a Kraven al detener su corazón y luego reiniciarlo con el mismo movimiento.</p> 
                    </div>
                </div>
                <div className='buttonNavContainer d-block d-sm-none'>
                    <a href="/villanos"><button className='buttonNavigationSpiders'> <GiSpiderWeb/> Ir a Villanos</button></a>
                </div>
                <div className='navegationPerson'> 
                    <a href="/personaje/Kingpin"><button className='buttonNavigation'><FaArrowLeft/> Kingpin</button></a>
                    <br/>
                    <a href="/personaje/MrNegativo"><button className='buttonNavigation'>Mr. Negativo <FaArrowRight/></button></a>
                </div>
            </div>
        </div>
        </div>
    </div>
  )
}
