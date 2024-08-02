import React from 'react';
import ReactDOM from 'react-dom/client';
import './scss/index.scss';
import HomePage from './components/pages/homePage/homePage';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <HomePage />
  </React.StrictMode>
);
