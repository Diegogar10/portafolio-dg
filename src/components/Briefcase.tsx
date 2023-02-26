import React from 'react';
import './Briefcase.scss';
import Hexagon from './elements/Hexagon';

export const Briefcase = () => {
  return (
    <div className='briefcase__container'>
      <Hexagon l={110} x={-20} y={-60} color='#ffffff09' line={11} pos={true}/>
      <Hexagon l={55} x={0} y={20} color='#ffffff10' line={9} pos={true}/>
    </div>
  )
}
