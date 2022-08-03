// == Import
import Footer from '../Footer';
import Header from '../Header';
import MainPage from '../MainPage';
import './styles.css';

// == Composant
function Home() {
  return (
    <div className="home">
      <Header />
      <MainPage />
      <Footer />
    </div>
  );
}

// == Export
export default Home;
