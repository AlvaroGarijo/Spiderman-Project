import React from 'react'

export const SpiderHam = () => {
  const imagePath= `/assets/personajes/SpiderHam.png`;
  return (
    
      
            <div className='wrappPerson'>
                <div className=''>
                    <div className=''>
                        <img src={imagePath} className='card-img' alt='SpiderHam'/>
                    </div>
                    <div className=''>
                        <div className=''>
                            <h3 className=''>Spider Ham</h3>
                            <p className=''>Peter Porker</p>
                                
                             <p className=''>
                                <small className=''>primera aparición</small>
                          </p>
                        </div>
                    </div>
                    <a href="/spiders">Spiders</a>
                    <br/>
                    <a href="/personaje/SpidergirlMattie">Back</a>
                    <br/>
                    <a href="/personaje/spidermanPavitr">Next</a>
                </div>
            </div>
  )
}
