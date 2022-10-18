import React, { useMemo } from 'react'
import { PersonajesCard } from './PersonajesCard'
import { getPersonajesByPublisher } from '../../../selectors/getPersonajesByPublisher';




export const PersonajesList = ({publisher}) => {

    const spidermanData = useMemo(()=> getPersonajesByPublisher( publisher ),[ publisher ])

        return (
            <div className="row personajeList"> 
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
