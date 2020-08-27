import React from 'react';
import ReactAudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import './player.css';

type PlayerProps = {
  audio: string;
};

const Player: React.FC<PlayerProps> = ({ audio }) => {
  return (
    <ReactAudioPlayer
      src={audio}
      className="question__player"
      autoPlayAfterSrcChange={false}
      showJumpControls={false}
      autoPlay={false}
      layout={'horizontal'}
    />
  );
};

export default Player;
