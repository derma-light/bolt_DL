import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import Benefits from './components/Benefits';
import Technology from './components/Technology';
import Process from './components/Process';
import Footer from './components/Footer';
import Achseln from './pages/Achseln';
import Arme from './pages/Arme';
import Bauch from './pages/Bauch';
import Beine from './pages/Beine';
import Bikinizone from './pages/Bikinizone';
import Brust from './pages/Brust';
import Gesicht from './pages/Gesicht';
import DropdownScript from './components/DropdownScript';
import FrauenOverview from './pages/FrauenOverview';
import Intimbereich from './pages/Intimbereich';
import PoFalte from './pages/PoFalte';

const HomePage = () => (
  <>
    <Header />
    <DropdownScript />
    <Hero />
    <Benefits />
    <Technology />
    <Process />
    <Footer />
  </>
);

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/frauen/" element={<FrauenOverview />} />
          <Route path="/frauen/intimbereich.html" element={<Intimbereich />} />
          <Route path="/frauen/bikinizone.html" element={<Bikinizone />} />
          <Route path="/achseln" element={<Achseln />} />
          <Route path="/frauen/achseln.html" element={<Achseln />} />
          <Route path="/arme" element={<Arme />} />
          <Route path="/frauen/arme.html" element={<Arme />} />
          <Route path="/bauch" element={<Bauch />} />
          <Route path="/frauen/bauch.html" element={<Bauch />} />
          <Route path="/beine" element={<Beine />} />
          <Route path="/frauen/beine.html" element={<Beine />} />
          <Route path="/bikinizone" element={<Bikinizone />} />
          <Route path="/brust" element={<Brust />} />
          <Route path="/frauen/brust.html" element={<Brust />} />
          <Route path="/gesicht" element={<Gesicht />} />
          <Route path="/frauen/gesicht.html" element={<Gesicht />} />
          <Route path="/frauen/pofalte.html" element={<PoFalte />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;