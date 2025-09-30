import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import Benefits from './components/Benefits';
import Technology from './components/Technology';
import Process from './components/Process';
import SEOLinks from './components/SEOLinks';
import SEOFAQ from './components/SEOFAQ';
import Footer from './components/Footer';
import HomeLongform from './components/HomeLongform';
import Achseln from './pages/Achseln';
import Arme from './pages/Arme';
import Bauch from './pages/Bauch';
import Beine from './pages/Beine';
import Bikinizone from './pages/Bikinizone';
import Brust from './pages/Brust';
import Gesicht from './pages/Gesicht';
import DropdownScript from './components/DropdownScript';
import Intimbereich from './pages/Intimbereich';
import Frauen from './pages/Frauen';
import Maenner from './pages/Maenner';
import IntimbereichMaenner from './pages/IntimbereichMaenner';
import BrustBauch from './pages/BrustBauch';
import Ruecken from './pages/Ruecken';
import Datenschutz from './pages/Datenschutz';
import Impressum from './pages/Impressum';
import PreiseHaarentfernung from './pages/PreiseHaarentfernung';
import Beratung from './pages/Beratung';
import Termine from './pages/Termine';

const HomePage = () => (
  <>
    <Header />
    <DropdownScript />
    <Hero />
    <Benefits />
    <Technology />
    <Process />
    <HomeLongform />
    <SEOFAQ />
    <SEOLinks />
    <Footer />
  </>
);

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/frauen" element={<Frauen />} />
          <Route path="/maenner" element={<Maenner />} />
          <Route path="/achseln" element={<Achseln />} />
          <Route path="/arme" element={<Arme />} />
          <Route path="/bauch" element={<Bauch />} />
          <Route path="/beine" element={<Beine />} />
          <Route path="/bikinizone" element={<Bikinizone />} />
          <Route path="/brust" element={<Brust />} />
          <Route path="/gesicht" element={<Gesicht />} />
          <Route path="/frauen/intimbereich" element={<Intimbereich />} />
          <Route path="/maenner/intimbereich" element={<IntimbereichMaenner />} />
          <Route path="/maenner/brust-bauch" element={<BrustBauch />} />
          <Route path="/maenner/ruecken" element={<Ruecken />} />
          <Route path="/datenschutz" element={<Datenschutz />} />
          <Route path="/impressum" element={<Impressum />} />
          <Route path="/preise-haarentfernung" element={<PreiseHaarentfernung />} />
          <Route path="/beratung" element={<Beratung />} />
          <Route path="/termine" element={<Termine />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;