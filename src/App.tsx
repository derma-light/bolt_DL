import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import Achseln from './pages/Achseln';
import Arme from './pages/Arme';
import Bauch from './pages/Bauch';
import Beine from './pages/Beine';
import Beratung from './pages/Beratung';
import Bikinizone from './pages/Bikinizone';
import Brust from './pages/Brust';
import BrustBauch from './pages/BrustBauch';
import Datenschutz from './pages/Datenschutz';
import Frauen from './pages/Frauen';
import Gesicht from './pages/Gesicht';
import Impressum from './pages/Impressum';
import Intimbereich from './pages/Intimbereich';
import IntimbereichMaenner from './pages/IntimbereichMaenner';
import Maenner from './pages/Maenner';
import PreiseHaarentfernung from './pages/PreiseHaarentfernung';
import Ruecken from './pages/Ruecken';
import Termine from './pages/Termine';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/achseln" element={<Achseln />} />
        <Route path="/arme" element={<Arme />} />
        <Route path="/bauch" element={<Bauch />} />
        <Route path="/beine" element={<Beine />} />
        <Route path="/beratung" element={<Beratung />} />
        <Route path="/bikinizone" element={<Bikinizone />} />
        <Route path="/brust" element={<Brust />} />
        <Route path="/brust-bauch" element={<BrustBauch />} />
        <Route path="/datenschutz" element={<Datenschutz />} />
        <Route path="/frauen" element={<Frauen />} />
        <Route path="/gesicht" element={<Gesicht />} />
        <Route path="/impressum" element={<Impressum />} />
        <Route path="/intimbereich" element={<Intimbereich />} />
        <Route path="/intimbereich-maenner" element={<IntimbereichMaenner />} />
        <Route path="/maenner" element={<Maenner />} />
        <Route path="/preise-haarentfernung" element={<PreiseHaarentfernung />} />
        <Route path="/ruecken" element={<Ruecken />} />
        <Route path="/termine" element={<Termine />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}

export default App;