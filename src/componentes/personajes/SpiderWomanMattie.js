import React from 'react'

export const SpiderWomanMattie = () => {
  const imagePath= `/assets/personajes/SpiderWomanMattie.png`;
  return (
    
      
            <div className='wrappPerson'>
                <div className=''>
                    <div className=''>
                        <img src={imagePath} className='card-img' alt='SpiderWomanMattie'/>
                    </div>
                    <div className=''>
                        <div className=''>
                            <h3 className=''>Spider-Woman</h3>
                            <p className=''>Mattie Franklin</p>
                                
                             <p className=''>
                                <small className=''>primera aparición</small>
                          </p>
                        </div>
                    </div>
                    <a href="/spiders">Spiders</a>
                    <br/>
                    <a href="/personaje/SpiderWomanJessica">Back</a>
                    <br/>
                    <a href="/personaje/SpidergirlMayday">Next</a>
                </div>
            </div>
  )
}
