import React from 'react';
import Question from '../question/Question';
import Answers from '../answers/Answers';
import Description from '../description/Description';
import NextButton from './NextButton';
import Result from '../result/Result';
import { IBird } from '../../constants/interfaces';
import { DEFAULT_CHOICE } from '../../constants/defaults';
import { getRandomInt } from '../../helpers/math-helper';
import './game.css';

type GameProps = {
  data: IBird[];
  category: number;
  score: number;
  setScore: (score: any) => void;
  setCategory: (category: any) => void;
};

const Game: React.FC<GameProps> = ({ data, category, score, setScore, setCategory }) => {
  const [isGaming, setIsGaming] = React.useState(true);
  const [rightAnswer, setRightAnswer] = React.useState(getRandomInt(data.length));
  const [question, setQuestion] = React.useState(data[rightAnswer]);
  const [choice, setChoice] = React.useState(DEFAULT_CHOICE);
  const [isCorrectAnswerFound, setIsCorrectAnswerFound] = React.useState(false);

  React.useEffect(() => {
    console.log(rightAnswer + 1);
  }, [rightAnswer]);

  const onRoundChange = () => {
    setRightAnswer(getRandomInt(data.length));
    setQuestion(data[rightAnswer]);
    setChoice(DEFAULT_CHOICE);
  };

  const onNextButtonClick = () => {
    if (isCorrectAnswerFound) {
      onRoundChange();
      setCategory((prevCategory: number) => {
        if (prevCategory === data.length - 1) {
          setIsGaming(false);
          return 0;
        }
        return prevCategory + 1;
      });
    }
  };

  const onAgainButtonClick = () => {
    setIsGaming(true);
    setScore(0);
    onRoundChange();
    setCategory(0);
  };

  return (
    <React.Fragment>
      <div className="game deep-purple lighten-3">
        <div className="wrapper">
          {isGaming && (
            <React.Fragment>
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
            </React.Fragment>
          )}
          {!isGaming && <Result score={score} onAgainButtonClick={onAgainButtonClick} />}
        </div>
      </div>
    </React.Fragment>
  );
};

export default Game;
