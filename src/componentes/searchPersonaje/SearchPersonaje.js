import React from 'react'
// import {getPersonajesByName} from '../selectors/getPersonajesByName'
// import { useNavigate, useLocation } from 'react-router-dom'
// import queryString from 'query-string'
// import { useMemo } from 'react'
// import { useForm } from '../hooks/useForm'





export const SearchPersonaje = () => {
    // const navigate = useNavigate();
    // const location = useLocation();
    // const {q = ''} = queryString.parse(location.search);
  
    // const [formValues, handleImputChange] = useForm({
    //   searchText: q,
    // })
  
    // const {searchText} = formValues;
  
    // const personajesFilted = useMemo( () => getPersonajesByName(q), [q] );
  
    // const handleSearch = (e) => {
    //   e.preventDefault();
    //   navigate(`?q=${searchText}`);
    // }


  return (
  <div>Buscar</div>
//     <form className="d-flex" role="search" onSubmit={handleSearch}>
//                   <input className="form-control me-2" 
//                           type="search"
//                           placeholder="Buscar"
//                           name='searchText'
//                           autoComplete='off'
//                           value={searchText}
//                           onChange={handleImputChange} 
//                           aria-label="Search"/>

//                   <button className="navbarButton" type="submit">Buscar</button>
//                 </form>

//                     {
//                       (q === '')
//                         ? <div className='alert alert-info'> Busca un personaje</div> : (personajesFilted.length === 0)
//                         && <div className='alert alert-danger'> No hay resultados: {q}</div>
//                     }
//                     {
//                       personajesFilted.map(personaje => (<spidermanData key = {personaje.id}{...personaje}/>))
//                     }
 )
}
