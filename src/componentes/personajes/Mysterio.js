import React from 'react'

export const Mysterio = () => {
  const imagePath= `/assets/personajes/Mysterio.png`;
  return (
    
      
            <div className='wrappPerson'>
                <div className=''>
                    <div className=''>
                        <img src={imagePath} className='card-img' alt='Mysterio'/>
                    </div>
                    <div className=''>
                        <div className=''>
                            <h3 className=''>Mysterio</h3>
                            <p className=''>Quentin Beck</p>
                                
                             <p className=''>
                                <small className=''>primera aparición</small>
                          </p>
                        </div>
                    </div>
                    <a href="/villanos">Villanos</a>
                    <br/>
                    <a href="/personaje/Carnage">Back</a>
                    <br/>
                    <a href="/personaje/Sandman">Next</a>
                </div>
            </div>
  )
}
