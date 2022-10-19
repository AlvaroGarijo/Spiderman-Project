import React from 'react'
import { TbArrowBackUp } from 'react-icons/tb';
import { BuildPage } from '../BuildPage/BuildPage'

export const BenUrich = () => {
  return (
    <div>
        <BuildPage/>
        <div className='navegationSecondary'>
            <a href="/personajesSecundarios"><button className='buttonNavigation'><TbArrowBackUp/> Back </button></a>
        </div>
    </div>
  )
}
