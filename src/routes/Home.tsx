import React from 'react';
import About from '../components/About';
import { Briefcase } from '../components/Briefcase';
import Header from '../components/Header';

const Home = () => {
  return (
    <div>
      <Header/>
      <About/>
      <Briefcase/>
    </div>
  )
}

export default Home;
