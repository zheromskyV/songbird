import React from 'react';
import './game.css';

type NextButtonProps = {
  onClick: () => void;
};

const NextButton: React.FC<NextButtonProps> = ({ onClick }) => {
  return (
    <React.Fragment>
      <div className="game__next-btn" onClick={onClick}>
        <button className="next-btn deep-purple lighten-4">Next level</button>
      </div>
    </React.Fragment>
  );
};

export default NextButton;
