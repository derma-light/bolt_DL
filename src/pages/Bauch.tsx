import React from 'react';
import Header from '../components/Header';
import DropdownScript from '../components/DropdownScript';
import BauchHero from '../components/BauchHero';
import BauchIntro from '../components/BauchIntro';
import BauchBenefits from '../components/BauchBenefits';
import BauchProcess from '../components/BauchProcess';
import BauchCauses from '../components/BauchCauses';
import BauchTechnology from '../components/BauchTechnology';
import BauchFAQ from '../components/BauchFAQ';
import Footer from '../components/Footer';

const Bauch = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <DropdownScript />
      <BauchHero />
      <BauchIntro />
      <BauchBenefits />
      <BauchProcess />
      <BauchCauses />
      <BauchTechnology />
      <BauchFAQ />
      <Footer />
    </div>
  );
};

export default Bauch;