import React from "react";

import PlayerMin from "../components/PlayerMin";
import Nav from "../components/Nav";

import Weekend from "../images/cards__theWeekend.jpg";
import Eminem from "../images/cards__eminem.jpg";
import Travis from "../images/cards__travis.jpg";
import Rihana from "../images/cards__riana.jpg";
import Main from "../images/cards__main.png";

import SpotifyWebApi from "spotify-web-api-js";
const spotifyApi = new SpotifyWebApi();

class Home extends React.Component {
  constructor(){
    super();
    const params = this.getHashParams();
    const token = params.access_token;
    if (token) {
      spotifyApi.setAccessToken(token);
    }
    this.state = {
      loggedIn: token ? true : false,
      nowPlaying: { name: 'Not Checked', albumArt: '' }
    }
  }
  getHashParams() {
    var hashParams = {};
    var e, r = /([^&;=]+)=?([^&;]*)/g,
        q = window.location.hash.substring(1);
    e = r.exec(q)
    while (e) {
       hashParams[e[1]] = decodeURIComponent(e[2]);
       e = r.exec(q);
    }
    return hashParams;
  }
  render() {
    return (
      <React.Fragment>
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
  }
}

export default Home;
