import React from 'react'

export const Kingpin = () => {
  const imagePath= `/assets/personajes/Kingpin.png`;
  return (
    
      
            <div className='wrappPerson'>
                <div className=''>
                    <div className=''>
                        <img src={imagePath} className='card-img' alt='Kingpin'/>
                    </div>
                    <div className=''>
                        <div className=''>
                            <h3 className=''>Kingpin</h3>
                            <p className=''>Wilson Fisk</p>
                                
                             <p className=''>
                                <small className=''>primera aparición</small>
                          </p>
                        </div>
                    </div>
                    <a href="/villanos">Villanos</a>
                    <br/>
                    <a href="/personaje/HobGoblin">Back</a>
                    <br/>
                    <a href="/personaje/Kraven">Next</a>
                </div>
            </div>
  )
}
