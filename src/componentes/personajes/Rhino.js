import React from 'react'

export const Rhino = () => {
  const imagePath= `/assets/personajes/Rhino.png`;
  return (
    
      
            <div className='wrappPerson'>
                <div className=''>
                    <div className=''>
                        <img src={imagePath} className='card-img' alt='Rhino'/>
                    </div>
                    <div className=''>
                        <div className=''>
                            <h3 className=''>Rhino</h3>
                            <p className=''>Alexei Mikhailovich Sytsevich</p>
                                
                             <p className=''>
                                <small className=''>primera aparición</small>
                          </p>
                        </div>
                    </div>
                    <a href="/villanos">Villanos</a>
                    <br/>
                    <a href="/personaje/Escorpion">Back</a>
                    <br/>
                    <a href="/personaje/HobGoblin">Next</a>
                </div>
            </div>
  )
}
