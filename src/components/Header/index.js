// Imports

import './header.scss';

// Composant

function Header() {
  return (
    <header>
      <div className="navbar-log">
        <div className="dropdown">
          <button className="btn btn-primary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> Menu
          </button>
          <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <a className="dropdown-item" href="#">Accueil</a>
            <a className="dropdown-item" href="activities.html">Activités</a>
            <a className="dropdown-item" href="#">Shopping</a>
            <a className="dropdown-item" href="#">Souvenirs</a>
            <a className="dropdown-item" href="#">Tribe Creation</a>
          </div>
        </div>
        <div className="connexionBlock">
          <img className="avatar" src="images/kisspng-computer-icons-avatar-login-user-avatar-5ac207e6c8c133.5629676315226654468223.png" alt="avatar " />
        </div>

      </div>
      <h1 className="text-center">FAMILY TRIP</h1>

    </header>
  );
}

export default Header;
