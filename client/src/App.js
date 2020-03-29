import "./App.css";
import React from "react";
import NavBar from "./components/NavBar";
import PodcastsApp from "./containers/PodcastsApp";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Switch>
          <Route path="/" component={PodcastsApp} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
