import React from 'react'
import './styleNavegacion/InicioWeb.css'
import logoSpider from '../../imagenes/Spider-Logo.png'
import { Link } from 'react-router-dom'

export const InicioWeb = () => {
  return (
    <div className="indexWeb">
        <div className="wrappIndex">
          <div className="squareIndex1">
            <p className="paragraphIndex">Esta página está hecha para los fans de <Link className='textDecor' to="/spiderman"><strong className='strongLink' href='/spiderman'>Spider-Man</strong></Link>, con cariño hacia el personaje.</p>
          </div>
          <div className="squareIndex2">
            <h3 className="titleIndexSquare2"> Lo que vas encontrar </h3>
            <ul className="unorderListIndex">
              <li className="listIndex">
                <Link className='textDecor' to="/spiderman"><span className="listIndexLink">El Personaje</span></Link>
              </li>
              <li className="listIndex">
                <Link className='textDecor' to="comics"><span className="listIndexLink">Comics</span></Link>
              </li>
              {/* <li className="listIndex"><a className="listIndexLink" href="/actores">Actores</a></li> */}
              <li className="listIndex">
                <Link className='textDecor' to="/villanos"><span className="listIndexLink">Villanos</span></Link>
              </li>
              <li className="listIndex">
                <Link className='textDecor' to="/spiders"><span className="listIndexLink">Spider-verse</span></Link>
              </li>
              {/* <li className="listIndex"><a className="listIndexLink" href="/marvel">Spiderman en MARVEL</a></li>
              <li className='listIndex listIndexLink'> Y mucho mas . . .</li> */}
            </ul>
          </div>
         
        </div> 
        <div className="noOficialWrapp">
            <img className="logoSpider" src={ logoSpider } alt='logo'/>
            <p className="no-oficial">Página web NO oficial de Spider-Man hecha con cariño hacia el personaje. Fuentes: Wikipedia y spider-man.fandom.com</p>
        </div>
    </div>
  )
}
