import React from "react";
import { Link } from "react-router-dom";

import Logo from "../images/icons/icon__spotify.svg";
import Menu from "../images/icons/nav__menu.png";

class Nav extends React.Component {
  render() {
    return (
      <React.Fragment>
        <header className="header">
          <nav className="header__nav">
            <Link to="/">
              <h1>
                Fox Player
                <img className="svg-inject" src={Logo} alt="Spotify Connect" />
              </h1>
            </Link>
            <div className="header__links">
              <a href="#" className="options">
                <img src={Menu} alt="" />
              </a>
            </div>
          </nav>
        </header>
      </React.Fragment>
    );
  }
}

export default Nav;
