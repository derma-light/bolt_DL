import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="site-header bg-white shadow-sm sticky top-0 z-50 border-b border-gray-100">
      <div className="container mx-auto px-4 lg:px-6">
        <nav className="flex items-center justify-between h-16">
          {/* Logo/Brand */}
          <div className="flex items-center">
            <a href="/" className="flex items-center space-x-2 text-gray-900 hover:text-blue-600 transition-colors" aria-label="Startseite">
              <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">◎</span>
              </div>
              <span className="font-bold text-xl tracking-tight">Derma Light</span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <a href="/" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">Home</a>
            
            {/* Frauen Dropdown */}
            <div className="dropdown-container-hybrid">
              <button className="dropdown-trigger-hybrid" aria-expanded="false">
                <span>Frauen</span>
                <svg className="dropdown-icon" width="16" height="16" viewBox="0 0 16 16">
                  <path d="M4 6l4 4 4-4" stroke="currentColor" strokeWidth="2" fill="none"/>
                </svg>
              </button>
              <div className="dropdown-menu-hybrid">
                <a href="/frauen">Übersicht Frauen</a>
                <a href="/frauen/intimbereich">Intimbereich</a>
                <a href="/bikinizone">Bikinizone</a>
                <a href="/achseln">Achseln</a>
                <a href="/arme">Arme</a>
                <a href="/bauch">Bauch</a>
                <a href="/beine">Beine</a>
                <a href="/frauen/gesicht">Gesicht</a>
                <a href="/frauen/bauch">Bauch</a>
                <a href="/frauen/brust">Brust</a>
                <a href="/brust">Brust</a>
                <a href="/gesicht">Gesicht</a>
                <a href="/frauen/po-falte">Po-Falte</a>
              </div>
            </div>

            {/* Männer Dropdown */}
            <div className="dropdown-container-hybrid">
              <button className="dropdown-trigger-hybrid" aria-expanded="false">
                <span>Männer</span>
                <svg className="dropdown-icon" width="16" height="16" viewBox="0 0 16 16">
                  <path d="M4 6l4 4 4-4" stroke="currentColor" strokeWidth="2" fill="none"/>
                </svg>
              </button>
              <div className="dropdown-menu-hybrid">
                <a href="/maenner">Übersicht Männer</a>
                <a href="/maenner/intimbereich">Intimbereich</a>
                <a href="/maenner/ruecken">Rücken</a>
              </div>
            </div>

            <a href="#preise" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">Preise</a>
            <a href="#beratung" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">Beratung</a>
            
            <a href="#beratung" className="bg-blue-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors">
              Beratung
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-gray-600 hover:text-blue-600 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Menü öffnen"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </nav>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-gray-100">
            <div className="space-y-2">
              <a href="/" className="block py-2 text-gray-700 font-medium">Home</a>
              <div className="py-2">
                <span className="text-gray-900 font-medium">Frauen</span>
                <div className="mt-2 ml-4 space-y-1">
                  <a href="/frauen" className="block py-1 text-sm text-gray-600">Übersicht Frauen</a>
                  <a href="/frauen/intimbereich" className="block py-1 text-sm text-gray-600">Intimbereich</a>
                  <a href="/bikinizone" className="block py-1 text-sm text-gray-600">Bikinizone</a>
                  <a href="/achseln" className="block py-1 text-sm text-gray-600">Achseln</a>
                  <a href="/arme" className="block py-1 text-sm text-gray-600">Arme</a>
                  <a href="/bauch" className="block py-1 text-sm text-gray-600">Bauch</a>
                  <a href="/beine" className="block py-1 text-sm text-gray-600">Beine</a>
                  <a href="/brust" className="block py-1 text-sm text-gray-600">Brust</a>
                  <a href="/gesicht" className="block py-1 text-sm text-gray-600">Gesicht</a>
                </div>
              </div>
              <div className="py-2">
                <span className="text-gray-900 font-medium">Männer</span>
                <div className="mt-2 ml-4 space-y-1">
                  <a href="/maenner" className="block py-1 text-sm text-gray-600">Übersicht Männer</a>
                  <a href="/maenner/intimbereich" className="block py-1 text-sm text-gray-600">Intimbereich</a>
                  <a href="/maenner/ruecken" className="block py-1 text-sm text-gray-600">Rücken</a>
                </div>
              </div>
              <a href="#preise" className="block py-2 text-gray-700 font-medium">Preise</a>
              <a href="#beratung" className="block py-2 text-gray-700 font-medium">Beratung</a>
              <a href="#beratung" className="block w-full mt-4 bg-blue-600 text-white text-center py-3 rounded-lg font-medium">
                Beratung
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;