import React from 'react'

export const SpidermanNoir = () => {
  const imagePath= `/assets/personajes/SpidermanNoir.png`;
  return (
    
      
            <div className='wrappPerson'>
                <div className=''>
                    <div className=''>
                        <img src={imagePath} className='card-img' alt='SpidermanNoir'/>
                    </div>
                    <div className=''>
                        <div className=''>
                            <h3 className=''>Spiderman Noir</h3>
                            <p className=''>Peter Parker</p>
                                
                             <p className=''>
                                <small className=''>primera aparición</small>
                          </p>
                        </div>
                    </div>
                    <a href="/spiders">Spiders</a>
                    <br/>
                    <a href="/personaje/spidermanJ">Back</a>
                    <br/>
                    <a href="/personaje/spiderUK">Next</a>
                </div>
            </div>
  )
}
