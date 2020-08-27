import React from 'react';
import Question from '../question/Question';
import Answers from '../answers/Answers';
import Description from '../description/Description';
import NextButton from './NextButton';
import './game.css';

const Game: React.FC = () => {
  return (
    <React.Fragment>
      <div className="game deep-purple lighten-3">
        <div className="wrapper">
          <Question />
          <div className="game__two-cols">
            <Answers />
            <Description />
          </div>
          <NextButton />
        </div>
      </div>
    </React.Fragment>
  );
};

export default Game;
