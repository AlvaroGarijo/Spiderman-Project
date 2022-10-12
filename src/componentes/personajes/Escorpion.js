import React from 'react'
import '../personajes/personajesStyle/personajes.css';
import { GiSpiderWeb } from 'react-icons/gi';
import { FaArrowLeft } from 'react-icons/fa';
import { FaArrowRight } from 'react-icons/fa';

export const Escorpion = ({
    id = 'Escorpion',
    personaje = 'Escorpion',
    realName = 'McDonald "Mac" Gargan',
    bornArea = 'Estados Unidos',
    first_appearance = 'The Amazing Spider-Man #20',
    cause = 'Sujeto de un proceso apenas probado que le dota de las características útiles de un animal en particular con la ayuda del Dr. Farley Stillwell. El Dr. Stillwell también lo equipa con una cola mecánica tipo club. En este caso, un escorpión es la base con el propósito de crear un poderoso agente capaz de derrotar a Spider-Man ya que el escorpión es un depredador natural de la araña. ',
    powers = 'Sin el simbionte tiene una fuerza sobrehumana con la que es capaz de levantar hasta 10 toneladas, y puede escalar una pared solo con la fuerza de sus brazos. Además, tiene una armadura verde con una cola de escorpión mecánica en la espalda, la que ha mejorado con armas de ácido, plasma, etcétera, que utiliza como un arma mortal contra sus enemigos. Con el simbionte sus poderes se ven aumentados consiguiendo también lanzar telarañas como el propio Venom y su fuerza se ve aumentada también.',
    adds = 'Antes de asumir la identidad del Escorpión, Mac Gargan era un investigador privado habilidoso, aunque algo codicioso e inescrupuloso, que admitió que pasaría por cualquier cosa "mientras la paga sea buena".',
    creators = 'Stan Lee y Steve Ditko',
    alias = 'Escorpión, Escorpión-Venom, Spider-Man, Spider-Man Siniestro, El Alacrán'
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
                        <p>Mac" Gargan Alias (Escorpíon) fue un personaje ficticio que aparece en los cómics estadounidenses publicados por Marvel Comics. Durante su carrera como villano de Spider-Man, el personaje apareció originalmente como la encarnación más conocida de Escorpión, luego se vinculó con el simbionte para convertirse en la segunda encarnación de Venom, y finalmente toma un suero para controlar el simbionte, para posar como la tercera encarnación de Spider-Man durante la historia de "Dark Reign".</p>
                        <p>El personaje Mac Gargan ha sido representado en numerosas caricaturas y videojuegos de Spider-Man, e hizo su debut cinematográfico en Spider-Man: Homecoming (2017), interpretado por el actor Michael Mando.</p>
                        <p>Mac Gargan era un investigador privado inicialmente contratado por J. Jonah Jameson para descubrir cómo Peter Parker puede obtener increíbles fotos de Spider-Man. Los esfuerzos de Gargan desencadenaron el sentido arácnido de Peter y el adolescente evade fácilmente al detective. Jameson decide contratar a Gargan como sujeto de un proceso apenas probado que le dota de las características útiles de un animal en particular con la ayuda del Dr. Farley Stillwell. El Dr. Stillwell también lo equipa con una cola mecánica tipo club. En este caso, un escorpión es la base con el propósito de crear un poderoso agente capaz de derrotar a Spider-Man ya que el escorpión es un depredador natural de la araña. El Escorpión demuestra ser más que un rival para Spider-Man, derrotándolo dos veces, pero el tratamiento mutagénico afecta seriamente la mente de Gargan, llevándolo a la locura cuando los instintos depredadores del escorpión toman el control. Inmediatamente se vuelve contra su benefactor, pero Spider-Man interviene, y finalmente derrota al Escorpión en su tercera batalla.</p> 
                        <p>El Escorpión se convierte en un criminal profesional y vuelve a caer en una venganza contra Spider-Man y Jameson, solo para ser derrotado nuevamente.</p>
                        <p>Luego es contratado por un anillo de espías para seguir a la agente de S.H.I.E.L.D., Sharon Carter, pero es derrotado por el Capitán América. Escorpión es adquirido por el Sr. Kline, quien crea un duplicado de Androide de él. El verdadero Escorpión y el Sr. Hyde lanzan una campaña de terror contra los agentes de S.H.I.E.L.D., pero son derrotados por el Capitán América y Falcon.</p>
                        <p>Después de ser liberado de la prisión por su buen comportamiento, el Escorpión persigue a Spider-Man y lo intenta ahogar en una tina de cemento, con la esperanza de utilizar su reputación para convertirse en un jefe del hampa. Escorpión descubre que Spider-Man sobrevivió al encuentro, y el Chacal le da la ubicación de Spider-Man. El Escorpión llega a la habitación de un hospital con Peter Parker y su Tía May. Al no reconocer a Spider-Man en su identidad civil, amenaza a May y exige saber dónde está Spider-Man. Después de que ella se desmaya, Escorpión arrasa con el hospital. Spider-Man furioso vence al Escorpión y lo hace disculparse con May.</p> 
                        <p>El Escorpión lucha contra Ms. Marvel después de un fallido intento de venganza contra Jameson; el Escorpión se vuelve más psicótico de lo habitual después de esto, lo que lo convierte en ácido. En las alcantarillas, su cordura se está deteriorando, Escorpión llega a creer que su traje no se puede quitar. Después de un encuentro rápido, Spider-Man demuestra que su creencia de ser un monstruo solo está en su mente. Gargan forma una estafa de extorsión para sabotear el Daily Bugle, pero se ve frustrado por Spider-Man y el Capitán América. Es liberado de la prisión por agentes de Egghead, que quiere que se una al tercer Maestros del Mal junto a Torbellino y Moonstone. El equipo lucha contra los Vengadores, pero son derrotados.</p>
                        <p>Escorpión secuestra a la novia de Jameson, Marla Madison, en el día de su boda, pero es rescatada por Spider-Man. Jonah confiesa públicamente su papel en la creación del Escorpión cuando el Hobgoblin intenta usar ese secreto para chantajearlo. A pesar de sus encuentros con otros enemigos, Escorpión siempre ha tenido un odio especial por Spider-Man y Jameson, que se extiende hasta cuando intenta convertirse en un mercenario de Justin Hammer, que ha modificado la armadura de combate del Escorpión. Arruina sus perspectivas en su primera misión, capturar a un héroe de guerra, cuando no puede resistirse a crear una situación de rehenes, simplemente para traer a Jameson a él por venganza. Como reacción, Hammer envía Blacklash y Rhino para someter a Gargan y confiscar el equipo de mejora de la cola para derogar su contrato.</p>
                        <p>Escorpión trabaja temporalmente para Roxxon y los ayuda en su "terapia de rehabilitación" falsa. Roxxon actualiza los poderes y el disfraz del Escorpión y promete que volverá con sus enemigos. Spider-Man convence a Escorpión de que solo lo están usando. Escorpión luego enciende Roxxon y luego es derrotado por Spider-Man. Gargan reaparece luego de la Guerra Secreta que organizó Nick Fury contra Latveria. Él es uno de los supervillanos que recibió la tecnología mejorada de la dictadora Latveriana, Lucia von Bardas y enviado para atacar a los héroes involucrados en la Guerra Secreta de Fury. Las tecnologías de los villanos son secuestradas por von Bardas, proporcionándole poder, potencialmente a costa de la vida de los villanos, pero los héroes reunidos derrotan a von Bardas y capturan a Escorpión y los demás.</p> 
                    </div>
                </div>
    
                <div className='navegationPerson'> 
                    <a href="/personaje/Buitre"><button className='buttonNavigation'><FaArrowLeft/> Buitre</button></a>
                    <br/>
                    <a href="/personaje/Rhino"><button className='buttonNavigation'>Rhino <FaArrowRight/></button></a>
                </div>
            </div>
        </div>
        </div>
    </div>
  )
}
