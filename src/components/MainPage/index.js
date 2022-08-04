// Import

import './mainPage.scss';

import activityImage from 'src/assets/images/velo-natation-randonnee-quel-sport-ete-choisir-pour-bruler-plus-calories.jpg';
import shoppingImage from 'src/assets/images/20-aliments-pour-un-ete-en-pleine-forme.jpg';
import rememberImage from 'src/assets/images/vignette-focus.jpg';
import tribeImage from 'src/assets/images/post_image_100.jpg';
// Composant

function MainPage() {
  return (
    <main className="container text-center ">
      <h2 className="main__title ">Gérez vos vacances comme vous l'entendez!! Shopping, activités, souvenirs?? Vous créez et vous partagez </h2>
      <div className="row justify-content-around p-2">
        <div className="card col-10 col-lg-5 m-2 ">
          <img src={activityImage} className="card-img-top" alt="canoë-kayak" />
          <div className="card-img-overlay">
            <h3 className="card-title fw-bolder ">Activités</h3>
          </div>
          <div className="card-body">
            <p className="card-text p-2">Partez en excursion avec vos amis sans soucis!</p>
            <a href="#" className="btn btn-primary">Créez une activité</a>
          </div>
        </div>
        <div className="card col-10 col-lg-5 m-2">
          <img src={shoppingImage} className="card-img-top" alt="canoë-kayak" />
          <div className="card-img-overlay">
            <h3 className="card-title fw-bolder ">Shopping</h3>
          </div>
          <div className="card-body">
            <p className="card-text p-2">Plus besoin de post-it, plus de liste oubliée... paratgez avec vos amis et ayez tout le temps sur vous le menu de ce soir!</p>
            <a href="#" className="btn btn-primary">Créez une liste de shopping</a>
          </div>
        </div>
      </div>
      <div className="row justify-content-around p-2">
        <div className="card col-10 col-lg-5 m-2">
          <img src={rememberImage} className="card-img-top" alt="effets de voyage" />
          <div className="card-img-overlay">
            <h3 className="card-title fw-bolder ">Souvenirs</h3>
          </div>
          <div className="card-body">
            <p className="card-text p-2">Partagez en famille ou avec des amis vos meilleurs souvenirs </p>
            <a href="#" className="btn btn-primary">Créez un souvenir</a>
          </div>
        </div>
        <div className="card col-10 col-lg-5 m-2">
          <img src={tribeImage} className="card-img-top" alt="canoë-kayak" />
          <div className="card-img-overlay">
            <h3 className="card-title fw-bolder ">Tribu</h3>
          </div>
          <div className="card-body">
            <p className="card-text p-2">Amenez vos proches à faire partie de votre tribu et partagez tout </p>
            <a href="#" className="btn btn-primary">Créez une tribu</a>
          </div>
        </div>
      </div>
    </main>
  );
}
// export

export default MainPage;
