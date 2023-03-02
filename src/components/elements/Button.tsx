import React from 'react';
import './Button.scss';

export const Button = (
  {title, style, route, fn}
  :{title:string; style:'primary'|'secondary'|'optional'; route?:string, fn?:any}
  ) => {

    
    const handleButton = () => {
      fn();
    }

  return (
    route && <button className={`button__${style}`}><a href={route}>{title}</a></button>
      || <button className={`button__${style}`} onClick={handleButton}>{title}</button>
  )
}
