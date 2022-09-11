import React from 'react'
import { BrowserRouter,  Routes, Route} from 'react-router-dom';
import App from '../App';
import { InicioWeb } from './Navegacion/InicioWeb';

export const Routes = () => {
  return (
    <BrowserRouter>
    <Routes>
        <Route path="/" element= {<App/>}/>
        <Route path="/" element= {<InicioWeb/>}/>
    </Routes>
    </BrowserRouter>
  )
}
