import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

import PlayerMin from "../components/PlayerMin";
import Nav from "../components/Nav";

import Weekend from "../images/cards__theWeekend.jpg";
import Eminem from "../images/cards__eminem.jpg";
import Travis from "../images/cards__travis.jpg";
import Rihana from "../images/cards__riana.jpg";
import Main from "../images/cards__main.png";

const Home = (props) => {
  const {
    REACT_APP_CLIENT_ID,
    REACT_APP_AUTHORIZE_URL,
    REACT_APP_REDIRECT_URL,
  } = process.env;

  const handleLogin = () => {
    window.location = `${REACT_APP_AUTHORIZE_URL}?client_id=${REACT_APP_CLIENT_ID}&redirect_uri=${REACT_APP_REDIRECT_URL}&response_type=token&show_dialog=true`;
  };

  const { isValidSession, location } = props;
  const { state } = location;
  const sessionExpired = state && state.session_expired;
  return (
    <React.Fragment>
      {isValidSession() ? (
        <Redirect to="/dashboard" />
      ) : (
        sessionExpired && (
          <div className="login">
            <div className="login__container">
              <button className="login__container--btn" onClick={handleLogin}>
                Login to Spotify
              </button>
            </div>
          </div>
        )
      )}

      <Nav />

      <main className="main">
        <img className="main__banner" src={Main} alt="Main Banner" />

        <h3>Reproducidas recientemente</h3>

        <div className="main__cards">
          <div className="main__cards--card weekend">
            <img src={Weekend} alt="The Weekend" />
            <p>The Weekend</p>
          </div>

          <div className="main__cards--card eminem">
            <img src={Eminem} alt="The Weekend" />
            <p>Eminem</p>
          </div>

          <div className="main__cards--card travis">
            <img src={Travis} alt="The Weekend" />
            <p>Travis Scott</p>
          </div>

          <div className="main__cards--card rihanna">
            <img src={Rihana} alt="The Weekend" />
            <p>Rihanna</p>
          </div>
        </div>
      </main>

      <PlayerMin />
    </React.Fragment>
  );
};

export default connect()(Home);
