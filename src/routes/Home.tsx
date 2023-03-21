import React, { useContext, useEffect } from 'react';
import About from '../components/About';
import { Biography } from '../components/Biography';
import { Portfolio } from '../components/Portfolio';
import Footer from '../components/Footer';
import Header from '../components/Header';
import { AppContext } from '../context/AppContext';
import PortfolioDetail from '../components/PortfolioDetail';
import { Loading } from '../components/Loading';

const Home = () => {
  const {state, loadingComplete} = useContext(AppContext);
  useEffect(()=>{
    setTimeout(()=>{
      loadingComplete();
    },7000);
  },[]);
  return (
    <>
      {state.loading 
        && <Loading/>
        || <>
            <Header/>
            { !state.biography && <About/> || <Biography/>}
            { !state.portfolio.active && <Portfolio/> || <PortfolioDetail/> }
            <Footer/>  
          </> 
      }
    </>
  )
}

export default Home;
