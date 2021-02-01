import React, { useState } from 'react';
import GamePage from './pages/GamePage';
import HomePage from './pages/HomePage';

import './App.css';

const App = () => {
  const [page, setPage] = useState('home');

  const handleRouteChange = (page: string) => {
    setPage(page);
  };

  switch (page) {
    case 'game':
      return <GamePage onRouteChange={handleRouteChange} />;
    default:
      return <HomePage onRouteChange={handleRouteChange} />;
  }
};

export default App;
