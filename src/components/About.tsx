import React from 'react';
import './About.scss';
import foto from '../assets/images/perfil.jpg';
import { dataHome } from '../libs/infoPerson';
import { Button } from './elements/Button';
import Hexagon from './elements/Hexagon';
import Circle from './elements/Circle';
const About = () => {
  return (
    <main className='about__me'>
      <section>
        <h3>{dataHome.title}</h3>
        {dataHome.description.map((data)=>(
          <p>{data}</p>
        ))}
        <div>
          <Button title='Ver más...' style='secondary' route=''/>
          <Button title='Contacto' style='primary' route=''/>
        </div>
      </section>
      <figure>
        <img src={foto} alt='imagen perfil'/>
      </figure>
      <Circle r={30} x={180} y={30}/>
      <Circle r={20} x={178} y={37} fill='yes' line={2} />
    </main>
  )
}

export default About;
