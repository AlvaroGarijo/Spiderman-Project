import React from 'react'
import './styleNavegacion/SpidermanPage.css'
import { GiSpiderMask } from 'react-icons/gi';



export const SpidermanPage = () => {

  return (
    <div className='spider'>
      <div className='titleSpider'>
        <h1>Spider-Man</h1>
      </div>
      <div className='wrappSpider'>
        <div className='wrapp1'>
          <div className='imageSpider'>
          </div>
          <div className='dataSpider'>
              <p><span className='titleData'>Nombre:</span> Peter Benjamin Parker.</p>
              <p><span className='titleData'>Lugar de nacimiento:</span>  Queens, NY (Estados Unidos).</p>
              <p><span className='titleData'>Causa de sus poderes:</span>  Picadura de una araña radiactiva.</p>
              <p><span className='titleData'>Poderes:</span>  Agilidad, fuerza proporcional a la de un arácnido, adhesión a superficies, “sentido aracnido”, ritmo de curación acelerado.</p>
              <p><span className='titleData'>Añadidos:</span>  Gran inteligencia, fabricación de telas de araña (modificables).</p>
              <p><span className='titleData'>Primera aparición:</span>  Amazing Fantasy #15, 15 Agosto 1962.</p>
              <p><span className='titleData'>Creadores:</span>  Stan Lee y Steve Ditko.</p>
              <p><span className='titleData'>Alias:</span>  "Spidey", "Trepamuros", "Amigo y vecino spiderman", "Amazing Spiderman", "Tigre"</p>
          </div>
         
          <div className='dataSpider linksSpiderData'>
              <a  className='linkSpiderData' href='/familia'>  Familia </a>
              <a className='linkSpiderData' href='/interesAmoroso'>  Intereses Amorosos </a>
              <a className='linkSpiderData' href='/personajesSecundarios'>  Personajes Secundarios </a>
              <a className='linkSpiderData' href='/marvel'> Aliados en MARVEL </a>
              <a className='linkSpiderData' href='/villanos'> Villanos </a>
              <a className='linkSpiderData' href='/spiders'> Continuidades Alternativas "Spider-Verse" </a>
              <a className='linkSpiderData' href='/personajeApoyo'> Personajes de Apoyo </a>
          </div>
        
        </div>
        <div className='wrapp2'>
          <p className='infoWikip'>
              <p>
                Se trata de un personaje creado por los estadounidenses Stan Lee y Steve Ditko, e introducido en el cómic Amazing Fantasy n° 15, 
                publicado por Marvel Comics en agosto de 1962.​ Se trata de un superhéroe que emplea sus habilidades sobrehumanas, reminiscentes de una araña, 
                para combatir a otros supervillanos que persiguen fines siniestros.
              </p>
              <p>
                Su creación se remonta a principios de la década de 1960 como respuesta al creciente interés del público adolescente en los cómics y el éxito de Los 4 Fantásticos.​ 
                Tras su primera aparición en Amazing Fantasy,​ Marvel decidió producir una serie individual titulada The Amazing Spider-Man, cuyo ejemplar inicial salió a la venta en marzo de 1963.​
                Desde entonces se han distribuido otros varios cómics relacionados con el personaje, así como otros productos que han derivado en el establecimiento de una franquicia de medios.
              </p>
              <p>
                Si bien posee múltiples versiones alternativas que han propiciado el desarrollo de un multiverso, los orígenes y rasgos principales de Spider-Man han permanecido mayormente invariables con el transcurso del tiempo.
                Generalmente su identidad secreta es Peter Parker, un joven huérfano neoyorquino que adquiere superpoderes después de ser mordido por una araña radiactiva,15​ y cuya ideología como héroe se ve reflejada 
                primordialmente en la expresión «un gran poder conlleva una gran responsabilidad».20​21​ Suele ser asociado con una personalidad bromista, amable, inventiva y optimista, lo que le ha llevado a ser catalogado como el 
                «vecino amigable» de cualquiera lo cual, aunado a sus vivencias caracterizadas por los problemas cotidianos, atrajeron el interés del público al contrastar con el arquetipo de superhéroe de la industria.​
              </p>
              <p>
                Entre sus habilidades destacan la fuerza, el combate y la inteligencia, además de ser capaz de producir y lanzar telarañas sintéticas con ayuda de unos lanzadores que van sujetos a sus muñecas; trepar, adherirse y 
                desplazarse a través de muros y edificaciones; y percibir peligros y amenazas a su alrededor de forma precognitiva gracias a su «sentido arácnido». Algunas de sus colaboraciones con otros superhéroes incluyen a Antorcha Humana, 
                Iron Man, Capitán América y Los Vengadores, mientras que algunos de sus rivales más recurrentes son el Duende Verde, Doctor Octopus y Venom, así como grupos delictivos como los Seis Siniestros y los Herederos.
              </p>
              <p>
                Spider-Man es considerado como uno de los mejores personajes de todos los tiempos, cuya popularidad e influencia lo ha llevado a ser adoptado por Marvel como su mascota, además de ser el superhéroe más redituable de la 
                industria cuyos ingresos excedieron los veinticinco mil millones USD en 2018.​ Su franquicia incluye producciones televisivas, cinematográficas, radiofónicas, literarias y de videojuegos. Los actores que han interpretado al personaje 
                en el cine son Tobey Maguire, Andrew Garfield y Tom Holland.
              </p>
          </p>
              
        </div>

        

      </div>
    
    </div>
  )
}
