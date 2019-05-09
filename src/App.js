import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Route } from "react-router";
import { Switch } from "react-router-dom";

import UserCardContainer from "./containers/UserCardContainer";
import UserDetailsContainer from "./containers/UserDetailsContainer";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" component={UserCardContainer} exact />
        <Route
          path="/UserDetails/(.*)"
          component={UserDetailsContainer}
          exact
        />
      </Switch>
    </div>
  );
}

export default App;
