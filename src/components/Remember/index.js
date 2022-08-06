// Import
import './remember.scss';

// Composant

function Remember() {
  return (
    <main className="remember">
      <h2 className="remember__title">Créer un souvenir</h2>
      <div className="remember__form">
        <div className="mb-3">
          <label htmlFor="remember-date" className="form-label">Date du souvenir</label>
          <input type="date" className="form-control" id="remember-date" placeholder="01/01/2022" />
        </div>
        <div className="mb-3">
          <label htmlFor="remember-place" className="form-label">Lieu du souvenir</label>
          <input type="text" className="form-control" id="remember-place" placeholder="Nice" />
        </div>
        <div className="mb-3">
          <label htmlFor="remember-members" className="form-label">Qui était là?</label>
          <textarea type="text" className="form-control" id="remember-members" placeholder="Christophe, Jean-Charles ..." />
        </div>
        <div className="mb-3">
          <label htmlFor="remember-story" className="form-label">Anecdotes, souvenirs</label>
          <textarea type="text" className="form-control" id="remember-story" placeholder="Un oiseau m'a fait ..." />
        </div>
        <div className="mb-3 ">
          <label htmlFor="inputGroupFile04" className="form-label">Importer des photos</label>
          <div className="input-group">
            <input type="file" className="form-control" id="inputGroupFile04" aria-describedby="inputGroupFileAddon04" aria-label="Upload" />
          </div>
        </div>
        <div className="activity__form__button">
          <button type="button" className="btn btn-success">Créer le souvenir</button>
        </div>
      </div>
    </main>
  );
}
// export
export default Remember;
