import React from 'react';
import './Button.scss';

export const Button = (
  {title, style, route}
  :{title:string; style:'primary'|'secondary'; route:string}
  ) => {
  return (
    <button className={`button__${style}`}><a href={route}>{title}</a></button>
  )
}
