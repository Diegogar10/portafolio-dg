import React, { useContext } from 'react';
import {dataAbout} from '../libs/infoPerson';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import './Biography.scss';
import { AppContext } from '../context/AppContext';


export const Biography = () => {


  const {inactiveBio} = useContext(AppContext);

  const handleButton = () =>{
    inactiveBio();
  }

  return (
    <div>
      <h3>Biografia</h3>
      {dataAbout.biografy.map((data, key)=>(
        <p key={key}>{data}</p>
      ))}
      <button onClick={handleButton}>
        <HighlightOffIcon/>
      </button>
    </div>
  )
}
