import React from 'react'
import { PersonajesList } from './Cards/PersonajesList'
import '../Navegacion/Cards/styleCards/PersonajesList.css'

export const Spiders = () => {
  return (
    <div>
        <div className='titleSpider'>
          <h1 className='text-center'>Spider-Verse</h1>
          <PersonajesList publisher="Spiders"/>
        </div>
      </div>
  )
}
