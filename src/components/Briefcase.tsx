import React from 'react';
import './Briefcase.scss';
import Hexagon from './elements/Hexagon';
import { projectsHome } from '../libs/infoPerson';
import Project from './Project';
export const Briefcase = () => {
  return (
    <div className='briefcase__container'>
      <h2>Portafolio</h2>
      <section className='projects__container'>
      {projectsHome.projects.map((project, key)=>(
        <Project key={project.id} {...project}/>
      ))}
      </section>
      <Hexagon l={55} x={30} y={15} color='#ffffff10' line={9} pos={true}/>
    </div>
  )
}
