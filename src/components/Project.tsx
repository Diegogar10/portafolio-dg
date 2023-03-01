import React, { useState, useContext } from 'react';
import { AppContext } from '../context/AppContext';
import { project } from '../libs/infoPerson';
import './Project.scss';

const Project = (
  {
    id,
    title,
    images,
    age,
    summary,
  }:project
) => {
  const [state, setState] = useState(false);
  const { activePort } = useContext(AppContext);

  const activeState = () =>{
    setState(true);
  }

  const inactiveState = () =>{
    setState(false);
  }

  const handleClick = () =>{
    activePort(id);
  }

  return (
    <article onMouseMove={activeState} onMouseOut={inactiveState} onClick={handleClick} className='project__container'>
      <figure className={state? 'project__image':'project__image--invisible'}>
        <img src={images[0]} alt={title}/>
      </figure>
      <section className={state? 'project__info':'project__info--invisible'}>
        <h2>{title}</h2>
        <h4>{age}</h4>
        <p>{summary}</p>
      </section>
    </article>
  )
}

export default Project;
