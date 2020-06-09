// Reducers return the new state or carry out actions based on actions passed in

import { combineReducers } from 'redux';

import player from './player';


const rootReducer = combineReducers({
  player, // This is where state.player."selector" comes from for selectors
});

export default rootReducer;
