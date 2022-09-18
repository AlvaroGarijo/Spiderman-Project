import React from 'react'

export const EzequielSims = () => {
  const imagePath= `/assets/personajes/Ezequiel_Sims.png`;
  return (
    
      
            <div className='wrappPerson'>
                <div className=''>
                    <div className=''>
                        <img src={imagePath} className='card-img' alt='Ezequiel Sims'/>
                    </div>
                    <div className=''>
                        <div className=''>
                            <h3 className=''>Spider-Man: Ezequiel Sims</h3>
                            <p className=''>Ezequiel Sims</p>
                                
                             <p className=''>
                                <small className=''>primera aparición</small>
                          </p>
                        </div>
                    </div>
                    <a href="/spiders">Spiders</a>
                    <br/>
                    <a href="/personaje/spiderGwen">Back</a>
                    <br/>
                    <a href="/personaje/MadameWeb">Next</a>
                </div>
            </div>
  )
}
