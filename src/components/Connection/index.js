// Import
import { useDispatch, useSelector } from 'react-redux';
import { saveUserEmail, saveUserName, saveUserPassword } from '../../actions/users';
import './connection.scss';

function Connection() {
  const userName = useSelector((state) => state.users.userName);
  const userEmail = useSelector((state) => state.users.userEmail);
  const userPassword = useSelector((state) => state.users.userPassword);
  const dispatch = useDispatch();
  function handleUserNameInput(evt){
    dispatch(saveUserName(evt.target.value));
  } 

  function handleEmailInput(evt){
    dispatch(saveUserEmail(evt.target.value));
  } 

  function handlePasswordInput(evt){
    dispatch(saveUserPassword(evt.target.value));
  } 
  return (
    <main className="connection">
      <h2 className="connection__title">Connexion/Création de compte</h2>
      <div className="connexion__form">
        <div className="mb-3">
          <label htmlFor="user-name" className="form-label">Votre pseudo</label>
          <input
            type="text"
            className="form-control"
            id="user-name"
            onChange={handleUserNameInput}
            value={userName}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="user-email" className="form-label">Votre email</label>
          <input
            type="text"
            className="form-control"
            id="user-email"
            value={userEmail}
            onChange={handleEmailInput}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="user-password" className="form-label">Votre password</label>
          <input
            type="password"
            className="form-control"
            id="user-password"
            value={userPassword}
            onChange={handlePasswordInput}
          />
        </div>
      </div>
      <button type="submit" className="connection__button btn btn-success ">Se connecter</button>
    </main>
  );
}

export default Connection;
