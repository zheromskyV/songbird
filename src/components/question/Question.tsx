import React from 'react';
import Player from '../player/Player';
import defaultImage from '../../assets/images/logo.png';
import './question.css';

type QuestionProps = {
  name: string;
  image: string;
  audio: string;
  isAnswered?: boolean;
};

const Question: React.FC<QuestionProps> = ({ name, image, audio, isAnswered = false }) => {
  return (
    <React.Fragment>
      <div className="question deep-purple lighten-4">
        <div className="question__cols">
          <div className="question__img-container">
            <img
              className={'question__img' + (!isAnswered ? ' def' : '')}
              src={isAnswered ? image : defaultImage}
              alt={name}
            />
          </div>
          <div className="question__rows">
            <div className="question__name">
              <p>{isAnswered ? name : '******'}</p>
              <hr className="question__line" />
            </div>
            <Player audio={audio} />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Question;
