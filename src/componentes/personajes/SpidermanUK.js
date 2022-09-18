import React from 'react'

export const SpidermanUK = () => {
  const imagePath= `/assets/personajes/spiderUK.png`;
  return (
    
      
            <div className='wrappPerson'>
                <div className=''>
                    <div className=''>
                        <img src={imagePath} className='card-img' alt='SpidermanUK'/>
                    </div>
                    <div className=''>
                        <div className=''>
                            <h3 className=''>Spiderman UK</h3>
                            <p className=''>Billy Braddock</p>
                                
                             <p className=''>
                                <small className=''>primera aparición</small>
                          </p>
                        </div>
                    </div>
                    <a href="/spiders">Spiders</a>
                    <br/>
                    <a href="/personaje/spidermanNoir">Back</a>
                    <br/>
                    <a href="/personaje/peniParker">Next</a>
                </div>
            </div>
  )
}
