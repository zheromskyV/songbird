import React from 'react';
import './score.css';

type ScoreProps = {
  score: number;
};

const Score: React.FC<ScoreProps> = ({ score }) => {
  return (
    <React.Fragment>
      <div className="score">
        <h5>
          Score: <span>{score}</span>
        </h5>
      </div>
    </React.Fragment>
  );
};

export default Score;
