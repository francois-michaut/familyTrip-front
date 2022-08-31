/* eslint-disable jsx-a11y/label-has-associated-control */
// Import
import { useDispatch, useSelector } from 'react-redux';
import {
  postRemember,
  saveDateRemember, saveLocationRemember, saveMembersRemember, saveNameRemember,
} from '../../actions/remember';
import './remember.scss';

// Composant

function Remember() {
  const dateRemember = useSelector((state) => state.remember.dateRemember);
  const locationRemember = useSelector((state) => state.remember.locationRemember);
  const membersRemember = useSelector((state) => state.remember.membersRemember);
  const nameRemember = useSelector((state) => state.remember.nameRemember);
  const dispatch = useDispatch();

  function handleDateRemember(evt) {
    dispatch(saveDateRemember(evt.target.value));
  }
  function handleLocationRemember(evt) {
    dispatch(saveLocationRemember(evt.target.value));
  }
  function handleMembersRemember(evt) {
    dispatch(saveMembersRemember(evt.target.value));
  }
  function handleNameRemember(evt) {
    dispatch(saveNameRemember(evt.target.value));
  }
  function handleSubmitRemember() {
    dispatch(postRemember());
  }
  return (
    <main className="remember">
      <h2 className="remember__title">Créer un souvenir</h2>
      <div className="remember__form">
        <div className="mb-3">
          <label htmlFor="remember-name" className="form-label">Nom du souvenir</label>
          <input
            type="text"
            className="form-control"
            id="remember-name"
            placeholder="Un jour à Paris"
            value={nameRemember}
            onChange={handleNameRemember}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="remember-date" className="form-label">Date du souvenir</label>
          <input
            type="date"
            className="form-control"
            id="remember-date"
            placeholder="01/01/2022"
            value={dateRemember}
            onChange={handleDateRemember}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="remember-place" className="form-label">Lieu du souvenir</label>
          <input
            type="text"
            className="form-control"
            id="remember-place"
            placeholder="Nice"
            value={locationRemember}
            onChange={handleLocationRemember}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="remember-members" className="form-label">Qui était là?</label>
          <textarea
            type="text"
            className="form-control"
            id="remember-members"
            placeholder="Christophe, Jean-Charles ..."
            value={membersRemember}
            onChange={handleMembersRemember}
          />
        </div>
        <div className="mb-3 ">
          <label htmlFor="inputGroupFile04" className="form-label">Importer des photos</label>
          <div className="input-group">
            <input
              type="file"
              className="form-control"
              id="inputGroupFile04"
              aria-describedby="inputGroupFileAddon04"
              aria-label="Upload"
              // onChange={}
            />
          </div>
        </div>
        <div className="activity__form__button">
          <button type="button" className="btn btn-success" onClick={handleSubmitRemember}>Créer le souvenir</button>
        </div>
      </div>
    </main>
  );
}
// export
export default Remember;
