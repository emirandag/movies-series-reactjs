import './App.css';

import React, { useContext } from 'react';
import { Outlet } from 'react-router-dom';

import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import { ThemeContext } from './context/ThemeProvider';
import useRequest from './hooks/useRequest';

const App = () => {
  const { theme } = useContext(ThemeContext);

  const { movies, series, page, nextPage, previousPage, moviesId }= useRequest()

  return (
    <div className={`App color-${theme}`}>
      <Header />
      <main className="main">
        <Outlet context={[movies, series, page, nextPage, previousPage, moviesId ]} />
      </main>
      <Footer />
    </div>
  );
};

export default App;
