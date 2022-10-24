import React from 'react';
import '../personajes/personajesStyle/personajes.css';
import { GiSpiderWeb } from 'react-icons/gi';
import { FaArrowLeft } from 'react-icons/fa';
import { FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';


export const MilesMorales = ({

    id = 'MilesMorales',
    realName = 'Miles Morales',
    personaje = 'Miles Morales',
    bornArea = 'Brooklyn',
    cause = 'Picadura de araña',
    powers = 'Fuerza, rapidez y reflejos proporcionales a una araña, capacidad de adherirse a casi cualquier superficie, factor de curación limitado que le permite sanar huesos rotos o graves heridas en los tejidos en unas horas. Sentido arácnido que le advierte del peligro.',
    first_apperance= '#4 número de Ultimate Fallout (Agosto 2011)',
    adds = 'Puede camuflarse en cualquier superficie.',
    creators= 'Brian Michael Bendis y Sara Pichelli',
    alias = 'Spidey, Spin'

}) => {
  const imagePath= `/assets/personajes/${id}.png`;
  return (
            <div className='wrappPerson'>
                <div className='personWrap1'>
                    <div className='imgWrap'>
                        <img src={imagePath} className='card-imgIndividual' alt='MilesMorales'/>
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
                            <Link to="/spiders"><button className='buttonNavigationSpiders'> <GiSpiderWeb/> Ir a Spiders</button></Link>
                        </div>
                        
                    </div>
                    <div className='dataWrap'>
                        <div className='dataControl'>
                            <h3 className='titlePerson'>{personaje}</h3>
                            <div className='infoPersonWrap'>
                                <p className='infoPerson'>
                                    <p>Miles Morales es un personaje ficticio que aparece en las historietas publicadas por Marvel Comics, como uno de los personajes conocidos como Spider-Man. Fue creado por el escritor Brian Michael Bendis y la artista Sara Pichelli, aunque también los editores de Ultimate Marvel y el redactor jefe Axel Alonso fueron inspirados por una serie de ideas, tales como la elección del presidente de EE.UU. Barack Obama y la aparición del actor afroamericano Donald Glover vestido con un traje de Spider-Man, además del estreno de una nueva serie llamada Community.</p>
                                    <p>Miles Morales apareció por primera vez en el cuarto número de Ultimate Fallout, en agosto de 2011, a raíz de la muerte de Peter Parker. Un adolescente de padre afroamericano y madre puertorriqueña, el segundo Spider-Man en Ultimate Marvel.</p>
                                    <p>La reacción del público es variada. Algunos opinan que es un truco publicitario motivado por la corrección política, una acusación negada por Alonso. Alexandra Petri de The Washington Post pidió que el personaje fuera juzgado por su calidad de historias, y las críticas positivas que han cosechado.</p>
                                    <p>El personaje posee poderes similares a los del original Spider-Man, que obtuvo a partir de la picadura de una araña genéticamente alterada.</p>
                                    <p>Es considerado el mejor superhéroe de la década por muchos expertos y fans de marvel. El concepto de un Spider-Man afroamericano se debatió por primera vez unos meses antes del noviembre de 2008 durante las elecciones presidenciales de Barack Obama como presidente de los Estados Unidos. El redactor jefe de Marvel Comics, Axel Alonso dijo: "Cuando tuvimos nuestro primer presidente afroamericano nos dimos cuenta de que tal vez era el momento de echar un buen vistazo a uno de nuestros iconos.</p> 
                                    <p>Este nuevo Spider-Man era considerado una posibilidad de la nueva serie lanzada en 2008 llamada, "Ultimate Comics" cuando la historia reestructuró la mayor parte del Ultimate Marvel, pero esas primeras ideas fueron abandonadas debido a la deficiencia de carácter en la historia, por lo que aun no se había desarrollado. Bendis comentó sobre la aparición del actor afroamericano Donald Glover en un pijama de Spider-Man, por la segunda temporada de la serie de televisión Community. Esta fue una referencia a una infructuosa campaña en línea que intentó obtener una audición para el papel principal en la próxima película The Amazing Spider-Man. Bendis le dijo a Glover, "Lo vi con el traje y pensé: 'Me gustaría leer este libro." Así que me alegré de que estaba escribiendo esta historieta."</p>
                                    <p>La Artista de Miles Morales, Sara Pichelli, con un boceto de Miles Cuando la editorial Marvel Comics decidió matar a Peter Parker en el universo Ultimate, Miles Morales fue creado por el escritor de cómics Brian Michael Bendis y la artista Sara Pichelli. Miles nació y se crio en Brooklyn, Ciudad de Nueva York, el hijo de un padre afroamericano y una madre original de Puerto Rico. Axel Alonso ha descrito a Miles como inteligente, poseedor de aptitudes para la ciencia, similar a su predecesor, Peter Parker. </p>
                                    <p>El personaje hizo su debut en la cuarta edición de la serie Ultimate Fallouts, una serie limitada, que fue lanzada el 3 de agosto de 2011. Más tarde protagonizó el relanzamiento de Ultimate Comics: Spider-Man, serie escrita por Bendis y dibujada por Pichelli. En septiembre de 2011, Pichelli también diseñó el traje de Miles como Spider-Man: era todo negro con cinta roja y el logotipo de araña roja. Pichelli había trabajado en cuatro números de Ultimate Comics Spider-Man, utilizando una Cintiq 12WX. Además, hizo una tabla gráfica, añadiendo más screentone's, para que sus ilustraciones den lo que ella llama "una sensación más pop al cómic". Porque creo que encajaría perfectamente con la nueva serie ", declara Pichelli. Aunque Morales no es el primer personaje negro que encarna a Spider-Man, marca la segunda vez que un personaje latino ha tomado la identidad de Spider-Man. Miguel O'Hara, que es un chico medio de ascendencia mexicana, que fue el personaje principal de la serie Spider-Man 2099. </p>
                                    <p>Morales ha sustituido a Parker como Spider-Man solo en Ultimate Marvel, un universo paralelo que re-imagina a los personajes del universo Marvel principal, Peter Parker sigue vivo y todavía es Spider-Man en el "universo 616". En 2012, Morales apareció en la miniserie Spider-Men, en la que se encontró con el Spider-Man de la Universo Original.</p>                               
                                </p>
                            </div>
                            <div className='buttonNavContainer d-block d-sm-none'>
                                <Link to="/spiders"><button className='buttonNavigationSpiders'> <GiSpiderWeb/> Ir a Spiders</button></Link>
                            </div>
                        <div className='navegationPerson'> 
                            <Link to="/personaje/spiderPunk"><button className='buttonNavigation'><FaArrowLeft/> Spider Punk</button></Link>
                            <br/>
                            <Link to="/personaje/spiderGwen"><button className='buttonNavigation'>Spider Gwen <FaArrowRight/></button></Link>
                        </div>
                   </div>
                   </div>
                </div>
            </div>
  )
}
