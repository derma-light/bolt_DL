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
          <Route path="/achseln" element={<Achseln />} />
          <Route path="/arme" element={<Arme />} />
          <Route path="/bauch" element={<Bauch />} />
          <Route path="/beine" element={<Beine />} />
          <Route path="/bikinizone" element={<Bikinizone />} />
          <Route path="/brust" element={<Brust />} />
          <Route path="/gesicht" element={<Gesicht />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;