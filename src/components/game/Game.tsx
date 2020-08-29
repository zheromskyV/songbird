import React from 'react';
import Question from '../question/Question';
import Answers from '../answers/Answers';
import Description from '../description/Description';
import NextButton from './NextButton';
import { IBird } from '../../constants/interfaces';
import './game.css';

type GameProps = {
  data: IBird[];
  category: number;
  setScore: (score: any) => void;
};

const Game: React.FC<GameProps> = ({ data, category, setScore }) => {
  const rightAnswer = 3;
  const question = data[rightAnswer];

  const [choice, setChoice] = React.useState(-1);

  const [isCorrectAnswerFound, setIsCorrectAnswerFound] = React.useState(false);

  return (
    <React.Fragment>
      <div className="game deep-purple lighten-3">
        <div className="wrapper">
          <Question
            name={question.name}
            image={question.image}
            audio={question.audio}
            isAnswered={isCorrectAnswerFound}
          />
          <div className="game__two-cols">
            <Answers
              data={data}
              correctAnswer={rightAnswer}
              isCorrectAnswerFound={isCorrectAnswerFound}
              category={category}
              onClick={setChoice}
              setIsCorrectAnswerFound={setIsCorrectAnswerFound}
              setScore={setScore}
            />
            <Description bird={data[choice]} isAnswered={choice !== -1} />
          </div>
          <NextButton />
        </div>
      </div>
    </React.Fragment>
  );
};

export default Game;
