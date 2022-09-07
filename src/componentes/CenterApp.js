import React from 'react';
import '../styles/CenterApp.css';
import  agenteVenom  from '../imagenes/agenteVenom.jpeg'



export const CenterApp = () => {
  return (
    <div>
      <h1>Soy una imagen</h1>
      <img  className='image1' 
            src={agenteVenom} 
            alt='Agente-Venom'/>
    </div>
  )
}
