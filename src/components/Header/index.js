// Imports

import './header.scss';

import logoAvatar from 'src/assets/images/kisspng-computer-icons-avatar-login-user-avatar-5ac207e6c8c133.5629676315226654468223.png';
import { NavLink } from 'react-router-dom';

// Composant

function Header() {
  return (
    <header className="header">
      <div className="navbar-log">
        <div className="dropdown">
          <button className="btn btn-primary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> Menu
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
        </div>

      </div>
      <h1 className="text-center header__title ">FAMILY TRIP</h1>

    </header>
  );
}

export default Header;
