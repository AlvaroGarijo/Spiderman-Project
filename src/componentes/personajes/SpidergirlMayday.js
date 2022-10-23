import React from 'react';
import '../personajes/personajesStyle/personajes.css';
import { GiSpiderWeb } from 'react-icons/gi';
import { FaArrowLeft } from 'react-icons/fa';
import { FaArrowRight } from 'react-icons/fa';

export const SpidergirlMayday = ({
    id = 'SpidergirlMayday',
    realName = 'May "Mayday" Parker.',
    personaje = 'Mayday Parker',
    bornArea = 'Manhattan , Nueva York , Tierra-982.',
    cause = 'Herencia paterna.',
    powers = 'Fuerza , velocidad, agilidad, resistencia, durabilidad, reflejos/reacción y resistencia sobrehumanas, sentido arácnido precognitivo , capacidad de adherirse a cualquier superficie y capacidad de tejido, Manipulación del biomagnetismo, Capacidad para detectar los puntos débiles de sus enemigos y repeler objetos y personas.',
    first_apperance = 'The Amazing Spider-Girl #1 (diciembre de 2006).',
    adds = 'May Parker heredó muchas de sus habilidades de su padre, Peter Parker. May también tiene web-shooters mecánicos basados ​en el diseño web-shooter de Ben Reilly , pero más largos y estrechos.',
    creators= 'Tom Defalco y Ron Frenz.',
    alias = 'Mayday.'
}) => {
    const imagePath= `/assets/personajes/${id}.png`;
    return (
        <div className='wrappPerson'>
        <div className='personWrap1'>
            <div className='imgWrap'>
                <img src={imagePath} className='card-imgIndividual' alt='Spider Girl Mayday'/>
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
                            <p>May "Mayday" Parker es la hija de Peter y Mary Jane Parker en el futuro, continuidad del universo alternativo. Peter y Mary Jane nombraron a su hija en honor a su tía May . En la continuidad de MC2 , Kaine los reunió con su bebé , quien encontró a la niña viviendo con Alison Mongraine, la estafadora que había secuestrado a la bebé siguiendo las instrucciones del Duende Verde . Después de que se reunieran, Peter perdió una pierna durante el horrible conflicto final con Green Goblin. </p>
                            <p>Después de la batalla, a Peter se le ofreció un reemplazo biónico de Mister Fantastic.pero, considerándolo una llamada de atención, decidió retirarse y concentrarse en ser esposo y padre (la batalla se vislumbra en Spider Girl #7 y se explica completamente en Spider Girl #49). Durante años, optaron por ocultar su pasado a May y esperaron que ella no desarrollara sus propios poderes.</p>
                            <p>A pesar de las esperanzas de sus padres, May comenzó a desarrollar versiones de los poderes arácnidos de su padre cuando tenía 15 años. Al mismo tiempo, Normie Osborn , nieto del Green Goblin original, se dispuso a restaurar el apellido familiar. May se puso el disfraz de Spider-Man de Ben Reilly para detenerlo y pronto se dedicó a luchar contra el crimen, al principio obstaculizada y luego ayudada por sus preocupados padres reales. </p>
                            <p>May comparte rasgos de sus dos padres. Al igual que su madre, es una estudiante hermosa, carismática y popular en su escuela secundaria, y es inteligente y talentosa al igual que su padre. Ella también heredó su amor por las bromas en las peleas y su intolerancia por la injusticia. Incluso sin sus poderes de araña, es una muy buena atleta y se destacó en el baloncesto femenino .equipo hasta que renunció, su renuncia se produjo después de la manifestación de sus poderes. </p>
                            <p>Por un lado, May parece haber heredado la "suerte Parker" en la que su doble identidad hace estragos en su vida privada. Por otro lado, su carrera de superhéroe, a diferencia de la de su padre, comienza con la protección exitosa de su familia. Desde la primera parte de su carrera en adelante, Spider-Girl se ganó la reputación de evitar batallas innecesarias con cualquiera y reformar a sus antiguos adversarios, como Normie Osborn y Raptor. Spider-Girl se establece rápidamente en la comunidad de superhéroes y se lleva bien con otros superhéroes fácilmente, obteniendo el estatus de reserva en los Vengadores y aliados en los Nuevos Guerreros y los Cinco Fantásticos .</p> 
                            <p>En The Amazing Spider-Girl, May promete dejar los superhéroes disfrazados, sale con Eugene Thompson y se postula para el consejo estudiantil. Cuando Mary Jane se da cuenta de que Hobgoblin representa una amenaza para los amigos adolescentes de su ahijada, permite que May reanude sus actividades como Spider-Girl (una situación que querían mantener en secreto a Peter). Después de una batalla con Hobgoblin, May le dice la verdad a su padrino, y después de una conversación con Mary Jane, le permiten a May retomar su identidad de Spider-Girl. Después de que Mary Jane tiene una discusión con los verdaderos padres de May, se da cuenta de que May descubrirá la verdad sobre Peter algún día, pero Peter lo planeó desde el principio. Debido a esta acción, continúa su lucha para mantener segura la ciudad.</p>
                            <p>Después de un intento de ayudar a SHIELDagencia gubernamental, se lanzó un caso lleno con una pieza del simbionte Carnage. Se une al amigo de May, Moose, quien se convierte en el nuevo Carnage. A cambio, Carnage se unirá al padre enfermo terminal de Moose, curándolo en el proceso. Carnage causa revuelo en la escuela de May y secuestra a Peter y Baby Ben, lo que obliga a May a enfrentarse a su amiga. May intenta hablar con Moose dentro del simbionte pero falla y se une a su primo Ben. Peter escapa mientras May lucha contra los dos simbiontes y reúne equipo sónico que puede derrotar al simbionte. Sin embargo, es May quien usa las armas, destruyendo así la pieza del simbionte Carnage. Su éxito no está exento de daños colaterales: Moose no solo está furioso con Spider-Girl por condenar a su padre, sino que el arma sónica deja a Ben sordo.</p>
                            <p>La audición de Ben finalmente se restablece gracias a la intervención de Normie Osborn. Más tarde, Normie tropieza con uno de los antiguos laboratorios de Norman Osborn y descubre un tanque de líquido que contiene lo que parece ser un duplicado físico de May Parker. Las notas dejadas por su abuelo indican que este Mayday es el original que secuestró hace años, lo que sugiere que el Mayday criado por Peter y MJ es otro clon.</p>
                            <p>Fury the Goblin Queen comienza a representar el gambito final del Green Goblin contra Peter Parker. Mientras secuestra al Spider-Man retirado, Fury también activa una señal que despierta a la niña inconsciente dentro del tanque de los laboratorios de Osborn. El cambiante escapa y se enfrenta a Mayday en el techo de su escuela secundaria justo cuando se está transformando en Spider-Girl. Los dos luchan brevemente antes de quedar atrapados en una explosión. May gravemente herida es rescatada de los escombros por Arañalas fuerzas de . Araña de repente está traumatizada por su propia prueba y, pensando que May podría no sobrevivir a su prueba, se ofrece a fusionarse con ella. Sin embargo, ella interviene en una búsqueda de visión que está experimentando Mayday.</p>
                            <p>Al ayudarla a superar una fuerza que estaba destinada a superar sola, impide que Spider-Girl descubra si ella es o no la verdadera May; principalmente porque May es mitad latina por parte de su padre y Araña solo está pasando por el trauma que pasó sin pensar en lo que podría pasar con May y su escuela. Araña también tiene un motivo oculto: al asumir el cuerpo y el poder de Spider-Girl, espera tomar por sorpresa a Black Tarantula, un adversario y antiguo amante, y derrotarlo. Araña completa con éxito la fusión y asume temporalmente el control del cuerpo de May, dejando a May y un tercero,( La tía May ) atrapada dentro del cuerpo de Araña.</p>                               
                        </p>
                    </div>
                <div className='buttonNavContainer d-block d-sm-none'>
                    <a href="/spiders"><button className='buttonNavigationSpiders'> <GiSpiderWeb/> Ir a Spiders</button></a>
                </div>
                <div className='navegationPerson'>
                    <a href="/personaje/SpiderwomanMattie"><button className='buttonNavigation'><FaArrowLeft/> Spider Woman (Mattie)</button></a>
                    <br/>
                    <a href="/personaje/SpiderHam"><button className='buttonNavigation'>Spider Ham <FaArrowRight/></button></a>
                </div>
        </div>
        </div>
        </div>
    </div>
  )
}
