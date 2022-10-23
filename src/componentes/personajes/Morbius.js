import React from 'react'
import '../personajes/personajesStyle/personajes.css';
import { GiSpiderWeb } from 'react-icons/gi';
import { FaArrowLeft } from 'react-icons/fa';
import { FaArrowRight } from 'react-icons/fa';

export const Morbius = ({
    id = 'Morbius',
    personaje = 'Morbius',
    realName = 'Michael Morgan Morbius',
    bornArea = 'Grecia',
    first_appearance = 'The Amazing Spiderman #101 (octubre de 1971)',
    cause = 'Había intentado curarse a sí mismo con un tratamiento experimental que involucraba ADN de murciélagos vampiros y una terapia de electroshock.',
    powers = 'Morbius es un bioquímico consumado, y además adquirió poderes vampíricos: Fuerza, agilidad, velocidad, resistencia y reflejos sobrehumanos, sentidos aumentados a niveles sobrehumanos, factor de curación acelerado, colmillos y garras sumamente desarrolladas, vuelo en pequeñas distancias, capacidad de hipnosis, capaz de convertir a una persona en un vampiro como él al chuparle toda la sangre de su cuerpo, inmunidad a varias debilidades de los vampiros',
    adds = 'Tuvo una infancia aislada, debido a su rara condición en la sangre, lo que contribuyó a su apariencia fea y desagradable.',
    creators = 'Roy Thomas y Gil Kane',
    alias = 'Morbius, Morbius el vampiro viviente, Dr. Morgan Morbius, Nikos Michaels'
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
                        <p>Morbius es un científico llamado El Dr. Michael Morbius, es un vampiro griego que aparece en los cómics estadounidenses publicados por Marvel Comics. Creado por el escritor Roy Thomas y diseñado originalmente por el dibujante Gil Kane, apareció por primera vez como enemigo de Loxias Crown, Thanos, M.O.D.O.K., Kang el Conquistador, Morlun, Conde Nefaria y más en The Amazing Spider-Man #101 (octubre de 1971).</p>
                        <p>A pesar de su estado inicial como uno de los villanos basados en el horror de Spider-Man y también como un adversario del cazavampiros Blade, responsable de convertirlo en un dhampiro, Morbius se convirtió en un antihéroe inquietante, arenoso y trágicamente defectuoso en su propia serie y otros títulos. Su verdadera identidad es la de un ex bioquímico galardonado llamado Michael Morbius, quien adquirió habilidades y rasgos físicos sobrehumanos pseudo-vampíricos después de un experimento bioquímico fallido que tenía la intención de curar su rara enfermedad de la sangre. El resto de sus apariciones presentan sus luchas con su personalidad pseudo-vampírica, su insaciable sed de sangre humana y sus esfuerzos posteriores para curar su horrible condición, junto con su eventual paso como un vigilante brutal y de pesadilla, que ocasionalmente regresa a la villanía.</p>
                        <p>El personaje ha aparecido en varias adaptaciones de medios fuera de los cómics, incluidos programas animados y videojuegos. IGN clasificó al personaje como el decimonoveno villano más grande de Spider-Man.</p>
                        <p>Jared Leto interpreta al personaje en la película Morbius (2022), ambientado en el Universo Spider-Man de Sony (USS).</p>
                        <p>Nacido y criado en Grecia por una madre soltera, Michael Morbius tuvo una infancia aislada, debido a su rara condición en la sangre, lo que contribuyó a su apariencia fea y desagradable. Pero a pesar de su aspecto, que era un hombre joven intelectualmente dotado, que se dedicaba a la lectura de libros, y con el tiempo, se convirtió en un biólogo muy respetado, llegando a ganar el Premio Nobel, que se especializó en el campo de la biología humana y animal. Mientras estaba en Nueva York, después de escapar de su país de origen debido a su condición vampírica, intenta encontrar una cura y proteger a su prometida: Martine Bancroft, fue atacado por el Lagarto y derrotado cuando Spider-Man y el Lagarto unieron fuerzas contra él para recuperar una muestra de la sangre de Morbius con el fin de curar sus propias condiciones físicas mutadas antes de que escapara.</p>
                        <p>La verdad detrás de su horrible condición es que, para curarse a sí mismo de una enfermedad sanguínea desconocida que lo estaba matando, Morbius, usando su experiencia pasada como bioquímico experto, había intentado curarse a sí mismo con un tratamiento experimental que involucraba ADN de murciélagos vampiros y una terapia de electroshock. Sin embargo, se vio afectado por una enfermedad mucho peor llamada "pseudo-vampirismo" que imitaba algunos de los poderes y la sed de sangre del vampirismo sobrenatural. Morbius ahora tenía que beber sangre para sobrevivir y tenía una fuerte aversión a la luz, sus huesos se volvieron huecos y ganó la capacidad de volar, además de ganar fuerza sobrehumana, supervelocidad y curación acelerada. Su apariencia, ya fea, ahora se volvió espantosa: sus caninos superiores se extendieron en colmillos, su nariz se aplanó para parecerse más a la de un murciélago y su piel se volvió blanca como la tiza. También adquirió la capacidad de convertir a otros a "vampiros vivientes" similares como él al morderlos y beber su sangre, infectando a ellos con la enfermedad del pseudo-vampirismo.</p>  
                        <p>Las personas a las que Morbius infectó con la enfermedad del pseudo-vampirismo en realidad no murieron, sino que pudieron curarse a través de un antídoto contra el pseudo-vampirismo que Morbius descubrió, aunque ese antídoto no funcionaría en el mismo Morbius. No adquirieron sus habilidades de curación y una herida mortal las mataría. Más tarde buscó una cura para su condición, pero se enfrentó a Spider-Man, la Antorcha Humana y los originales X-Men. Morbius luego se encontró con Barbara Clark y la protegió de un demonio llamado Nilrac, pero desafortunadamente después de eso, Morbius la mató y bebió su sangre para satisfacer su hambre, sintiendo un fuerte sentimiento de culpa inmediatamente después.</p>
                        <p>Una vez más luchó contra Spider-Man y trató de beber su sangre radioactiva, pero luego fue alcanzado por un rayo al mismo tiempo, lo que le curó de su pseudo-vampirismo y lo volvió humano nuevamente (aún conservaba sed de sangre, sin embargo). Mientras estaba curado, fue acusado de los crímenes que había cometido como pseudo-vampiro y estuvo representado por Jennifer Walters, cuya identidad dual como She-Hulk aún no se conocía públicamente en ese momento. Morbius salvó desinteresadamente la vida de Walters y estabilizó sus erráticas transformaciones en She-Hulk con un suero que había creado para curar los restos de su propia condición. Eventualmente recuperó su estado pseudo-vampírico y conoció al Doctor Extraño. Junto al Doctor Extraño y el Hermano Vudú, luchó contra Marie Laveau y fue testigo del regreso de los verdaderos vampiros.</p>
                        <p>Michael Morbius experimentó una transformación, por tratamiento de choque eléctrico e ingestión química, en un pseudo-vampiro. Como pseudo-vampiro, Morbius no posee todos los poderes de un vampiro real, ni está sujeto a todas las limitaciones tradicionales y debilidades de los mismos. Posee una variedad de poderes sobrehumanos, algunos de los cuales son similares a los vampiros sobrenaturales dentro del Universo Marvel, como una fuerza sobrehumana y velocidad, así como los sentidos intensificados incluyendo la visión nocturna y la ecolocalización. Debido a su condición como vampiro, Morbius se ve obligado a ingerir sangre fresca regularmente, para sobrevivir y mantener sus fuerzas. La cantidad de sangre que requiere y la frecuencia con que tiene que alimentarse no se ha especificado en los cómics, además, Morbius no posee ninguna de las vulnerabilidades místicas a las que los vampiros puros están sujetos como el ajo, agua bendita, el crucifijo o la plata. </p> 
                        <p>Morbius tiene una fuerte aversión a la luz solar, debido a su piel fotosensible, que impide cualquier protección contra grandes quemaduras de sol, en contraste con los "verdaderos" vampiros que son incinerados por ella, de modo que él puede moverse durante el día, pero sus poderes son disminuidos y se adherirá a la sombra si las circunstancias no exigen que sea activo durante el día. Carece del cambio de forma, poderes de control de clima, y la capacidad de controlar los animales de los vampiros. Al igual que los vampiros "verdaderos", Morbius posee la capacidad de hipnotizar a los seres de menor fuerza de voluntad y ponerlos bajo su control, que sólo puede ser resistido por aquellos que poseen una voluntad muy fuerte. Mientras era infectado brevemente por el demonio Sed de sangre, Morbius ganó la capacidad de licuar su cuerpo, moviéndose a través de espacios pequeños y estirar sus extremidades, según sea necesario. Perdió estas habilidades cuando él y su sed de sangre es dividida.</p>
                        <p>Morbius posee un factor de curación acelerado y puede recuperarse de lesiones leves a moderadas a un ritmo superior al de los humanos comunes. Aunque no es tan eficiente como los poderes curativos que posee Lobezno, Morbius ha demostrado ser capaz de curarse de múltiples heridas de bala en menos de una hora. Las lesiones más graves, como fracturas de huesos o quemaduras graves, pueden tardar varios días en curarse, pero una vez se demostró que tardaba a penas unos minutos, a pesar de que lo dejó como una criatura casi sin sentido, que debe alimentarse para reponer la energía que requiere el proceso de sanación. No puede regenerar las extremidades u órganos perdidos.</p>
                    </div>
                </div>
                <div className='buttonNavContainer d-block d-sm-none'>
                    <a href="/villanos"><button className='buttonNavigationSpiders'> <GiSpiderWeb/> Ir a Villanos</button></a>
                </div>
                <div className='navegationPerson'> 
                    <a href="/personaje/Black_Cat"><button className='buttonNavigation'><FaArrowLeft/> Black Cat</button></a>
                    <br/>
                    <a href="/personaje/Camaleon"><button className='buttonNavigation'>Camaleón <FaArrowRight/></button></a>
                </div>
            </div>
        </div>
        </div>
    </div>
  )
}
