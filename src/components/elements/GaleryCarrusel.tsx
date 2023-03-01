import React, {useState} from 'react';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import './GaleryCarrusel.scss';

const GaleryCarrusel = ({
  images=[],
  arrowColor,
  arrowSize,
}:{
  images: any[];
  arrowColor?: string;
  arrowSize?: string;
}) => {
  
  const [ move, setMove ] = useState(0);

  const handleLeftImage = () => {
    const ressult = move + 100; 
    setMove(ressult);
  }
  const handleRightImage = () => {
    const ressult = move - 100; 
    setMove(ressult);
  }

  const styles = {
    translate:`-${move}%`
  }
  
  const stylesArrow = {
    color:arrowColor,
    fontSize: arrowSize
  }

  return (
    <div className='galery__container'>
      <h4>Galeria</h4>
      <figure className='galery--photos'>
        {images.map((image, key)=><img 
          style={{...styles}}
          key={key} 
          src={image} 
          alt='default'
          />
        )}
      </figure>
      { (images.length > 1) &&
        <div className='buttons--control'>
          {move>=100 && <button onClick={handleRightImage}><ArrowBackIosNewIcon sx={{...stylesArrow}}/></button>||<p></p>}
          {(move<(( images.length - 1 ) * 100 )) && <button onClick={handleLeftImage}><ArrowForwardIosIcon sx={{...stylesArrow}}/></button>}
        </div>
      }
     </div>
  )
}

export default GaleryCarrusel;
