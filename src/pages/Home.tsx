import React from 'react';
import SEO from '../components/SEO';
import Header from '../components/Header';
import DropdownScript from '../components/DropdownScript';
import Hero from '../components/Hero';
import Benefits from '../components/Benefits';
import Technology from '../components/Technology';
import Process from '../components/Process';
import PriceCalculator from '../components/PriceCalculator';
import SEOFAQ from '../components/SEOFAQ';
import SEOLinks from '../components/SEOLinks';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <>
      <SEO
        title="Laser Haarentfernung Hamburg - Derma Light | Dauerhafte Haarentfernung seit 2005"
        description="Professionelle Laser-Haarentfernung in Hamburg seit 2005. Alexandrit & Diodenlaser 755/808nm. NiSV-zertifiziert. Individuelle Beratung. Ab 29€ pro Behandlung."
        canonical="https://www.derma-light.de/"
      />
      <Header />
      <DropdownScript />
      <Hero />
      <Benefits />
      <Technology />
      <Process />
      <PriceCalculator />
      <SEOFAQ />
      <SEOLinks />
      <Footer />
    </>
  );
};

export default Home;
