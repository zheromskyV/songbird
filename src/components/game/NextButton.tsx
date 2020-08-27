import React from 'react';
import './game.css';

const NextButton: React.FC = () => {
  return (
    <React.Fragment>
      <div className="game__next-btn">
        <button className="next-btn deep-purple lighten-4">Next level</button>
      </div>
    </React.Fragment>
  );
};

export default NextButton;
