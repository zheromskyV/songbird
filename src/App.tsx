import React from 'react';
import Header from './components/header/Header';
import Game from './components/game/Game';

import { birdsData } from './data/birds';

const App: React.FC = () => {
  const [category, setCategory] = React.useState(0);
  const [score, setScore] = React.useState(0);

  return (
    <React.Fragment>
      <Header
        categories={birdsData.map(({ name }) => name)}
        category={category}
        score={score}
      />
      <Game
        data={birdsData[category].birds}
        category={category}
        score={score}
        setScore={setScore}
        setCategory={setCategory}
      />
    </React.Fragment>
  );
};

export default App;
