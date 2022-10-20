/* eslint-disable jsx-a11y/label-has-associated-control */
// Import
import './account.scss';

function Account() {
  return (
    <main className="account">
      <h2 className="account__title">Créer un compte</h2>
      <form className="account__form">
        <div className="mb-2">
          <label htmlFor="userName" className="form-label">Votre nom</label>
          <input
            type="text"
            className="form-control"
            id="userName"
          />
        </div>
        <div className="mb-2">
          <label htmlFor="userFirstname" className="form-label">Votre prénom</label>
          <input
            type="text"
            className="form-control"
            id="userFirstname"
          />
        </div>
        <div className="mb-2">
          <label htmlFor="userMail" className="form-label">Votre email</label>
          <input
            type="text"
            className="form-control"
            id="userMail"
          />
        </div>
        <div className="mb-2">
          <label htmlFor="userPseudo" className="form-label">Votre pseudo</label>
          <input
            type="text"
            className="form-control"
            id="userPseudo"
          />
        </div>
        <div className="mb-2">
          <label htmlFor="userPassword" className="form-label">Mot de passe</label>
          <input
            type="password"
            className="form-control"
            id="userPassword"
          />
        </div>
        <div className="mb-2">
          <label htmlFor="userConfirmPassword" className="form-label">Confirmez votre mot de passe</label>
          <input
            type="password"
            className="form-control"
            id="userConfirmPassword"
          />
        </div>
        <button type="button" className="btn btn-success ">Créer votre compte</button>
      </form>
    </main>
  );
}

// export
export default Account;
