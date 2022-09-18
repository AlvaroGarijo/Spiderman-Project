import React from 'react'

export const SpiderGwen = () => {
  const imagePath= `/assets/personajes/SpiderGwen.png`;
  return (
    
      
            <div className='wrappPerson'>
                <div className=''>
                    <div className=''>
                        <img src={imagePath} className='card-img' alt='SpiderGwen'/>
                    </div>
                    <div className=''>
                        <div className=''>
                            <h3 className=''>SpiderGwen</h3>
                            <p className=''>Gwen Stacey</p>
                                
                             <p className=''>
                                <small className=''>primera aparición</small>
                          </p>
                        </div>
                    </div>
                    <a href="/spiders">Spiders</a>
                    <br/>
                    <a href="/personaje/MilesMorales">Back</a>
                    <br/>
                    <a href="/personaje/Ezequiel_Sims">Next</a>
                </div>
            </div>
  )
}
