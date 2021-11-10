import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Yoga from "./Yoga";
import Home from "./Home";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/yoga">
          <Yoga />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
