import React from 'react'
import '../personajes/personajesStyle/personajes.css';
import { GiSpiderWeb } from 'react-icons/gi';
import { FaArrowLeft } from 'react-icons/fa';
import { FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export const Lagarto = ({
    id = 'Lagarto',
    personaje = 'Lagarto',
    realName = 'Dr. Curtis "Curt" Connors',
    bornArea = 'Estados Unidos',
    first_appearance = 'The Amazing Spider-Man #6 (noviembre de 1963)',
    cause = 'Resultado de la exposición a la fórmula de Lagarto',
    powers = 'Fuerza, resistencia, habilidad y reflejos sobrehumanos, algunos atributos reptilianos tales como garras, dientes afilados, piel escamosa (que le ayuda como "armadura") y control sobre los reptiles, factor curativo y capacidad para escalar paredes',
    adds = 'El Lagarto puede comunicarse mentalmente y mandar a todos los reptilesen un radio de una milla, a través de telepatía limitada.',
    creators = 'Stan Lee y Steve Ditko',
    alias = 'Largatija, Dinosaurio.'
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
                 <Link to="/villanos"><button className='buttonNavigationSpiders'> <GiSpiderWeb/> Ir a Villanos</button></Link>
            </div>

        </div>
         <div className='dataWrap'>
            <div className='dataControl'>
                <h3 className='titlePerson'>{ personaje }</h3>
                <div className='infoPersonWrap'>
                    <div className='infoPerson'>
                        <p>El Lagarto (Dr. Curtis Connors) (en inglés: The Lizard) fue un supervillano ficticio que aparece en los cómics estadounidenses publicados por Marvel Comics. Creado por Stan Lee y Steve Ditko, apareció por primera vez en The Amazing Spider-Man # 6 (noviembre de 1963) como enemigo del superhéroe Spider-Man. Si bien el personaje ha conservado este papel durante la mayoría de sus apariciones posteriores, también ha sido retratado como un antihéroe trágico y aliado ocasional del Hombre Araña. Connors es a veces un aliado de Spider-Man como él mismo, y no necesariamente como su alter ego.</p>
                        <p>En la versión original de la historia, El Doctor Connors era un genetista que investigaba la capacidad de ciertos reptiles para volver a crecer extremidades faltantes. Desarrolló un suero a base de ADN del lagarto que permitiría a los humanos hacer lo mismo y lo probó en sí mismo, con la esperanza de recuperar el brazo derecho que le faltaba; en cambio, se transformó en un lagarto antropomórfico salvaje. Aunque Hombre Araña fue capaz de deshacer la transformación, el Lagarto seguía siendo parte del subconsciente del Doctor Connors y resurgiría una y otra vez; a menudo conservando la inteligencia de Connors e intentando reemplazar a la humanidad con una raza de criaturas reptiles como él. Muchas historias que presentan al Lagarto tratan sobre los efectos que tiene en la vida y la psique del Doctor Connors, ya que este último vive con el temor constante de que el Lagarto algún día se apodere de su cuerpo de forma completa e irreversible. Debido a esto, trabaja incansablemente para encontrar una cura permanente para su personalidad alternativa, para gran preocupación de su esposa Martha Connors y su hijo Billy.</p>
                        <p>El personaje ha aparecido en numerosas adaptaciones del Hombre Araña, incluidas películas, series animadas y videojuegos. El Doctor Connors fue interpretado por Dylan Baker en Spider-Man 2 (2004) y Spider-Man 3 (2007), y su alter-ego Lagarto fue interpretado por Rhys Ifans en The Amazing Spider-Man (2012) y volverá a interpretar por última vez en el papel en la película de Marvel Cinematic Universe Spider-Man: No Way Home (2021). En 2009, El Lagarto se clasificó en el lugar 62 de los principales villanos de historieta de todos los tiempos, según IGN.</p> 
                        <p>Curtis "Curt" Connors nació en Coral Gables, Florida. Fue un cirujano dotado que se alistó en el ejército de los EE. UU. Realizó una cirugía de emergencia en el campo de batalla de soldados heridos. Sin embargo, su brazo derecho fue terriblemente herido en un estallido durante la guerra, lo que resultó en su amputación.</p>
                        <p>Después de su regreso a la vida civil como técnico de investigación, Connors se obsesionó con descubrir los secretos de la regeneración de las extremidades reptilianas. Trabajando desde su casa en los Everglades de Florida -con la ayuda de su compañero de guerra Ted Sallis-, finalmente desarrolló un suero experimental tomado de ADN de reptil.</p>
                        <p>El suero volvió a generar con éxito la extremidad faltante de un conejo, por lo que Connors decidió probar el suero en sí mismo. Ingirió la fórmula y su brazo desaparecido efectivamente volvió a crecer.</p> 
                        <p>Sin embargo, la fórmula tenía un efecto secundario. Connors se transformó posteriormente en un monstruo humanoide reptil. El Hombre-Araña descubrió esta situación durante un viaje a Florida para investigar los informes de los periódicos del Lagarto después de que su empleador, el diario «El Clarín», lo desafiara. Después de descubrir la verdadera identidad y origen del Lagarto, el Araña usó las notas de Connors para crear un antídoto que lo devolviese a su forma y mentalidad humanas. Otro intento de desarrollar este suero para un uso seguro nuevamente dio como resultado que Connors se transformara en el Lagarto, pero en esta ocasión se salvó gracias a su antiguo colega el Profesor Charles Xavier y su primer equipo de los Hombres X: Bestia y Ángel, rastreando al Lagarto en los pantanos para que El Hombre de Hielo pudiese enviarlo a la hibernación el tiempo suficiente para desarrollar una cura.</p>
                        <p>El doctor Curt Connors apareció en el argumento de Un Nuevo Día, de 2008, donde experimentó con células madre de animales y también ayudó a la especialista forense Carlie Cooper. El nuevo villano Fenómeno (la tercera versión) confundió el experimento de células madre de Connors con drogas. Connors ayudó al Hombre-Araña a vencer a Freak durante su segundo encuentro.</p>
                        <p>Durante los eventos de The Gauntlet, el doctor Curt Connors trabajó para la compañía farmacéutica Phelcorp bajo el ejecutivo Brian King. Connors perdió la custodia de su hijo, Billy. La persona del Lagarto intentó incitar a Connors para que le diese control de personalidad, y se los cedió cuando su asistente dormía con Rey. Cuando él cambió, el Lagarto devoró al Rey.</p> 
                        <p>Peter Parker decidió proteger a Billy y se dirigíó a la casa de sus padres adoptivos, donde se dio cuenta de que Billy había sido secuestrado y sus nuevos padres fueron tomados como rehenes por Ana Kravinoff. Ana había dejado a Billy en un callejón, donde el Lagarto lo devoró, destruyendo la personalidad de Connors temporalmente.</p>
                        <p>El crimen hizo que el Lagarto adquiera una nueva forma, con un físico más delgado, cabello castaño largo, púas en el antebrazo derecho, inteligencia humana y la capacidad telepática para comunicarse con la subdesarrollada «parte de lagarto» del cerebro humano; demuestra la última habilidad al hipnotizar a Spider-Man para que piense que tiene una presa que acecha, lo que hace que el superhéroe se vaya. Operando desde las alcantarillas, el Lagarto hipnotiza a varias personas para que tomen lo que quieren. Lejos del Lagarto, el Hombre-Araña ingirió la fórmula supresora de lagartos de Connors, lo que lo volvió inmune a los poderes de control mental del Lagarto. Lo combatió entonces y le inyectó algo de la fórmula, revelando que lamentaba lo que había hecho: la psique de Connors todavía estaba en el cuerpo del Lagarto. El Lagarto desapareció después de la pelea.</p>
                        <p>En base a diversos factores fisiológicos y ambientales, la inteligencia del Lagarto puede ir desde la inteligencia bestial y animal hasta la inteligencia humana normal. La personalidad de Lizard se ha manifestado a menudo con inteligencia humana, capaz de hablar y razonar más, aunque algunas versiones han sido más salvajes que otras. Durante Las Guerras Secretas en particular, se mostró menos despiadado que su interpretación normal, mostrando preocupación por Volcana y la Avispa después de que le mostraron amabilidad a pesar de su usual desdén por los humanos. Sin embargo, incluso cuando opera al nivel de un humano, el Lagarto rara vez es tan inteligente como el Dr. Connors, mostrando en muchas ocasiones una incapacidad para comprender el trabajo de su ser humano y utilizarlo para promover sus propios fines a pesar de sus mejores esfuerzos.</p> 
                        <p>El Lagarto aparentemente «destruyó» la personalidad de Curt Connors, pero posteriormente comenzó a mostrar algunas de las emociones humanas de él. En contraste con su naturaleza salvaje anterior, también ha demostrado capacidades intelectuales suficientes para replicar el trabajo de Connors para sí mismo, aunque todavía se ve obstaculizado por su incapacidad para comprender plenamente las emociones humanas.</p>
                        <p></p>
                        <p></p> 
                    </div>
                </div>
                <div className='buttonNavContainer d-block d-sm-none'>
                     <Link to="/villanos"><button className='buttonNavigationSpiders'> <GiSpiderWeb/> Ir a Villanos</button></Link>
                </div>
                <div className='navegationPerson'> 
                    <Link to="/personaje/Sandman"><button className='buttonNavigation'><FaArrowLeft/> Sandman</button></Link>
                        <br/>
                    <Link to="/personaje/Buitre"><button className='buttonNavigation'>Buitre <FaArrowRight/> </button></Link>
                </div>
            </div>
        </div>
        </div>
    </div>
  )
}
