import React from 'react'
import { spidermanData } from "../data/spidermanData"

export const getPersonajesByPublisher = (publisher) => {
const validPublisher = ['villanos', 'spiders'];
if( !validPublisher.includes(publisher)){
    throw new Error(`${publisher} is not a valid publisher`);
}

  return spidermanData.filter(personaje => personaje.publisher === publisher);
}
