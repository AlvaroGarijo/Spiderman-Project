import React from 'react'
import spidergif from '../../imagenes/spidergif.gif'
import './BuildPage.css'
import { MdBuild } from 'react-icons/md'

export const BuildPage = () => {
  return (
    <div className='buildWrapp'>
        <img className='imgConstruction' src={spidergif} alt='Construcción'/>
        <div className='paraWrapp'>
            <p className='buildParagraph'><MdBuild className='iconBuild'/> Estamos en fase de construcción disculpa las molestias <MdBuild className='iconBuild'/></p>
        </div>
    </div>
  )
}
