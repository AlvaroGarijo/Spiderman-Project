import React from 'react'

export const SpidermanPavitr = () => {
  const imagePath= `/assets/personajes/SpidermanPavitr.png`;
  return (
    
      
            <div className='wrappPerson'>
                <div className=''>
                    <div className=''>
                        <img src={imagePath} className='card-img' alt='SpidermanPavitr'/>
                    </div>
                    <div className=''>
                        <div className=''>
                            <h3 className=''>Spiderman: Pavitr Prabhakar</h3>
                            <p className=''>Pavitr Prabhakar</p>
                                
                             <p className=''>
                                <small className=''>primera aparición</small>
                          </p>
                        </div>
                    </div>
                    <a href="/spiders">Spiders</a>
                    <br/>
                    <a href="/personaje/spiderHam">Back</a>
                    <br/>
                    <a href="/personaje/spidermanManga">Next</a>
                </div>
            </div>
  )
}
