import { useContext } from 'react';
import { PlayerContext } from "../context/PlayerContext";

const usePlayer = () => {
  const [state, setState] = useContext(PlayerContext);

  // Play a specific track
  function playTrack(index) {
    if (index === state.currentTrackIndex) {
      togglePlay();
    } else {
      setState(state => ({ ...state, currentTrackIndex: index, isPlaying: true }));
    }
  }

  // Toggle play or pause
  function togglePlay() {
    setState(state => ({ ...state, isPlaying: !state.isPlaying }));
    // send API call
  }

  // Play the previous track in the tracks array
  function playPreviousTrack() {
    const newIndex = ((state.currentTrackIndex + -1) % state.tracks.length + state.tracks.length) % state.tracks.length;
    playTrack(newIndex);
    // Send API call
  }

  // Play the next track in the tracks array
  function playNextTrack() {
    const newIndex = (state.currentTrackIndex + 1) % state.tracks.length;
    playTrack(newIndex);
    // Send API call
  }

  return {
    playTrack,
    togglePlay,
    currentTrackName: state.currentTrackIndex !== null && state.tracks[state.currentTrackIndex].name,
    trackList: state.tracks,
    isPlaying: state.isPlaying,
    playPreviousTrack,
    playNextTrack,
    player: state.player,
  }
};

export default usePlayer;
