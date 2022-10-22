import React from 'react';
import '../personajes/personajesStyle/personajes.css';
import { GiSpiderWeb } from 'react-icons/gi';
import { FaArrowLeft } from 'react-icons/fa';
import { FaArrowRight } from 'react-icons/fa';

export const MadameWeb = ({
    id = 'MadameWeb',
    realName = 'Cassandra Webb',
    personaje = 'Madame Web',
    bornArea = 'Salem, Oregón',
    cause = 'Mutante precognitiva',
    powers = 'Poder intelecto, Telepatía, Presencia, Proyección Astral',
    first_apperance= 'The Amazing Spider-Man #210 (noviembre de 1980)',
    adds = 'Era una mujer paralítica, ciega, telepática, clarividente, y mutante precognitiva, fue afectada por miastenia gravis, una enfermedad que afecta a los músculos y al sistema inmunitario, por lo que fue conectada a un sistema de apoyo vital que la mantenía con vida, diseñado por su esposo Jonathan Webb, el cual incluía una serie de tubos con forma de telaraña.',
    creators= 'Denny O`Neil, John Romita, Jr.',
    alias = 'Abuela Vendada, Joven Vendada, Chica Vendada'
}) => {
    const imagePath= `/assets/personajes/${id}.png`;
    return (
        <div className='wrappPerson'>
        <div className='personWrap1'>
            <div className='imgWrap'>
                <img src={imagePath} className='card-imgIndividual' alt='Madame Web'/>
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
                            <p>Madame Web (Cassandra Webb) es una personaje ficticia que aparece en los cómics estadounidenses publicados por Marvel Comics. Madame Web apareció por primera vez en The Amazing Spider-Man # 210, publicado en noviembre de 1980 y fue creado por el escritor Denny O'Neil y el artista John Romita, Jr. Generalmente aparece como un personaje secundario en la serie cómic Spider-Man. Es representada como una anciana con Miastenia gravis y, por lo tanto, esta conectada a un sistema de soporte vital que parecía una telaraña. Debido a su edad y condición médica, Cassandra nunca combatió activamente a ningún villano.</p>
                            <p>Una mutante precognitiva y clarividente que apareció por primera vez para ayudar a Spider-Man a encontrar una víctima de secuestro. Madame Web no era una de las mutantes que perdieron su poder durante la historia de Decimation. Ella fue atacada por Sarah y Ana Kravinoff, quien la mató, pero no antes de que pudiera pasar sus poderes de precognición y su ceguera a Julia Carpenter, quien se convirtió en la próxima Madame Web. Webb es la abuela de la cuarta Spider-Woman llamada Charlotte Witter y Dakota Johnson intepretará a la abuela vendada llamada Madame Web por primera vez en una película para el (2023) llamada Madame Web, ambientando en el Universo Spider-Man de Sony.</p>
                            <p>Ella adivinó la identidad secreta de Spiderman, y cuando este se le acercó para ayudar a encontrar al editor secuestrado K.J Clayton (en realidad, un imitador) del diario Daily Globe, Madame Web utilizó sus poderes para ayudar a localizar y rescatar al verdadero Clayton y a su imitador, pero le revelaron que había adivinado su identidad secreta. En el arco de la historia "¡Nada puede detener a Juggernaut!", ella se pone en contacto con Spider-Man por asistencia cuando del Negro Tom Cassidy despacha a Juggernaut para capturar a spiderman con el deseo de que sus poderes psíquicos les ayuden a derrotar a los X-Men, sólo para que Madame Web casi muriera después de Juggernaut la separara de su sistema de apoyo vital. Esto desencadenó una feroz lucha entre Spider-Man y Juggernaut, el que estuvo atrapado posteriormente en la fundación de cemento húmedo de una obra de construcción.3​Sin embargo, al parecer, a raíz del choque de su sistema, Madame Web olvidó la identidad secreta de Spider-Man</p>
                            <p>Web es la abuela de la cuarta Spider-Woman, Charlotte Witter. Web participó en un ritual arcano conocido como la "Reunión de los Cinco", ganando la inmortalidad, fue rejuvenecida hasta llegar a la juventud y se curó de su miastenia gravis. En un momento en el tiempo Webb sirvió como mentor para la tercera Spider-Woman, Mattie Franklin, aunque Franklin finalmente se retirara</p>
                            <p>Madame Web ha resurgido y sus poderes psíquicos están intactos después de Decimation. Sin embargo, desde la House of M (en la que parecía joven) parece haber recuperado su aspecto envejecido, a pesar de que su enfermedad miastenia grave siga curada. Este hecho podría tomarse como un efecto de la masacre.</p> 
                            <p>Madame Web vuelve nuevamente en una función de copia de seguridad en The Amazing Spider-Man # 600. Ella mira hacia el futuro, mostrando lo que aparentemente parece rápido en el futuro de Spider-Man, solo para ver a alguien "desentrañando la red del destino", y exclamando temerosamente "Están cazando arañas". Después de eso, es atacada por Ana Kravinoff y su madre, Sasha. La pareja la incapacita y luego dice "ahora tenemos nuestros ojos". Ella se ve todavía capturada por Ana y su madre, mientras inspeccionan su nueva cantera, Mattie Franklin. Mientras todavía está atada en una silla, se disculpa con una entonces inconsciente Mattie, quien luego es asesinada por Sasha Kravinoff.</p>
                            <p>Al concluir " Grim Hunt", Madame Web es degollada por Sasha Kravinoff en represalia, ya que Sasha creía que Madame Web la estaba engañando y sabía el resultado de los acontecimientos que ocurrieron. Antes de morir, revela que ya no está ciega y le pasa sus poderes psíquicos a Julia Carpenter.</p>
                            <p>Durante la historia de Dead No More: The Clone Conspiracy, Madame Web fue clonada por el Chacal. Le avisó a Prowler acerca de una visión de robo de un banco que tuvo y logró detener el robo del banco. Cuando Prowler va a obtener más información sobre el hacker de Madame Web, ella le dice que ve edificios llenos de agonía que no pueden escapar. Cuando los villanos de New U Technologies pierden el control, Chacal envía a Electro a buscar a Prowler para que vuelva a estar bajo control. Electro va a la habitación de Madame Web y tortura al telépata para que le dé la ubicación de su Prowler con la intención de matarlo. Julia Carpenter siente que Madame Web está viva por los comentarios telepáticos que resultan del ataque de Electro.</p>
                            <p>Julia se infiltra en New U Technologies y aprovecha la oportunidad para investigar las instalaciones casi abandonadas. Durante este tiempo, Julia es conducida a Madame Web, que se niega a tomar su medicación para ayudarla a curarse del ataque de Electro. Madame Web ha visto el futuro y se niega a formar parte de él. Antes de morir por la degeneración de clones, Madame Web le dice a Julia que salve a Prowler.</p>                               
                            <h3>Frases Célebres:</h3>
                            <ul>
                                <li><strong>Debes creer en mi [Madame Web] y debes tener la fe de una pequeña. </strong>-- Capítulo 3x02 - Pide un deseo, Amazing spiderman serie (1994, primera aparición en la serie)</li>
                                <li><strong>No es el cómo debes vencer a tus enemigos, sino el por qué.</strong> -- Capítulo 3x08 - El Asesino Total, Amazing spiderman serie (1994)</li>
                                <li><strong>El mal solo puede combatirse con el corazón humano.</strong> -- Capítulo 3x09 - Lapida, Amazing spiderman serie (1994)</li>
                                <li><strong>Debes tener a tus amigos cerca, y a tus enemigos aún más cerca.</strong> -- Capítulo 3x10 - El regreso de Venom (Venom Returns), Amazing spiderman serie (1994)</li>
                            </ul>
                        </p>
                    </div>
                <div className='buttonNavContainer'>
                    <a href="/villanos"><button className='buttonNavigationSpiders'> <GiSpiderWeb/> Ir a Villanos</button></a>
                </div>
                <div className='navegationPerson'> 
                    <a href="/personaje/Ezekiel_Sims"><button className='buttonNavigation'><FaArrowLeft/> Ezekiel Sims</button></a>
                    <br/>
                    <a href="/personaje/ScarletSpider"><button className='buttonNavigation'>Scarlet Spider<FaArrowRight/></button></a>
                </div>
        </div>
        </div>
        </div>
    </div>
  )
}
