import React, { useState } from 'react';
import { project } from '../libs/infoPerson';
import './Project.scss';

const Project = (
  {
    title,
    images,
    age,
    desciption,
  }:project
) => {
  const [state, setState] = useState(false);

  const activeState = () =>{
    setState(true);
  }

  const inactiveState = () =>{
    setState(false);
  }

  return (
    <article onMouseMove={activeState} onMouseOut={inactiveState} className='project__container'>
      <figure className={state? 'project__image':'project__image--invisible'}>
        <img src={images[0]} alt={title}/>
      </figure>
      <section className={state? 'project__info':'project__info--invisible'}>
        <h2>{title}</h2>
        <h4>{age}</h4>
        <p>{desciption}</p>
      </section>
    </article>
  )
}

export default Project;
