import React from 'react';
import Question from '../question/Question';
import Answers from '../answers/Answers';
import Description from '../description/Description';
import NextButton from './NextButton';
import { IBird } from '../../constants/interfaces';
import './game.css';

type GameProps = {
  data: IBird[];
};

const Game: React.FC<GameProps> = ({ data }) => {
  const question = data[0];

  return (
    <React.Fragment>
      <div className="game deep-purple lighten-3">
        <div className="wrapper">
          <Question
            name={question.name}
            image={question.image}
            audio={question.audio}
            isAnswered={false}
          />
          <div className="game__two-cols">
            <Answers />
            <Description bird={question} isAnswered={true} />
          </div>
          <NextButton />
        </div>
      </div>
    </React.Fragment>
  );
};

export default Game;
