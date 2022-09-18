import React from 'react'

export const PeniParker = () => {
  const imagePath= `/assets/personajes/peniParker.png`;
  return (
    
      
            <div className='wrappPerson'>
                <div className=''>
                    <div className=''>
                        <img src={imagePath} className='card-img' alt='peniParker'/>
                    </div>
                    <div className=''>
                        <div className=''>
                            <h3 className=''>Peni Parker</h3>
                            <p className=''>Peni Parker</p>
                                
                             <p className=''>
                                <small className=''>primera aparición</small>
                          </p>
                        </div>
                    </div>
                    <a href="/spiders">Spiders</a>
                    <br/>
                    <a href="/personaje/spiderUK">Back</a>
                    <br/>
                    <a href="/personaje/spiderPunk">Next</a>
                </div>
            </div>
  )
}
