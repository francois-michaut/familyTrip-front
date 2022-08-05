// Import
import './shopping.scss';

// Composant
function Shopping() {
  return (
    <main className="shopping">
      <h2 className="shopping__title">Créer une liste de courses</h2>
      <div className="shopping__list">
        <div className="mb-3">
          <input type="text" className="form-control" id="activity-type" placeholder="1er ingrédient" />
        </div>
        <div className="mb-3">
          <input type="text" className="form-control" id="activity-type" placeholder="2e ingrédient" />
        </div>
        <div className="mb-3">
          <input type="text" className="form-control" id="activity-type" placeholder="3e ingrédient" />
        </div>
        <div className="mb-3">
          <input type="text" className="form-control" id="activity-type" placeholder="4e ingrédient" />
        </div>
        <div className="mb-3">
          <input type="text" className="form-control" id="activity-type" placeholder="5e ingrédient" />
        </div>
        <div className="shopping__list__buttons">
          <button className=" btn btn-primary" type="button">Ajouter un ingrédient</button>
          <button className=" btn btn-success" type="submit">Valider la liste</button>
        </div>
      </div>
    </main>
  );
}

// Export
export default Shopping;
