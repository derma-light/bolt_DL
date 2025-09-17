import React from 'react';
import { ArrowRight, Shield, Zap, Award, Target, DollarSign, Star } from 'lucide-react';

const Hero = () => {
  const trustElements = [
    { icon: Award, text: "Seit 2005 Erfahrung" },
    { icon: Zap, text: "Alexandrit 755 nm" },
    { icon: Shield, text: "NiSV-zertifiziert" },
    { icon: Target, text: "Individuelle Parameter" },
    { icon: DollarSign, text: "Transparente Preise" },
    { icon: Star, text: "16 Bewertungen*" }
  ];

  return (
    <section className="relative bg-gray-50 min-h-[90vh] flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/laser-haarentfernung-hamburg-hero-image.png"
          alt="Professionelle Laser-Haarentfernung in Hamburg - Moderne Praxis für dauerhafte Haarreduktion"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white/90 to-white/60"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 lg:px-6">
        <div className="max-w-4xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
            Dauerhafte Laser-Haarentfernung in Hamburg –{' '}
            <span className="text-blue-600">präzise seit 2005</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-700 mb-8 leading-relaxed">
            Sichtbare, lang anhaltende Haarreduktion mit echtem Alexandrit‑Laser (755 nm). 
            20 Jahre Erfahrung, NiSV-zertifizierte Anwendung & persönliche Haut- und Haaranalyse.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <a 
              href="#beratung" 
              className="inline-flex items-center justify-center px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              Kostenlose Erstberatung sichern
              <ArrowRight className="ml-2 w-5 h-5" />
            </a>
            <a 
              href="#preise" 
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg border-2 border-blue-600 hover:bg-blue-50 transition-all duration-200"
            >
              Preise ansehen
            </a>
          </div>

          {/* Trust Elements */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-8">
            {trustElements.map((element, index) => (
              <div key={index} className="flex flex-col items-center text-center p-4 bg-white/80 backdrop-blur-sm rounded-lg border border-gray-200 hover:shadow-md transition-shadow">
                <element.icon className="w-6 h-6 text-blue-600 mb-2" />
                <span className="text-sm font-medium text-gray-700">{element.text}</span>
              </div>
            ))}
          </div>

          <p className="text-sm text-gray-600 italic">
            Hinweis: Laserbehandlungen führen zu einer dauerhaften Reduktion des Haarwuchses – 
            vereinzelte feine Haare können später erneut wachsen.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;