import React from 'react'
import {spidermanData} from '../data/spidermanData'

export const getPersonajesByName = (name = '') => {
    if(name.length === 0){
        return [];
    }

    name=name.toLowerCase();
  return spidermanData.filter(personaje => personaje.personaje.toLowerCase().includes(name));
}
