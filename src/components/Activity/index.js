/* eslint-disable jsx-a11y/label-has-associated-control */
// Import
import { useDispatch, useSelector } from 'react-redux';
import {
  saveTypeActivity,
  saveDateActivity,
  saveDurationActivity,
  saveHourlyActivity,
  saveLocationActivity,
  saveMembersActivity,
  saveMoreActivity,
  postActivity,
} from '../../actions/activity';
import './activity.scss';
// Composant

function Activity() {
  const dispatch = useDispatch();
  const typeActivity = useSelector((state) => state.activities.typeActivity);
  const dateActivity = useSelector((state) => state.activities.dateActivity);
  const moreActivity = useSelector((state) => state.activities.moreActivity);
  const membersActivity = useSelector((state) => state.activities.membersActivity);
  const durationActivity = useSelector((state) => state.activities.durationActivity);
  const hourlyActivity = useSelector((state) => state.activities.hourlyActivity);
  const locationActivity = useSelector((state) => state.activities.locationActivity);

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

  function handleSubmitActivity() {
    dispatch(postActivity());
  }

  return (
    <main className="activity">
      <h2 className="activity__title"> Programmer une activité</h2>
      <div className="activity__form">
        <div className="mb-3">
          <label htmlFor="activity-type" className="form-label">Type d'activités</label>
          <input
            type="text"
            className="form-control"
            id="activity-type"
            placeholder="randonnée"
            onChange={handleTypeActivity}
            value={typeActivity}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="activity-date" className="form-label">Date</label>
          <input
            type="date"
            className="form-control"
            id="activity-date"
            placeholder="01/01/2024"
            onChange={handleDateActivity}
            value={dateActivity}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="activity-duration" className="form-label">Durée de l'activité</label>
          <input
            type="text"
            className="form-control"
            id="activity-duration"
            placeholder="1h"
            onChange={handleDurationActivity}
            value={durationActivity}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="activity-hourly" className="form-label">Horaires</label>
          <input
            type="text"
            className="form-control"
            id="activity-hourly"
            placeholder="de 13h à 15h"
            onChange={handleHourlyActivity}
            value={hourlyActivity}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="activity-location" className="form-label">Lieu</label>
          <input
            type="text"
            className="form-control"
            id="activity-location"
            placeholder="Nice"
            onChange={handleLocationActivity}
            value={locationActivity}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="activity-members" className="form-label">Nombre de personnes max.</label>
          <input
            type="number"
            className="form-control"
            id="activity-members"
            placeholder="4"
            onChange={handleMembersActivity}
            value={membersActivity}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="activity-toCheck" className="form-label">A prévoir</label>
          <textarea
            type="text"
            className="form-control"
            id="activity-toCheck"
            placeholder="Crème solaire, gourde..."
            onChange={handleMoreActivity}
            value={moreActivity}
          />
        </div>
        <div className="activity__form__button">
          <button type="button" className="btn btn-success" onClick={handleSubmitActivity}>Créer l' activité</button>
        </div>
      </div>
    </main>
  );
}

// export
export default Activity;
