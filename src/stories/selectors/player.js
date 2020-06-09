import { createSelector } from 'reselect';

export const getPlayback = state => state.player.playback;

export const getPlayerControlState = createSelector(getPlayback, (playback) => {

  return {
    isPlaying: playback.isPlaying,
  };

});
