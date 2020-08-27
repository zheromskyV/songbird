import React from 'react';
import Header from './components/header/Header';
import Game from './components/game/Game';


const App: React.FC = () => {
  return (
    <React.Fragment>
      <Header />
      <Game />
    </React.Fragment>
  );
};

export default App;
