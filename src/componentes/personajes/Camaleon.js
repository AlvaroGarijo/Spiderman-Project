import React from 'react'

export const Camaleon = () => {
  const imagePath= `/assets/personajes/Camaleon.png`;
  return (
    
      
            <div className='wrappPerson'>
                <div className=''>
                    <div className=''>
                        <img src={imagePath} className='card-img' alt='Camaleón'/>
                    </div>
                    <div className=''>
                        <div className=''>
                            <h3 className=''>Camaleón</h3>
                            <p className=''>Dimitri Smerdyakov</p>
                                
                             <p className=''>
                                <small className=''>primera aparición</small>
                          </p>
                        </div>
                    </div>
                    <a href="/villanos">Villanos</a>
                    <br/>
                    <a href="/personaje/Morbius">Back</a>
                    <br/>
                    <a href="/personaje/Chacal">Next</a>
                </div>
            </div>
  

  )
}
