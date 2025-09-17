import React from 'react';
import Header from '../components/Header';
import DropdownScript from '../components/DropdownScript';
import AchselnHero from '../components/AchselnHero';
import AchselnBenefits from '../components/AchselnBenefits';
import AchselnTechnology from '../components/AchselnTechnology';
import AchselnFAQ from '../components/AchselnFAQ';
import Process from '../components/Process';
import Footer from '../components/Footer';

const Achseln = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <DropdownScript />
      <AchselnHero />
      <AchselnBenefits />
      <AchselnTechnology />
      <AchselnFAQ />
      <Process />
      <Footer />
    </div>
  );
};

export default Achseln;