import React from 'react';
import './Portfolio.scss';
import Hexagon from './elements/Hexagon';
import { projectsHome } from '../libs/infoPerson';
import Project from './Project';

export const Portfolio = () => {
  return (
    <div id='portfolio__container' className='portfolio__container'>
      <h2 className='portfolio__title'>Portafolio</h2>
      <section className='projects__container'>
      {projectsHome.projects.map((project, key)=>(
        <Project key={project.id} {...project}/>
      ))}
      </section>
      <Hexagon l={80} x={30} y={50} color='#ffffff10' line={6} pos={true}/>
    </div>
  )
}
