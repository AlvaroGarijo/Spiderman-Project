import React from 'react'
import '../personajes/personajesStyle/personajes.css';
import { GiSpiderWeb } from 'react-icons/gi';
import { FaArrowLeft } from 'react-icons/fa';
import { FaArrowRight } from 'react-icons/fa';

export const Camaleon = ({
    id = 'Camaleon',
    personaje = 'Camaleon',
    realName = 'Dmitri Smerdyakov',
    bornArea = 'Rusia',
    first_appearance = 'Amazing Spider-Man #1',
    cause = 'Amigo de Kraven, con un exagerado talento para el disfraz',
    powers = 'Posee la capacidad de imitar cualquier forma humana o cuasi-humana. Imitador perfecto de voces, rostros o gestor peculiares humanos. Posee también bombas de humo, ácidos somníferos, un maletín que despide gas lacrimógeno y a veces metralletas.',
    adds = 'Sergei era a menudo abusivo con Smerdyakov, dando lugar a una combinación de admiración y resentimiento',
    creators = 'Stan Lee y Steve Ditko',
    alias = 'El Reptil, Dmitri'
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
                        <p>El Camaleón llamado (Dmitri Smerdyakov) fue un personaje Ruso, un supervillano que aparece en los cómics estadounidenses publicados por Marvel Comics. Comúnmente representado como un maestro del disfraz, medio hermano y enemigo de Kraven el Cazador, Dmitri fue el primer supervillano Ruso que se enfrenta al Hombre Araña al aparecer en el número inicial de The Amazing Spider-Man.</p>
                        <p>Numan Acar interpreta a Dmitri Smerdyakov en la película de Marvel Cinematic Universe, Spider-Man: Lejos de casa (2019) como asociado de Nick Fury. El personaje hará su debut en la próxima película homónina del villano llamado Kraven the Hunter (2023) en el Universo Spider-Man de Sony intepretado por Fred Hechinger y será el villano de Kraven el Cazador.</p>
                        <p>El Camaleón nació como el ciudadano Ruso llamado Dmitri Smerdyakov. En su juventud, fue un sirviente y hermanastro de Kraven el Cazador llamado Sergei Kravinoff. Aunque Dmitri y Sergei eran amigos, Sergei era a menudo abusivo con Smerdyakov, dando lugar a una combinación de admiración y resentimiento hacia Kravinoff. Finalmente Dmitri emigró a los Estados Unidos de América. Como ya había creado un talento por sí mismo durante su juventud, impresionando a su hermano mediante la personificación de amigos y vecinos, él asumió un disfraz aún más impresionante: el Camaleón. Durante su primer acto criminal conocido, él personificó a Spider-Man, aunque fue descubierto y detenido. Poco después, Sergei, ahora Kraven el Cazador, llegó a América. Ambos hombres se convirtieron en grandes enemigos de Spider-Man, formando parte de su galería de enemigos.</p>
                        <p>El Camaleón inspiró a Kraven el Cazador para comenzar a cazar a Spider-Man, invitando a Kraven a deshacerse del héroe. Con Kraven, el Camaleón luchó contra Iron Man, y luego se enfrentó a Hulk. En un momento, el Camaleón se disfrazó de Henry Pym, y robó su laboratorio por los documentos de lucha contra el Virus Nueve. Mientras entregaba los documentos y un Hulk encogido a HYDRA, él fue encontrado y derrotado por el verdadero Pym como Ant-Man. El Camaleón también se disfrazó del Torpedo y luchó contra Daredevil.</p>
                        <p>Cuando Kraven cometió suicidio, el Camaleón se obsesionó con hacer sufrir a Spider-Man al fallar en evitar que Kraven se matara. Él ingirió un suero que desaparecía los rasgos de su rostro de forma permanente y lo hacía maleable. Él intentó secuestrar al principal experto estadounidense en superconductores, pero su plan fue frustrado por Spider-Man. Luego secuestró a J. Jonah Jameson. También buscó ayuda en Maggia para convertirse en el nuevo señor del crimen en Nueva York, y formó una alianza con Hammerhead. Disfrazado de científico, el Camaleón eliminó temporalmente los poderes de Spider-Man. A continuación se alió con las Mujeres Fatales, con Escorpión y con Tarántula, para eliminar al Hombre Araña y a La Gata Negra, pero escapó cuando su plan falló.</p>
                        <p>El plan más ambicioso del Camaleón contra Spider-Man ocurrió cuando formó una alianza con Harry Osborn, el segundo Duende Verde. Antes de la muerte de Harry, él le contó que la identidad secreta de Spider-Man podía ser descubierta por medio de Peter Parker, para construir androides de los padres de Peter (el Camaleón admitió más tarde que revisó todo el plan para confirmar de una vez por todas que Peter era El Hombre Araña). El plan condujo a una crisis psicótica, tanto para El Hombre Araña como para el Camaleón, con Spider-Man renunciando brevemente a su identidad civil, mientras que el Camaleón fue enviado al Asilo Ravencroft. Sin embargo, cuando la Doctora Ashley Kafka lo metió a un sótano para intentar seguir tratándolo en la creencia de que estaba cerca de un gran descubrimiento mientras el tribunal se preparaba para llevarlo a juicio, el Camaleón escapó y trató de convencer a Spider-Man de que en realidad era un escritor alucinante que había sufrido una crisis nerviosa después de la muerte de su hija en un accidente automovilístico, pero Peter logró romper este engaño debido a su fuerza de voluntad.</p> 
                        <p>La confirmación del Camaleón, sobre la identidad secreta de Spider-Man lo llevó a atacar a Spider-Man a través de su familia y amigos, pero este esfuerzo con resultados bastante pobres cuando Mary Jane Watson lo derrotó con un bate de béisbol. En algún punto entre esta y sus siguientes apariciones, pareció que el Camaleón fue destruido por su sobrino, Alyosha Kravinoff (Alyosha más tarde le lanzaría a Spider-Man la máscara del Camaleón, refiriéndose a él como "ese débil Dmitri"), pero al parecer se recuperó, despertando en un hospital.</p>
                        <p>Después de engañar a Spider-Man y llevarlo al puente donde su primer amor llamada Gwen Stacy, murió, con el pretexto de haber secuestrado a su esposa, él le declaró su propia soledad y amor a Peter. Cuando Peter se echó a reír por la sorpresa, el Camaleón se tiró del puente. Reapareció poco más tarde en una institución mental, totalmente incapacitado, creyendo ser Sergei Kravinoff en lugar de Dmitri Smerdyakov. Él apareció más tarde en su identidad de Camaleón como parte de los Doce Siniestros, un equipo organizado por Norman Osborn como el Duende Verde.</p>
                        <p>Originalmente, Aunque Dmitri no tenía poderes, y simplemente utilizaba maquillaje y elaboraba disfraces para personificar a sus víctimas. Para hacer esto, él implementó un dispositivo en una hebilla de cinturón que emitía un gas le que le ayudaba a moldear sus características. Más tarde, el Camaleón obtuvo un micro-ordenador de Spencer Smythe para su hebilla de cinturón que podía ser programada con los rasgos faciales de cientos de personas. La hebilla de cinturón también contiene un receptor de vídeo que permite que el ordenador analice la apariencia de cualquier persona que enfrente al Camaleón para duplicar sus características utilizando pulsos eléctricos. El ordenador utiliza tecnología holográfica que le permite cambiar su apariencia con sólo un botón. Sus dispositivos electrónicos le permiten aparecer como dos personas diferentes para dos observadores independientes al mismo tiempo. El traje del Camaleón se compone de "material de memoria" que puede ser alterado por los impulsos eléctricos de su cinturón con el fin de asemejar la ropa de la persona a la que está suplantando.</p> 
                        <p>Más tarde, los poderes del Camaleón son hechos innatos: su epidermis y pigmentación de la piel han sido quirúrgicamente y mutagénicamente alteradas por un suero para poder tomar la apariencia de cualquier persona a voluntad. Él también lleva una tela hecha de material de memoria que responde a los impulsos nerviosos y que puede asemejarse a cualquier vestuario que él desee.</p>
                        <p>Cuando se reveló su amistad pasada con Kraven el Cazador, también se reveló que el Camaleón había tomado los mismos sueros que Kraven había tomado en los últimos años. Esto sugeriría que los dos personajes tenían una edad similar (más de 70 años). También sugeriría que la fuerza física y la resistencia del Camaleón podrían aumentar un poco, pero como la fuerza del Camaleón es mucho más baja que la de Kraven, sus aumentos pueden no alcanzar un nivel sobrehumano.</p>
                        <p>Aparte de sus ventajas físicas, el Cameleón es un maestro del disfraz, y un brillante actor de método e impresionista. También es un maestro en la creación de máscaras y maquillaje realistas. Es un artista de cambio rápido que puede asumir un nuevo disfraz en menos de un minuto, aunque ya no necesita usar tales habilidades. Él también habla varios idiomas con fluidez. Aunque el Camaleón no es un genio científico, durante su vida aumentada ha estado expuesto a una amplia gama de sofisticadas tecnologías experimentales, muchas de las cuales puede aplicar de manera efectiva en sus esquemas nefastos.</p> 
                        <p>En sus apariciones de 2010 en The Amazing Spider-Man, el escritor Fred Van Lente puso más énfasis en sus habilidades de disfraz que en sus poderes sobrehumanos. En este retrato, Cameleón secuestra a la gente y brutalmente los mata arrojándolos en un baño de ácido. Al escucharlos suplicar por sus vidas, él altera su tono para que suene exactamente igual y toma una impresión facial para convertirlo en una máscara. Este Camaleón más escalofriante también busca reparar la vida de sus "rostros", tratando de rectificar los problemas de sus vidas, mientras se presenta como parte de una visión heroica distorsionada de sí mismo.</p>  
                    </div>
                </div>
                <div className='buttonNavContainer'>
                    <a href="/villanos"><button className='buttonNavigationSpiders'> <GiSpiderWeb/> Ir a Villanos</button></a>
                </div>
                <div className='navegationPerson'> 
                    <a href="/personaje/Morbius"><button className='buttonNavigation'><FaArrowLeft/> Morbius</button></a>
                    <br/>
                    <a href="/personaje/Chacal"><button className='buttonNavigation'>Chacal <FaArrowRight/></button></a>
                </div>
            </div>
        </div>
        </div>
    </div>
  )
}
