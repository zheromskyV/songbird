import React from 'react';
import Player from '../../player/Player';
import { IBird } from '../../../constants/interfaces';
import './description.css';

type DescriptionProps = {
  bird: IBird;
  isAnswered?: boolean;
};

const Description: React.FC<DescriptionProps> = ({ bird, isAnswered = false }) => {
  return (
    <React.Fragment>
      <div className="description deep-purple lighten-4">
        {isAnswered && (
          <div className="description__main-flex">
            <div className="description__cols">
              <div className="description__img-container">
                <img className="description__img" src={bird.image} alt={bird.name} />
              </div>
              <div className="description__rows">
                <div className="description__name">
                  <p>{bird.name}</p>
                  <hr className="description__line" />
                </div>
                <div className="description__species">
                  <p>{bird.species}</p>
                  <hr className="description__line description__line_extra" />
                </div>
              </div>
            </div>
            <Player audio={bird.audio} />
            <div className="description__desc">
              <p>{bird.description}</p>
            </div>
          </div>
        )}
        {!isAnswered && (
          <div className="description__unanswered">
            <p>Послушайте плеер.</p>
            <p>Выберите птицу из списка.</p>
          </div>
        )}
      </div>
    </React.Fragment>
  );
};

export default Description;
