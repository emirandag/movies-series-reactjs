import './Navbar.css';

import { NavLink } from 'react-router-dom';
import { useAuth } from '../../context/AuthProvider';
import { useContext, useState } from 'react';
import { ThemeContext } from '../../context/ThemeProvider';
import ButtonStyle from '../UI/ButtonStyle/ButtonStyle';

const Navbar = () => {
  const { theme } = useContext(ThemeContext);
  const { user, logout } = useAuth();
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="navbar">
      <div className="nav-logo">Movies&TV</div>

      {user && (
        <nav className={`nav-items ${isOpen && 'open'}`}>
          <ul>
            <li>
              <NavLink to="profile" onClick={() => setIsOpen(!isOpen)}>Favoritos</NavLink>
            </li>
            <li>
              <NavLink to="movies" onClick={() => setIsOpen(!isOpen)}>Películas</NavLink>
            </li>
            <li>
              <NavLink to="series" onClick={() => setIsOpen(!isOpen)}>Series</NavLink>
            </li>
          </ul>
        </nav>
      )}
      {/* {user && ( */}
        <div className="nav-buttons">
          {/* <ButtonStyle variant='secondary' theme={theme} onClick={() => logout()}>Logout</ButtonStyle> */}
        </div>
      {/* )} */}
      <div
        className={`nav-toggle ${isOpen && 'open'}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  );
};

export default Navbar;