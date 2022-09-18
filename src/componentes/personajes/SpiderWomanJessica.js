import React from 'react'

export const SpiderWomanJessica = () => {
  const imagePath= `/assets/personajes/SpiderWomanJessica.png`;
  return (
    
      
            <div className='wrappPerson'>
                <div className=''>
                    <div className=''>
                        <img src={imagePath} className='card-img' alt='SpiderWomanJessica'/>
                    </div>
                    <div className=''>
                        <div className=''>
                            <h3 className=''>Spider-Woman</h3>
                            <p className=''>Jessica Drew</p>
                                
                             <p className=''>
                                <small className=''>primera aparición</small>
                          </p>
                        </div>
                    </div>
                    <a href="/spiders">Spiders</a>
                    <br/>
                    <a href="/personaje/SpidermanSuperior">Back</a>
                    <br/>
                    <a href="/personaje/SpiderwomanMattie">Next</a>
                </div>
            </div>
  )
}
