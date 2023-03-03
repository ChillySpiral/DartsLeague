import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Typography } from '@mui/material';

function createEventData(name: string, legs: number,){
  return {name, legs}
}

//Add Event Results here
const gameResults = [
  [createEventData("Niki", 6), createEventData("Rubik", 6), createEventData("Christian", 4), createEventData("Max", 2), createEventData("Matthias", 0), createEventData("Shoti", -6), createEventData("Manuel", -6), createEventData("Lukas", -6)],
]

function countPerPlayer(){
  var playerPoints = {
    "Niki" : {"name": "Niki", "points": 0, "legs":0, "events":0},
    "Rubik" : {"name": "Rubik", "points": 0, "legs":0, "events":0},
    "Christian" : {"name": "Christian", "points": 0, "legs":0, "events":0},
    "Max" : {"name": "Max", "points": 0, "legs":0, "events":0},
    "Matthias" : {"name": "Matthias", "points": 0, "legs":0, "events":0},
    "Shoti" : {"name": "Shoti", "points": 0, "legs":0, "events":0},
    "Manuel" : {"name": "Manuel", "points": 0, "legs":0, "events":0},
    "Lukas" : {"name": "Lukas", "points": 0, "legs":0, "events":0},
    "Tati" : {"name": "Tati", "points": 0, "legs":0, "events":0},
    "Michael" : {"name": "Michael", "points": 0, "legs":0, "events":0}
  }

  gameResults.forEach(element => {
    var maxPoints = element.length
    
    element.forEach(player => {
        if(maxPoints == element.length){
          playerPoints[player.name].events = playerPoints[player.name].events + 1
        }
        playerPoints[player.name].points = playerPoints[player.name].points + maxPoints;
        playerPoints[player.name].legs = playerPoints[player.name].legs + player.legs;
        maxPoints = maxPoints -1;
    });

  });

  var result = [playerPoints["Niki"], playerPoints["Rubik"], playerPoints["Christian"], playerPoints["Max"],playerPoints["Matthias"] ,playerPoints["Shoti"], playerPoints["Manuel"], playerPoints["Lukas"], playerPoints["Tati"], playerPoints["Michael"]]
  result.sort((a,b) => (a.points > b.points) ? 1 : (a.points === b.points) ? ((a.events > b.events) ? 1 : (a.events === b.events) ? ((a.legs > b.legs) ? 1: -1) : -1 ):-1);
  result.reverse();
  return result;
}



const rows = countPerPlayer();

export default function BasicTable() {
  return (
    <TableContainer component={Paper}>
    <Typography variant="h6" component="div">
      Standings
    </Typography>
      <Table sx={{ minWidth: 200 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Player</TableCell>
            <TableCell align="right">Points</TableCell>
            <TableCell align="right">Leg Difference</TableCell>
            <TableCell align="right">Events won</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.points}</TableCell>
              <TableCell align="right">{row.legs}</TableCell>
              <TableCell align="right">{row.events}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}