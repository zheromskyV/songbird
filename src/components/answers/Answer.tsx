import React from 'react';
import { DEFAULT_ROUND_SCORE, ROUND_SCORE_REDUCER } from '../../constants/defaults';
import successSound from '../../assets/audio/success.mp3';
import failSound from '../../assets/audio/fail.mp3';
import './answers.css';

type AnswerProps = {
  text: string;
  isCorrect: boolean;
  isCorrectAnswerFound: boolean;
  category: number;
  onClick: () => void;
  setIsCorrectAnswerFound: (isCorrect: boolean) => void;
  setScore: (score: any) => void;
  roundScore: number;
  setRoundScore: (roundScore: any) => void;
};

const Answer: React.FC<AnswerProps> = ({
  text,
  isCorrect,
  isCorrectAnswerFound,
  category,
  onClick,
  setIsCorrectAnswerFound,
  setScore,
  roundScore,
  setRoundScore,
}) => {
  const [isAnswered, setIsAnswered] = React.useState(false);

  React.useEffect(() => {
    setIsAnswered(false);
    setIsCorrectAnswerFound(false);
    setRoundScore(DEFAULT_ROUND_SCORE);
  }, [category]); // eslint-disable-line

  const onCorrectAnswer = () => {
    setIsCorrectAnswerFound(true);
    setScore((prevScore: number) => prevScore + roundScore);
    const audio = new Audio(successSound);
    audio.play();
  };

  const onWrongAnswer = () => {
    setRoundScore((prevRoundScore: number) => {
      if (prevRoundScore > 0) {
        return prevRoundScore - ROUND_SCORE_REDUCER;
      }
      return 0;
    });
    const audio = new Audio(failSound);
    audio.play();
  };

  const onAnswerClick = () => {
    onClick();
    if (!isCorrectAnswerFound) {
      if (!isAnswered) {
        if (isCorrect) {
          onCorrectAnswer();
        } else {
          onWrongAnswer();
        }
      }
      setIsAnswered(true);
    }
  };

  const indicatorColor = isCorrect ? 'answer__indicator_correct' : 'answer__indicator_wrong';
  const indicatorClassName = `answer__indicator ${isAnswered ? indicatorColor : ''}`;

  return (
    <React.Fragment>
      <div className="answer deep-purple lighten-3" onClick={onAnswerClick}>
        <span className={indicatorClassName}></span>
        <p className="answer__text">{text}</p>
      </div>
    </React.Fragment>
  );
};

export default Answer;
