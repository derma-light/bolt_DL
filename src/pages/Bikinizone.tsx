import React from 'react';
import Header from '../components/Header';
import DropdownScript from '../components/DropdownScript';
import BikinizoneHero from '../components/BikinizoneHero';
import BikinizoneWhy from '../components/BikinizoneWhy';
import BikinizoneZones from '../components/BikinizoneZones';
import BikinizoneProcess from '../components/BikinizoneProcess';
import BikinizonePreparation from '../components/BikinizonePreparation';
import BikinizoneFAQ from '../components/BikinizoneFAQ';
import Footer from '../components/Footer';

const Bikinizone = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <DropdownScript />
      <BikinizoneHero />
      <BikinizoneWhy />
      <BikinizoneZones />
      <BikinizoneProcess />
      <BikinizonePreparation />
      <BikinizoneFAQ />
      <Footer />
    </div>
  );
};

export default Bikinizone;