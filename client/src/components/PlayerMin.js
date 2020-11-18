import React from "react";
import { Link } from "react-router-dom";

import ImgDefault from "../images/icons/player__default.png";
import IconPrev from "../images/icons/previous.png";
import IconNext from "../images/icons/next.png";
import IconPlay from "../images/icons/play.png";
import IconUp from "../images/icons/up.png";

class PlayerMin extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="background__player"></div>

        <div className="player">
          <img className="cover" src={ImgDefault} alt="Cover Album" />

          <div className="player__details">
            <a href="#">
              <b className="song__name">Song Name</b>
            </a>
            <p className="artists__name">Artist</p>
          </div>

          <div className="player__controls">
            <button className="prev">
              <img src={IconPrev} alt="Icon Atras" />
            </button>
            <button>
              <img className="play" src={IconPlay} alt="Icon Play" />
            </button>
            <button className="next">
              <img src={IconNext} alt="Icon siguiente" />
            </button>
            <Link to="/player" id="button__up">
              <img src={IconUp} alt="Icon abrir" />
            </Link>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default PlayerMin;
