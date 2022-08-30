/* eslint-disable jsx-a11y/label-has-associated-control */
// Import
import { useDispatch } from 'react-redux';
import {
  saveTypeActivity,
  saveDateActivity,
  saveDurationActivity,
  saveHourlyActivity,
  saveLocationActivity,
  saveMembersActivity,
  saveMoreActivity,
} from '../../actions/activity';
import './activity.scss';
// Composant

function Activity() {
  const dispatch = useDispatch();

  function handleTypeActivity(evt) {
    dispatch(saveTypeActivity(evt.target.value));
  }

  function handleDateActivity(evt) {
    dispatch(saveDateActivity(evt.target.value));
  }

  function handleDurationActivity(evt) {
    dispatch(saveDurationActivity(evt.target.value));
  }

  function handleHourlyActivity(evt) {
    dispatch(saveHourlyActivity(evt.target.value));
  }

  function handleLocationActivity(evt) {
    dispatch(saveLocationActivity(evt.target.value));
  }

  function handleMembersActivity(evt) {
    dispatch(saveMembersActivity(evt.target.value));
  }

  function handleMoreActivity(evt) {
    dispatch(saveMoreActivity(evt.target.value));
  }

  return (
    <main className="activity">
      <h2 className="activity__title"> Programmer une activité</h2>
      <div className="activity__form">
        <div className="mb-3">
          <label htmlFor="activity-type" className="form-label">Type d'activités</label>
          <input type="text" className="form-control" id="activity-type" placeholder="randonnée" onChange={handleTypeActivity} />
        </div>
        <div className="mb-3">
          <label htmlFor="activity-date" className="form-label">Date</label>
          <input type="date" className="form-control" id="activity-date" placeholder="01/01/2024" onChange={handleDateActivity} />
        </div>
        <div className="mb-3">
          <label htmlFor="activity-duration" className="form-label">Durée de l'activité</label>
          <input type="text" className="form-control" id="activity-duration" placeholder="1h" onChange={handleDurationActivity} />
        </div>
        <div className="mb-3">
          <label htmlFor="activity-hourly" className="form-label">Horaires</label>
          <input type="text" className="form-control" id="activity-hourly" placeholder="de 13h à 15h" onChange={handleHourlyActivity} />
        </div>
        <div className="mb-3">
          <label htmlFor="activity-location" className="form-label">Lieu</label>
          <input type="text" className="form-control" id="activity-location" placeholder="Nice" onChange={handleLocationActivity} />
        </div>
        <div className="mb-3">
          <label htmlFor="activity-members" className="form-label">Nombre de personnes max.</label>
          <input type="number" className="form-control" id="activity-members" placeholder="4" onChange={handleMembersActivity} />
        </div>
        <div className="mb-3">
          <label htmlFor="activity-toCheck" className="form-label">A prévoir</label>
          <textarea type="text" className="form-control" id="activity-toCheck" placeholder="Crème solaire, gourde..." onChange={handleMoreActivity} />
        </div>
        <div className="activity__form__button">
          <button type="button" className="btn btn-success">Créer l' activité</button>
        </div>
      </div>
    </main>
  );
}

// export
export default Activity;
