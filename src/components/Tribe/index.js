/* eslint-disable jsx-a11y/label-has-associated-control */
// Import
import './tribe.scss';

import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import {
  getUser, postTribeName, saveTribeName, getTribes,
} from '../../actions/users';

// import { getUser } from '../../actions/users';

// Composant
function Tribe() {
  const dispatch = useDispatch();
  const tribeName = useSelector((state) => state.tribe.tribeName);
  const tribesList = useSelector((state) => state.tribe.tribesList);

  useEffect(
    () => {
      dispatch(getUser());
      dispatch(getTribes());
    },
    [],
  );

  function handleTribeInput(evt) {
    dispatch(saveTribeName(evt.target.value));
  }

  function handleFormSubmit(evt) {
    evt.preventDefault();
    dispatch(postTribeName());
  }

  return (
    <main className="tribe">
      <h2 className="tribe__title">
        Le coin des tribus
      </h2>
      <form className="tribe__section" onSubmit={handleFormSubmit}>
        <h3 className="tribe__section__title">Retrouver une tribu</h3>
        <div className="mb-3">
          <label
            htmlFor="tribe-finder"
            className="form-label"
          />
          <select className="form-control" name="pets" id="pet-select">
            <option value="">Choisisssez une tribu</option>
            {tribesList && tribesList.map((tribe) => (
              <option className="form-control__select" value="dog" key={tribe.id}>{tribe.name}</option>
            ))}
          </select>
        </div>
        <div className="tribe__form__button">
          <button type="button" className="btn btn-success">Rechercher </button>
        </div>
        <h2 className="tribe__title">OU</h2>
        <h3 className="tribe__section__title">Créer une tribu</h3>
        <div className="mb-3">
          <label htmlFor="tribe-creater" className="form-label" />
          <input
            type="text"
            className="form-control"
            id="tribe-creater"
            placeholder="Nom de la tribu"
            name="tribeName"
            value={tribeName}
            onChange={handleTribeInput}
          />
        </div>
        <div className="tribe__form__button">
          <button type="submit" name="submit" className="btn btn-success">Créer </button>
        </div>
      </form>
    </main>
  );
}

// export
export default Tribe;
