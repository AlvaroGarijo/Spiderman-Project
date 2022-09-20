import React from 'react'
import '../styles/Navbar.css'
import navbarLogo from '../imagenes/navbarLogo.png'

export const Navbar = () => {

  
  return (
      <>
        <nav className="navbar navbar-expand-md bg-black mb-4">
            <div className="wrappNav">
              <div>
                <a href='/'><img className='logoNavbar' src={ navbarLogo } alt='LogoSpiderman' /></a>
              </div>
              
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav  mb-2 mb-lg-0">
                  <li className="nav-item navbarButton">
                    <a className="nav-link active" aria-current="page" href="/spiderman">Spider-Man</a>
                  </li>
                  <li className="nav-item navbarButton">
                    <a className="nav-link" href="/comics">Cómics</a>
                  </li>
                  <li className="nav-item dropdown navbarButton">
                    <a className="nav-link dropdown-toggle" href='#' role="button" data-bs-toggle="dropdown" aria-expanded="false">
                      Películas
                    </a>
                    <ul className="dropdown-menu">
                      <li><a className="dropdown-item electro" href="/primeraTrilogiaTobey">Primera Trilogía (Tobey)</a></li>
                      <li><a className="dropdown-item electro" href="/amazigSpiderAndrew">Amazing Spider-Man (Andrew)</a></li>
                      <li><a className="dropdown-item electro" href="/spiderUCM_Tom">UCM Spider-Man (Tom)</a></li>
                      <li><a className="dropdown-item electro" href="/spider_verse">Spider-Verse (Miles)</a></li>
                      <li><a className="dropdown-item electro" href="/primerActor">Primer Actor (Nicholas)</a></li>
                    </ul>
                  </li>
                  <li className="nav-item dropdown navbarButton">
                    <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                      Villanos
                    </a>
                    <ul className="dropdown-menu">
                    <li><a className="dropdown-item electro" href="/villanos">Todos los Villanos</a></li>
                      {/* <li><a className="dropdown-item dropVillanos" href="#">Los 6 Siniestros</a></li> */}
                      <li><hr className="dropdown-divider"/></li>
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
                    </ul>
                  </li>
                  <li className="nav-item dropdown navbarButton">
                    <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                      Spiders
                    </a>
                    <ul className="dropdown-menu">
                    <li><a className="dropdown-item electro" href="/spiders">Spider-Verse</a></li>
                    <li><hr className="dropdown-divider"/></li>
                      <li><a className="dropdown-item dropSpiders" href="/personaje/MilesMorales">Miles Morales</a></li>
                      <li><a className="dropdown-item dropSpiders" href="/personaje/spiderGwen">Gwen Stacey</a></li>
                      <li><a className="dropdown-item dropSpiders" href="/personaje/Ezequiel_Sims">Ezequiel Sims</a></li>
                      <li><a className="dropdown-item dropSpiders" href="/personaje/MadameWeb">Madame Web</a></li>
                      <li><a className="dropdown-item dropSpiders" href="/personaje/Scarlet_Spider">Araña Escarlata</a></li>
                      <li><a className="dropdown-item dropSpiders" href="/personaje/Silk">Silk (Cindy Moon)</a></li>
                      <li><a className="dropdown-item dropSpiders" href="personaje/Spider_girl">Spider-Girl (Anya Corazón)</a></li>
                      <li><a className="dropdown-item dropSpiders" href="/personaje/MiguelOhara">Miguel O`hara (Spider-Man)</a></li>
                      <li><a className="dropdown-item dropSpiders" href="/personaje/SpidermanSuperior">Spider-Man Superior (Eliot Tolliver)</a></li>
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
                      <li><hr className="dropdown-divider"/></li>
                      <li><a className="dropdown-item dropSpiders" href="#">Simbiontes</a></li>
                    </ul>
                  </li>
                  <li className="nav-item navbarButton">
                    <a className="nav-link" href="/marvel">Marvel</a>
                  </li>
                  <li className="nav-item navbarButton">
                    <a className="nav-link navPersonaje" href="/buscarPersonaje">Buscar Personajes</a>
                  </li>
                </ul>
                
              </div>
            </div>
        </nav>
      </>
  )
}
