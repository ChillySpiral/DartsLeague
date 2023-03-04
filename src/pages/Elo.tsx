import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Typography } from '@mui/material';

import { EloService } from '../services/EloService';

const eloService = new EloService();

function createEventData(name: string, elo: number,){
    return {name, elo}
  }
  
  //Add Event Results here
  const gameResults = [
    [createEventData("Niki", 10), createEventData("Rubik", 6), createEventData("Christian", 4), createEventData("Max", 2), createEventData("Matthias", 0), createEventData("Shoti", -6), createEventData("Manuel", -6), createEventData("Lukas", -6)],
  ]
  
  function countPerPlayer(){
    var playerPoints = {
      "Niki" : {"name": "Niki", "elo":0},
      "Rubik" : {"name": "Rubik", "elo":0},
      "Christian" : {"name": "Christian", "elo":0},
      "Max" : {"name": "Max", "elo":0},
      "Matthias" : {"name": "Matthias", "elo":0},
      "Shoti" : {"name": "Shoti", "elo":0},
      "Manuel" : {"name": "Manuel", "elo":0},
      "Lukas" : {"name": "Lukas", "elo":0},
      "Tati" : {"name": "Tati", "elo":0},
      "Michael" : {"name": "Michael", "elo":0}
    }

    const standings = eloService.getCurrentStandings()
  
    return standings;
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
              <TableCell align="right">Elo</TableCell>
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
                <TableCell align="right">{row.elo}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    );
  }