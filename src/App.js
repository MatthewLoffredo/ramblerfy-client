import React, { useState, useEffect } from "react";
import { Link, withRouter } from "react-router-dom";
import { Navbar, Nav, NavItem } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import './App.css';
import Routes from "./Routes";
import Player from "./components/Player";
import { Auth } from "aws-amplify";
import { PlayerContextProvider } from "./context/PlayerContext";
import PlayerBar from "./containers/PlayerBar";
import PlayerControls from "./components/PlayerControls";

function App(props) {
  /* useState is a react hook with the format [variable, function]
  ** Whatever is the arguement in the useState function is what the var is set to
  ** Whenever the function like userHasAuth is called, it sets the variable isAuth to whatever is passed to it
  ** React then reloads the whole page. This is a way of managing state variables
  */
  const [isAuth, userHasAuth] = useState(false);
  const [isAuthenticating, setIsAuthenticating] = useState(true);
  const [userCreds, setUserCreds] = useState(null);
  const [userResults, setUserResults] = useState(null);

  // All the props for managing spotify connection
  const [spotifyProps, setSpotifyProps] = useState({
    token: "",
    loggedIn: false,
    player: null
  });

  // triggers onLoad the first time app is loaded (empty list of var as param)
  useEffect(() => {
    onLoad();
  }, []);

  // checks browser cache to see if user is already signed in
  async function onLoad() {
    try {
      await Auth.currentSession();
      userHasAuth(true);
      const userCreds = await Auth.currentUserInfo();
      setUserCreds(userCreds);
    }
    catch(e) {
      if (e !== 'No current user') {
        alert(e);
      }
    }

    setIsAuthenticating(false);
  }

  // logs out user
  async function handleLogout() {
    await Auth.signOut();
    userHasAuth(false);
    setUserCreds(null);
    props.history.push("/login");
  }

  return (
    !isAuthenticating &&
    <div className="App-container">
        <Navbar className="navbar" bg="dark" variant="dark" >
          <Navbar.Brand href="#home"/>
          <div className="row clearfix">
            <Nav>
              <LinkContainer to="/">
                <img src={"./images/android-chrome-512x512.png"} className="logo" />
              </LinkContainer>
            </Nav>
            {isAuth
              ? <ul
                className="main-nav animated slideInRight"
                id="check-status"
                >
                  <Nav>
                    <NavItem onClick={handleLogout}>Logout</NavItem>
                  </Nav>
                  <Nav>
                    <LinkContainer to="/settings">
                      <li><a href="#">SETTINGS</a></li>
                    </LinkContainer>
                    <LinkContainer to="/documentation">
                      <li><a href="#">DOCUMENTATION</a></li>
                    </LinkContainer>
                    <LinkContainer to="/contact">
                      <li><a href="#">CONTACT US</a></li>
                    </LinkContainer>
                    <LinkContainer to="/team">
                      <li><a href="#">About Us</a></li>
                    </LinkContainer>
                  </Nav>
                </ul>

              : <>
                  <ul className="main-nav animated slideInRight" id="check-status">
                    <LinkContainer to="/signup">
                      <li><a href="#">SIGN UP</a></li>
                    </LinkContainer>
                    <LinkContainer to="/login">
                      <li><a href="#">LOGIN</a></li>
                    </LinkContainer>
                    <LinkContainer to="/documentation">
                      <li><a href="#">DOCUMENTATION</a></li>
                    </LinkContainer>
                    <LinkContainer to="/contact">
                      <li><a href="#">CONTACT US</a></li>
                    </LinkContainer>
                    <LinkContainer to="/team">
                      <li><a href="#">About Us</a></li>
                    </LinkContainer>
                  </ul>
                </>
            }
            <a href="#" className="movable-icon" onClick="slideshow()"> <i className="fa fa-align-justify" /> </a>
          </div>
        </Navbar>
        { /*this handles all components rendered under the navbar */ }
        <Routes appProps={{ isAuth, userHasAuth, userCreds, setUserCreds, userResults, setUserResults, spotifyProps, setSpotifyProps }} />
        <PlayerContextProvider>
          <div className="audio-bar">
            {spotifyProps.loggedIn &&
              <Player appProps={{ isAuth, userHasAuth, userCreds, setUserCreds, userResults, setUserResults, spotifyProps, setSpotifyProps }} />
            }
          </div>
        </PlayerContextProvider>
    </div>
  );
}

export default withRouter(App);
