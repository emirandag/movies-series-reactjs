import './Header.css';

import React from 'react';

import Navbar from '../Navbar/Navbar';
import ThemeSwitcher from '../ThemeSwitcher/ThemeSwitcher';

const Header = () => {
  return (
    <header className="header">
      <div className="theme">
        <ThemeSwitcher />
      </div>
      <Navbar />
    </header>
  );
};

export default Header;