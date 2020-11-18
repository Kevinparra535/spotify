import React from "react";
import * as $ from "jquery";

import { Link } from "react-router-dom";

import {
  authEndpoint,
  clientId,
  redirectUri,
  scopes,
} from "../components/Config";
import hash from "../components/Hash";
class Search extends React.Component {


  render() {
    return (
      <React.Fragment>
        <Link to="/">Atras</Link>
        <input type="text" />
        <input type="submit" value="Enviar" />
      </React.Fragment>
    );
  }
}
export default Search;
