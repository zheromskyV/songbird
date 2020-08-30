import React from 'react';
import ReactAudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import './player.css';

type PlayerProps = {
  audio: string;
  isCorrectAnswerFound?: boolean;
};

const Player: React.FC<PlayerProps> = ({ audio, isCorrectAnswerFound = undefined }) => {
  let ref: any = React.useRef();
  React.useEffect(() => {
    ref.audio.current.pause();
  }, [isCorrectAnswerFound]);

  return (
    <ReactAudioPlayer
      src={audio}
      className="player"
      autoPlayAfterSrcChange={false}
      showJumpControls={false}
      autoPlay={false}
      layout={'horizontal'}
      ref={(elem) => (ref = elem)}
    />
  );
};

export default Player;
