import React from 'react'

export const MiguelOhara = () => {
  const imagePath= `/assets/personajes/MiguelOhara.png`;
  return (
    
      
            <div className='wrappPerson'>
                <div className=''>
                    <div className=''>
                        <img src={imagePath} className='card-img' alt='MiguelOhara'/>
                    </div>
                    <div className=''>
                        <div className=''>
                            <h3 className=''>Miguel O'hara</h3>
                            <p className=''>Spider-Man: Miguel O'hara</p>
                                
                             <p className=''>
                                <small className=''>primera aparición</small>
                          </p>
                        </div>
                    </div>
                    <a href="/spiders">Spiders</a>
                    <br/>
                    <a href="/personaje/Spider_Girl">Back</a>
                    <br/>
                    <a href="/personaje/SpidermanSuperior">Next</a>
                </div>
            </div>
  )
}
