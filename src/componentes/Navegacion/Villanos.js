import React from 'react'
import { PersonajesList } from './Cards/PersonajesList'

export const Villanos = () => {
  return (
      <div>
        <div className='titleSpider'>
          <h1>Villanos</h1>
          <PersonajesList publisher="villanos"/>
        </div>
      </div>
  )
}
