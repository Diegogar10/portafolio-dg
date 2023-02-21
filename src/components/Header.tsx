import React from 'react';
import imgPefil from '../assets/images/sinFondoPefil.png';
import './Header.scss';

const Header = () => {
  return (
    <div className='header__container'>
      <img className='header__image' src={imgPefil} alt='Foto Diego Garcia'/>
      <section className='header__info'>
        <p>¡Hola!</p>
        <h2>Soy Diego</h2>
        <p><span>Frontend Devoloper & Control Enginier </span></p>
        {/* <p>Bienvenidos a mi pagina personal. <br /> Quedate conmigo... te contare un poco de mi experiencia!</p> */}
        <button>Acerca de mi</button>
      </section>
    </div>
  )
}

export default Header
