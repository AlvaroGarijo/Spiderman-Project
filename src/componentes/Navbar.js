import React from 'react'
import './styles/Navbar.css'
import navbarLogo from '../imagenes/navbarLogo.png'

export const Navbar = () => {

  
  return (
      <>
        <nav className="navbar navbar-expand-lg">
            <div className="container-fluid">
              <a href='/'><img className='logoNavbar' src={ navbarLogo } alt='LogoSpiderman' /></a>
              <div className="collapse navbar-collapse" id="navbarToggleExternalContent">
                  <ul className="navbar-nav">
                    <li className="nav-item navbarButton">
                      <a className="nav-link active" aria-current="page" href="/spiderman">Spider-Man</a>
                    </li>
                    <li className="nav-item navbarButton">
                      <a className="nav-link" href="/comics">Cómics</a>
                    </li>
                    <li className="nav-item dropdown navbarButton">
                      <a className="nav-link dropdown-toggle"  id="dropdownMenuButton" href="villanos" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                       Villanos
                      </a>
                        <ul className="dropdown-menu dropdown-menu-end dropdown-menu-lg-start">
                        <li><a className="dropdown-item allVillains" href="/villanos">Todos los Villanos</a></li>
                          {/* <li><a className="dropdown-item dropVillanos" href="#">Los 6 Siniestros</a></li> */}
                         
                          <li><a className="dropdown-item dropVillanos" href="/personaje/DuendeVerde">Duende Verde</a></li>
                          <li><a className="dropdown-item dropVillanos" href="/personaje/Electro">Electro</a></li>
                          <li><a className="dropdown-item dropVillanos" href="/personaje/Dr_Octopus">Dr Octopus</a></li>
                          <li><a className="dropdown-item dropVillanos" href="/personaje/Venom">Venom</a></li>
                          <li><a className="dropdown-item dropVillanos" href="/personaje/carnage">Carnage</a></li>
                          <li><a className="dropdown-item dropVillanos" href="/personaje/Mysterio">Mysterio</a></li>
                          <li><a className="dropdown-item dropVillanos" href="/personaje/Sandman">Sandman</a></li>
                          <li><a className="dropdown-item dropVillanos" href="/personaje/Lagarto">Lagarto</a></li>
                          <li><a className="dropdown-item dropVillanos" href="/personaje/Buitre">Buitre</a></li>
                          <li><a className="dropdown-item dropVillanos" href="/personaje/Escorpion">Escorpión</a></li>
                          <li><a className="dropdown-item dropVillanos" href="/personaje/Rhino">Rhino</a></li>
                          <li><a className="dropdown-item dropVillanos" href="/personaje/HobGoblin">Hob-Goblin</a></li>
                          <li><a className="dropdown-item dropVillanos" href="/personaje/kingpin">Kingpin</a></li>
                          <li><a className="dropdown-item dropVillanos" href="/personaje/Kraven">Kraven "El Cazador"</a></li>
                          <li><a className="dropdown-item dropVillanos" href="/personaje/mrNegativo">Mr. Negativo</a></li>
                          <li><a className="dropdown-item dropVillanos" href="/personaje/Shocker">Shocker</a></li>
                          <li><a className="dropdown-item dropVillanos" href="/personaje/Black_Cat">Black Cat</a></li>
                          <li><a className="dropdown-item dropVillanos" href="/personaje/Morbius">Morbius</a></li>
                          <li><a className="dropdown-item dropVillanos" href="/personaje/Camaleon">Camaleón</a></li>
                          <li><a className="dropdown-item dropVillanos" href="/personaje/Chacal">Chacal</a></li>
                          <li><a className="dropdown-item dropVillanos" href="/personaje/Morlun">Morlun</a></li>
                        </ul>
                      </li>
                      <li className="nav-item dropdown navbarButton">
                        <a className="nav-link dropdown-toggle" href="spider" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                         Spiders
                        </a>
                          <ul className="dropdown-menu dropdown-menu-end dropdown-menu-lg-start">
                          <li><a className="dropdown-item spiderVerse" href="/spiders">Spider-Verse</a></li>
      
                            <li><a className="dropdown-item dropSpiders" href="/personaje/MilesMorales">Miles Morales</a></li>
                            <li><a className="dropdown-item dropSpiders" href="/personaje/spiderGwen">Gwen Stacey</a></li>
                            <li><a className="dropdown-item dropSpiders" href="/personaje/Ezekiel_Sims">Ezekiel Sims</a></li>
                            <li><a className="dropdown-item dropSpiders" href="/personaje/MadameWeb">Madame Web</a></li>
                            <li><a className="dropdown-item dropSpiders" href="/personaje/ScarletSpider">Araña Escarlata</a></li>
                            <li><a className="dropdown-item dropSpiders" href="/personaje/Silk">Silk (Cindy Moon)</a></li>
                            <li><a className="dropdown-item dropSpiders" href="/personaje/SpiderGirl">Spider-Girl (Anya Corazón)</a></li>
                            <li><a className="dropdown-item dropSpiders" href="/personaje/MiguelOhara">Miguel O`hara (Spider-Man)</a></li>
                            <li><a className="dropdown-item dropSpiders" href="/personaje/SpidermanSuperior">Spider-Man Superior</a></li>
                            <li><a className="dropdown-item dropSpiders" href="/personaje/SpiderWomanJessica">Spider-Woman (Jessica Drew)</a></li>
                            <li><a className="dropdown-item dropSpiders" href="/personaje/SpiderwomanMattie">Spider-Woman (Mattie Franklin)</a></li>
                            <li><a className="dropdown-item dropSpiders" href="/personaje/SpidergirlMayday">Spider-Girl (Mayday Parker)</a></li>
                            <li><a className="dropdown-item dropSpiders" href="/personaje/spiderHam">Spider-Ham</a></li>
                            <li><a className="dropdown-item dropSpiders" href="/personaje/spidermanPavitr">Spider-Man (Pavitr Prabhakar)</a></li>
                            <li><a className="dropdown-item dropSpiders" href="/personaje/spidermanManga">Spider-Man (Mangaverse)</a></li>
                            <li><a className="dropdown-item dropSpiders" href="/personaje/spidermanJ">Spider-Man J</a></li>
                            <li><a className="dropdown-item dropSpiders" href="/personaje/spidermanNoir">Spider-Man Noir</a></li>
                            <li><a className="dropdown-item dropSpiders" href="/personaje/spiderUK">Spider-UK</a></li>
                            <li><a className="dropdown-item dropSpiders" href="/personaje/peniParker">Peni Parker</a></li>
                            <li><a className="dropdown-item dropSpiders" href="/personaje/spiderPunk">Spider Punk</a></li>
                            {/* <li><hr className="dropdown-divider"/></li> */}
                            {/* <li><a className="dropdown-item dropSpiders" href="#">Simbiontes</a></li> */}
                          </ul>
                      </li>
                      <li className="nav-item navbarButton navbarButtonSearch">
                        <a className="nav-link navPersonaje" href="/buscarPersonaje">Buscar Personajes</a>
                      </li>
                  </ul>
                </div>
                  <div class="navbar-dark">
                    <div class="container-fluid">
                      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                      </button>
                    </div>
                  </div>
              
              </div>
            </nav>























      





















     
      </>
  )
}
