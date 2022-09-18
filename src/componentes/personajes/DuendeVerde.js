import React from 'react';

export const DuendeVerde = () => {


  const imagePath= `/assets/personajes/DuendeVerde.png`;
  return (
    
       
            <div className='wrappPerson'>
                <div className=''>
                    <div className=''>
                        <img src={imagePath} className='card-img' alt='Duende Verde'/>
                    </div>
                    <div className=''>
                        <div className=''>
                            <h3 className=''>Duende Verde</h3>
                            <p className=''>Norman Osborn</p>
                                
                             <p className=''>
                                <small className=''>primera aparición</small>
                          </p>
                        </div>
                    </div>
                    <a href="/villanos">Villanos</a>
                    <br/>
                    <a href="/personaje/Chacal">Back</a>
                    <br/>
                    <a href="/personaje/Electro">Next</a>
                </div>
            </div>
  

  )
}
