import React from 'react'
import { BrowserRouter,  Routes, Route} from 'react-router-dom';
import { FooterApp } from '../componentes/FooterApp';
import { Navbar } from '../componentes/Navbar';
import { Actores } from '../componentes/Navegacion/Actores';
import { Comics } from '../componentes/Navegacion/Comics';
import { Familia } from '../componentes/Navegacion/Familia';
import { InicioWeb } from '../componentes/Navegacion/InicioWeb';
import { InteresesAmorosos } from '../componentes/Navegacion/InteresesAmorosos';
import { Marvel } from '../componentes/Navegacion/Marvel';
import { PersonajeApoyo } from '../componentes/Navegacion/PersonajeApoyo';
import { PersonajesSecundarios } from '../componentes/Navegacion/PersonajesSecundarios';
import { SpidermanPage } from '../componentes/Navegacion/SpidermanPage';
import { Spiders } from '../componentes/Navegacion/Spiders';
import { Villanos } from '../componentes/Navegacion/Villanos';

export const RoutersApp = () => {
  return (
    <BrowserRouter>
    <Navbar/>
      <Routes>
          <Route path="/" element= {<InicioWeb/>}/>
          <Route path="/spiderman" element={<SpidermanPage/>}/>
          <Route path="/comics" element={<Comics/>}/>
          <Route path="/actores" element={<Actores/>}/>
          <Route path="/villanos" element={<Villanos/>}/>
          <Route path="/spiders" element={<Spiders/>}/>
          <Route path="/marvel" element={<Marvel/>}/> 
          <Route path="/familia" element={<Familia/>}/> 
          <Route path="/interesAmoroso" element={<InteresesAmorosos/>}/>
          <Route path="/personajesSecundarios" element={<PersonajesSecundarios/>}/>
          <Route path="/personajeApoyo" element={<PersonajeApoyo/>}/>  
      </Routes>
    {/* <FooterApp/> */}
    </BrowserRouter>
  )
}
