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
          <a href='https://www.instagram.com/diegogar92/'>
            <InstagramIcon sx={{...styles}}/>
          </a>
          <a href='https://www.linkedin.com/in/diego-garcia-557361190/'>
            <LinkedInIcon sx={{...styles}}/>
          </a>
          <a href='https://github.com/Diegogar10'>
            <GitHubIcon sx={{...styles}}/>
          </a>
        </div>
      </section>
      <section className='footer__contact'>
        <h3>Otros contactos</h3>
        <div>
          <p><span>Email:</span>diegogarcia.developer@gmail.com</p>
          <p><span>Cel:</span> &nbsp; +57 3508239097</p>
        </div>
      </section>
    </footer>
  )
}

export default Footer;
