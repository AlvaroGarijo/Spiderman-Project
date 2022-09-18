import React from 'react'

export const Kraven = () => {
  const imagePath= `/assets/personajes/Kraven.png`;
  return (
    
      
            <div className='wrappPerson'>
                <div className=''>
                    <div className=''>
                        <img src={imagePath} className='card-img' alt='Kraven'/>
                    </div>
                    <div className=''>
                        <div className=''>
                            <h3 className=''>Kraven, "El Cazador"</h3>
                            <p className=''>Sergei Kravinov</p>
                                
                             <p className=''>
                                <small className=''>primera aparición</small>
                          </p>
                        </div>
                    </div>
                    <a href="/villanos">Villanos</a>
                    <br/>
                    <a href="/personaje/Kingpin">Back</a>
                    <br/>
                    <a href="/personaje/mrNegativo">Next</a>
                </div>
            </div>
  )
}
