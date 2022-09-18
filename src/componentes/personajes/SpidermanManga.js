import React from 'react'

export const SpidermanManga = () => {
  const imagePath= `/assets/personajes/SpidermanManga.png`;
  return (
    
      
            <div className='wrappPerson'>
                <div className=''>
                    <div className=''>
                        <img src={imagePath} className='card-img' alt='SpidermanManga'/>
                    </div>
                    <div className=''>
                        <div className=''>
                            <h3 className=''>Spiderman Mangaverse</h3>
                            <p className=''>Peter Parker</p>
                                
                             <p className=''>
                                <small className=''>primera aparición</small>
                          </p>
                        </div>
                    </div>
                    <a href="/spiders">Spiders</a>
                    <br/>
                    <a href="/personaje/spidermanPavitr">Back</a>
                    <br/>
                    <a href="/personaje/spidermanJ">Next</a>
                </div>
            </div>
  )
}
