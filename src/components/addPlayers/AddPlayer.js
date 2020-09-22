import React, { useState } from "react";
import axios from 'axios';
import { Button } from "@material-ui/core";
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import "../../styles.css";

export default function Addplayer() {
  const styleDiv={
    position: "absolute",
    width: 700,
    height: 200,
    textAlign: "center",
    left: 150,
    top: 90
  }

  const [player, setPlayer] = useState({ name: "", position: "" });

  const handleSubmit = (event) => {
    event.preventDefault();   
    axios.post('http://localhost:8000/players' , player)
    .then(response=>
      alert(`Player ${player.name} Position ${player.position} added successfully`)
      )
    .catch(error => console.log(error))
    
    setPlayer({ name: "", position: "" }); 
  };

  return (
    <div className="App" style={styleDiv } >
      <div>
        <h1 style={{color:"#2c387e"}}>Add Player</h1>
      </div>
      <br />
      <div>
        <Paper style={styleDiv}>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
          <TextField
            required
            label="Player Name"
            defaultValue="Name"
            helperText="Enter Player Name"
            variant="outlined"
            type="text"
            value={player.name}
            onChange={(e) => {
              setPlayer({ ...player, name: e.target.value });
            }}
          />          
        </Grid>

        <Grid item xs={12} sm={6}>
        <TextField
            required
            label="Player Position"
            defaultValue="Position"
            helperText="Enter Player Position"
            variant="outlined"
            type="text"
            value={player.position}
            onChange={(e) => setPlayer({ ...player, position: e.target.value })}
          />
        </Grid>
      </Grid>
        <Button type="submit" color="secondary" variant="contained" size="large" > Add Player </Button>
        </form>
        </Paper>
      </div>
      <br />
    </div>     
    
  );
}
