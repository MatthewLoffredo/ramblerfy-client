import { store } from '../store/index';

// Player Bar Actions

// Actions
export const actions = {
  TOGGLE_PLAY: 'TOGGLE_PLAY',
  START_PLAYBACK_SUCCESS: 'START_PLAYBACK_SUCCESS',
  PAUSE_PLAYBACK_SUCCESS: 'PAUSE_PLAYBACK_SUCCESS',
};

/*
// Action Creators for dispatch
export const onTogglePlay = () => (dispatch, getState) => {
  // Dispatch goes to reducer, reducer returns state
  return dispatch(actions.TOGGLE_PLAY);
};
*/

// export const togglePlay = () => (dispatch, getState) => {
//   if(getState().playback.isPlaying) {
//     dispatch( { type: actions.PAUSE_PLAYBACK_SUCCESS } );
//   }
//
//   dispatch( { type: actions.START_PLAYBACK_SUCCESS } );
//
// };

export const togglePlay = () => {

  // try {
  //   console.log(store.getState().playback.isPlaying);
  // } catch (err) {
  //   console.log(err);
  // }
  // if(store.getState().playback.isPlaying) {
  //   return { type: actions.PAUSE_PLAYBACK_SUCCESS };
  // }

  return { type: actions.START_PLAYBACK_SUCCESS };
};
