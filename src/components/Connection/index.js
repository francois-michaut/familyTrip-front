// Import
import { useDispatch, useSelector } from 'react-redux';
import {
  saveCurrentUser, saveUserEmail, saveUserName, saveUserPassword,
} from '../../actions/users';
import './connection.scss';

function Connection() {
  const userName = useSelector((state) => state.users.userName);
  const userEmail = useSelector((state) => state.users.userEmail);
  const userPassword = useSelector((state) => state.users.userPassword);
  const dispatch = useDispatch();

  function handleUserNameInput(evt) {
    dispatch(saveUserName(evt.target.value));
  }

  function handleEmailInput(evt) {
    dispatch(saveUserEmail(evt.target.value));
  }

  function handlePasswordInput(evt) {
    dispatch(saveUserPassword(evt.target.value));
  }

  function handleSubmitUser() {
    dispatch(saveCurrentUser());
  }
  return (
    <main className="connection">
      <h2 className="connection__title">Connexion/Création de compte</h2>
      <div className="connexion__form">
        <div className="mb-3 ">
          <label htmlFor="user-name" className="form-label  ">Votre pseudo
            <input
              type="text"
              className="form-control m-2"
              id="user-name"
              onChange={handleUserNameInput}
              value={userName}
            />
          </label>
        </div>
        <div className="mb-3">
          <label htmlFor="user-email" className="form-label">Votre email
            <input
              type="text"
              className="form-control m-2"
              id="user-email"
              value={userEmail}
              onChange={handleEmailInput}
            />
          </label>
        </div>
        <div className="mb-3">
          <label htmlFor="user-password" className="form-label">Votre password
            <input
              type="password"
              className="form-control m-2"
              id="user-password"
              value={userPassword}
              onChange={handlePasswordInput}
            />
          </label>
        </div>
      </div>
      <div className="connection__buttons ">
        <button type="submit" className="connection__button btn btn-success " onClick={handleSubmitUser}>Se connecter</button>

        <button type="submit" className="connection__button btn btn-success " onClick={handleSubmitUser}>Créer un compte</button>
      </div>
    </main>
  );
}

export default Connection;
