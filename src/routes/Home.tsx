import React, { useContext } from 'react';
import About from '../components/About';
import { Biography } from '../components/Biography';
import { Briefcase } from '../components/Briefcase';
import Footer from '../components/Footer';
import Header from '../components/Header';
import { AppContext } from '../context/AppContext';

const Home = () => {
  const {state} = useContext(AppContext);



  return (
    <>
      <Header/>
      { !state.biography && <About/> || <Biography/>}
      <Briefcase/>
      <Footer/>
    </>
  )
}

export default Home;
