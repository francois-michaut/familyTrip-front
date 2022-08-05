// import
import './activity.scss';
// Composant

function Activity() {
  return (
    <main className="activity">
      <h2 className="activity__title"> Programmer une activité</h2>
      <div className="activity__form">
        <div className="mb-3">
          <label htmlFor="activity-type" className="form-label">Type d'activités</label>
          <input type="text" className="form-control" id="activity-type" placeholder="randonnée" />
        </div>
        <div className="mb-3">
          <label htmlFor="activity-type" className="form-label">Date</label>
          <input type="date" className="form-control" id="activity-type" placeholder="01/01/2024" />
        </div>
        <div className="mb-3">
          <label htmlFor="activity-type" className="form-label">Durée de l'activité</label>
          <input type="text" className="form-control" id="activity-type" placeholder="1h" />
        </div>
        <div className="mb-3">
          <label htmlFor="activity-type" className="form-label">Horaires</label>
          <input type="text" className="form-control" id="activity-type" placeholder="de 13h à 15h" />
        </div>
        <div className="mb-3">
          <label htmlFor="activity-type" className="form-label">Lieu</label>
          <input type="text" className="form-control" id="activity-type" placeholder="Nice" />
        </div>
        <div className="mb-3">
          <label htmlFor="activity-type" className="form-label">Nombre de personnes max.</label>
          <input type="number" className="form-control" id="activity-type" placeholder="4" />
        </div>
        <div className="mb-3">
          <label htmlFor="activity-type" className="form-label">A prévoir</label>
          <textarea type="text" className="form-control" id="activity-type" placeholder="Crème solaire, gourde..." />
        </div>
        <div className="activity__form__button">
          <button type="button" className="btn btn-success">Créer une activité</button>
        </div>
      </div>
    </main>
  );
}

// export
export default Activity;
