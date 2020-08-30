import React from 'react';
import Answer from './Answer';
import { IBird } from '../../../constants/interfaces';
import { DEFAULT_ROUND_SCORE } from '../../../constants/defaults';
import './answers.css';

type AnswersProps = {
  data: IBird[];
  correctAnswer: number;
  isCorrectAnswerFound: boolean;
  category: number;
  onClick: (idx: number) => void;
  setIsCorrectAnswerFound: (isCorrect: boolean) => void;
  setScore: (score: any) => void;
};

const Answers: React.FC<AnswersProps> = ({
  data,
  correctAnswer,
  isCorrectAnswerFound,
  category,
  onClick,
  setIsCorrectAnswerFound,
  setScore,
}) => {
  const [roundScore, setRoundScore] = React.useState(DEFAULT_ROUND_SCORE);

  const isCorrectAnswer = (idx: number) => correctAnswer === idx;

  return (
    <React.Fragment>
      <div className="answers deep-purple lighten-4">
        {data.map((item, idx) => (
          <Answer
            key={idx}
            text={item.name}
            isCorrect={isCorrectAnswer(idx)}
            isCorrectAnswerFound={isCorrectAnswerFound}
            category={category}
            onClick={() => onClick(idx)}
            setIsCorrectAnswerFound={setIsCorrectAnswerFound}
            setScore={setScore}
            roundScore={roundScore}
            setRoundScore={setRoundScore}
          />
        ))}
      </div>
    </React.Fragment>
  );
};

export default Answers;
