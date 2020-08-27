import React from 'react';
import Header from './components/header/Header';
import Game from './components/game/Game';

import { birdsData } from './data/birds';

const App: React.FC = () => {
  const categories = birdsData.map(({ name }) => name);

  const [category, setCategory] = React.useState(0);
  const [score] = React.useState(0);

  return (
    <React.Fragment>
      <Header categories={categories} category={category} setCategory={setCategory} score={score} />
      <Game />
    </React.Fragment>
  );
};

export default App;
