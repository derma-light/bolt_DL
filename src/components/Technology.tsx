import React from 'react';
import { Zap, Target, ThermometerSun, ChevronDown } from 'lucide-react';

const AccordionItem = ({ title, children, isOpen, onToggle }: {
  title: string;
  children: React.ReactNode;
  isOpen: boolean;
  onToggle: () => void;
}) => {
  return (
    <div className="border border-gray-200 rounded-lg overflow-hidden">
      <button
        className="w-full px-6 py-4 text-left bg-white hover:bg-gray-50 flex items-center justify-between transition-colors"
        onClick={onToggle}
      >
        <span className="font-semibold text-gray-900">{title}</span>
        <ChevronDown 
          className={`w-5 h-5 text-gray-500 transition-transform ${
            isOpen ? 'transform rotate-180' : ''
          }`} 
        />
      </button>
      {isOpen && (
        <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
          <p className="text-gray-700">{children}</p>
        </div>
      )}
    </div>
  );
};

const Technology = () => {
  const [openAccordion, setOpenAccordion] = React.useState<string | null>(null);

  const toggleAccordion = (id: string) => {
    setOpenAccordion(openAccordion === id ? null : id);
  };

  const accordionItems = [
    {
      id: 'wavelength',
      title: 'Warum 755 nm?',
      content: 'Starke Melaninabsorption → gezielte Erwärmung der Haarwurzel bei Schonung umliegender Strukturen.'
    },
    {
      id: 'safety',
      title: 'Sicherheit',
      content: 'Kontaktkühlung, NiSV-konforme Anwendung; häufig nur kurzzeitige Rötung.'
    },
    {
      id: 'suitability',
      title: 'Für wen geeignet?',
      content: 'Ideal bei dunklen, kräftigen Haaren auf heller bis mittlerer Haut. Sehr helle, rote oder graue Haare reagieren kaum.'
    },
    {
      id: 'comparison',
      title: 'Alexandrit vs. Diodenlaser',
      content: 'Alexandrit oft stärker bei feineren pigmentierten Haaren; Dioden (808 nm) flexibler bei dunklerer Haut. Individuelle Einschätzung in der Beratung.'
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Alexandrit-Laser-Technologie (755 nm)
            </h2>
            <p className="text-xl text-gray-600">
              Selektive Energieabgabe an pigmentierte Haarfollikel – effektiv bei geeigneten Haut- und Haartypen.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Target className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Präzise Wellenlänge</h3>
                  <p className="text-gray-600">
                    755 nm Alexandrit-Laser für optimale Absorption durch Melanin in den Haarfollikeln.
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
                    Integrierte Kühlung schützt die Hautoberfläche und maximiert den Komfort während der Behandlung.
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
                    Angepasste Energie-, Puls- und Spotgrößen basierend auf Ihrem Hauttyp und Haarstruktur.
                  </p>
                </div>
              </div>
            </div>

            <div className="relative">
              <img
                src="https://images.pexels.com/photos/5938533/pexels-photo-5938533.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Moderne Laser-Technologie für Haarentfernung"
                className="w-full h-auto rounded-xl shadow-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-xl"></div>
            </div>
          </div>

          {/* Accordion Section */}
          <div className="mt-16">
            <div className="text-center mb-12">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                Alexandrit-Laser-Technologie (755 nm)
              </h3>
              <p className="text-lg text-gray-600">
                Selektive Energieabgabe an pigmentierte Haarfollikel – effektiv bei geeigneten Haut- und Haartypen.
              </p>
            </div>

            <div className="max-w-3xl mx-auto space-y-4">
              {accordionItems.map((item) => (
                <AccordionItem
                  key={item.id}
                  title={item.title}
                  isOpen={openAccordion === item.id}
                  onToggle={() => toggleAccordion(item.id)}
                >
                  {item.content}
                </AccordionItem>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Technology;