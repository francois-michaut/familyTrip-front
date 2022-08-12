// Import
import './tribe.scss';

import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getUser } from '../../actions/users';

// import { getUser } from '../../actions/users';

// Composant
function Tribe() {
  const dispatch = useDispatch();
  const usersList = useSelector((state) => state.users.users);

  useEffect(
    () => {
      dispatch(getUser());
    },
    [],
  );
  console.log(usersList[1]);

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
      <ul>
        { usersList && usersList.map((user) => (
          <li key={user.id}>{user.firstname}</li>
        ))}
      </ul>
    </main>
  );
}

// export
export default Tribe;
