import React from 'react';
import './About.scss';
import foto from '../assets/images/perfil.jpg';
import { dataHome } from '../libs/infoPerson';
const About = () => {
  return (
    <main className='about__me'>
      <section>
        <h3>{dataHome.title}</h3>
        {dataHome.description.map((data)=>(
          <p>{data}</p>
        ))}
        <div>
          <button>Ver mas...</button>
          <button>Contacto</button>
        </div>
      </section>
      <figure>
        <img src={foto} alt='imagen perfil'/>
      </figure>
    </main>
  )
}

export default About;
