import React from 'react'

export const HobGoblin = () => {
  const imagePath= `/assets/personajes/Hobgoblin.png`;
  return (
    
      
            <div className='wrappPerson'>
                <div className=''>
                    <div className=''>
                        <img src={imagePath} className='card-img' alt='Hobgoblin'/>
                    </div>
                    <div className=''>
                        <div className=''>
                            <h3 className=''>Hob-Goblin</h3>
                            <p className=''>Roderick y Daniel Kingsley, Ned Leeds</p>
                                
                             <p className=''>
                                <small className=''>primera aparición</small>
                          </p>
                        </div>
                    </div>
                    <a href="/villanos">Villanos</a>
                    <br/>
                    <a href="/personaje/Rhino">Back</a>
                    <br/>
                    <a href="/personaje/Kingpin">Next</a>
                </div>
            </div>
  )
}
