import React from 'react'

export const MrNegativo = () => {
  const imagePath= `/assets/personajes/mrNegativo.png`;
  return (
    
      
            <div className='wrappPerson'>
                <div className=''>
                    <div className=''>
                        <img src={imagePath} className='card-img' alt='MrNegativo'/>
                    </div>
                    <div className=''>
                        <div className=''>
                            <h3 className=''>Mr.Negativo</h3>
                            <p className=''>Martin Li</p>
                                
                             <p className=''>
                                <small className=''>primera aparición</small>
                          </p>
                        </div>
                    </div>
                    <a href="/villanos">Villanos</a>
                    <br/>
                    <a href="/personaje/Kraven">Back</a>
                    <br/>
                    <a href="/personaje/Shocker">Next</a>
                </div>
            </div>
  )
}
