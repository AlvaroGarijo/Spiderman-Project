import React from 'react'
import { BrowserRouter,  Routes, Route} from 'react-router-dom';
import { Actores } from '../componentes/Navegacion/Actores';
import { Comics } from '../componentes/Navegacion/Comics';
import { InicioWeb } from '../componentes/Navegacion/InicioWeb';
import { Marvel } from '../componentes/Navegacion/Marvel';
import { SpidermanPage } from '../componentes/Navegacion/SpidermanPage';
import { Spiders } from '../componentes/Navegacion/Spiders';
import { Villanos } from '../componentes/Navegacion/Villanos';

export const RoutersApp = () => {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element= {<InicioWeb/>}/>
          <Route path="/spiderman" element={<SpidermanPage/>}/>
          <Route path="/comics" element={<Comics/>}/>
          <Route path="/actores" element={<Actores/>}/>
          <Route path="/villanos" element={<Villanos/>}/>
          <Route path="/spiders" element={<Spiders/>}/>
          <Route path="/marvel" element={<Marvel/>}/>
      </Routes>
    </BrowserRouter>
  )
}
