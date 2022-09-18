import React from 'react'

export const DrOctopus = () => {
  const imagePath= `/assets/personajes/Dr_Octopus.png`;
  return (
    
      
            <div className='wrappPerson'>
                <div className=''>
                    <div className=''>
                        <img src={imagePath} className='card-img' alt='Dr. Octopus'/>
                    </div>
                    <div className=''>
                        <div className=''>
                            <h3 className=''>Dr. Octopus</h3>
                            <p className=''>Otto Octavius</p>
                                
                             <p className=''>
                                <small className=''>primera aparición</small>
                          </p>
                        </div>
                    </div>
                    <a href="/villanos">Villanos</a>
                    <br/>
                    <a href="/personaje/Electro">Back</a>
                    <br/>
                    <a href="/personaje/Venom">Next</a>
                </div>
            </div>
  )
}
