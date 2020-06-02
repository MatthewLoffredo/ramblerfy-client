import React from "react";
import "./PlayerControls.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPause, faPlay, faStepBackward, faStepForward } from "@fortawesome/free-solid-svg-icons";

import usePlayer from "./usePlayer";

const PlayerControls = () => {
  const { isPlaying, currentTrackName, togglePlay, playPreviousTrack, playNextTrack } = usePlayer();
  return (
    <>
      <div className="box controls">
        <div className="current-track">
          <marquee>{currentTrackName}</marquee>
        </div>
        <div>
          <button className="button" onClick={playPreviousTrack} disabled={!currentTrackName}>
            <FontAwesomeIcon icon={faStepBackward} />
          </button>
          <button className="button" onClick={togglePlay} disabled={!currentTrackName}>
            {isPlaying ? <FontAwesomeIcon icon={faPause} /> : <FontAwesomeIcon icon={faPlay} />}
          </button>
          <button className="button" onClick={playNextTrack} disabled={!currentTrackName}>
            <FontAwesomeIcon icon={faStepForward} />
          </button>
        </div>
      </div>
    </>
  )
}

export default PlayerControls
