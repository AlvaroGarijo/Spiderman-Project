import React from 'react'
import{ Link } from 'react-router-dom'

export const PersonajesCard = ({
 
    id,
    personaje,
    publisher,
    alter_ego_personaje,
    first_appearance,
    characters,

}) =>{

    const imagePath= `/assets/personajes/${id}.png`;
    
    return (
        <div className='col'>
            <div className='card'>
                <div className='row no-gutters'>
                    <div className='col-md-4'>
                        <img src={imagePath} className='card-img' alt={personaje}/>
                    </div>
                    <div className='col-8'>
                        <div className='card-body'>
                            <h3 className='card-title'>{ personaje }</h3>
                            <p className='card-text'>{ alter_ego_personaje }</p>
                                {
                                    (alter_ego_personaje !== characters) && <p className='text-muted'>{ characters }</p>

                                }
                             <p className='text-muted'>
                                <small className="text-muted">{first_appearance}</small>
                          </p>

                          <Link to={`/personaje/${id}`}> 
                            Mas... 
                          </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )

}
