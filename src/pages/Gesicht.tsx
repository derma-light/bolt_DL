import React from 'react';
import Header from '../components/Header';
import DropdownScript from '../components/DropdownScript';
import GesichtHero from '../components/GesichtHero';
import GesichtBenefits from '../components/GesichtBenefits';
import GesichtProcess from '../components/GesichtProcess';
import GesichtTechnology from '../components/GesichtTechnology';
import GesichtZones from '../components/GesichtZones';
import GesichtFAQ from '../components/GesichtFAQ';
import Footer from '../components/Footer';

const Gesicht = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <DropdownScript />
      <GesichtHero />
      <GesichtBenefits />
      <GesichtProcess />
      <GesichtTechnology />
      <GesichtZones />
      <GesichtFAQ />
      <Footer />
    </div>
  );
};

export default Gesicht;