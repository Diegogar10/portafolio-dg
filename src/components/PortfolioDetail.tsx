import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import { projectsHome } from '../libs/infoPerson';
import GaleryCarrusel from './elements/GaleryCarrusel';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import './PortfolioDetail.scss';
import { useRamdomColor } from '../hooks/useRamdomColor';

const PortfolioDetail = () => {
  
  const { inactivePort, state } = useContext(AppContext);
  const { idProject } = state.portfolio;
  const indexProject = projectsHome.projects.findIndex((value) => (value.id===idProject));
  const {
    title,
    images,
    goal,
    desciption,
    skills,
  } = projectsHome.projects[indexProject];
 
  const handleClick = () =>{
    inactivePort();
  }

  return (
    <div className='projectDetail__container'>
      <h3>{title}</h3>
      <div className='projectDetail__goal'>
        <h4>Objectivo</h4>
        <p>{goal}</p>
      </div>
      <div className='projectDetail__description'>
        <h4>Descripción</h4>
        {desciption.map((data,key)=><p key={key}>{data}</p>)}
      </div>
      <div className='projectDetail__galery'>
        <GaleryCarrusel images={images} arrowSize='28px'/>
      </div>
      <div className='projectDetail__skills'>
        <h4>Habilidades</h4>
        <div className='skills__container'>
          {skills.map((skill, key)=> <p style={{background:useRamdomColor()}} key={key}>{skill}</p>)}
        </div>
      </div>
      <button className='button__back' onClick={handleClick}>
        <HighlightOffIcon sx={{fontSize:'32px'}}/>
      </button>
    </div>
  )
}

export default PortfolioDetail;
