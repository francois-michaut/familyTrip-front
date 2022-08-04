// == Import
import { Route, Routes } from 'react-router';
import Footer from '../Footer';
import Header from '../Header';
import MainPage from '../MainPage';
import './styles.css';

// == Composant
function Home() {
  return (
    <div className="home">
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />} />
        {/* <Route path="/Activity" element={<Activity />} />
        <Route path="/Shopping" element={<Shopping />} />
        <Route path="/Remember" element={<Remember />} />
        <Route path="/Tribe" element={<Tribe />} /> */}
      </Routes>
      <Footer />
    </div>
  );
}

// == Export
export default Home;
