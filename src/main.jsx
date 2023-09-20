import './index.css';

import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import App from './App';
import Protected from './components/Protected/Protected';
import { AuthProvider } from './context/AuthProvider';
import ThemeProvider from './context/ThemeProvider';
import Login from './pages/Login/Login';
import MovieDetails from './pages/MovieDetails/MovieDetails';
import Movies from './pages/Movies/Movies';
import Page404 from './pages/Page404/Page404';
import Profile from './pages/Profile/Profile';
import SerieDetails from './pages/SerieDetails/SerieDetails';
import Series from './pages/Series/Series';
import Movies2 from './pages/Movies2';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider>
      <BrowserRouter basename="/">
        <AuthProvider>
          <Routes>
            <Route path="/" element={<App />}>
              <Route index element={<Login />} />
              <Route
                path="/profile"
                element={
                  <Protected>
                    <Profile />
                  </Protected>
                }
              />
              <Route
                path="/movies"
                element={
                  <Protected>
                    <Movies />
                  </Protected>
                }
              />
              <Route
                path="/series"
                element={
                  <Protected>
                    <Series />
                  </Protected>
                }
              />
              <Route
                path="/movies/:id"
                element={
                  <Protected>
                    <MovieDetails />
                  </Protected>
                }
              />
              <Route
                path="/series/:id"
                element={
                  <Protected>
                    <SerieDetails />
                  </Protected>
                }
              />
              <Route
                path="/movies2"
                element={
                  <Protected>
                    <Movies2 />
                  </Protected>
                }
              />
              <Route path="/*" element={<Page404 />} />
            </Route>
          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>,
);