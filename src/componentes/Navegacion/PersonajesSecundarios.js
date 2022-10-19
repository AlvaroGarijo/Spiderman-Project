import React from 'react'
import { PersonajesList } from './Cards/PersonajesList'
import { TbArrowBackUp } from 'react-icons/tb';
import './styleNavegacion/personajesSecundarios.css'

export const PersonajesSecundarios = () => {
  return (
    <>
      <div className='secondaryWrapp'>
        <h2 className='titleSecondary'>Personajes Secundarios</h2>
        <br/>
        <h3 className='titleSecondary'>---La informacion de esta zona esta en desarrollo---</h3>
        <PersonajesList publisher='Secundarios'/>
        <div className='navegationSecondary'>
            <a href="/spiderman"><button className='buttonNavigation'><TbArrowBackUp/></button></a>
        </div>
      </div>
    </>
    
  )
}
