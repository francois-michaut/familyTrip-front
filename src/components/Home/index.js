// == Import
import { Route, Routes } from 'react-router';
import Activity from '../Activity';
import Footer from '../Footer';
import Header from '../Header';
import MainPage from '../MainPage';
import Shopping from '../Shopping';
import Remember from '../Remember';
import MyTribe from '../MyTribe';
import Tribe from '../Tribe';
import Connection from '../Connection';
import Account from '../Account';

import './styles.css';

// == Composant
function Home() {
  return (
    <div className="home">
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/Activity" element={<Activity />} />
        <Route path="/Shopping" element={<Shopping />} />
        <Route path="/Remember" element={<Remember />} />
        <Route path="/Tribe" element={<Tribe />} />
        <Route path="/MyTribe" element={<MyTribe />} />
        <Route path="/Connexion" element={<Connection />} />
        <Route path="/Account" element={<Account />} />
      </Routes>
      <Footer />
    </div>
  );
}

// == Export
export default Home;
