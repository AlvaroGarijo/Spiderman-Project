import React from 'react'
import { spidermanData } from '../data/spidermanData'

export const getPersonajesById = (id = '') => {
  return spidermanData.find(personaje => personaje.id === id)
}
