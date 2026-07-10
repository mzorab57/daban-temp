import React from 'react';
import Preloader from '../components/home/Preloader';
import Header from '../components/home/Header';
import Hero from '../components/home/Hero';
import About from '../components/home/About';
import GhosteSection from '../components/home/GhosteSection';
import SkyBackground from '../components/home/SkyBackground';
import Flight from '../components/home/Flight';
import FlightMobile from '../components/home/FlightMobile';
import Benefits from '../components/home/Benefits';
import Data from '../components/home/Data';
import Global from '../components/home/Global';
import LandscapeCover from '../components/home/LandscapeCover';
import StyleBlock from '../components/home/StyleBlock';

export default function Home() {
  return (
    <div data-barba="wrapper" className="transition-wrapper">
      <div data-barba-namespace="home" data-barba="container" className="transition-container clip">
        <Preloader />
        <div className="theme_on-color">
          <Header />
        </div>
        <div className="main-wrapper">
          <Hero />
          <About />
          <GhosteSection />
          <SkyBackground />
          <Flight />
          <FlightMobile />
          <Benefits />
          <Data />
          <Global />
          <StyleBlock />
          <LandscapeCover />
        </div>
      </div>
    </div>
  );
}
