import React from 'react';
import imgPefil from '../assets/images/sinFondoPefil.png';
import useSizeScreen from '../hooks/useSizeScreen';
import { Button } from './elements/Button';
import Circle from './elements/Circle';
import Hexagon from './elements/Hexagon';
import './Header.scss';

const Header = () => {

  const {width, height} = useSizeScreen();

  return (
    <header className='header__container'>
      <img className='header__image' src={imgPefil} alt='Foto Diego Garcia'/>
      <section className='header__info'>
        <p>¡Hola!</p>
        <h2>Soy Diego</h2>
        <p><span>Frontend Devoloper & Control Enginier </span></p>
        <Button title='Ver portafolio' style={width >= 425?'primary':'optional'} route='#portfolio__container'/>
      </section>
      {(width >= 425) && (
        <>
          <Circle r={240} x={60} y={120}/>
          <Circle r={30} x={120} y={300} />
          <Circle r={25} x={115} y={305} fill='yes' line={3} />
          <Hexagon l={55} x={175} y={40} color='#00000008' line={11}/>
          <Hexagon l={95} x={100} y={30} color='#ffffff20' line={8} pos={true}/>
        </>
      ) || (
        <>
          <Circle r={240} x={50} y={20} color='#00000010'/>
          <Circle r={30} x={120} y={300} color='#00000010'/>
          <Circle r={25} x={115} y={305} fill='yes' line={3} color='#00000010' />
        </>
      )
      }
      <Circle r={32} x={345} y={600} />
      <Circle r={38} x={355} y={-10} color='#00000010'/>
      <Circle r={25} x={370} y={12} fill='yes' line={3} color='#00000010'/>
      <Hexagon l={110} x={150} y={-34} color='#00000005' line={12}/>
    </header>
  )
}

export default Header;
