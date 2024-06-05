import React from 'react';
import AboutCard from '../components/about/AboutCard';
import Hblog from '../components/home/Hblog';
import HAbout from '../components/home/HAbout';
import Hero from '../components/home/hero/Hero';
import Hprice from '../components/home/Hprice';
import Testimonal from '../components/home/testimonal/Testimonal';

const Home = () => {
  return (
    <>
      <Hero />
      <AboutCard />
      <HAbout />
      <Testimonal />
      <Hblog />
      <Hprice />
    </>
  );
}

export default Home;
