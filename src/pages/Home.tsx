import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Typography } from '@mui/material';

class PlayerStats{
    Name : string;
    Points : number;
    LegDif : number;
    Events : number;

    constructor(name : string, points : number, legDif : number ,events : number){
        this.Name = name;
        this.Points = points;
        this.Events = events;
        this.LegDif = legDif;
    }

    addPoints(newPoints : number){
      this.Points = this.Points + newPoints;
    }

    addLegs(newLegs : number){
      this.LegDif = this.LegDif + newLegs;
    }

    addEvents(newEvents : number){
      this.Events = this.Events + newEvents;
    }

}

class Standings{
  Niki = new PlayerStats("Niki", 0, 0, 0);
  Rubik = new PlayerStats("Rubik", 0, 0, 0);
  Christian = new PlayerStats("Christian", 0, 0, 0);
  Max = new PlayerStats("Max", 0, 0, 0);
  Matthias = new PlayerStats("Matthias", 0, 0, 0);
  Shoti = new PlayerStats("Shoti", 0, 0, 0);
  Manuel = new PlayerStats("Manuel", 0, 0, 0);
  Lukas = new PlayerStats("Lukas", 0, 0, 0);
  Tati = new PlayerStats("Tati", 0, 0, 0);
  Michael = new PlayerStats("Michael", 0, 0, 0);

  get resultsSorted(){
    var result = [this.Niki, this.Rubik, this.Christian, this.Max, this.Matthias, this.Shoti, this.Manuel, this.Lukas, this.Tati, this.Michael]
    result.sort((a,b) => (a.Points > b.Points) ? 1 : (a.Points === b.Points) ? ((a.Events > b.Events) ? 1 : (a.Events === b.Events) ? ((a.LegDif > b.LegDif) ? 1: -1) : -1 ):-1);
    result.reverse();
    return result;
  }
}

class EventData{
  Name : string;
  Legs : number;

  constructor(name : string, legs : number){
      this.Name = name;
      this.Legs = legs;
  }
}

class TiedGroup{
  TiedPlayers : string [];
  
  constructor(players : string[]){
    this.TiedPlayers = players;
  }
}

class EventResults{
    Results : EventData [];
    TiedGroups : TiedGroup [];

    constructor(eventResults : EventData [], tiedGroups : TiedGroup[]){
      this.Results = eventResults;
      this.TiedGroups = tiedGroups;
    }
}

class StandingsCalculator{
  EventResults : EventResults [];
  Standings = new Standings();

  constructor(results : EventResults []){
    this.EventResults = results;
  }

  calculateStandings(){
    this.EventResults.forEach(event => {
      this.mergePoints(this.calculateEventPoints(event))
    });

    return this.Standings.resultsSorted;
  }

  calculateEventPoints(event : EventResults){
    var eventStandings = new Standings();
    var currentPoints = event.Results.length;

    event.Results.forEach(player =>{
      var standingsPlayer : PlayerStats = eventStandings[player.Name];

      if(currentPoints == event.Results.length){
        standingsPlayer.Events = 1;
      }

      standingsPlayer.Points = currentPoints;
      standingsPlayer.LegDif = player.Legs;
      currentPoints = currentPoints -1;
    });

    event.TiedGroups.forEach(tied => {
      var pointSum : number = 0;

      tied.TiedPlayers.forEach(playerName =>{
        var player : PlayerStats = eventStandings[playerName];
        pointSum = pointSum + player.Points;
      });

      var finalPoints : number = pointSum / tied.TiedPlayers.length;

      tied.TiedPlayers.forEach(playerName =>{
        var player : PlayerStats = eventStandings[playerName];
        player.Points = finalPoints;
      });
    });

    return eventStandings;
  }

  mergePoints(eventStandings : Standings){
    var names : string[] = ["Niki", "Rubik", "Christian", "Max", "Matthias", "Shoti", "Manuel", "Lukas", "Tati", "Michael"];

    names.forEach(name => {
      var player : PlayerStats = this.Standings[name];
      var eventPlayer : PlayerStats = eventStandings[name];

      player.addPoints(eventPlayer.Points);
      player.addEvents(eventPlayer.Events);
      player.addLegs(eventPlayer.LegDif);
    });
  }
}


//Add Event Results here
const gameResults : EventResults[] = [
  new EventResults(
  [new EventData("Niki", 6), new EventData("Rubik", 6), new EventData("Christian", 4), new EventData("Max", 2), new EventData("Matthias", 0), new EventData("Shoti", -6), new EventData("Manuel", -6), new EventData("Lukas", -6)],
  [new TiedGroup(["Niki", "Rubik"]), new TiedGroup(["Shoti", "Manuel"])]
  ),
  new EventResults(
    [new EventData("Tati", 8), new EventData("Matthias", 4), new EventData("Max", 4), new EventData("Rubik", 4), new EventData("Christian", 2), new EventData("Shoti", -2), new EventData("Manuel", -2), new EventData("Niki", -4), new EventData("Michael", -4), new EventData("Lukas", -10)],
    [new TiedGroup(["Matthias", "Max"]), new TiedGroup(["Shoti", "Manuel"])]
  ),
  new EventResults(
    [new EventData("Christian", 2), new EventData("Manuel", 2), new EventData("Matthias", 2), new EventData("Tati", 1), new EventData("Rubik", -2), new EventData("Max", -5)],
    [new TiedGroup(["Christian", "Manuel", "Matthias"])]
  ),
]

function countPerPlayer(){
  var calculator = new StandingsCalculator(gameResults);
  return calculator.calculateStandings();
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
              key={row.Name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.Name}
              </TableCell>
              <TableCell align="right">{row.Points}</TableCell>
              <TableCell align="right">{row.LegDif}</TableCell>
              <TableCell align="right">{row.Events}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}