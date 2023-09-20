import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import ButtonStyle from '../../components/UI/ButtonStyle/ButtonStyle';
import { ThemeContext } from '../../context/ThemeProvider';

const Page404 = () => {
  const { theme } = useContext(ThemeContext);
  const navigate = useNavigate()

  const handleClick = () => {
    // console.log('clicado');
    
    navigate('/profile')
  }

  return (
  <div className='page-404'>
    <div className='header-404'>
    <img className='image-404' src='https://static.vecteezy.com/system/resources/previews/012/871/550/original/design-template-of-capperboard-slapstick-filmmaking-device-clapper-board-icon-png.png' />
     <div>
     <h1>404</h1>
     <h3>Page not found</h3>
     </div>
     <img className='image-404' src='https://static.vecteezy.com/system/resources/previews/012/871/550/original/design-template-of-capperboard-slapstick-filmmaking-device-clapper-board-icon-png.png' />
    </div>
    <div className='info-404'>
      <p>¡La página seleccionada no ha sido encontrada!</p>
      <ButtonStyle variant='primary' theme={theme} onClick={() => handleClick()}>Volver al inicio</ButtonStyle>
    </div>
    
</div>)
};

export default Page404;