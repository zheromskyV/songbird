import React from 'react';
import Player from '../player/Player';
import './question.css';

const Question: React.FC = () => {
  return (
    <React.Fragment>
      <div className="question deep-purple lighten-4">
        <Player audio={'https://www.xeno-canto.org/sounds/uploaded/BLMSIUFTFU/XC512582-190604_1087_Grus_tok.mp3'}/>
      </div>
    </React.Fragment>
  );
};

export default Question;
