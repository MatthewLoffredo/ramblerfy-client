import React from 'react';
import "./PlayerBar.css";
import PropTypes from 'prop-types';
import PlayerControls from './PlayerControls';
import defaultCoverArtUrl from './defaultCoverArtUrl.png';

export default function PlayerBar({
  track: {
    trackName,
    albumCover,
    artist,
    volume,
    favorite,
  },
  // trackName,
  // albumCover,
  // artist,
  // volume,
  // favorite,
  onVolumeChange,
  onToggleTrackFavorite,
  onVolumeMuteToggle,
  playerControlState,
  ...playerControlActions
}) {

  let volumeInput = React.createRef()
  let volumeProgressBar = React.createRef()

  function handleMouseUp() {
     onVolumeChange(volumeInput.current.value);
  };

  function onInput(e) {
    volumeProgressBar.current.style = `width: ${e.target.value}%`;
  };

  return (
    <>
      <div className="player-box">

        {/*Album cover, track name, and artist name components*/}
        <div className="info-wrapper">
          <div className="now-playing__img">
            <img src={albumCover || defaultCoverArtUrl} />
          </div>
          <div className="now-playing__side">
            <div className="now-playing__name">
              <span title={trackName}>{trackName || "Cannot load playing track"}
              </span>
            </div>
            <div className="now-playing__artist">
              <span title={artist}>{artist || "Media type is not supported"}
              </span>
            </div>
          </div>
        </div>

        {/*Player control icons: back, play/pause, forward, shuffle, repeat*/}
        <PlayerControls track={{ ...playerControlState }}
          { ...playerControlActions } />

        {/*icons for liking tracks, volume, and volume bar*/}
        <div className="extended-controls">
          <div className="volume-bar">
             <button className={ 'control-button icon-heart ' + (
                 favorite ? 'active'
                          : '') }
               onClick={() => onToggleTrackFavorite()}>
             </button>
             <button className={ 'control-button ' + (
                 volume === 0 ? 'icon-volume-off'
                              : 'icon-volume')}
               onClick={() => onVolumeMuteToggle()}>
             </button>
             <div className="progress-bar" onMouseUp={handleMouseUp}>
                <div className="progress-bar-wrapper">
                  <div className="progress-bar-fg"
                    style={{"width": `${volume}%`}}
                    ref={volumeProgressBar}>
                  </div>
                  <input
                    key={volume}
                    className="progress-bar-bg"
                    type="range"
                    min="0"
                    max="100"
                    defaultValue={volume}
                    ref={volumeInput}
                    onInput={onInput}
                  />
                </div>
             </div>
          </div>
        </div>
      </div>
    </>
  )
}
