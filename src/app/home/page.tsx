import React from 'react';
import Hero from './components/Hero/Hero';
import ExtraService from './components/ExtraService/ExtraService';
import CabinClass from './components/CabinClass/CabinClass';
import AboutUs from './components/AboutUs/AboutUs';
import Campaign from './components/Campaign/Campaign';
import Faq from './components/Faq/Faq';
import Destination from './components/Destination/Destination';
import Blog from './components/Blog/Blog';
import FlightSearch from './components/FlightSearch/FlightSearch';

import "./styles/Home.scss";

const Home: React.FC = () => {
  return (
    <section className='home'>
      <Hero />
      <FlightSearch />
      <ExtraService />
      <CabinClass />
      <AboutUs />
      <Campaign />
      <Faq />
      <Destination />
      <Blog />
    </section>
  );
};

export default Home;