import React, { useState, useEffect } from "react";
import "./Player.css";
import PlayerControls from "./PlayerControls";
import usePlayer from "../components/usePlayer";
import { useContext } from 'react';
import { PlayerContext } from "../context/PlayerContext";

// initializes spotify player object
export default function Player(props) {
  const { trackList, currentTrackName, playTrack, isPlaying, player } = usePlayer();
  const [state, setState] = useContext(PlayerContext);

  useEffect(() => {
    const token = props.appProps.spotifyProps.token;

    const loadPlayer = async () => {
      //waits for sdk to load
      const { Player } = await waitForSpotifyWebPlaybackSDKToLoad();
      console.log("The Web Playback SDK has loaded.");

      //initializes new player
      const sdk = new Player({
        name: "Web Playback SDK",
        volume: 1.0,
        getOAuthToken: callback => { callback(token); }
      });

      // sets up error listeners
      playerErrorHandling(sdk);

      //connects to player
      let connected = await sdk.connect();
      if (connected) {
        console.log('The Web Playback SDK successfully connected to Spotify!');

        //waits until user has selected this device
        let selectedState = await waitUntilUserHasSelectedPlayer(sdk);

        // Updates the Player context
        props.appProps.setSpotifyProps(prevState => {
          return {...prevState, player: selectedState };
        });

        setState(state => ({ ...state, player: selectedState }));
      }
    }

    loadPlayer();
  }, []);

  async function waitForSpotifyWebPlaybackSDKToLoad () {
    return new Promise(resolve => {
      if (window.Spotify) {
        resolve(window.Spotify);
      } else {
        window.onSpotifyWebPlaybackSDKReady = () => {
          resolve(window.Spotify);
        };
      }
    });
  };

  async function waitUntilUserHasSelectedPlayer (sdk) {
    return new Promise(resolve => {
      let interval = setInterval(async () => {
        let state = await sdk.getCurrentState();
        if (state !== null) {
          resolve(state);
          clearInterval(interval);
        }
      });
    });
  };

  function playerErrorHandling (sdk) {
    sdk.addListener('initialization_error', ({ message }) => { console.error(message); });
    sdk.addListener('authentication_error', ({ message }) => { console.error(message); });
    sdk.addListener('account_error', ({ message }) => { console.error(message); });
    sdk.addListener('playback_error', ({ message }) => { console.error(message); });

    // Playback status updates
    sdk.addListener('player_state_changed', state => { console.log(state); });

    // Ready
    sdk.addListener('ready', ({ device_id }) => {
      console.log('Ready with Device ID', device_id);
    });

    // Not Ready
    sdk.addListener('not_ready', ({ device_id }) => {
      console.log('Device ID has gone offline', device_id);
    });
  }

  function PlayerView() {
    const {
      id,
      uri: track_uri,
      name: track_name,
      duration_ms,
      artists,
      album: {
        name: album_name,
        uri: album_uri,
        images: album_images
      }
    } = player.track_window.current_track;
    console.log(`You're listening to ${track_name} by ${artists[0].name}!`);

    const progressBarStyles = {
      width: (player.position * 100 / duration_ms) + '%'
    };

    return (
      <>
        <div className="player-info">
          <div className="now-playing__img">
            <img src={album_images[0].url} />
          </div>
          <div className="now-playing__side">
            <div className="now-playing__name">{track_name}</div>
            <div className="now-playing__artist">
              {artists[0].name}
            </div>
            <div className="now-playing__status">
              {!player.paused ? "Playing" : "Paused"}
            </div>
            {/* <div className="progress">
              <div
                className="progress__bar"
                style={progressBarStyles}
              />
            </div> */}
          </div>
        </div>
        <PlayerControls className="p-controls"/>
      </>
    );

    // const backgroundStyles = {
    //   backgroundImage:`url(${album_images[0].url})`,
    // };
    //
    // const progressBarStyles = {
    //   width: (player.position * 100 / duration_ms) + '%'
    // };
    //
    // return (
    //   <div className="main-wrapper">
    //     <div className="now-playing__img">
    //       <img src={album_images[0].url} />
    //     </div>
    //     <div className="now-playing__side">
    //       <div className="now-playing__name">{track_name}</div>
    //       <div className="now-playing__artist">
    //         {artists[0].name}
    //       </div>
    //       <div className="now-playing__status">
    //         {!player.paused ? "Playing" : "Paused"}
    //       </div>
    //       <div className="progress">
    //         <div
    //           className="progress__bar"
    //           style={progressBarStyles}
    //         />
    //       </div>
    //     </div>
    //     <div className="background" style={backgroundStyles} />{" "}
    //   </div>
    // );
  }

  return (
      <div className="audio-display">
          {player !== null ? PlayerView() : <PlayerControls />}
      </div>
  );

}
