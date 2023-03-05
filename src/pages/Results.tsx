import * as React from 'react';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

class PlayerResult{
  PlayerName : string;
  Wins : number;
  Draws : number;
  Losses : number;
  Legs : string;
  Dif : number;
  Points : number;

  constructor(name: string, wins: number, draws: number, losses: number, legsWon: number, legsLost: number, points: number){
    this.Legs = legsWon + "/" + legsLost;
    this.Dif = legsWon - legsLost;
    this.PlayerName = name;
    this.Wins = wins;
    this.Draws = draws;
    this.Losses = losses;
    this.Points = points;
  }
}

class EventResults{
  PlayerResults : PlayerResult[];
  EventName : string;
  EventDate : string;

  constructor(name : string, date : string, data : PlayerResult[]){
    this.EventName = name;
    this.EventDate = date;
    this.PlayerResults = data;
  }
}

//Insert Result data here
const data_rows : EventResults[] = [
  new EventResults("B02 170", "25.02.2023",
  [new PlayerResult("Niki", 4, 2, 1, 10, 4, 14), new PlayerResult("Rubik", 4, 2, 1, 10, 4, 14), new PlayerResult("Christian", 3, 3, 1, 9, 5, 12), new PlayerResult("Max", 2, 4, 1, 8, 6, 10), new PlayerResult("Matthias", 2, 3, 2, 7, 7, 9), new PlayerResult("Shoti", 1, 2, 4, 4, 10, 5), new PlayerResult("Manuel", 1, 2, 4, 4, 10, 5), new PlayerResult("Lukas", 0, 4, 3, 4, 10, 4)]),
  new EventResults("B02 170", "04.03.2023",
  [new PlayerResult("Tati", 5, 3, 1, 13, 5, 18), new PlayerResult("Matthias", 3, 5, 1, 11, 7, 14), new PlayerResult("Max", 3, 5, 1, 11, 7, 14), new PlayerResult("Rubik", 2, 7, 0, 11, 7, 13), new PlayerResult("Christian", 3, 4, 2, 10, 8, 13), new PlayerResult("Shoti", 2, 4, 3, 8, 10, 10), new PlayerResult("Manuel", 2, 4, 3, 8, 10, 10), new PlayerResult("Niki", 2, 3, 4, 7, 11, 9), new PlayerResult("Michael", 0, 7, 2, 7, 11, 7), new PlayerResult("Lukas", 0, 4, 5, 4, 14, 4)]),
];

function createData(index : number){
  return data_rows[index];
}


function Row(props: { row: ReturnType<typeof createData> }) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);

  return (
    <React.Fragment>
      <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          {row.EventName}
        </TableCell>
        <TableCell>{row.EventDate}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Typography variant="h6" gutterBottom component="div">
                Results
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell>Player</TableCell>
                    <TableCell>W</TableCell>
                    <TableCell>D</TableCell>
                    <TableCell>L</TableCell>
                    <TableCell>+/-</TableCell>
                    <TableCell>Dif</TableCell>
                    <TableCell>Pts</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {row.PlayerResults.map((historyRow) => (
                    <TableRow key={historyRow.PlayerName}>
                      <TableCell>{historyRow.PlayerName}</TableCell>
                      <TableCell>{historyRow.Wins}</TableCell>
                      <TableCell>{historyRow.Draws}</TableCell>
                      <TableCell>{historyRow.Losses}</TableCell>
                      <TableCell>{historyRow.Legs}</TableCell>
                      <TableCell>{historyRow.Dif}</TableCell>
                      <TableCell>{historyRow.Points}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

//Data to be inserted here
const rows = [
  createData(0),
  createData(1)
];

export default function CollapsibleTable() {
  return (
    <TableContainer component={Paper}>
    <Typography variant="h6" component="div">
      Event Results
    </Typography>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell>Event</TableCell>
            <TableCell>Date</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <Row key={row.EventName} row={row} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}