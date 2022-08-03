// Import

import './mainPage.scss';

// Composant

function MainPage() {
  return (
    <main>
      <h2 className="main__title">Gérez vos vacances comme vous l'entendez!!<br /> Shopping, activités, souvenirs ??<br /> Vous créez et vous partagez </h2>
      <div className="category activities">
        <h3>
          <a href="#">Activités</a>
        </h3>
      </div>
      <div className="category shopping">
        <h3>
          <a href="#">Shopping</a>
        </h3>
      </div>
      <div className="category remembers">
        <h3>
          <a href="#">Souvenirs</a>
        </h3>
      </div>
      <div className="category tribe">
        <h3>
          <a href="#">Tribu</a>
        </h3>
      </div>
    </main>
  );
}
// export

export default MainPage;
