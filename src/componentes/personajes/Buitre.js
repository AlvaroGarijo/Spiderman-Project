import React from 'react'

export const Buitre = () => {
  const imagePath= `/assets/personajes/Buitre.png`;
  return (
    
       
            <div className='wrappPerson'>
                <div className=''>
                    <div className=''>
                        <img src={imagePath} className='card-img' alt='Buitre'/>
                    </div>
                    <div className=''>
                        <div className=''>
                            <h3 className=''>Buitre</h3>
                            <p className=''>Adrian Toomes</p>
                                
                             <p className=''>
                                <small className=''>primera aparición</small>
                          </p>
                        </div>
                    </div>
                    <a href="/villanos">Villanos</a>
                    <br/>
                    <a href="/personaje/Lagarto">Back</a>
                    <br/>
                    <a href="/personaje/Escorpion">Next</a>
                </div>
            </div>
  

  )
}
