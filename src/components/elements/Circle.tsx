import React from 'react';
import './Circle.scss';

const Circle = (
    {r, x, y, fill, line, color}
    :{r:number, x:number, y:number, fill?:string , line?: number, color?:string}
  ) => {
  const styles= {
    width: r,
    height: r,
    top: x,
    left: y,
    borderWidth: line,
  }
  
  return (
    <div 
      className={!fill? 'circle__background' : 'circle__border'}
      style={
        fill? 
          {
            ...styles,
            borderColor: color,
          }:
          {
            ...styles,
            background: color,
          }
      }
    >  
    </div>
  )
}

export default Circle;
