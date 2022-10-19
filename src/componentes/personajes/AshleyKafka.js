import React from 'react'
import { BuildPage } from '../BuildPage/BuildPage'
import { TbArrowBackUp } from 'react-icons/tb';

export const AshleyKafka = () => {
  return (
    <div>
        <BuildPage/>
        <div className='navegationSecondary'>
            <a href="/personajesSecundarios"><button className='buttonNavigation'><TbArrowBackUp/> Back </button></a>
        </div>
    </div>
  )
}
