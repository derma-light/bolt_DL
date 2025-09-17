import React from 'react';
import { Zap, Target, ThermometerSun } from 'lucide-react';

const ArmeTechnology = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Technologie & Eignung
            </h2>
            <p className="text-xl text-gray-600">
              Kombination aus gezielter Energieabgabe und Kontaktkühlung für großflächige Areale. 
              Dunklere, definierte Haare sprechen am besten an; Parameter werden individuell angepasst.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Target className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Gezielte Energieabgabe</h3>
                  <p className="text-gray-600">
                    Medizinischer Diodenlaser mit präziser Energieverteilung für großflächige Behandlung von Unter- und Oberarmen.
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
                    Integrierte Kühlung schützt die Hautoberfläche und ermöglicht komfortable Behandlung auch bei größeren Arealen.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Zap className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Individuelle Parameter</h3>
                  <p className="text-gray-600">
                    Angepasste Einstellungen für Unter- und Oberarme basierend auf Hauttyp, Haarstruktur und Behandlungsareal.
                  </p>
                </div>
              </div>
            </div>

            <div className="relative">
              <img
                src="https://images.pexels.com/photos/5938533/pexels-photo-5938533.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Moderne Laser-Technologie für Arm-Haarentfernung"
                className="w-full h-auto rounded-xl shadow-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-xl"></div>
            </div>
          </div>

          {/* Technology Benefits */}
          <div className="mt-16 bg-blue-50 rounded-xl p-8">
            <h3 className="text-2xl font-semibold text-gray-900 mb-6 text-center">
              Optimiert für Arm-Behandlungen
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-center p-4 bg-white rounded-lg">
                <div className="w-2 h-2 bg-blue-600 rounded-full mr-3 flex-shrink-0"></div>
                <span className="text-gray-700 font-medium">Gleichmäßige Flächenabdeckung für große Areale</span>
              </div>
              <div className="flex items-center p-4 bg-white rounded-lg">
                <div className="w-2 h-2 bg-blue-600 rounded-full mr-3 flex-shrink-0"></div>
                <span className="text-gray-700 font-medium">Hautschonende Behandlung empfindlicher Bereiche</span>
              </div>
              <div className="flex items-center p-4 bg-white rounded-lg">
                <div className="w-2 h-2 bg-blue-600 rounded-full mr-3 flex-shrink-0"></div>
                <span className="text-gray-700 font-medium">Effiziente Sitzungsdauer von 25-35 Minuten</span>
              </div>
              <div className="flex items-center p-4 bg-white rounded-lg">
                <div className="w-2 h-2 bg-blue-600 rounded-full mr-3 flex-shrink-0"></div>
                <span className="text-gray-700 font-medium">Dermatologisch geprüfte Technologie</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ArmeTechnology;