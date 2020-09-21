import React, { useState } from "react";
import axios from 'axios';
import Modal from "@material-ui/core/Modal";
import { Button } from "@material-ui/core";
import "../../styles.css";

export default function Addplayer() {
  const [modalState, setModalState] = React.useState(true);

  const [player, setPlayer] = useState({ name: "", position: "" });

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(player);
    setPlayer("");
    
    axios.post('http://localhost:8000/players' , player)
    .then(response=>
      console.log(response))
      .catch(error => console.log(error))

    closeModal();
  };

  const modalBody = (
    <div
      className="App"
      style={{
        position: "absolute",
        width: 300,
        height: 300,
        backgroundColor: "#2c387e",
        textAlign: "center",
        left: 50,
        top: 50
      }}
    >
      <div>
        <h1 style={{ textDecoration: "underline" }}>Add Player</h1>
      </div>
      <br />
      <div>
        <form onSubmit={handleSubmit}>
          {/* <label style={{ marginBottom: 10 }}>Player No - </label>
          <input
            required
            type="text"
            value={player.no}
            onChange={(e) => {
              setPlayer({ ...player, no: e.target.value });
            }}
          /> */}

          {/* <br />
          <br /> */}

          <label>Player Name - </label>
          <input
            required
            type="text"
            value={player.name}
            onChange={(e) => {
              setPlayer({ ...player, name: e.target.value });
            }}
          />

          <br />
          <br />

          <label>Player Position - </label>
          <input
            required
            type="text"
            value={player.position}
            onChange={(e) => setPlayer({ ...player, position: e.target.value })}
          />
          <Button type="submit"> Add Player </Button>
        </form>
      </div>
      <br />
    </div>
  );

  const closeModal = () => {
    setModalState(false);
  };

  return (
    <Modal open={modalState} onClose={closeModal} style={{ widht: 100 }}>
        {modalBody}
      </Modal>
    
      /* <Button
        onClick={() => {
          setModalState(true);
        }}
      >
        Add Player
      </Button> */

      
    
  );
}
