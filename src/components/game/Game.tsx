import React from 'react';
import Question from '../question/Question';
import Answers from '../answers/Answers';
import Description from '../description/Description';
import NextButton from './NextButton';
import { IBird } from '../../constants/interfaces';
import { DEFAULT_CHOICE } from '../../constants/defaults';
import { getRandomInt } from '../../helpers/math-helper';
import './game.css';

type GameProps = {
  data: IBird[];
  category: number;
  setScore: (score: any) => void;
  setCategory: (category: any) => void;
};

const Game: React.FC<GameProps> = ({ data, category, setScore, setCategory }) => {
  const [rightAnswer, setRightAnswer] = React.useState(getRandomInt(data.length));
  const [question, setQuestion] = React.useState(data[rightAnswer]);
  const [choice, setChoice] = React.useState(DEFAULT_CHOICE);
  const [isCorrectAnswerFound, setIsCorrectAnswerFound] = React.useState(false);

  const onNextButtonClick = () => {
    if (isCorrectAnswerFound) {
      setRightAnswer(getRandomInt(data.length));
      setQuestion(data[rightAnswer]);
      setChoice(DEFAULT_CHOICE);
      setCategory((prevCategory: number) => {
        if (prevCategory === data.length - 1) {
          return 0;
        }
        return prevCategory + 1;
      });
    }
  };

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
            <Description bird={data[choice]} isAnswered={choice !== DEFAULT_CHOICE} />
          </div>
          <NextButton onClick={onNextButtonClick} />
        </div>
      </div>
    </React.Fragment>
  );
};

export default Game;
