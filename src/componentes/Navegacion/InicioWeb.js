import React from 'react'
import './styleNavegacion/InicioWeb.css'

export const InicioWeb = () => {
  return (
    <div className="indexWeb">
        <h1 className="titleIndex">Spiderman Project</h1>
        <div className="wrappIndex">
          <div className="squareIndex1">
            <p className="paragraphIndex">Esta página está hecha para los fans de spiderman, con cariño hacia el personaje.</p>
          </div>
          <div className="squareIndex2">
            <ul>
              <h3 className="titleIndexSquare2">¿Qué encontrarás?</h3>
              <li><a href="#">El Personaje</a></li>
              <li><a href="#">Cómics</a></li>
              <li><a href="#">Actores</a></li>
              <li><a href="#">Villanos</a></li>
              <li><a href="#">Spider-Multiverse</a></li>
              <li><a href="#">Spiderman en MARVEL</a></li>
            </ul>
          </div>
          
        </div>
    </div>
  )
}
