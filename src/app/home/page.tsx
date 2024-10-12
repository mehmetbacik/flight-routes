import React from 'react';
import Hero from './components/Hero/Hero';
import ExtraService from './components/ExtraService/ExtraService';
import CabinClass from './components/CabinClass/CabinClass';
import AboutUs from './components/AboutUs/AboutUs';
import Campaign from './components/Campaign/Campaign';

import "./styles/Home.scss";



const Home: React.FC = () => {
  return (
    <section className='home'>
      <Hero />
      <ExtraService />
      <CabinClass />
      <AboutUs />
      <Campaign />
    </section>
  );
};

export default Home;