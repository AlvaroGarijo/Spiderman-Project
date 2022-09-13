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
                      <li><a className="dropdown-item dropVillanos" href="#">Electro</a></li>
                      <li><a className="dropdown-item dropVillanos" href="#">Dr. Octopus</a></li>
                      <li><a className="dropdown-item dropVillanos" href="#">Duende Verde</a></li>
                      <li><a className="dropdown-item dropVillanos" href="#">Venom</a></li>
                      <li><a className="dropdown-item dropVillanos" href="#">Mysterio</a></li>
                      <li><a className="dropdown-item dropVillanos" href="#">Sandman</a></li>
                      <li><a className="dropdown-item dropVillanos" href="#">Lagarto</a></li>
                      <li><a className="dropdown-item dropVillanos" href="#">Buitre</a></li>
                      <li><a className="dropdown-item dropVillanos" href="#">Escorpión</a></li>
                      <li><a className="dropdown-item dropVillanos" href="#">Rhino</a></li>
                      <li><a className="dropdown-item dropVillanos" href="#">Hob-Goblin</a></li>
                      <li><a className="dropdown-item dropVillanos" href="#">Kingpin</a></li>
                      <li><a className="dropdown-item dropVillanos" href="#">Kraven "El Cazador"</a></li>
                      <li><a className="dropdown-item dropVillanos" href="#">Shocker</a></li>
                      <li><a className="dropdown-item dropVillanos" href="#">Black Cat</a></li>
                      <li><a className="dropdown-item dropVillanos" href="#">Morbius</a></li>
                      <li><a className="dropdown-item dropVillanos" href="#">Camaleón</a></li>
                      <li><a className="dropdown-item dropVillanos" href="#">Chacal</a></li>
                    </ul>
                  </li>
                  <li className="nav-item dropdown navbarButton">
                    <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                      Spiders
                    </a>
                    <ul className="dropdown-menu">
                    <li><a className="dropdown-item electro" href="/spiders">Spider-Verse</a></li>
                    <li><hr className="dropdown-divider"/></li>
                      <li><a className="dropdown-item dropSpiders" href="#">Miles Morales</a></li>
                      <li><a className="dropdown-item dropSpiders" href="#">Gwen Stacey</a></li>
                      <li><a className="dropdown-item dropSpiders" href="#">Ezequiel Sims</a></li>
                      <li><a className="dropdown-item dropSpiders" href="#">Madame Web</a></li>
                      <li><a className="dropdown-item dropSpiders" href="#">Araña Escarlata</a></li>
                      <li><a className="dropdown-item dropSpiders" href="#">Silk (Cindy Moon)</a></li>
                      <li><a className="dropdown-item dropSpiders" href="#">Spider-Girl (Anya Corazón)</a></li>
                      <li><a className="dropdown-item dropSpiders" href="#">Miguel O`hara (Spider-Man)</a></li>
                      <li><a className="dropdown-item dropSpiders" href="#">Spider-Man Superior (Eliot Tolliver)</a></li>
                      <li><a className="dropdown-item dropSpiders" href="#">Spider-Woman (Jessica Drew)</a></li>
                      <li><a className="dropdown-item dropSpiders" href="#">Spider-Woman (Mattie Franklin)</a></li>
                      <li><a className="dropdown-item dropSpiders" href="#">Spider-Girl (Mayday Parker)</a></li>
                      <li><a className="dropdown-item dropSpiders" href="#">Spider-Ham</a></li>
                      <li><a className="dropdown-item dropSpiders" href="#">Spider-Man (Pavitr Prabhakar)</a></li>
                      <li><a className="dropdown-item dropSpiders" href="#">Spider-Man (Mangaverse)</a></li>
                      <li><a className="dropdown-item dropSpiders" href="#">Spider-Man J</a></li>
                      <li><a className="dropdown-item dropSpiders" href="#">Spider-Man Noir</a></li>
                      <li><a className="dropdown-item dropSpiders" href="#">Spider-UK</a></li>
                      <li><a className="dropdown-item dropSpiders" href="#">Peni Parker</a></li>
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
