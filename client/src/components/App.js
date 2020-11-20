import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home from "../pages/Home";
import Redirect from "../pages/Redirect";
import Dashboard from "./Dashboard";
import MusicPlayer from "../pages/MusicPlayer";
import NotFound from "../pages/NotFound";

class App extends React.Component {
  state = {
    expiryTime: "0",
  };

  componentDidMount() {
    let expiryTime;
    try {
      expiryTime = JSON.parse(localStorage.getItem("expiry_time"));
    } catch (error) {
      expiryTime = "0";
    }
    this.setState({ expiryTime });
  }

  setExpiryTime = (expiryTime) => {
    this.setState({ expiryTime });
  };

  isValidSession = () => {
    const currentTime = new Date().getTime();
    const expiryTime = this.state.expiryTime;
    const isSessionValid = currentTime < expiryTime;

    return isSessionValid;
  };

  render() {
    return (
      <BrowserRouter>
        {/* <Layout> */}
        <Switch>
          <Route
            exact
            path="/"
            render={(props) => (
              <Home isValidSession={this.isValidSession} {...props} />
            )}
          />
          <Route
            path="/redirect"
            render={(props) => (
              <Redirect
                isValidSession={this.isValidSession}
                setExpiryTime={this.setExpiryTime}
                {...props}
              />
            )}
          />
          <Route
            path="/dashboard"
            render={(props) => (
              <Dashboard isValidSession={this.isValidSession} {...props} />
            )}
          />
          <Route exact path="/player" component={MusicPlayer} />
          <Route component={NotFound} />
        </Switch>
        {/* </Layout> */}
      </BrowserRouter>
    );
  }
}

export default App;
