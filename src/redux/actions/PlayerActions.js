import { PlayerActions } from './actionTypes';

// For now, create actions that change icons

// Changes play button icon
export const onTogglePlay = () => (dispatch, getState) => {
  // Checks current state of play button
  if(!getState().player.playback.isPlaying) {
    dispatch({
      type: PlayerActions.START_PLAYBACK_SUCCESS
    });
    return;
  }

  dispatch({
    type: PlayerActions.PAUSE_PLAYBACK_SUCCESS
  });
}

// Action creator to skip back
export const onPrevious = () => dispatch => {
  console.log('skip_previous_request');
  // To implement later:
  // dispatch({ type: PlayerActions.SKIP_PREVIOUS_SUCCESS });
}

// Action creator to skip forward
export const onNext = () => dispatch => {
  console.log('skip_next_request');
  // To implement later:
  // dispatch({ type: PlayerActions.SKIP_NEXT_SUCCESS });
}

// Action creator for shuffle
export const onShuffle = () => (dispatch, getState) => {
  dispatch({
    type: PlayerActions.TOGGLE_SHUFFLE_SUCCESS,
    shuffleState: !getState().player.playback["shuffle_state"]
  });
}

// Action creator for repeat
export const onRepeat = () => (dispatch, getState) => {
  const modes = ['off', 'context', 'track']
  const nextMode = (() => {
    const currentModeIndex = modes.indexOf(getState().player.playback["repeat_state"]);

    return currentModeIndex === 2 ? modes[0] : modes[currentModeIndex + 1]
  })();

  dispatch({
    type: PlayerActions.SET_REPEAT_MODE_SUCCESS,
    repeatState: nextMode,
   });
}

// action creator for track favorite
export const onToggleTrackFavorite = () => (dispatch, getState) => {
  dispatch({
    type: PlayerActions.TOGGLE_FAVORITE_SUCCESS,
    favoriteState: !getState().player.playback.favorite,
  });
}




// TODO: implement volume state changes
export const onVolumeChange = percent => (dispatch, getState) => {
  console.log("SET_VOLUME_REQUEST")
}

export const onVolumeMuteToggle = () => (dispatch, getState) => {
  console.log("TOGGLE_VOLUME_REQUEST")
}
