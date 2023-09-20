import './Card.css'
import { MdFavorite, MdDeleteForever } from "react-icons/md";
import { useLocation, useNavigate } from "react-router-dom";
import ButtonIcon from '../UI/ButtonIcon/ButtonIcon';
import { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeProvider';

const Card = ({ id, image, name, date, actionClick, resFav}) => {
    
  const { theme } = useContext(ThemeContext);
        const location = useLocation()
        const navigate = useNavigate();

        //console.log(location.pathname);

        const handleCheckId = (id) => {

          // if (location.pathname !== '/profile') {
            navigate(`${location.pathname}/${id}`);
          // }
          
          
        };

  return (
    <figure className='card' >
        <img src={`https://image.tmdb.org/t/p/w500/${image}`} alt={name} onClick={() => (handleCheckId(id))} />
        <figcaption>
            <h3>{name}</h3>
            <h4>{date?.replaceAll("-", "/")}</h4>
            {/* <h4>{date}</h4> */}
            {/* {
               location.pathname === '/profile' ? <button className='btn-favorites'  onClick={() => actionClick()}><MdDeleteForever /></button> : <button className='btn-favorites' onClick={() => actionClick()}><MdFavorite /></button>
            } */}
            {/* {
               location.pathname === '/profile' ? <ButtonIcon variant='primary' theme={theme} onClick={() => actionClick()}><MdDeleteForever /></ButtonIcon> : <ButtonIcon variant='primary' theme={theme} onClick={() => actionClick()}><MdFavorite /></ButtonIcon> 
            } */}
<ButtonIcon variant='primary' theme={theme} onClick={() => actionClick()}><MdFavorite style={{
    color: resFav.favoritos.some((fav) => fav.id == id) ? "red" : "white" 
}}/></ButtonIcon> 
        </figcaption>
    </figure>

  )
}

export default Card