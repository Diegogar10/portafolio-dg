import React, { useContext } from 'react';
import About from '../components/About';
import { Biography } from '../components/Biography';
import { Portfolio } from '../components/Portfolio';
import Footer from '../components/Footer';
import Header from '../components/Header';
import { AppContext } from '../context/AppContext';
import PortfolioDetail from '../components/PortfolioDetail';

const Home = () => {
  const {state} = useContext(AppContext);



  return (
    <>
      <Header/>
      { !state.biography && <About/> || <Biography/>}
      { !state.portfolio.active && <Portfolio/> || <PortfolioDetail/> }
      <Footer/>
    </>
  )
}

export default Home;
