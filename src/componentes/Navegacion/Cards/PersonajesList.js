import React, { useMemo } from 'react'
import { PersonajesCard } from './PersonajesCard'
import { getPersonajesByPublisher } from '../../../selectors/getPersonajesByPublisher';
import { spidermanData } from '../../../data/spidermanData';



export const PersonajesList = ({publisher}) => {

    const personajes= useMemo(()=> getPersonajesByPublisher( publisher ),[ publisher ])

        return (
            <div className="row rows-col-1 row-cols-md-3 g-3 animate__animated animate__fadeIn"> 
                        {
                            spidermanData.map(personajes => (
                                <PersonajesCard key={personajes.id}
                                                    {...personajes}
                                />
                                    
                            ))
                        }

                </div>
  )
};
