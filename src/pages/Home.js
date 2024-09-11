import React from 'react';
import HeroSection from '../components/HeroSection';
import Services from '../components/Services';
import AboutUs from '../components/AboutUs';
import Testimonials from '../components/Testimonials';

const Home = () => {
  return (
    <>
      <HeroSection />
      <Services />
      <AboutUs />
      <Testimonials />
    </>
  );
};

export default Home;
