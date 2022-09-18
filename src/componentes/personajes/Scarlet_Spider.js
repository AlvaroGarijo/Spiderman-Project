import React from 'react'

export const Scarlet_Spider = () => {
  const imagePath= `/assets/personajes/Scarlet_Spider.png`;
  return (
    
      
            <div className='wrappPerson'>
                <div className=''>
                    <div className=''>
                        <img src={imagePath} className='card-img' alt='Scarlet_Spider'/>
                    </div>
                    <div className=''>
                        <div className=''>
                            <h3 className=''>Araña Escarlata</h3>
                            <p className=''>Ben Reilly, Kaine Parker</p>
                                
                             <p className=''>
                                <small className=''>primera aparición</small>
                          </p>
                        </div>
                    </div>
                    <a href="/spiders">Spiders</a>
                    <br/>
                    <a href="/personaje/MadameWeb">Back</a>
                    <br/>
                    <a href="/personaje/Silk">Next</a>
                </div>
            </div>
  )
}
