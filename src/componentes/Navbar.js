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
                    <a className="nav-link dropdown-toggle"  role="button" data-bs-toggle="dropdown" aria-expanded="false">
                      Actores
                    </a>
                    <ul className="dropdown-menu">
                      <li><a className="dropdown-item electro" href="/actores">Los 3 Spiders</a></li>
                      <li><hr className="dropdown-divider"/></li>
                      <li><a className="dropdown-item electro" href="#">Tobey Maguire</a></li>
                      <li><a className="dropdown-item octopus" href="#">Andrew Garfield</a></li>
                      <li><a className="dropdown-item electro" href="#">Tom Holland</a></li>
                    </ul>
                  </li>
                  <li className="nav-item dropdown navbarButton">
                    <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                      Villanos
                    </a>
                    <ul className="dropdown-menu">
                    <li><a className="dropdown-item electro" href="/villanos">Todos los Villanos</a></li>
                      <li><a className="dropdown-item dropVillanos" href="#">Los 6 Siniestros</a></li>
                      <li><hr className="dropdown-divider"/></li>
                      <li><a className="dropdown-item dropVillanos" href="/personaje/">Electro</a></li>
                      <li><a className="dropdown-item dropVillanos" href="/personaje/">Dr. Octopus</a></li>
                      <li><a className="dropdown-item dropVillanos" href="/personaje/">Duende Verde</a></li>
                      <li><a className="dropdown-item dropVillanos" href="/personaje/">Venom</a></li>
                      <li><a className="dropdown-item dropVillanos" href="/personaje/">Carnage</a></li>
                      <li><a className="dropdown-item dropVillanos" href="/personaje/">Mysterio</a></li>
                      <li><a className="dropdown-item dropVillanos" href="/personaje/">Sandman</a></li>
                      <li><a className="dropdown-item dropVillanos" href="/personaje/">Lagarto</a></li>
                      <li><a className="dropdown-item dropVillanos" href="/personaje/">Buitre</a></li>
                      <li><a className="dropdown-item dropVillanos" href="/personaje/">Escorpión</a></li>
                      <li><a className="dropdown-item dropVillanos" href="/personaje/">Rhino</a></li>
                      <li><a className="dropdown-item dropVillanos" href="/personaje/">Hob-Goblin</a></li>
                      <li><a className="dropdown-item dropVillanos" href="/personaje/">Kingpin</a></li>
                      <li><a className="dropdown-item dropVillanos" href="/personaje/">Kraven "El Cazador"</a></li>
                      <li><a className="dropdown-item dropVillanos" href="/personaje/">Mr. Negativo</a></li>
                      <li><a className="dropdown-item dropVillanos" href="/personaje/">Shocker</a></li>
                      <li><a className="dropdown-item dropVillanos" href="/personaje/">Black Cat</a></li>
                      <li><a className="dropdown-item dropVillanos" href="/personaje/">Morbius</a></li>
                      <li><a className="dropdown-item dropVillanos" href="/personaje/">Camaleón</a></li>
                      <li><a className="dropdown-item dropVillanos" href="/personaje/">Chacal</a></li>
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
                  <li className="nav-item me-5 navbarButton">
                    <a className="nav-link" href="/marvel">MARVEL</a>
                  </li>
                </ul>
                <form className="d-flex" role="search">
                  <input className="form-control me-2" type="search" placeholder="Buscar" aria-label="Search"/>
                  <button className="navbarButton" type="submit">Buscar</button>
                </form>
              </div>
            </div>
        </nav>
      </>
  )
}
