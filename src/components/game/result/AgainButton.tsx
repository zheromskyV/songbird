import React from 'react';
import './result.css';

type AgainButtonButtonProps = {
  onClick: () => void;
};

const AgainButton: React.FC<AgainButtonButtonProps> = ({ onClick }) => {
  return (
    <React.Fragment>
      <div className="game__next-btn" onClick={onClick}>
        <button className="next-btn deep-purple lighten-2">Play again</button>
      </div>
    </React.Fragment>
  );
};

export default AgainButton;
