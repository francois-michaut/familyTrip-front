// Import
import './connection.scss';

function Connection() {
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
            // placeholder="votre pseudo"
            value=""
            // onChange={}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="user-email" className="form-label">Votre email</label>
          <input
            type="text"
            className="form-control"
            id="user-email"
            // placeholder="votre pseudo"
            value=""
            // onChange={}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="user-password" className="form-label">Votre password</label>
          <input
            type="text"
            className="form-control"
            id="user-password"
            // placeholder="votre pseudo"
            value=""
            // onChange={}
          />
        </div>
      </div>
      <button type="submit" className="connection__button btn btn-success ">Se connecter</button>
    </main>
  );
}

export default Connection;
