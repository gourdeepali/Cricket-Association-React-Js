import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./styles.css";

import NavigationBar from "./components/header/NavigationBar";
import PlayerList from "./components/playersList/PLayerList";
import HomeComponent from "./components/home/HomeComponent";
import AddPlayer from "./components/addPlayers/AddPlayer";
import Schedule from "./components/schedule/Schedule";

export default class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <NavigationBar />
          <Switch>
            <Route path="/" exact component={HomeComponent} />
            <Route path="/addPlayer" component={AddPlayer} />
            <Route path="/playerList" component={PlayerList} />
            <Route path="/schedule" component={Schedule} />
          </Switch>
        </div>
      </Router>
    );
  }
}
