import React from 'react'
import { PersonajesList } from './Cards/PersonajesList'

export const Villanos = () => {
  return (
      <div>
        <div className='titleSpider'>
          <h1 className='text-center'>Villanos</h1>
          <PersonajesList publisher="Villanos"/>
        </div>
      </div>
  )
}
