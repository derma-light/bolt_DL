import React from 'react';
import Header from '../components/Header';
import DropdownScript from '../components/DropdownScript';
import BrustHero from '../components/BrustHero';
import BrustIntro from '../components/BrustIntro';
import BrustZones from '../components/BrustZones';
import BrustBenefits from '../components/BrustBenefits';
import BrustProcess from '../components/BrustProcess';
import BrustTechnology from '../components/BrustTechnology';
import BrustPreparation from '../components/BrustPreparation';
import BrustFAQ from '../components/BrustFAQ';
import Footer from '../components/Footer';

const Brust = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <DropdownScript />
      <BrustHero />
      <BrustIntro />
      <BrustZones />
      <BrustBenefits />
      <BrustProcess />
      <BrustTechnology />
      <BrustPreparation />
      <BrustFAQ />
      <Footer />
    </div>
  );
};

export default Brust;