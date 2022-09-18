import React from 'react'

export const MadameWeb = () => {
  const imagePath= `/assets/personajes/MadameWeb.png`;
  return (
    
      
            <div className='wrappPerson'>
                <div className=''>
                    <div className=''>
                        <img src={imagePath} className='card-img' alt='MadameWeb'/>
                    </div>
                    <div className=''>
                        <div className=''>
                            <h3 className=''>MadameWeb</h3>
                            <p className=''>Cassandra Web</p>
                                
                             <p className=''>
                                <small className=''>primera aparición</small>
                          </p>
                        </div>
                    </div>
                    <a href="/spiders">Spiders</a>
                    <br/>
                    <a href="/personaje/Ezequiel_Sims">Back</a>
                    <br/>
                    <a href="/personaje/Scarlet_Spider">Next</a>
                </div>
            </div>
  )
}
