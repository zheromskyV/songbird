import React from 'react';
import AgainButton from './AgainButton';
import { MAX_SCORE } from '../../constants/defaults';
import congratsImg from '../../images/congrats.jpg';
import './result.css';

type ResultProps = {
  score: number;
  onAgainButtonClick: () => void;
};

const Result: React.FC<ResultProps> = ({ score, onAgainButtonClick }) => {
  return (
    <React.Fragment>
      <div className="result deep-purple lighten-4">
        <h2>Поздравляем!</h2>
        <h3>Викторина завершена!</h3>
        <h3>
          Вы набрали <span>{score}</span> баллов из {MAX_SCORE}!
        </h3>
        {score === MAX_SCORE && (
          <React.Fragment>
            <h4>Теперь ты знаешь, кто чирикнул!</h4>
            <img src={congratsImg} alt="congrats" />
          </React.Fragment>
        )}
        <AgainButton onClick={onAgainButtonClick} />
      </div>
    </React.Fragment>
  );
};

export default Result;
