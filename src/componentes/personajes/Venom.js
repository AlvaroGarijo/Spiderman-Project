import React from 'react'
import '../personajes/personajesStyle/personajes.css';
import { GiSpiderWeb } from 'react-icons/gi';
import { FaArrowLeft } from 'react-icons/fa';
import { FaArrowRight } from 'react-icons/fa';

export const Venom =({
    id = 'Venom',
    personaje = 'Venom',
    realName = 'Eddie Brock (entre otros)',
    bornArea = 'Extraterrestre',
    first_appearance = 'Como alien: Marvel Super Heroes: Secret Wars #8 (diciembre de 1984). Como simbionte: Secret Wars #8 (diciembre de 1984). Como Venom: The Amazing Spider-Man #299 (mayo de 1988).',
    cause = 'Anfitrión de diferentes huéspedes',
    powers = 'Copia los poderes de cualquier personaje, cambios de forma y camuflaje limitados, defensa autónoma del simbionte, indetectable al "sentido arácnido" de Spider-Man',
    adds = 'El primer anfitrión humano del simbionte Venom fue Spider-Man, quien finalmente descubrió su verdadera naturaleza nefasta y se separó de la criatura.',
    creators = 'Randy Schueller (idea original), David Michelinie, Mike Zeck (diseño del traje) y Todd McFarlane (aspecto de Venom)',
    alias = 'Spider-Man Negro, El traje negro, El alienígena'
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
                        <p>Venom (llamado Veneno en muchas de las traducciones al español) es un antihéroe que aparece en los cómics publicados por la editorial estadounidense Marvel Comics. El personaje es un extraterrestre sensible simbionte con una forma amorfa, semi-líquido, que sobrevive mediante la unión con un huésped, por lo general humano. Esta forma de vida dual recibe poderes mejorados y generalmente se refiere a sí misma como «Venom». El Simbionte se introdujo originalmente como un traje alienígena viviente en The Amazing Spider-Man # 252 (mayo de 1984), con una primera aparición completa como Venom en The Amazing Spider-Man # 300 (mayo de 1988).</p>
                        <p>El primer anfitrión humano del simbionte Venom fue Spider-Man, quien finalmente descubrió su verdadera naturaleza nefasta y se separó de la criatura en The Amazing Spider-Man # 258 (noviembre de 1984), con un breve reencuentro cinco meses después en Web of Spider-Man # 1. El simbionte se fusionó con otros anfitriones, sobre todo Eddie Brock, su segundo y más infame anfitrión, con quien se convirtió en Venom y uno de los archienemigos de Spider-Man, El personaje más tarde se convirtió en un antihéroe, trabajando tanto con superhéroes como contra ellos. Otros anfitriones notables del simbionte Venom incluyen al villano Mac Gargan, anteriormente conocido como Escorpión, y Flash Thompson, quien se convirtió en el superhéroe Agente Venom en 2011.</p>
                        <p>Venom ha sido adaptado a medios como el cómic, series animadas de TV, los videojuegos y el cine. Su origen e historia se ha modificado según las circunstancias y los gustos de distintos tipos de público, pero siempre permanece inalterable el hecho de que es realmente un simbionte, casi siempre de origen extraterrestre y que comparte con Spider-Man muchos de sus poderes y habilidades (adherirse a casi cualquier tipo superficie, gran fuerza y agilidad, poder extender partes de sí mismo para adherirse, etc.), e incluso su aspecto debido al vínculo que mantuvieron ambos en el pasado. Su apariencia es muy similar a la de Spider-Man, enfundado en un traje negro azulado con el dibujo de una araña blanca en el tronco. Las principales diferencias con él radican en el aspecto más musculoso de Venom, su naturaleza más agresiva y violenta, y su boca: de maxilares prominentes, a menudo babeante y poblada de afilados dientes de entre los que suele sobresalir una larga lengua. Se le considera la parte retorcida del Hombre Araña. En un principio se presentó al simbionte como una criatura solitaria, "muda" y con ansias por una persona a la que adherirse y de esta manera sobrevivir, lo que ha cambiado recientemente, presentándose esencialmente como un ser con voluntad propia, opresivo y con la característica de conversar por sí mismo. En realidad no posee un nombre definido o propio, Venom solo es un seudónimo con el que se le conoce en la Tierra tras su llegada. Asimismo (y dependiendo de la situación en la que se encuentre envuelto), es considerado mayoritariamente un supervillano (sobre todo por sus duelos contra Spider-Man) aunque también un anti-héroe (debido a su rivalidad con Carnage). En la película que lleva su nombre fue retratado como anti-héroe, ya que sus métodos de lucha demasiado distaban de los códigos un héroe normal, chocando constantemente con las actitudes morales de Eddie Brock, pero tomando decididamente la posición de defender la Tierra de la posible llegada de seres de su misma especie, luchando principalmente contra su semejante Riot.</p>
                        <p>Originalmente David Michelinie ideó a Venom como un personaje femenino pero cambió su sexo a petición del editor Jim Salicrup:</p>
                        <p>Venom fue un personaje que comencé a presentar en Web of Spider-Man, y supuestamente no iba a ser el, sino ella. Cogí el traje alienígena que Spiderman se había traído de las Secret Wars, el cual había utilizado Tom DeFalco durante su etapa. El traje había estado en el limbo desde que había sido rechazado por Spiderman. Yo estaba intrigado con la idea de que esa cosa no activase el sentido arácnido de Spiderman, el cual era muy importante para Spiderman ya que depende por completo de él. Con estas premisas comencé a contar la historia de Venom en dos números aislados de Web of Spider-Man, el primero de ellos el 18 donde Peter Parker se encontraba esperando en el metro, una mano salía de entre la gente y le empujaba hacia el tren que llegaba. Con suerte consigue saltar, pero se queda descolocado. Alguien ha sido capaz de atacarle y su sentido arácnido no ha reaccionado.</p> 
                        <p>Introduje otra escena en Web of Spider-Man 24 donde Peter está pegado en una de las paredes de un edificio. Alguien de repente sale de una ventana y le pega un tirón del tobillo y le empuja al vacío. Peter comienza a asustarse porque alguien está consiguiendo atravesar sus defensas.</p>
                        <p>Originalmente quería que aquel personaje oculto fuese una mujer. Su historia era la siguiente: Ella estaba embarazada, a punto de dar a luz, su marido sale a la carretera para tratar de parar un taxi para intentar llevarla al hospital. El taxista que se encuentra mirando a Spiderman peleando con alguien - podría ser perfectamente el Monolito Viviente de mi novela gráfica -, no se da cuenta y atropella al marido matándolo. Ella pierde al niño por el shock y su estado mental queda seriamente dañado aunque tiene muy claro que el culpable de la muerte de su marido es Spiderman. El traje alienígena, el cual había sido rechazado por Peter, se siente atraído por la mujer por el intenso odio que siente hacia Spiderman y se une a ella para tratar de matar a Peter.</p>
                        <p>Cuando me cambiaron de Web of Spider-Man a Amazing Spider-Man, Jim Salicrup me contó que quería hacer algo especial con el número 300 y me sugirió que introdujese un nuevo personaje. Le conté mi idea del simbionte y la chica, a pesar de que le gustaba no estaba seguro de que los lectores pudiera ver en una chica una amenaza física para Spiderman, ni siquiera aunque estuviera aliada con el simbionte. Fue entonces cuando cambie a la chica por Eddie Brock.</p> 
                        <h3>Principales huéspedes</h3>
                            <ul>
                                <li>Peter Parker (Spider-Man)</li>
                                <li>Eddie Brock</li>
                                <li>Mac Gargan</li>
                                <li>Flash Thompson</li>
                                <li>Lee Price</li>
                                <li>Tel-Kar</li>
                                <li>Malekith</li>
                            </ul>
                        <h3>Otros huéspedes</h3>
                            <ul>
                                <li>Ben Reilly (Araña Escarlata)</li>
                                <li>Anne Weying</li>
                                <li>Patricia Robertson</li>
                                <li>Angelo Fortunato</li>
                                <li>Carol Danvers (Ms. Marvel)</li>
                                <li>Thunder Bolt Ross (Hulk Rojo)</li>
                                <li>Otto Octavius (Superior Spider-Man)</li>
                                <li>Groot, Rocket Racoon y Drax</li>
                                <li>Mercurio el hombre 4-D</li>
                                <li>Mysterio</li>
                            </ul>
                        <p>A pesar de que requiere un anfitrión vivo para sobrevivir, el simbionte Venom ha demostrado ser un experto en defenderse a sí mismo independiente de un anfitrión. El simbionte es capaz de cambiar de forma las habilidades, incluida la capacidad de formar picos o expandir su tamaño, así como imitar la aparición de otros humanoides después de que haya obtenido un huésped. Además, el organismo puede utilizar sus habilidades de cambio de forma para ocultarse alterando su coloración o volviéndose completamente invisible. También contiene una pequeña "apertura dimensional", lo que permite a sus anfitriones transportar artículos sin agregar masa al traje. El simbionte también muestra habilidades telepáticas, principalmente cuando necesita comunicarse con su anfitrión.</p>
                        <p>Debido a su contacto con Spider-Man, el simbionte otorga a todos sus anfitriones posteriores los poderes de ese héroe y no puede ser detectado por su sentido de araña. Como el estilo de lucha de Spider-Man depende en parte de su sentido de la araña, su efectividad se vio obstaculizada cuando se enfrentó a Eddie Brock. Reteniendo su memoria desde el momento en que estuvo vinculado a Spider-Man, Venom también es capaz de producir redes similares a la propia variedad de Spider-Man creada a partir de sí misma.</p>
                        <p>El simbionte mejora en gran medida la fuerza física de aquellos con quienes se une. Sus anfitriones experimentan un tamaño y una musculatura mucho más grandes. El simbionte muestra dientes no humanos, que son muy afilados y comúnmente sobresalen una lengua larga de su boca. Venom se describe como físicamente mucho más grande que Spider-Man, además de tener más fuerza bruta.</p> 
                        <p>Venom exhibe algunas inmunidades a los poderes sobrenaturales de otros como la Mirada de Penitencia del Ghost Rider o el extra-sensor sentido arácnido de Spider-Man.</p>
                        <p>Algunas encarnaciones del simbionte Venom lo han mostrado capaz de replicarse a sí mismo. Esta habilidad se muestra en la miniserie 2005–2006 Spider-Man: Reign, cuando Venom recrea su propio simbionte para combatir su soledad.</p>
                        <p>El simbionte Venom es vulnerable al fuego y las ondas sónicas, causando un gran dolor y agotamiento si se mantiene suficientemente expuesto. Puede detectar y rastrear a todos sus descendientes Simbiontes, excepto a Carnage, que aprendió a bloquear esta habilidad poco después de unirse con Cletus Kasady y confrontar a Venom / Eddie Brock por primera vez.</p>
                        <p>Se muestra que el simbionte Venom forma alas gigantes de dragón en forma de red cuando estaba en contacto con Knull.</p>
                    </div>
                </div>
                <div className='buttonNavContainer d-block d-sm-none'>
                    <a href="/villanos"><button className='buttonNavigationSpiders'> <GiSpiderWeb/> Ir a Villanos</button></a>
                </div>
                <div className='navegationPerson'> 
                    <a href="/personaje/Dr_Octopus"><button className='buttonNavigation'><FaArrowLeft/> Dr. Octopus</button></a>
                    <br/>
                    <a href="/personaje/Carnage"><button className='buttonNavigation'>Carnage <FaArrowRight/></button></a>
                </div>
            </div>
        </div>
        </div>
    </div>
  )
}
