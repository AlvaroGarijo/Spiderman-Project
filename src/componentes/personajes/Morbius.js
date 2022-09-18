import React from 'react'

export const Morbius = () => {
  const imagePath= `/assets/personajes/Morbius.png`;
  return (
    
      
            <div className='wrappPerson'>
                <div className=''>
                    <div className=''>
                        <img src={imagePath} className='card-img' alt='Morbius'/>
                    </div>
                    <div className=''>
                        <div className=''>
                            <h3 className=''>Morbius</h3>
                            <p className=''>Michael Morgan Morbius</p>
                                
                             <p className=''>
                                <small className=''>primera aparición</small>
                          </p>
                        </div>
                    </div>
                    <a href="/villanos">Villanos</a>
                    <br/>
                    <a href="/personaje/Black_Cat">Back</a>
                    <br/>
                    <a href="/personaje/Camaleon">Next</a>
                </div>
            </div>
  )
}
