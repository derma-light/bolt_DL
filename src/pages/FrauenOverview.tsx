import React from 'react';
import Header from '../components/Header';
import DropdownScript from '../components/DropdownScript';
import Footer from '../components/Footer';

const FrauenOverview = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <DropdownScript />
      <main className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Übersicht Frauen</h1>
        <p className="text-lg text-gray-700 mb-8">
          Hier finden Sie alle Behandlungsmöglichkeiten für Frauen im Überblick.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <div className="p-6 bg-gray-50 rounded-lg">
            <h3 className="text-xl font-semibold mb-2">Gesicht</h3>
            <p className="text-gray-600">Oberlippe, Kinn, Wangen</p>
          </div>
          <div className="p-6 bg-gray-50 rounded-lg">
            <h3 className="text-xl font-semibold mb-2">Körper</h3>
            <p className="text-gray-600">Achseln, Arme, Beine, Bauch</p>
          </div>
          <div className="p-6 bg-gray-50 rounded-lg">
            <h3 className="text-xl font-semibold mb-2">Intimbereich</h3>
            <p className="text-gray-600">Bikinizone, Brust, Po-Falte</p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default FrauenOverview;