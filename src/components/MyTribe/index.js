// Import
import './myTribe.scss';

// Composant

function MyTribe() {
  return (
    <main className="myTribe">
      <h2 className="myTribe__title">
        Bienvenue dans la tribu ....
      </h2>
      <section className="row justify-content-around">
        <div className="myTribe__members col-10 col-lg-5">
          <h3 className="myTribe__members--title">
            Les différents membres de votre tribu
          </h3>
          <ul className="myTribe__members--list">
            <li>Castor</li>
            <li>Polux</li>
            <li>Seya</li>
            <li>Shiryu</li>
          </ul>
        </div>
        <div className="myTribe__shoppingList col-10 col-lg-5">
          <h3 className="myTribe__shoppingList--title">
            Vos shoppingList
          </h3>
          <ul className="myTribe__shoppingList--list">
            <li>pain</li>
            <li>pq</li>
            <li>gâteaux</li>
            <li>café</li>
          </ul>
        </div>
      </section>
      <section className="row justify-content-around">
        <div className="myTribe__activities col-10 col-lg-5">
          <h3 className="myTribe__activities--title">
            Vos activités programmées
          </h3>
          <ul className="myTribe__activities--list">
            <li>Randonnée le 12/03/2022 à Paris</li>
            <li>Canöé-kayak le 08/08/2022 à Carcassonne</li>
          </ul>
        </div>
        <div className="myTribe__remembers col-10 col-lg-5">
          <h3 className="myTribe__remembers--title">
            Vos souvenirs
          </h3>
          <ul className="myTribe__remembers--list">
            <li>Randonnée le 12/03/2022 à Paris</li>
            <li>Canöé-kayak le 08/08/2022 à Carcassonne</li>
          </ul>
        </div>
      </section>
    </main>
  );
}

// export
export default MyTribe;
