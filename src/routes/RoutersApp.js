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
import { BlackCat } from '../componentes/personajes/BlackCat';
import { Buitre } from '../componentes/personajes/Buitre';
import { Camaleon } from '../componentes/personajes/Camaleon';
import { Carnage } from '../componentes/personajes/Carnage';
import { Chacal } from '../componentes/personajes/Chacal';
import { DrOctopus } from '../componentes/personajes/DrOctopus';
import { DuendeVerde } from '../componentes/personajes/DuendeVerde';
import { Electro } from '../componentes/personajes/Electro';
import { Escorpion } from '../componentes/personajes/Escorpion';
import { EzequielSims } from '../componentes/personajes/EzequielSims';
import { HobGoblin } from '../componentes/personajes/HobGoblin';
import { Kingpin } from '../componentes/personajes/Kingpin';
import { Kraven } from '../componentes/personajes/Kraven';
import { Lagarto } from '../componentes/personajes/Lagarto';
import { MadameWeb } from '../componentes/personajes/MadameWeb';
import { MiguelOhara } from '../componentes/personajes/MiguelOhara';
import { MilesMorales } from '../componentes/personajes/MilesMorales';
import { Morbius } from '../componentes/personajes/Morbius';
import { MrNegativo } from '../componentes/personajes/MrNegativo';
import { Mysterio } from '../componentes/personajes/Mysterio';
import { PeniParker } from '../componentes/personajes/PeniParker';
import { Rhino } from '../componentes/personajes/Rhino';
import { Sandman } from '../componentes/personajes/Sandman';
import { Scarlet_Spider } from '../componentes/personajes/Scarlet_Spider';
import { Shocker } from '../componentes/personajes/Shocker';
import { Silk } from '../componentes/personajes/Silk';
import { SpiderGirlAnya } from '../componentes/personajes/SpiderGirlAnya';
import { SpidergirlMayday } from '../componentes/personajes/SpidergirlMayday';
import { SpiderGwen } from '../componentes/personajes/SpiderGwen';
import { SpiderHam } from '../componentes/personajes/SpiderHam';
import { SpidermanJ } from '../componentes/personajes/SpidermanJ';
import { SpidermanManga } from '../componentes/personajes/SpidermanManga';
import { SpidermanNoir } from '../componentes/personajes/SpidermanNoir';
import { SpidermanPavitr } from '../componentes/personajes/SpidermanPavitr';
import { SpidermanSuperior } from '../componentes/personajes/SpidermanSuperior';
import { SpidermanUK } from '../componentes/personajes/SpidermanUK';
import { SpiderPunk } from '../componentes/personajes/SpiderPunk';
import { SpiderWomanJessica } from '../componentes/personajes/SpiderWomanJessica';
import { SpiderWomanMattie } from '../componentes/personajes/SpiderWomanMattie';
import { Venom } from '../componentes/personajes/Venom';
import { SearchPersonaje } from '../componentes/searchPersonaje/SearchPersonaje';

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
          <Route path="/buscarPersonaje" element={<SearchPersonaje/>}/> 
          <Route path="/familia" element={<Familia/>}/> 
          <Route path="/interesAmoroso" element={<InteresesAmorosos/>}/>
          <Route path="/personajesSecundarios" element={<PersonajesSecundarios/>}/>
          <Route path="/personajeApoyo" element={<PersonajeApoyo/>}/> 


          {/* Rutas de los Personajes Villanos*/}   

          <Route path="/personaje/DuendeVerde" element={<DuendeVerde/>}/> 
          <Route path="/personaje/Electro" element={<Electro/>}/>
          <Route path="/personaje/Dr_Octopus" element={<DrOctopus/>}/>  
          <Route path="/personaje/Venom" element={<Venom/>}/>  
          <Route path="/personaje/carnage" element={<Carnage/>}/>  
          <Route path="/personaje/Mysterio" element={<Mysterio/>}/>  
          <Route path="/personaje/Sandman" element={<Sandman/>}/>  
          <Route path="/personaje/Lagarto" element={<Lagarto/>}/>  
          <Route path="/personaje/Buitre" element={<Buitre/>}/>  
          <Route path="/personaje/Escorpion" element={<Escorpion/>}/>  
          <Route path="/personaje/Rhino" element={<Rhino/>}/>  
          <Route path="/personaje/HobGoblin" element={<HobGoblin/>}/>  
          <Route path="/personaje/kingpin" element={<Kingpin/>}/>  
          <Route path="/personaje/Kraven" element={<Kraven/>}/>  
          <Route path="/personaje/mrNegativo" element={<MrNegativo/>}/>  
          <Route path="/personaje/Shocker" element={<Shocker/>}/>  
          <Route path="/personaje/Black_Cat" element={<BlackCat/>}/>  
          <Route path="/personaje/Morbius" element={<Morbius/>}/>  
          <Route path="/personaje/Camaleon" element={<Camaleon/>}/>  
          <Route path="/personaje/Chacal" element={<Chacal/>}/>      


          {/* Rutas de los Personajes SpiderVerse*/}

          <Route path="/personaje/MilesMorales" element={<MilesMorales/>}/> 
          <Route path="/personaje/spiderGwen" element={<SpiderGwen/>}/> 
          <Route path="/personaje/Ezequiel_Sims" element={<EzequielSims/>}/> 
          <Route path="/personaje/MadameWeb" element={<MadameWeb/>}/>
          <Route path="/personaje/Scarlet_Spider" element={<Scarlet_Spider/>}/>
          <Route path="/personaje/Silk" element={<Silk/>}/>
          <Route path="/personaje/Spider_girl" element={<SpiderGirlAnya/>}/>
          <Route path="/personaje/MiguelOhara" element={<MiguelOhara/>}/>
          <Route path="/personaje/SpidermanSuperior" element={<SpidermanSuperior/>}/>
          <Route path="/personaje/SpiderWomanJessica" element={<SpiderWomanJessica/>}/>
          <Route path="/personaje/SpiderwomanMattie" element={<SpiderWomanMattie/>}/>
          <Route path="/personaje/SpidergirlMayday" element={<SpidergirlMayday/>}/>
          <Route path="/personaje/spiderHam" element={<SpiderHam/>}/>
          <Route path="/personaje/spidermanPavitr" element={<SpidermanPavitr/>}/>
          <Route path="/personaje/spidermanManga" element={<SpidermanManga/>}/>
          <Route path="/personaje/spidermanJ" element={<SpidermanJ/>}/>
          <Route path="/personaje/spidermanNoir" element={<SpidermanNoir/>}/>
          <Route path="/personaje/spiderUK" element={<SpidermanUK/>}/>
          <Route path="/personaje/peniParker" element={<PeniParker/>}/>
          <Route path="/personaje/spiderPunk" element={<SpiderPunk/>}/>
      </Routes>
    {/* <FooterApp/> */}
    </BrowserRouter>
  )
}
