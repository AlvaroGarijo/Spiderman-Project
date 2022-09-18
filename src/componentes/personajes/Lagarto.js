import React from 'react'

export const Lagarto = () => {
  const imagePath= `/assets/personajes/Lagarto.png`;
  return (
    
      
            <div className='wrappPerson'>
                <div className=''>
                    <div className=''>
                        <img src={imagePath} className='card-img' alt='Lagarto'/>
                    </div>
                    <div className=''>
                        <div className=''>
                            <h3 className=''>Lagarto</h3>
                            <p className=''>Curtis Connors</p>
                                
                             <p className=''>
                                <small className=''>primera aparición</small>
                          </p>
                        </div>
                    </div>
                    <a href="/villanos">Villanos</a>
                    <br/>
                    <a href="/personaje/Sandman">Back</a>
                    <br/>
                    <a href="/personaje/Buitre">Next</a>
                </div>
            </div>
  )
}
