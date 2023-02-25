import React from 'react';
import imgPefil from '../assets/images/sinFondoPefil.png';
import Circle from './elements/Circle';
import Hexagon from './elements/Hexagon';
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
        <button>Ver portafolio</button>
      </section>
      <Circle r={240} x={60} y={120} />
      <Circle r={30} x={120} y={300} />
      <Circle r={32} x={345} y={600} />
      <Circle r={38} x={355} y={-10} color='#00000010'/>
      <Circle r={25} x={115} y={305} fill='yes' line={3} />
      <Circle r={25} x={370} y={12} fill='yes' line={3} color='#00000010'/>
      <Hexagon l={110} x={150} y={-34} color='#00000005' line={12}/>
      <Hexagon l={55} x={175} y={40} color='#00000008' line={11}/>
      <Hexagon l={95} x={100} y={30} color='#ffffff20' line={8} pos={true}/>
      {/* <Hexagon l={50} x={160} y={30} color='#ffffff20' line={8} pos={true}/> */}
    </div>
  )
}

export default Header
