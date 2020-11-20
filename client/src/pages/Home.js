import React from "react";
import * as $ from "jquery";

import {
  authEndpoint,
  clientId,
  redirectUri,
  scopes,
} from "../components/Config";
import hash from "../components/Hash";

import PlayerMin from "../components/PlayerMin";
import PlayerOpen from "../components/PlayerOpen";
import Nav from "../components/Nav";

import Weekend from "../images/cards__theWeekend.jpg";
import Eminem from "../images/cards__eminem.jpg";
import Travis from "../images/cards__travis.jpg";
import Rihana from "../images/cards__riana.jpg";
import Main from "../images/cards__main.png";

class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      token: null,
      item: {
        album: {
          images: [{ url: "" }],
        },
        name: "",
        artists: [{ name: "" }],
        duration_ms: 0,
      },
      is_playing: "Paused",
      progress_ms: 0,
      no_data: false,
    };

    this.getCurrentlyPlaying = this.getCurrentlyPlaying.bind(this);
    this.tick = this.tick.bind(this);
  }
  componentDidMount() {
    // Set token
    let _token = hash.access_token;

    if (_token) {
      // Set token
      this.setState({
        token: _token,
      });
      this.getCurrentlyPlaying(_token);
    }

    // set interval for polling every 5 seconds
    this.interval = setInterval(() => this.tick(), 5000);
  }

  componentWillUnmount() {
    // clear the interval to save resources
    // clearInterval(this.interval);
  }

  tick() {
    if (this.state.token) {
      this.getCurrentlyPlaying(this.state.token);
    }
  }

  getCurrentlyPlaying(token) {
    // Make a call using the token
    $.ajax({
      url: "https://api.spotify.com/v1/me/player",
      type: "GET",
      beforeSend: (xhr) => {
        xhr.setRequestHeader("Authorization", "Bearer " + token);
      },
      success: (data) => {
        // Checks if the data is not empty
        if (!data) {
          this.setState({
            no_data: true,
          });
          return;
        }

        this.setState({
          item: data.item,
          is_playing: data.is_playing,
          progress_ms: data.progress_ms,
          no_data: false /* We need to "reset" the boolean, in case the
                            user does not give F5 and has opened his Spotify. */,
        });
      },
    });
  }
  
  render() {
    return (
      <React.Fragment>
        {!this.state.token && (
          <div className="login">
            <div className="login__container">
              <a
                className="login__container--btn"
                href={`${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
                  "%20"
                )}&response_type=token&show_dialog=true`}
              >
                Login to Spotify
              </a>
            </div>
          </div>
        )}

        <Nav token={this.state.token} />

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
        <PlayerMin
          item={this.state.item}
          is_playing={this.state.is_playing}
          progress_ms={this.state.progress_ms}
        />
        {this.state.no_data && (
          <div className="login">
            <div className="login__container">
              <p>
                You need to be playing a song on Spotify, for something to
                appear here.
              </p>
            </div>
          </div>
        )}
      </React.Fragment>
    );
  }
}

export default Home;
