import React from 'react'

export const Chacal = () => {
  const imagePath= `/assets/personajes/Chacal.png`;
  return (
    
      
            <div className='wrappPerson'>
                <div className=''>
                    <div className=''>
                        <img src={imagePath} className='card-img' alt='Chacal'/>
                    </div>
                    <div className=''>
                        <div className=''>
                            <h3 className=''>Chacal</h3>
                            <p className=''>Miles Warren</p>
                                
                             <p className=''>
                                <small className=''>primera aparición</small>
                          </p>
                        </div>
                    </div>
                    <a href="/villanos">Villanos</a>
                    <br/>
                    <a href="/personaje/Camaleon">Back</a>
                    <br/>
                    <a href="/personaje/DuendeVerde">Next</a>
                </div>
            </div>
  )
}
