import React from 'react';
import { Zap, Target, ThermometerSun } from 'lucide-react';

const GesichtTechnology = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Technologie & Eignung
            </h2>
            <p className="text-xl text-gray-600">
              Selektive Photothemolyse: Zielstruktur ist Melanin im Haar. Dunklere, definierte Haare reagieren am besten. 
              Parameter und Kontaktkühlung werden an sensible Gesichtshaut angepasst.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Target className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Selektive Phototermolyse</h3>
                  <p className="text-gray-600">
                    Melanin (Pigment) im Haarfollikel wird gezielt mit Lichtenergie angesprochen. 
                    Die absorbierte Energie wandelt sich in Wärme um und schädigt follikuläre Strukturen.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <ThermometerSun className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Kontaktkühlung</h3>
                  <p className="text-gray-600">
                    Spezielle Kühlung für sensible Gesichtshaut sorgt für angenehme Behandlung 
                    und schützt das umliegende Gewebe.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Zap className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Präzise Parameter</h3>
                  <p className="text-gray-600">
                    Individuelle Anpassung von Energie und Puls für verschiedene Gesichtsbereiche 
                    wie Oberlippe, Kinn und Wangen.
                  </p>
                </div>
              </div>
            </div>

            <div className="relative">
              <img
                src="https://images.pexels.com/photos/5938533/pexels-photo-5938533.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Moderne Laser-Technologie für Gesichts-Haarentfernung"
                className="w-full h-auto rounded-xl shadow-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-xl"></div>
            </div>
          </div>

          {/* How it works */}
          <div className="bg-blue-50 rounded-xl p-8 mb-16">
            <h3 className="text-2xl font-semibold text-gray-900 mb-6 text-center">
              Wie funktioniert die Haarentfernung im Gesicht mit Laser?
            </h3>
            <p className="text-gray-700 leading-relaxed text-center">
              Bei der Laser-Haarentfernung wird das Melanin (Pigment) im Haarfollikel gezielt mit Lichtenergie angesprochen. 
              Die absorbierte Energie wandelt sich in Wärme um, schädigt follikuläre Strukturen und hemmt weiteres Haarwachstum – 
              umliegendes Gewebe bleibt weitgehend geschont.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GesichtTechnology;