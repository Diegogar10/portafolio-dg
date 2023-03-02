import React, { useContext } from 'react';
import {dataAbout} from '../libs/infoPerson';
import { AppContext } from '../context/AppContext';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import './Biography.scss';


export const Biography = () => {


  const {inactiveBio} = useContext(AppContext);

  const handleButton = () =>{
    inactiveBio();
  }

  return (
    <div className='bigraphy__container'>
      <h3>Biografia</h3>
      {dataAbout.biografy.map((data, key)=>(
        <p key={key}>{data}</p>
      ))}
      <button onClick={handleButton}>
        <HighlightOffIcon sx={{fontSize:'32px'}}/>
      </button>
    </div>
  )
}
