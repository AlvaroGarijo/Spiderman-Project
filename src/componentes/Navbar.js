import React from 'react'
import '../styles/Navbar.css'
import navbarLogo from '../imagenes/imagenes de Logo/navbarLogo.png'

export const Navbar = () => {
  return (
      <>
        <nav className="navbar navbar-expand-md bg-black">
            <div className="wrappNav">
              <div>
                <a href='#'><img className='logoNavbar' src={ navbarLogo } alt='LogoSpiderman' /></a>
              </div>
              
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav  mb-2 mb-lg-0">
                  <li className="nav-item navbarButton">
                    <a className="nav-link active" aria-current="page" href="#">Spiderman</a>
                  </li>
                  <li className="nav-item navbarButton">
                    <a className="nav-link" href="#">Cómics</a>
                  </li>
                  <li className="nav-item navbarButton">
                    <a className="nav-link" href="#">Actores</a>
                  </li>
                  <li className="nav-item dropdown navbarButton">
                    <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                      Villanos
                    </a>
                    <ul className="dropdown-menu">
                      <li><a className="dropdown-item siniestros" href="#">Los 6 Siniestros</a></li>
                      <li><hr className="dropdown-divider"/></li>
                      <li><a className="dropdown-item electro" href="#">Electro</a></li>
                      <li><a className="dropdown-item octopus" href="#">Dr. Octopus</a></li>
                    </ul>
                  </li>
                  <li className="nav-item dropdown navbarButton">
                    <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                      Spiders
                    </a>
                    <ul className="dropdown-menu">
                      <li><a className="dropdown-item" href="#">Miles Morales</a></li>
                      <li><a className="dropdown-item" href="#">Gwen Stacey</a></li>
                      <li><hr className="dropdown-divider"/></li>
                      <li><a className="dropdown-item" href="#">Simbiontes</a></li>
                    </ul>
                  </li>
                  <li className="nav-item me-5 navbarButton">
                    <a className="nav-link" href="#">MARVEL</a>
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
