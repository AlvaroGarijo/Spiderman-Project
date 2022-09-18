import React from 'react'

export const SpiderPunk = () => {
  const imagePath= `/assets/personajes/SpiderPunk.png`;
  return (
    
      
            <div className='wrappPerson'>
                <div className=''>
                    <div className=''>
                        <img src={imagePath} className='card-img' alt='SpidermanPunk'/>
                    </div>
                    <div className=''>
                        <div className=''>
                            <h3 className=''>Spiderman Punk</h3>
                            <p className=''>Hobart Brown</p>
                                
                             <p className=''>
                                <small className=''>primera aparición</small>
                          </p>
                        </div>
                    </div>
                    <a href="/spiders">Spiders</a>
                    <br/>
                    <a href="/personaje/peniParker">Back</a>
                    <br/>
                    <a href="/personaje/MilesMorales">Next</a>
                </div>
            </div>
  )
}
