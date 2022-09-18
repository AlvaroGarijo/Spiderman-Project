import React from 'react'

export const SpidermanSuperior = () => {
  const imagePath= `/assets/personajes/SpidermanSuperior.png`;
  return (
    
      
            <div className='wrappPerson'>
                <div className=''>
                    <div className=''>
                        <img src={imagePath} className='card-img' alt='SpidermanSuperior'/>
                    </div>
                    <div className=''>
                        <div className=''>
                            <h3 className=''>Spiderman Superior</h3>
                            <p className=''>Elliot Tolliver</p>
                                
                             <p className=''>
                                <small className=''>primera aparición</small>
                          </p>
                        </div>
                    </div>
                    <a href="/spiders">Spiders</a>
                    <br/>
                    <a href="/personaje/MiguelOhara">Back</a>
                    <br/>
                    <a href="/personaje/SpiderWomanJessica">Next</a>
                </div>
            </div>
  )
}
