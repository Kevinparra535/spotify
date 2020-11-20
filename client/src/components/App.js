import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home from "../pages/Home";
import Redirect from "../pages/Redirect";
import Dashboard from "./Dashboard"
import MusicPlayer from "../pages/MusicPlayer";
import Search from "../pages/Search";
import NotFound from "../pages/NotFound";
import Layout from "./Layout";

function App() {
  return (
    <BrowserRouter>
      {/* <Layout> */}
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/redirect" component={Redirect} />
        <Route exact path="/dashboard" component={Dashboard} />
        <Route exact path="/player" component={MusicPlayer} />
        <Route exact path="/search" component={Search} />
        <Route component={NotFound} />
      </Switch>
      {/* </Layout> */}
    </BrowserRouter>
  );
}

export default App;
