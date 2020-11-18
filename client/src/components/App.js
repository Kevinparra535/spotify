import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home from "../pages/Home";
import MusicPlayer from "../pages/MusicPlayer";
import Search from "../pages/Search";
import Layout from "./Layout";

function App() {
  return (
    <BrowserRouter>
      {/* <Layout> */}
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/player" component={MusicPlayer} />
          <Route exact path="/search" component={Search} />
        </Switch>
      {/* </Layout> */}
    </BrowserRouter>
  );
}

export default App;
