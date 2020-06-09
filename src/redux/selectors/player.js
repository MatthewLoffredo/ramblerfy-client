import { createSelector } from 'reselect';

export const getPlayback = state => state.player.playback;

export const getPlayerControlState = createSelector(getPlayback, (playback) => {

  console.log("selecting state");
  return {
    isPlaying: playback.isPlaying,
    repeat: playback['repeat_state'],
    shuffle: playback['shuffle_state'],
    trackName: playback.trackName,
    albumCover: playback.albumCover,
    artist: playback.artist,
    volume: playback.volume,
    progress: playback.progress,
    duration: playback.duration,
    favorite: playback.favorite,
  };

});
