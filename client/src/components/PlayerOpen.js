import React from "react";

import { Link } from "react-router-dom";

import ImgDefault from "../images/icons/player__default.png";
import IconPrev from "../images/icons/previous.png";
import IconNext from "../images/icons/next.png";
import IconPlay from "../images/icons/play.png";
import IconDown from "../images/icons/down.png";
import IconVMax from "../images/icons/volume__max.png";
import IconVMin from "../images/icons/volume__min.png";

class PlayerOpen extends React.Component {
  render() {
    return (
      <React.Fragment>
        <section class="musicPlayer">
          <div class="container">
            <div class="container__header">
              <h2 class="artists__name">Artist</h2>
              <Link to="/" id="button__down">
                <img src={IconDown} alt="" />
              </Link>
            </div>

            <div class="container__body">
              <div class="container__body--covers">
                <img class="cover" src={ImgDefault} alt="" />
              </div>
              <h2 class="song__name">Song Name</h2>
              <p class="album__name">Album Name</p>
            </div>

            <div class="container__footer">
              <div class="controls">
                <div class="controls__time">
                  <p>00:00</p>

                  <div
                    class="length range__slider"
                    // data-min="00:00"
                    // data-max="00:00"
                  >
                    <lottie-player
                      src="https://assets4.lottiefiles.com/packages/lf20_b20u0axq.json"
                      background="transparent"
                      speed="1"
                      loop
                      autoplay
                    ></lottie-player>
                  </div>

                  <p class="timeMax">00:00</p>
                </div>

                <div class="controls__volume">
                  <p>
                    <img src={IconVMin} alt="" />
                  </p>

                  {/* <div class="length range__slider">
                    <input
                      id="slider__volume"
                      type="range"
                      min="0"
                      max="100"
                      value="50"
                    />
                  </div> */}

                  <p>
                    <img src={IconVMax} alt="" />
                  </p>
                </div>

                <div class="controls__music">
                  <button class="controls__music--side prev">
                    <img src={IconPrev} alt="Icon/Previous" />
                  </button>
                  <button class="controls__music--center">
                    <img class="play" src={IconPlay} alt="Icon Play/pause" />
                  </button>
                  <button class="controls__music--side next">
                    <img src={IconNext} alt="Icon Next" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </React.Fragment>
    );
  }
}

export default PlayerOpen;
