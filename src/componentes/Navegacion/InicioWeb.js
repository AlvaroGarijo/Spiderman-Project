import React from 'react'
import './styleNavegacion/InicioWeb.css'
import logoSpider from '../../imagenes/Spider-Logo.png'

export const InicioWeb = () => {
  return (
    <div className="indexWeb">
        <div className="wrappIndex">
          <div className="squareIndex1">
            <p className="paragraphIndex">Esta página está hecha para los fans de <a className='strongLink' href='/spiderman'>Spider-Man</a>, con cariño hacia el personaje.</p>
          </div>
          <div className="squareIndex2">
            <h3 className="titleIndexSquare2"> Lo que vas encontrar </h3>
            <ul className="unorderListIndex">
              <li className="listIndex"><a className="listIndexLink" href="/spiderman">El Personaje</a></li>
              <li className="listIndex"><a className="listIndexLink"  href="/comics">Comics</a></li>
              <li className="listIndex"><a className="listIndexLink" href="/actores">Actores</a></li>
              <li className="listIndex"><a className="listIndexLink" href="/villanos">Villanos</a></li>
              <li className="listIndex"><a className="listIndexLink" href="/spiders">Spider-verse</a></li>
              <li className="listIndex"><a className="listIndexLink" href="/marvel">Spiderman en MARVEL</a></li>
              <li className='listIndex listIndexLink'> Y mucho mas . . .</li>
            </ul>
          </div>
         
        </div> 
        <div className="noOficialWrapp">
            <img className="logoSpider" src={ logoSpider }/>
            <p className="no-oficial">Página web NO oficial de Spider-Man hecha con cariño hacia el personaje. Fuentes: Wikipedia.</p>
        </div>
    </div>
  )
}
