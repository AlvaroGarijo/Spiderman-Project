import React from 'react'

export const SpidergirlMayday = () => {
  const imagePath= `/assets/personajes/SpidergirlMayday.png`;
  return (
    
      
            <div className='wrappPerson'>
                <div className=''>
                    <div className=''>
                        <img src={imagePath} className='card-img' alt='Spidergirl'/>
                    </div>
                    <div className=''>
                        <div className=''>
                            <h3 className=''>Spidergirl</h3>
                            <p className=''>Mayday Parker</p>
                                
                             <p className=''>
                                <small className=''>primera aparición</small>
                          </p>
                        </div>
                    </div>
                    <a href="/spiders">Spiders</a>
                    <br/>
                    <a href="/personaje/SpiderwomanMattie">Back</a>
                    <br/>
                    <a href="/personaje/spiderHam">Next</a>
                </div>
            </div>
  )
}
