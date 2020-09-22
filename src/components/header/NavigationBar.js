import React from "react";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { Link } from "react-router-dom";

import Paper from "@material-ui/core/Paper";

const home = "Home";
const playersList = "Players List";
const addPlayers = "Add Players";
const schedule = "Schedule";

const linkStyles = {
  color: "white",
  fontface: "bold"
};

 let indicatoreValue = 1;




function NavigationBar() {
  return (
    <Paper style={{ backgroundColor:"#2c387e"}}>
      <Tabs value={indicatoreValue} indicatorColor="secondary" centered>
        <Link to="/">
          <Tab label={home} style={linkStyles} />
        </Link>

        <Link to="/playerList">
          <Tab label={playersList} style={linkStyles} />
        </Link>

        <Link to="addPlayer">
          <Tab label={addPlayers} style={linkStyles} />
        </Link>

        <Link to="schedule">
          <Tab label={schedule} style={linkStyles} />
        </Link>
      </Tabs>
    </Paper>
  );
}

export default NavigationBar;
