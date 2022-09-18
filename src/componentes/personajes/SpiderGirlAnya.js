import React from 'react'

export const SpiderGirlAnya = () => {
  const imagePath= `/assets/personajes/Spider_girl.png`;
  return (
    
      
            <div className='wrappPerson'>
                <div className=''>
                    <div className=''>
                        <img src={imagePath} className='card-img' alt='Spider_girl'/>
                    </div>
                    <div className=''>
                        <div className=''>
                            <h3 className=''>Spider_girl</h3>
                            <p className=''>Anya Corazón</p>
                                
                             <p className=''>
                                <small className=''>primera aparición</small>
                          </p>
                        </div>
                    </div>
                    <a href="/spiders">Spiders</a>
                    <br/>
                    <a href="/personaje/Silk">Back</a>
                    <br/>
                    <a href="/personaje/MiguelOhara">Next</a>
                </div>
            </div>
  )
}
