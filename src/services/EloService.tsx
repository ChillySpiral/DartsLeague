export class EloService {
    
    playerElo = [
        {"name": "Niki", "elo":0},
        {"name": "Rubik", "elo":0},
        {"name": "Christian", "elo":0},
        {"name": "Max", "elo":0},
        {"name": "Matthias", "elo":0},
        {"name": "Shoti", "elo":0},
        {"name": "Manuel", "elo":0},
        {"name": "Lukas", "elo":0},
        {"name": "Tati", "elo":0},
        {"name": "Michael", "elo":0}
        ]
    
    matches = [
        {"players": ["Max", "Keili"], "Max": 1, "Keili": 1},
        {"players": ["Rubik", "Lukas"], "Rubik": 1, "Lukas": 1},
        {"players": ["Matthias", "Niki"], "Matthias": 2, "Niki": 0},
        {"players": ["Christian", "Shoti"], "Christian": 2, "Shoti": 0},

        {"players": ["Max", "Niki"], "Max": 2, "Niki": 0},
        {"players": ["Lukas", "Shoti"], "Luas": 1, "Niki": 1},
        {"players": ["Manuel", "Christian"], "Manuel": 0, "Christian": 2},
        {"players": ["Rubik", "Matthias"], "Matthias": 0, "Rubik": 2},

        {"players": ["Lukas", "Max"], "Lukas": 1, "Max": 1},
        {"players": ["Manuel", "Niki"], "Manuel": 0, "Niki": 2},
        {"players": ["Rubik", "Schoti"], "Rubik": 2, "Shoti": 0},
        {"players": ["Christian", "Matthias"], "Matthias": 1, "Niki": 1},

        {"players": ["Max", "Christian"], "Max": 1, "Christian": 1},
        {"players": ["Shoti", "Matthias"], "Matthias": 1, "Shoti": 1},
        {"players": ["Niki", "Rubik"], "Rubik": 1, "Niki": 1},
        {"players": ["Lukas", "Manuel"], "Lukas": 1, "Manuel": 1},
        
        {"players": ["Shoti", "Max"], "Shoti": 0, "Max": 2},
        {"players": ["Christian", "Niki"], "Christian": 1, "Niki": 1},
        {"players": ["Matthias", "Lukas"], "Matthias": 2, "Lukas": 0},
        {"players": ["Rubik", "Manuel"], "Rubik": 2, "Manuel": 0},

        {"players": ["Max", "Rubik"], "Max": 0, "Rubik": 2},
        {"players": ["Matthias", "Manuel"], "Matthias": 0, "Manuel": 2},
        {"players": ["Christian", "Lukas"], "Christian": 2, "Lukas": 0},
        {"players": ["Shoti", "Niki"], "Shoti": 0, "Niki": 2},

        {"players": ["Matthias", "Max"], "Matthias": 1, "Max": 1},
        {"players": ["Rubik", "Christian"], "Rubik": 2, "Christian": 0},
        {"players": ["Manuel", "Shoti"], "Manuel": 0, "Shoti": 2},
        {"players": ["Lukas", "Niki"], "Lukas": 0, "Niki": 2},

    ] 

    getCurrentStandings() {
        return this.playerElo;
    }
}