import React from 'react'
import { PersonajesList } from './Cards/PersonajesList'
import { TbArrowBackUp } from 'react-icons/tb';
import './styleNavegacion/Familia.css'

export const Familia = () => {
  return (
    <>
      <div className='familyWrapp'>
        <h2 className='titleFamily'>Familia</h2> 
        <PersonajesList publisher='Familia'/>;
        <div className='navegationFamily'>
            <a href="/spiderman"><button className='buttonNavigation'><TbArrowBackUp/></button></a>
        </div>
      </div>
    </>
  )
}
