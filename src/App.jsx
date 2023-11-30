import './App.css';

import React, { useContext } from 'react';
import { Outlet } from 'react-router-dom';

import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import { ThemeContext } from './context/ThemeProvider';
import useRequest from './hooks/useRequest';
import { useAuth } from './context/AuthProvider';

const App = () => {
  const { theme } = useContext(ThemeContext);


  return (
    <div className={`App color-${theme}`}>
      <Header />
      <main className="main">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default App;
