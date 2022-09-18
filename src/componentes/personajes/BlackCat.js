import React from 'react'

export const BlackCat = () => {
  const imagePath= `/assets/personajes/Black_Cat.png`;
  return (
    
       
            <div className='wrappPerson'>
                <div className=''>
                    <div className=''>
                        <img src={imagePath} className='card-img' alt='Black Cat'/>
                    </div>
                    <div className=''>
                        <div className=''>
                            <h3 className=''>Black Cat</h3>
                            <p className=''>Felicia Sara Hardy</p>
                                
                             <p className=''>
                                <small className=''>primera aparición</small>
                          </p>
                        </div>
                    </div>
                    <a href="/villanos">Villanos</a>
                    <br/>
                    <a href="/personaje/Shocker">Back</a>
                    <br/>
                    <a href="/personaje/Morbius">Next</a>
                </div>
            </div>
  

  )
}
