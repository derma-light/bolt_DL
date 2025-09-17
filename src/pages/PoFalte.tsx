import React from 'react';
import Header from '../components/Header';
import DropdownScript from '../components/DropdownScript';
import Footer from '../components/Footer';

const PoFalte = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <DropdownScript />
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Laser-Haarentfernung Po-Falte
          </h1>
          <p className="text-xl text-gray-700 mb-8">
            Diskrete und professionelle Behandlung der Po-Falte für ein gepflegtes Gefühl.
          </p>
          
          <div className="bg-blue-50 rounded-xl p-8 mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Vorteile der Behandlung
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-4 bg-white rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-2">Hygienisch</h3>
                <p className="text-gray-600">Verbesserte Hygiene und Sauberkeit</p>
              </div>
              <div className="p-4 bg-white rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-2">Komfort</h3>
                <p className="text-gray-600">Weniger Irritationen und eingewachsene Haare</p>
              </div>
              <div className="p-4 bg-white rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-2">Diskret</h3>
                <p className="text-gray-600">Professionelle und vertrauliche Behandlung</p>
              </div>
              <div className="p-4 bg-white rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-2">Langanhaltend</h3>
                <p className="text-gray-600">Dauerhafte Reduktion unerwünschter Haare</p>
              </div>
            </div>
          </div>

          <div className="text-center">
            <a 
              href="#beratung" 
              className="inline-flex items-center px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
            >
              Kostenlose Beratung vereinbaren
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PoFalte;