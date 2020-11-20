import React from "react";
import * as $ from "jquery";

import { Link } from "react-router-dom";

import SearchForm from "../components/SearchForm";

class Search extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Link to="/redirect">Atras</Link>
        <SearchForm />
      </React.Fragment>
    );
  }
}
export default Search;
