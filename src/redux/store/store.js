import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers';
import logger from 'redux-logger';
import americanPie from '../reducers/American-Pie-Cover.png';
import { composeWithDevTools } from 'redux-devtools-extension';

import player from '../reducers/player';

const preloadedState = {
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


// export const store = createStore(
//   rootReducer,
//   initialState,
//   applyMiddleware(thunk, composeWithDevTools(applyMiddleware(thunk, logger))),
// );

export default function configureStore(preloadedState) {
  const middlewares = [thunk, logger]
  const middlewareEnhancer = applyMiddleware(...middlewares)

  const enhancers = [middlewareEnhancer]
  const composedEnhancers = composeWithDevTools(...enhancers)

  const store = createStore(player, preloadedState, composedEnhancers)

  return store
}
