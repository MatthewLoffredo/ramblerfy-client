
import { actions } from '../actions/PlayerActions';

// Action Creators
// export const onTogglePlay = state => ({ type: actions.TOGGLE_PLAY, state });


// Default state
const defaultState = {
  playback: {
    isPlaying: false,
  },
};

// Reducer
export default (state = defaultState, action) => {
  switch (action.type) {

    case actions.START_PLAYBACK_SUCCESS:
    return {
      //...state,
      playback: {
        //...state.playback,
        isPlaying: true,
      },
    }

    case actions.PAUSE_PLAYBACK_SUCCESS:
    return {
      //...state,
      playback: {
        //...state.playback,
        isPlaying: false,
      },
    }

    default:
      return state;
  }
};
