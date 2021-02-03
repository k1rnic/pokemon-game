import React from 'react';
import { Redirect, Route, Switch, useRouteMatch } from 'react-router-dom';
import './App.css';
import Logo from './assets/img/pokeball.png';
import Footer from './components/Footer';
import NavMenu from './components/NavMenu';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import GamePage from './pages/GamePage';
import HomePage from './pages/HomePage';
import NotFound from './pages/NotFound';

const App = () => {
  const isHome = useRouteMatch('/');

  return (
    <>
      <NavMenu bgActive={!isHome?.isExact} logoSrc={Logo} />
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/game" component={GamePage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/contacts" component={ContactPage} />
        <Route path="/notFound" component={NotFound} />
        <Route render={() => <Redirect to="/notFound" />} />
      </Switch>
      <Footer />
    </>
  );
};

export default App;
