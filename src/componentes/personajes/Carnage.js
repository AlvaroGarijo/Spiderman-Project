import React from 'react'

export const Carnage = () => {
  const imagePath= `/assets/personajes/Carnage.png`;
  return (
    
      
            <div className='wrappPerson'>
                <div className=''>
                    <div className=''>
                        <img src={imagePath} className='card-img' alt='Carnage'/>
                    </div>
                    <div className=''>
                        <div className=''>
                            <h3 className=''>Carnage</h3>
                            <p className=''>Cletus Kasady</p>
                                
                             <p className=''>
                                <small className=''>primera aparición</small>
                          </p>
                        </div>
                    </div>
                    <a href="/villanos">Villanos</a>
                    <br/>
                    <a href="/personaje/Venom">Back</a>
                    <br/>
                    <a href="/personaje/Mysterio">Next</a>
                </div>
            </div>
  )
}
