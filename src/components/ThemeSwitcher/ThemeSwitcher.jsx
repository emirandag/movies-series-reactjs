import './ThemeSwitcher.css'

import { useContext } from 'react';

import { ThemeContext } from '../../context/ThemeProvider';

import { MdLightMode, MdDarkMode } from "react-icons/md";

const ThemeSwitcher = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <button className="theme-button" type="button" onClick={toggleTheme}>
      {theme === 'light' ? <MdDarkMode /> : <MdLightMode /> }
    </button>
  );
};

export default ThemeSwitcher;