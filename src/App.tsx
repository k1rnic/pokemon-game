import React from 'react';
import PikachuBg from './assets/img/bg1.jpg';
import AshTeamBg from './assets/img/bg2.jpg';
import Footer from './components/Footer';
import Header from './components/Header';
import Layout from './components/Layout';

const App = () => {
  return (
    <>
      <Header title="Let's start" descr="What Kind of Pokemon Are You?" />
      <Layout id="3" title="Pikachu" descr="I choose you" urlBg={PikachuBg} />
      <Layout
        id="2"
        title="Empty layout header"
        descr="Empty layout description"
        colorBg="#8ddffb"
      />
      <Layout
        id="1"
        title="Ash team"
        descr="Are you ready, buddy?"
        urlBg={AshTeamBg}
      />
      <Footer />
    </>
  );
};

export default App;
