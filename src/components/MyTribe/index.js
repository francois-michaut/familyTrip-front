// Import
import Card from '../Card';
import './myTribe.scss';

// Composant

function MyTribe() {
  return (
    <main className="myTribe">
      <h2 className="myTribe__title">
        Bienvenue dans la tribu ....
      </h2>
      <section className="row justify-content-around">
        <div className="col-12">
          <Card
            title="Vos activités"
            text="Vous n'avez aucune activité."
            button="En créer une"
            slug="activity"
          />
        </div>
        <div className="col-12 ">
          <Card
            title="Vos souvenirs"
            text="Vous n'avez aucun souvenir."
            button="En créer un"
            slug="remember"
          />
        </div>
        <div className="col-12 ">
          <Card
            title="Vos shoppingList"
            text="Vous n'avez aucune shoppingList."
            button="En créer une"
            slug="shopping"
          />
        </div>
      </section>
    </main>
  );
}

// export
export default MyTribe;
