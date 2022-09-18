import React from 'react'

export const Sandman = () => {
  const imagePath= `/assets/personajes/Sandman.png`;
  return (
    
      
            <div className='wrappPerson'>
                <div className=''>
                    <div className=''>
                        <img src={imagePath} className='card-img' alt='Sandman'/>
                    </div>
                    <div className=''>
                        <div className=''>
                            <h3 className=''>Sandman</h3>
                            <p className=''>Flint Marco</p>
                                
                             <p className=''>
                                <small className=''>primera aparición</small>
                          </p>
                        </div>
                    </div>
                    <a href="/villanos">Villanos</a>
                    <br/>
                    <a href="/personaje/Mysterio">Back</a>
                    <br/>
                    <a href="/personaje/Lagarto">Next</a>
                </div>
            </div>
  )
}
