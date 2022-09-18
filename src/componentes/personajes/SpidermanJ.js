import React from 'react'

export const SpidermanJ = () => {
  const imagePath= `/assets/personajes/SpidermanJ.png`;
  return (
    
      
            <div className='wrappPerson'>
                <div className=''>
                    <div className=''>
                        <img src={imagePath} className='card-img' alt='SpidermanJ'/>
                    </div>
                    <div className=''>
                        <div className=''>
                            <h3 className=''>Spiderman J</h3>
                            <p className=''>Sho Amano</p>
                                
                             <p className=''>
                                <small className=''>primera aparición</small>
                          </p>
                        </div>
                    </div>
                    <a href="/spiders">Spiders</a>
                    <br/>
                    <a href="/personaje/spidermanManga">Back</a>
                    <br/>
                    <a href="/personaje/spidermanNoir">Next</a>
                </div>
            </div>
  )
}
