import React from "react";
import Nav from "./Nav";

function Layout(props) {
  // const children = props.children;

  return (
    <React.Fragment>
      <Nav />
      {props.children}
    </React.Fragment>
  );
}

export default Layout;
