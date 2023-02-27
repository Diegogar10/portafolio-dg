import React from 'react';
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
  return (
    <article  >
      <figure>
        <img src={images[0]} alt={title}/>
      </figure>
      <section>
        <h2>{title}</h2>
        <h4>{age}</h4>
        <p>{desciption}</p>
      </section>
    </article>
  )
}

export default Project;
