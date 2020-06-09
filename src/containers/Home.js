import React, { useEffect } from 'react';
import './Home.css';
import { LinkContainer } from "react-router-bootstrap";
import config from '../config';

//home page
export default function Home(props) {

  useEffect(() => {
    // if(props.spotifyProps.loggedIn) return;
    // if(props.spotifyProps.token === "") return;
    if(window.location.hash === "") return;

    const getToken = () => {
      const url = window.location.hash;
      const access_token = url.match(/\#(?:access_token)\=([\S\s]*?)\&/)[1];
      window.location.hash = "";
      props.setSpotifyProps(prevState => {
        return {...prevState, token: access_token,
        loggedIn: true };
      });
    }

    getToken();
  }, []);


  function unAuthPage() {
      return (
          <div className="main-content-headerHome">
              <h1>WELCOME TO <span className="colorchange">RAMBLERFY!</span><br />
                  WHERE YOU FIND THE BEST JAMS </h1>
              <h2 className="login">Login or Signup to start jamming!!</h2>
          </div>
      )
  }

  function AuthPage() {
      return (
          <div className="main-content-headerHome">
              <h1>WELCOME TO <span className="colorchange">RAMBLERFY!</span><br />
                  WHERE YOU FIND THE BEST JAMS </h1>
              <LinkContainer to="/searchpage">
                  <a href="/#" className="btn btn-one">CLICK TO SEARCH FOR JAMS</a>
              </LinkContainer>
              {!props.spotifyProps.loggedIn && (
                <a
                  className="btn btn--loginApp-link"
                  href={`${config.spotify.AUTH_ENDPOINT}?client_id=${config.spotify.CLIENT_ID}&redirect_uri=${config.spotify.REDIRECT_URI}&scope=${config.spotify.SCOPES.join("%20")}&response_type=token&show_dialog=true`}
                >
                  Login to Spotify to listen to the jams you find!
                </a>
              )}
          </div>
      )
  }

  return (
      <div className="Home">
          {props.isAuth === false ? unAuthPage() : AuthPage()}
      </div>
  );

}
