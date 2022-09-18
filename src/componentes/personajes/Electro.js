import React from 'react'

export const Electro = () => {
  const imagePath= `/assets/personajes/Electro.png`;
  return (
    
      
            <div className='wrappPerson'>
                <div className=''>
                    <div className=''>
                        <img src={imagePath} className='card-img' alt='Electro'/>
                    </div>
                    <div className=''>
                        <div className=''>
                            <h3 className=''>Electro</h3>
                            <p className=''>Max Dilon</p>
                                
                             <p className=''>
                                <small className=''>primera aparición</small>
                          </p>
                        </div>
                    </div>
                    <a href="/villanos">Villanos</a>
                    <br/>
                    <a href="/personaje/DuendeVerde">Back</a>
                    <br/>
                    <a href="/personaje/Dr_Octopus">Next</a>
                </div>
            </div>
  )
}
