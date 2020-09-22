import React, {useState , useEffect} from "react";
import axios from "axios"
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import Paper from "@material-ui/core/Paper";
// import { Avatar, Grid } from "@material-ui/core";

export default function Schedule() {

  const[schedule , setSchdule] = useState([])

  useEffect(() => {
    axios.get('http://localhost:8000/schedule')
    .then(response=> {
      console.log(response)
      setSchdule(response.data)
    })
    .catch(error =>{
      console.log(error)
    })
  }, [])

  return (
    <div style={{width:800, marginLeft:250}}>
      <h1 style={{color:"#2c387e"}}>Match Schedules</h1>
      <TableContainer component={Paper} >
        <Table aria-label="simple table">
          <TableHead style={{background:"#2c387e" , color:"white"}}>
            <TableRow>
              <TableCell>No</TableCell>
              <TableCell align="center">Date</TableCell>
              <TableCell align="center">Counteries</TableCell>
              <TableCell align="center">Venue</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {/* <TableRow>
              <TableCell component="th" scope="row">1</TableCell>
              <TableCell align="right">20-10-2020</TableCell>
              <TableCell align="right">
                <Grid item xs={6} style={{marginRight:0}}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />Australia
                </Grid> 
                India - Australia
                <Grid item xs={6}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />Australia
                </Grid>
              
              </TableCell>
              <TableCell align="right">Sydney</TableCell>
            </TableRow> */}

            {
              schedule.map(schedule=>
                <TableRow key={schedule.id}>
                  <TableCell component="th" scope="row">{schedule.id}</TableCell>
                  <TableCell align="center">{schedule.date}</TableCell>
                  <TableCell align="center">{schedule.countries}</TableCell>
                  <TableCell align="center">{schedule.venue}</TableCell>
            </TableRow>
                )
            }
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
