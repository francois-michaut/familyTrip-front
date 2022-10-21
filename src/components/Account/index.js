// Import
import { useDispatch, useSelector } from 'react-redux';
import {
  saveUserFirstnameAccount,
  saveUserMailAccount,
  saveUserNameAccount,
  saveUserPasswordAccount,
  saveUserPasswordVerifyAccount,
  saveUserPseudoAccount,
} from '../../actions/users';

import './account.scss';

function Account() {
  const dispatch = useDispatch();
  const userName = useSelector((state) => state.users.userNameAccount);
  const userFirstname = useSelector((state) => state.users.userFirstnameAccount);
  const userMailAccount = useSelector((state) => state.users.userMailAccount);
  const userPseudoAccount = useSelector((state) => state.users.userPseudoAccount);
  const userPasswordAccount = useSelector((state) => state.users.userPasswordAccount);
  const userPasswordVerifyAccount = useSelector((state) => state.users.userPasswordVerifyAccount);

  function handleUserName(evt) {
    dispatch(saveUserNameAccount(evt.target.value));
  }

  function handleUserFirstname(evt) {
    dispatch(saveUserFirstnameAccount(evt.target.value));
  }

  function handleUserMailAccount(evt) {
    dispatch(saveUserMailAccount(evt.target.value));
  }

  function handleUserPseudoAccount(evt) {
    dispatch(saveUserPseudoAccount(evt.target.value));
  }

  function handleUserPasswordAccount(evt) {
    dispatch(saveUserPasswordAccount(evt.target.value));
  }

  function handleUserPasswordVerifyAccount(evt) {
    dispatch(saveUserPasswordVerifyAccount(evt.target.value));
  }
  return (
    <main className="account">
      <h2 className="account__title">Créer un compte</h2>
      <form className="account__form">
        <div className="mb-2">
          <label htmlFor="userName" className="form-label">Votre nom
            <input
              type="text"
              className="form-control"
              id="userName"
              onChange={handleUserName}
              value={userName}
            />
          </label>
        </div>
        <div className="mb-2">
          <label htmlFor="userFirstname" className="form-label">Votre prénom
            <input
              type="text"
              className="form-control"
              id="userFirstname"
              onChange={handleUserFirstname}
              value={userFirstname}
            />
          </label>
        </div>
        <div className="mb-2">
          <label htmlFor="userMail" className="form-label">Votre email
            <input
              type="text"
              className="form-control"
              id="userMail"
              onChange={handleUserMailAccount}
              value={userMailAccount}
            />
          </label>
        </div>
        <div className="mb-2">
          <label htmlFor="userPseudo" className="form-label">Votre pseudo
            <input
              type="text"
              className="form-control"
              id="userPseudo"
              onChange={handleUserPseudoAccount}
              value={userPseudoAccount}
            />
          </label>
        </div>
        <div className="mb-2">
          <label htmlFor="userPassword" className="form-label">Mot de passe
            <input
              type="password"
              className="form-control"
              id="userPassword"
              onChange={handleUserPasswordAccount}
              value={userPasswordAccount}
            />
          </label>
        </div>
        <div className="mb-2">
          <label htmlFor="userConfirmPassword" className="form-label">Confirmez votre mot de passe
            <input
              type="password"
              className="form-control"
              id="userConfirmPassword"
              onChange={handleUserPasswordVerifyAccount}
              value={userPasswordVerifyAccount}
            />
          </label>
        </div>
        <button type="button" className="btn btn-success ">Créer votre compte</button>
      </form>
    </main>
  );
}

// export
export default Account;
