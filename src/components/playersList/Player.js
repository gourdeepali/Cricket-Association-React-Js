import React, {useState , useEffect} from "react";
import axios from 'axios'
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import Paper from "@material-ui/core/Paper";
import {Button } from "@material-ui/core"
import Modal from '@material-ui/core/Modal';


export default function Player() {

  const [players,setPlayers] = useState([])
  const [fetchPalyer, setFecthPlayer] = useState(false)

  const [modalState, setModalState] = React.useState(false);
  const [editPlayer, setEditPlayer] = useState({ name: "", position: "" , id:""});

  useEffect(() => {

    axios.get('http://localhost:8000/players')
    .then(response=>{
      console.log(response.data)
      setPlayers( response.data)
    })
    .catch(error=>{
      console.log(error)
    })
  }, [fetchPalyer])


  const handleRemove = id =>{
    axios.delete(`http://localhost:8000/players/${id}`)
    .then(response =>{
      console.log(response)
      setFecthPlayer(true)
    })
    .catch(error=>{
      console.log(error)
    })
  }


  const handleEdit = (player)=>{
    setModalState(true);
    let name= player.name;
    let position = player.position;
    let id = player.id;
    setEditPlayer({name:name , position:position , id:id})

  }


  const handleEditPlayer = (event , id , name , position)=>{
    event.preventDefault();
     console.log(`edited id ${id}`)
    axios.put(`http://localhost:8000/players/${id}`, {name:name , position:position})
    .then(response =>{
      console.log(response)
      closeModal()
      setFecthPlayer(true)
    })
    .catch(error=>{
      console.log(error)
    })

  }
  

  const body = (
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
        <h1 style={{ textDecoration: "underline" }}> Edit Player</h1>
      </div>
      <br />
      <div>
        <form onSubmit={(event)=>{handleEditPlayer(event , editPlayer.id, editPlayer.name , editPlayer.position)}}>
          <label>Player Name - </label>
          <input
            required
            type="text"
            value={editPlayer.name}
            onChange={(e) => {
              setEditPlayer({ ...editPlayer, name: e.target.value });
            }}
          />

          <br />
          <br />

          <label>Player Position - </label>
          <input
            required
            type="text"
            value={editPlayer.position}
            onChange={(e) => setEditPlayer({ ...editPlayer, position: e.target.value })}
          />
          <Button type="submit"> Edit Player </Button>
        </form>
      </div>
      <br />
    </div>
  );

  const closeModal = () => {
    setModalState(false);
  };


  return (
    <div style={{width:800, marginLeft:250}}>
      <h1>Players List</h1>
      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead style={{background:"#2c387e" , color: "white"}}>
            <TableRow>
              <TableCell>No</TableCell>
              <TableCell align="center">Name</TableCell>
              <TableCell align="center">Position</TableCell>
              <TableCell align="center">Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {
              players.map(player =>
              <TableRow key={player.id}>
                <TableCell component="th" scope="row"> {player.id}</TableCell>
                <TableCell align="center">{player.name}</TableCell>
                <TableCell align="center">{player.position}</TableCell>
                <TableCell align="center">{<Button onClick={()=>{handleEdit(player)}} > Edit</Button>}| 
                {<Button onClick={()=>{ handleRemove(player.id) }} >Remove</Button>} </TableCell>
              </TableRow>
              )
            
            }
          </TableBody>
        </Table>
      </TableContainer>
      <Modal
        open={modalState}
        onClose={closeModal}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>
    </div> 
  );
}
