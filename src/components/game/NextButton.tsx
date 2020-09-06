import React from 'react';
import './game.css';

type NextButtonProps = {
  onClick: () => void;
  isActive: boolean;
};

const NextButton: React.FC<NextButtonProps> = ({ onClick, isActive }) => {
  const btnClassName = `next-btn ${isActive ? 'next-btn_active' : 'next-btn_unactive'}`
  return (
    <React.Fragment>
      <div className="game__next-btn" onClick={onClick}>
        <button className={btnClassName}>Next level</button>
      </div>
    </React.Fragment>
  );
};

export default NextButton;
