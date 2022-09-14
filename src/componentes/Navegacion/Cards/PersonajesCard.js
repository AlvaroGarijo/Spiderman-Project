import React from 'react'
import{ Link } from 'react-router-dom'
import './styleCards/personajesCards.css'

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
                    <div className='col-md-5'>
                        <img src={imagePath} className='card-img' alt={personaje}/>
                    </div>
                    <div className='col-7'>
                        <div className='card-body'>
                            <h3 className='card-title'>{ personaje }</h3>
                            <p className='card-text'>{ alter_ego_personaje }</p>
                                {
                                    (alter_ego_personaje !== characters) && <p className='text-muted'>{ characters }</p>

                                }
                             <p className='text-muted'>
                                <small className="text-muted">{first_appearance}</small>
                          </p>
                            
                          <Link className='linkTo' to={`/personaje/${id}`} > 
                             Click para saber más
                          </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )

}
