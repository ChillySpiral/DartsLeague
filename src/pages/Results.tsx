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

function createResultEntries(name: string, wins: number, draws: number, losses: number, legsWon: number, legsLost: number, points: number){
  var legs : string = legsWon + "/" + legsLost;
  var dif : number = legsWon - legsLost;
  return {Name: name, Wins: wins, Draws: draws, Losses: losses, Legs: legs, Dif: dif, Points: points}
}
//Insert Result data here
const data_rows = [[createResultEntries("Niki", 4, 2, 1, 10, 4, 14), createResultEntries("Rubik", 4, 2, 1, 10, 4, 14), createResultEntries("Christian", 3, 3, 1, 9, 5, 12), createResultEntries("Max", 2, 4, 1, 8, 6, 10), createResultEntries("Matthias", 2, 3, 2, 7, 7, 9), createResultEntries("Shoti", 1, 2, 4, 4, 10, 5), createResultEntries("Manuel", 1, 2, 4, 4, 10, 5), createResultEntries("Lukas", 0, 4, 3, 4, 10, 4)]];

function createData(name: string, date: string, eventNumber: number){
  var data = data_rows[eventNumber];
  return {name: "B02 170", date: "25.02.2023", data};
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
          {row.name}
        </TableCell>
        <TableCell>{row.date}</TableCell>
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
                  {row.data.map((historyRow) => (
                    <TableRow key={historyRow.Name}>
                      <TableCell>{historyRow.Name}</TableCell>
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
  createData("Event One", "25.02.2023", 0),
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
            <Row key={row.name} row={row} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}