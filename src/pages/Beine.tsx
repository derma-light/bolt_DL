import React from 'react';
import Header from '../components/Header';
import DropdownScript from '../components/DropdownScript';
import BeineHero from '../components/BeineHero';
import BeineIntro from '../components/BeineIntro';
import BeineBenefits from '../components/BeineBenefits';
import BeineProcess from '../components/BeineProcess';
import BeineTechnology from '../components/BeineTechnology';
import BeinePreparation from '../components/BeinePreparation';
import BeineFAQ from '../components/BeineFAQ';
import Footer from '../components/Footer';

const Beine = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <DropdownScript />
      <BeineHero />
      <BeineIntro />
      <BeineBenefits />
      <BeineProcess />
      <BeineTechnology />
      <BeinePreparation />
      <BeineFAQ />
      <Footer />
    </div>
  );
};

export default Beine;