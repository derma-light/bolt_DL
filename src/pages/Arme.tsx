import React from 'react';
import Header from '../components/Header';
import DropdownScript from '../components/DropdownScript';
import ArmeHero from '../components/ArmeHero';
import ArmeBenefits from '../components/ArmeBenefits';
import ArmeTechnology from '../components/ArmeTechnology';
import ArmeProcess from '../components/ArmeProcess';
import ArmeFAQ from '../components/ArmeFAQ';
import Footer from '../components/Footer';

const Arme = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <DropdownScript />
      <ArmeHero />
      <ArmeBenefits />
      <ArmeTechnology />
      <ArmeProcess />
      <ArmeFAQ />
      <Footer />
    </div>
  );
};

export default Arme;