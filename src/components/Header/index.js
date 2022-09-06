// Imports

import './header.scss';

import logoAvatar from 'src/assets/images/kisspng-computer-icons-avatar-login-user-avatar-5ac207e6c8c133.5629676315226654468223.png';
import { NavLink } from 'react-router-dom';

// Composant

function Header() {
  return (
    <header className="header">
      <div className="navbar-log">
        <div className="dropdown d-lg-none ">
          <button className="btn btn-primary fixed-top dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> Menu
          </button>
          <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <NavLink className="dropdown-item" to="/">Accueil</NavLink>
            <NavLink className="dropdown-item" to="/Activity">Activités</NavLink>
            <NavLink className="dropdown-item" to="/Shopping">Shopping</NavLink>
            <NavLink className="dropdown-item" to="/Remember">Souvenirs</NavLink>
            <NavLink className="dropdown-item" to="/Tribe">Tribe Creation</NavLink>
          </div>
        </div>
        <div className="connexionBlock">
          <img className="avatar" src={logoAvatar} alt="avatar " />
          <a className="nav-link" href="/Connexion">Se connecter</a>
        </div>

      </div>
      <h1 className="text-center header__title m-2"><a href="/">FAMILY TRIP</a></h1>
      <nav className="navbar bg-dark d-none d-lg-block navbar-expand-lg bg-light my-2">
        <div className="container-fluid">
          <div className="collapse navbar-collapse " id="navbarNav">
            <ul className="navbar-nav text-light p-2 justify-content-around d-flex">
              <li className="nav-item ">
                <a className="nav-link " aria-current="page" href="/">Accueil</a>
              </li>
              <li className="nav-item">
                <a className="nav-link " aria-current="page" href="/Activity">Activités</a>
              </li>
              <li className="nav-item">
                <a className="nav-link " href="/Shopping">Shopping</a>
              </li>
              <li className="nav-item">
                <a className="nav-link " href="/Remember">Souvenirs</a>
              </li>
              <li className="nav-item">
                <a className="nav-link " href="/Tribe">Tribu</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

    </header>
  );
}

export default Header;
