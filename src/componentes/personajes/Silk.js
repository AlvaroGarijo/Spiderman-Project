import React from 'react'

export const Silk = () => {
  const imagePath= `/assets/personajes/Silk.png`;
  return (
    
      
            <div className='wrappPerson'>
                <div className=''>
                    <div className=''>
                        <img src={imagePath} className='card-img' alt='Silk'/>
                    </div>
                    <div className=''>
                        <div className=''>
                            <h3 className=''>Silk</h3>
                            <p className=''>Cindy Moon</p>
                                
                             <p className=''>
                                <small className=''>primera aparición</small>
                          </p>
                        </div>
                    </div>
                    <a href="/spiders">Spiders</a>
                    <br/>
                    <a href="/personaje/Scarlet_Spider">Back</a>
                    <br/>
                    <a href="/personaje/Spider_Girl">Next</a>
                </div>
            </div>
  )
}
