import React from 'react'

export const Escorpion = () => {
  const imagePath= `/assets/personajes/Escorpion.png`;
  return (
    
      
            <div className='wrappPerson'>
                <div className=''>
                    <div className=''>
                        <img src={imagePath} className='card-img' alt='Escorpión'/>
                    </div>
                    <div className=''>
                        <div className=''>
                            <h3 className=''>Escorpión</h3>
                            <p className=''>McDonald "Mac" Gargan</p>
                                
                             <p className=''>
                                <small className=''>primera aparición</small>
                          </p>
                        </div>
                    </div>
                    <a href="/villanos">Villanos</a>
                    <br/>
                    <a href="/personaje/Buitre">Back</a>
                    <br/>
                    <a href="/personaje/Rhino">Next</a>
                </div>
            </div>
  )
}
