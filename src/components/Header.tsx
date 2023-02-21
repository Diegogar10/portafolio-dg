import React from 'react';
import imgPefil from '../assets/images/sinFondoPefil.png';
import './Header.scss';

const Header = () => {
  return (
    <div className='header__container'>
      <img className='header__image' src={imgPefil} alt='Foto Diego Garcia'/>
      <section>
        <p></p>
        <h2></h2>
        <p></p>
        <button></button>
      </section>
    </div>
  )
}

export default Header
