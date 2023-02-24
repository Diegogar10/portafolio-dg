import React from 'react';
import './Hexagon.scss';

const Hexagon = (
  {l, x, y, color, line, pos}:
  {l:number, x:number, y:number, color:string, line: number, pos?:boolean}
  ) => {
  
  const styles={
    borderColor: color,
    borderWidth: line,
    width: (0.5*l)+(line/1.5),
  }

  return (
    <div 
      className='hexagon__background'
      style={
        pos? {
          top: x,
          right:y,
          width:l+5,
          height:l-5,          
        }:{
          top: x,
          left:y,
          width:l+5,
          height:l-5,
      }}
    >
      <div style={{...styles}}></div>
      <div style={{...styles}}></div>
      <div style={{...styles}}></div>
    </div>
  )
}

export default Hexagon;
