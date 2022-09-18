import React from 'react'

export const Venom = () => {
  const imagePath= `/assets/personajes/Venom.png`;
  return (
    
      
            <div className='wrappPerson'>
                <div className=''>
                    <div className=''>
                        <img src={imagePath} className='card-img' alt='Venom'/>
                    </div>
                    <div className=''>
                        <div className=''>
                            <h3 className=''>Venom</h3>
                            <p className=''>Eddie Brock</p>
                                
                             <p className=''>
                                <small className=''>primera aparición</small>
                          </p>
                        </div>
                    </div>
                    <a href="/villanos">Villanos</a>
                    <br/>
                    <a href="/personaje/Dr_Octopus">Back</a>
                    <br/>
                    <a href="/personaje/Carnage">Next</a>
                </div>
            </div>
  )
}
