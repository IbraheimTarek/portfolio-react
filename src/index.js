import React from "react";
import ReactDOM from "react-dom";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

import "./style.css";
import Home from "./views/home";
import About from "./views/about";
import Experience from "./views/experience";
import Projects from "./views/projects";
import NotFound from "./views/not-found";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route component={Home} exact path="/" />
        <Route component={About} exact path="/about" />
        <Route component={Experience} exact path="/experience" />
        <Route component={Projects} exact path="/projects" />
        <Route component={NotFound} path="**" />
        <Redirect to="**" />
      </Switch>
    </Router>
  );
};

ReactDOM.render(<App />, document.getElementById("app"));
