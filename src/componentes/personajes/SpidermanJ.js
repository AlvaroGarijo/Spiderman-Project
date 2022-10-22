import React from 'react';
import '../personajes/personajesStyle/personajes.css';
import { GiSpiderWeb } from 'react-icons/gi';
import { FaArrowLeft } from 'react-icons/fa';
import { FaArrowRight } from 'react-icons/fa';

export const SpidermanJ = ({
    id = 'spidermanJ',
    realName = 'Sho Amano.',
    personaje = 'Spider-Man J',
    bornArea = 'Tokio, Japón.',
    cause = '-',
    powers = '-',
    first_apperance= 'revista infantil Comic BomBom del 9 de noviembre de 2004.',
    adds = 'chico de 15 años con las habilidades paranormales de una araña.',
    creators= 'Yamanaka Akira.',
    alias = 'Spider-Man J.'
}) => {
    const imagePath= `/assets/personajes/${id}.png`;
    return (
        <div className='wrappPerson'>
        <div className='personWrap1'>
            <div className='imgWrap'>
                <img src={imagePath} className='card-imgIndividual' alt='spidermanJ'/>
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
                            <p>Spider-Man J ( en japonés :スパイダーマンJ , Hepburn : Supaidāman J ) es un manga de Yamanaka Akira. Se publicó en larevista infantil Comic BomBom del 9 de noviembre de 2004 al 11 de mayo de 2005.</p>
                            <p>En el año 200X, un supervillano que se hace llamar Lord Gokibu quiere robar el fósil del Rey Insecto, Sho Amano, de 15 años, usa sus nuevos poderes de araña para convertirse en Spider-Man J, para evitar que esto suceda. . Durante su tiempo como superhéroe, conoce versiones japonesas de Elektra , Dr. Doom , Blade y los Cuatro Fantásticos.</p>
                            <p>Sho Amano (天野翔, Shō Amanō ) es un chico de 15 años con las habilidades paranormales de una araña. Mantiene en secreto su identidad como Spider-Man J, por temor a que su familia o amigos puedan resultar heridos. La única persona que conoce a Sho es Spider-Man J es el detective Makoto. Se especializa en una serie de armas que crea usando sus web-shooters. Es tímido y torpe, y apenas tiene amigos. Tiene 3 mascotas, un gato llamado Leo , un perro llamado Par y un pájaro llamado Don , un guiño al Show de Spider-Man de Toei , donde Spider-Man tenía un robot gigante llamado Leopardon. En la versión en inglés, se le conoce como Peter Parker.</p>
                            <p>Makoto (誠) es un detective que se convirtió en policía porque quería proteger a las personas. Tiene un sentido del humor tonto, pero tiene un buen corazón y cree en la justicia. En la versión en inglés, se le conoce como Detective Flynn .</p>
                            <p>Mami Amano (天野真美, Amanō Māmi ) es la tía joven, feliz y despreocupada de Sho. Ella ama a Sho como si fuera su propio hijo y lo sobreprotege. Ella es dueña de su propia tienda de ropa. Es bastante relajada y es conocida por su curry picante. En la versión en inglés, se la conoce como tía May.</p> 
                            <p>Megumi (めぐみ) es la novia y compañera de clase de Sho Amano. Es una marimacho , y es muy cuidadosa con todos, especialmente con Sho, de quien está locamente enamorada. En la versión en inglés, se la conoce como Mary Jane Watson</p>
                            <p>Densuke (デンスケ) es compañero de clase y amigo de Sho. Es fanático de Spider-Man J y Comic BomBom , a juzgar por su camiseta que dice "Bom". En la versión en inglés, se le conoce como Harry Osborn .</p>
                            <p>Lord Gokibu (ゴキブ・リーダー, Gokibu Riidaa ) es el villano principal del manga. No se sabe mucho sobre él, o su pasado. En la versión en inglés, se le conoce como Lord Beastius </p>
                            <p>El manga fue traducido al inglés en Spider-Man Family , comenzando en el número 1, volumen 2, tankōbon de tamaño inglés , llamados " Digests " por Marvel Comics. El primer volumen se llamó "Caballeros japoneses" y el segundo se llamó "Daze japonés".</p>                               
                        </p>
                    </div>
                <div className='buttonNavContainer'>
                    <a href="/villanos"><button className='buttonNavigationSpiders'> <GiSpiderWeb/> Ir a Villanos</button></a>
                </div>
                <div className='navegationPerson'> 

                    <a href="/personaje/spidermanManga"><button className='buttonNavigation'><FaArrowLeft/> Spiderman Manga</button></a>
                    <br/>
                    <a href="/personaje/spidermanNoir"><button className='buttonNavigation'>Spiderman Noir <FaArrowRight/></button></a>
                </div>
        </div>
        </div>
        </div>
    </div>         
  )
}
