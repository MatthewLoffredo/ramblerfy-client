//what this will look like:
// album icon on left, next to that song and artist name below it
// shuffle, go back, play/pause, go forward, repeat in center
// play time bar of song below that
// on the right, volume

// data to be passed in:
// album cover, song title, artist name, play/pause + repeat + shuffle state, progress time, volume

// functions to be passed in:
// onPlayPause, onShuffle, onPrevious, onNext, onRepeat, onProgressChange, onVolumeChange

import React from 'react';
import "./PlayerControls.css";
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPause, faPlay, faStepBackward, faStepForward, faRandom, faRedo } from "@fortawesome/free-solid-svg-icons";

export default function PlayerControls({ track: { isPlaying, progress, duration, shuffle, repeat }, onTogglePlay, onPrevious, onNext, onShuffle, onRepeat}) {

  const progressBarStyles = {
    width: (progress * 100 / duration) + '%'
  };

  return (
    <>
      <div className="box-controls">
        <div>
          <button className={ 'control-button icon-shuffle ' + (shuffle ? 'active' : '') }
                  onClick={onShuffle}>
          </button>
          <button className='control-button icon-skip-back'
                  onClick={onPrevious}>
          </button>
          <button className={ 'control-button ' + (isPlaying ? 'icon-pause' : 'icon-play') }
                  onClick={onTogglePlay}>
          </button>
          <button className='control-button icon-skip-forward'
                  onClick={onNext}>
          </button>
          <button className={ 'control-button icon-repeat-' + repeat + (repeat === 'off' ? '' : ' active') }
                  onClick={onRepeat}>
          </button>
        </div>

        {/*TODO: implement time based progress bar */}
        <div className="progress">
          <div
            className="progress__bar"
            style={progressBarStyles}
          />
        </div>
      </div>
    </>
  )
}

PlayerControls.propTypes = {
  track: PropTypes.shape({
    isPlaying: PropTypes.bool,
    progress: PropTypes.number,
    duration: PropTypes.number,
  }),
  togglePlay: PropTypes.func,
  onPrevious: PropTypes.func,
  onNext: PropTypes.func,
};
