import queryString from "query-string";
import { useMemo } from 'react';
import { useForm } from '../../hooks/useForm';
import { useLocation, useNavigate } from 'react-router-dom';
import {getPersonajesByName} from '../../selectors/getPersonajesByName'
import { BiSearchAlt } from "react-icons/bi";
import {  GiSpiderMask } from "react-icons/gi";
import { GiPumpkinMask } from "react-icons/gi";
import './searchPersonajes.css';
import { PersonajesCard } from '../Navegacion/Cards/PersonajesCard';


export const SearchPersonaje = () => {

    const navegar = useNavigate();
    const location = useLocation();
    
    const {q = ''} = queryString.parse(location.search);

    const [formValues, handleInputChange] = useForm({searchText: q})

    const {searchText} = formValues;

    const personajeFilted = useMemo(()=> getPersonajesByName(q), [q] );

    const handleSearch = (e) => {
        e.preventDefault();
        navegar(`?q=${searchText}`)
    }
    

  return (
    <>
        <div>
            <h1 className='titleText'>Busqueda de Personajes</h1>
            <div className='row searchWrapp'>
                <div className='col-sm-12 col-md-5 searchPersonWrap'>
                    <h4 className='searchPerson'>Buscador <BiSearchAlt/></h4>
                    <br/>
                    <form onSubmit={handleSearch}>
                        <input 
                            type='text'
                            placeholder='Buscar personaje'
                            className='form-control'
                            name='searchText'
                            autoComplete='off'
                            value={searchText}
                            onChange={handleInputChange}
                        />
                        <br/>
                        <button className='nav-link navbarButton searchButton'
                                type='submit'>
                            Buscar
                        </button>
                    </form>
                </div>
                <div className='col-sm-12 col-md-7 findPersonWrap'>
                    <h4 className='resultPerson'> 
                        <GiSpiderMask className='iconSpiderman'/> Personaje <GiPumpkinMask className='iconHall'/>
                        
                         
                    </h4>
                    <br/>
                    {
                        (q === '')
                            ? <div className='screenFail1'>Prueba otra vez . . .</div>
                            : (personajeFilted.length === 0)
                            && <div className='screenNoResults'>No hay resultados para: {q}</div>
                    }
                    {
                        personajeFilted.map(personaje=> (
                            <PersonajesCard key={ personaje.id} 
                            { ...personaje }
                            />
                        ))
                    }
                </div>
            </div>

        </div>
    </>
 )
}
