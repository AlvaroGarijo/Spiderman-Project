import React from 'react'

export const Shocker = () => {
  const imagePath= `/assets/personajes/Shocker.png`;
  return (
    
      
            <div className='wrappPerson'>
                <div className=''>
                    <div className=''>
                        <img src={imagePath} className='card-img' alt='Shocker'/>
                    </div>
                    <div className=''>
                        <div className=''>
                            <h3 className=''>Shocker</h3>
                            <p className=''>Herman Schultz</p>
                                
                             <p className=''>
                                <small className=''>primera aparición</small>
                          </p>
                        </div>
                    </div>
                    <a href="/villanos">Villanos</a>
                    <br/>
                    <a href="/personaje/mrNegativo">Back</a>
                    <br/>
                    <a href="/personaje/Black_Cat">Next</a>
                </div>
            </div>
  )
}
