import React from 'react';
import About from '../components/About';
import { Briefcase } from '../components/Briefcase';
import Footer from '../components/Footer';
import Header from '../components/Header';

const Home = () => {
  return (
    <>
      <Header/>
      <About/>
      <Briefcase/>
      <Footer/>
    </>
  )
}

export default Home;
