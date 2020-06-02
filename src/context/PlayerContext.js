import React, { useState, useReducer, createContext } from "react";

// holds some state that can be accessed from any component
// if they use this context
export const PlayerContext = createContext([{}, () => {}]);

// const initialState = {
//
// };

// const reducer = (state, action) => {
//   switch (action.type) {
//     case "NEXT_TRACK":
//       return {
//         contacts: [...state.contacts, action.payload]
//       };
//     case "PREVIOUS_TRACK":
//       return {
//         contacts: state.contacts.filter(
//           contact => contact.id !== action.payload
//         )
//       };
//     case "PAUSE":
//       player.pause().then(() => {
//         console.log('Paused!');
//       });
//     case "RESUME":
//       player.resume().then(() => {
//         console.log('Resumed!');
//       });
//     case "SHUFFLE":
//       return {
//         loading: false
//       };
//     default:
//       throw new Error();
//   }
// };

export const PlayerContextProvider = props => {
  // for when reducer is introduced
  //const [state, dispatch] = useReducer(reducer, initialState);
  // <PlayerContext.Provider value={[state, dispatch]}>\

  const [state, setState] = useState({
    tracks: [
      {
        name: 'Lost Chameleon - Genesis',
      },
      {
        name: 'The Hipsta - Shaken Soda',
      },
      {
        name: 'Tobu - Such Fun',
      },
    ],
    currentTrackIndex: null,
    player: null,
    currentTrack: null,
    isPlaying: false,
  });

  return (
    <PlayerContext.Provider value={[state, setState]}>
      {props.children}
    </PlayerContext.Provider>
  );
};

// from search results, make api call for track info, store it in context, then make other api call using uri to the sdk and play, map sdk methods to player control methods
