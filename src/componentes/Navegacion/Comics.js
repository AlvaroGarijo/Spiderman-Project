import React from 'react'
import '../Navegacion/styleNavegacion/comics.css'
import  comic1  from '../../imagenes/comic1.jpeg'

export const Comics = () => {
  return (
    <div className='spider'>
      <h1 className='titleComics'>Comics</h1>
      <div className='wrappComic'>
          <div className='wrapperComic1'>
            <h2 className='titleComic'>Primera Aparición</h2>
            <h4 className='amazingTitle'>The Amazing Fantasy #15</h4>
            <img className='comic1' src={ comic1 } alt='comic'/>
          </div>
          <div className='wrapperComic2'>
            <p className='paragraphComic'>
              El personaje Spiderman aparece por primera vez en el cómic Amazing Fantasy Nº15 
              (fecha de la cubierta, agosto de 1962). La serie fue cancelada con esta publicación,
              pero la acogida del personaje fue tan positiva que una nueva revista, The Amazing Spider-Man, fue lanzada a la fecha de marzo de 1963.
              El personaje fue creado por el escritor y editor Stan Lee junto con el artista y cografista Steve Ditko.
              <br/><br/> 
              El dúo hizo 38 publicaciones desde 1963 hasta 1966. 
              Dikto, después de la trigesimoctava (nº38) publicación, dejó el proyecto que tenían ambos en conjunto, mientras que Stan Lee siguió como escritor 
              de las publicaciones hasta la publicación #100. Después de esto, muchos escritores y artistas se han sucedido para dar forma al cómic mensual de las aventuras de uno de los héroes más conocidos del universo Marvel.
              <br/><br/> 
              The Amazing Spiderman es el cómic mensual más importante y representativo de la saga, y es el único que tenía al personaje de Spider Man hasta Peter Parker,
              The Spectacular Spider-Man en 1976. 
              <br/><br/> 
              La mayor parte de los personajes y villanos de la saga de Spider Man se presentan aquí, y es donde ocurren los sucesos 
              clave de la historia. La publicación continúa emitiéndose sin interrupciones hasta el nº441 (noviembre de 1998) cuando Marvel Comics lo relanza 
              bajo el Nº 1 del volumen 2 (enero de 1999), pero en el 40º aniversario de Spider-Man, esta nueva entrega, volvió a la antigua numeración, continuando bajo el número de publicación nº 500 en el número diciembre de 2003.
            </p>

            <p className='introGuia'>Podéis encontrar todos los volumenes de Spiderman en la <a className='linkGuia' target='_blank' rel='noreferrer' href='https://www.whakoom.com/guemar/lists/spider-man_-_guia_de_lectura_definitiva_4868'>Guia Definitiva</a> con más de 600 Volúmenes de Spidey ordenado por colecciones</p>
          </div>
      </div>
    </div>
  )
}
