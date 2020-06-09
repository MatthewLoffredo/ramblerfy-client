
import { PlayerActions as actions } from '../actions/actionTypes';
import americanPie from './American-Pie-Cover.png';

// Default state
const defaultState = {
  player: {
    playback: {
      isPlaying: false,
      "shuffle_state": false,
      "repeat_state": 'off',
      progress: 120000,
      duration: 180000,
      trackName: 'American Pie',
      albumCover: americanPie,
      artist: 'Don McClean',
      volume: 60,
      favorite: false,
    },
  },
};

// Reducer
export default (state = defaultState, action) => {
  switch (action.type) {

    case actions.START_PLAYBACK_SUCCESS:
    return {
      ...state,
      player: {
        ...state.player,
        playback: {
          ...state.player.playback,
          isPlaying: true,
        },
      },
    }

    case actions.PAUSE_PLAYBACK_SUCCESS:
    return {
      ...state,
      player: {
        ...state.player,
        playback: {
          ...state.player.playback,
          isPlaying: false,
        },
      },
    }

    case actions.TOGGLE_SHUFFLE_SUCCESS:
    return {
      ...state,
      player: {
        ...state.player,
        playback: {
          ...state.player.playback,
          "shuffle_state": action.shuffleState,
        },
      },
    }

    case actions.SET_REPEAT_MODE_SUCCESS:
    return {
      ...state,
      player: {
        ...state.player,
        playback: {
          ...state.player.playback,
          "repeat_state": action.repeatState,
        },
      },
    }

    case actions.TOGGLE_FAVORITE_SUCCESS:
    return {
      ...state,
      player: {
        ...state.player,
        playback: {
          ...state.player.playback,
          favorite: action.favoriteState,
        },
      },
    }

    default:
      return state;
  }
};
