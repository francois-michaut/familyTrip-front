// Import
import './tribe.scss';

// Composant
function Tribe() {
  return (
    <main className="tribe">
      <h2 className="tribe__title">
        Le coin des tribus
      </h2>
      <div className="tribe__section">
        <h3 className="tribe__section__title">Retrouver une tribu</h3>
        <div className="mb-3">
          <label htmlFor="tribe-finder" className="form-label" />
          <input type="text" className="form-control" id="tribe-finder" placeholder="Nom d'une tribu" />
        </div>
        <div className="tribe__form__button">
          <button type="button" className="btn btn-success">Rechercher </button>
        </div>
        <h2 className="tribe__title">OU</h2>
        <h3 className="tribe__section__title">Créer une tribu</h3>
        <div className="mb-3">
          <label htmlFor="tribe-finder" className="form-label" />
          <input type="text" className="form-control" id="tribe-finder" placeholder="Nom de la tribu" />
        </div>
        <div className="tribe__form__button">
          <button type="button" className="btn btn-success">Créer </button>
        </div>
      </div>
    </main>
  );
}
// export
export default Tribe;
