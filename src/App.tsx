import React from 'react';
import Header from './components/header/Header';
import Game from './components/game/Game';

import { birdsData } from './data/birds';

const App: React.FC = () => {
  const [category, setCategory] = React.useState(0);
  const [score] = React.useState(0);

  return (
    <React.Fragment>
      <Header
        categories={birdsData.map(({ name }) => name)}
        category={category}
        setCategory={setCategory}
        score={score}
      />
      <Game data={birdsData[category].birds} />
    </React.Fragment>
  );
};

export default App;
