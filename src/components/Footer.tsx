import React from 'react';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';


import './Footer.scss';

const Footer = () => {

  const styles = { 
    fontSize:'48px'
  } 

  return (
    <footer id='footer__container' className='footer__container'>
      <section className='footer__socialMedia' >
        <div>
          <h3 className='footer__title'>Redes Sociales</h3>
          <a href='#'>
            <InstagramIcon sx={{...styles}}/>
          </a>
          <a href=''>
            <LinkedInIcon sx={{...styles}}/>
          </a>
          <a href=''>
            <GitHubIcon sx={{...styles}}/>
          </a>
        </div>
      </section>
      <section className='footer__contact'>
        <h3>Otros contactos</h3>
        <div>
          <p><span>Email:</span>diegogar92@gmail.com</p>
          <p><span>Cel:</span> &nbsp; +57 3006513359</p>
        </div>
      </section>
    </footer>
  )
}

export default Footer;
