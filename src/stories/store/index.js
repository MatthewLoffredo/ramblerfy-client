import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers';
import logger from 'redux-logger';

// const store = preloadedState => createStore(
//   rootReducer,
//   preloadedState,
//   applyMiddleware(thunk, logger)
// );

const initialState = {
  playback: {
    isPlaying: false,
  },
};

export const store = createStore(
  rootReducer,
  initialState,
  //applyMiddleware(thunk, logger),
);
