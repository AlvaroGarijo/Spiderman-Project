import React from 'react'

export const MilesMorales = () => {
  const imagePath= `/assets/personajes/MilesMorales.png`;
  return (
    
      
            <div className='wrappPerson'>
                <div className=''>
                    <div className=''>
                        <img src={imagePath} className='card-img' alt='MilesMorales'/>
                    </div>
                    <div className=''>
                        <div className=''>
                            <h3 className=''>Miles Morales</h3>
                            <p className=''>Miles Morales</p>
                                
                             <p className=''>
                                <small className=''>primera aparición</small>
                          </p>
                        </div>
                    </div>
                    <a href="/spiders">Spiders</a>
                    <br/>
                    <a href="/personaje/spiderPunk">Back</a>
                    <br/>
                    <a href="/personaje/spiderGwen">Next</a>
                </div>
            </div>
  )
}
