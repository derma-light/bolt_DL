import React from 'react';
import { Calendar, Zap, Shield, DollarSign, UserCheck, Award } from 'lucide-react';

const Benefits = () => {
  const benefits = [
    {
      icon: Calendar,
      title: "Langjährige Erfahrung",
      description: "Seit 2005 spezialisiert, etablierte Abläufe"
    },
    {
      icon: Zap,
      title: "Echter Alexandrit-Laser",
      description: "755 nm, hohe Selektivität für pigmentierte Haarfollikel"
    },
    {
      icon: Shield,
      title: "Präzision & Sicherheit",
      description: "Individuelle Parameter + Kontaktkühlung"
    },
    {
      icon: DollarSign,
      title: "Transparente Preise",
      description: "Einzelpreise statt Paketdruck"
    },
    {
      icon: UserCheck,
      title: "Persönliche Analyse",
      description: "Haut- & Haarcheck, Erwartungsmanagement"
    },
    {
      icon: Award,
      title: "Zertifiziert & Bewertet",
      description: "NiSV & verifizierte Kundenstimmen"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Ihre Vorteile bei Derma Light
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Kompetenz, Präzision & Transparenz – für nachhaltige Ergebnisse.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index} 
              className="group p-8 bg-gray-50 rounded-xl hover:bg-blue-50 hover:shadow-lg transition-all duration-300 border border-gray-100"
            >
              <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-6 group-hover:bg-blue-200 transition-colors">
                <benefit.icon className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {benefit.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;