// let gameTeams = {}

function gameObject() {
    return gameTeams = {
        home: {
            teamName: 'Brooklyn Nets',
            colors: ['Black', 'White'],
            players: {
                "Alan Anderson":{
                    playerName: "Alan Anderson",
                    number: 0,
                    shoe: 16,
                    points: 22,
                    rebounds: 12,
                    assists: 12,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 1,
                },
                "Reggie Evans":{
                    playerName: "Reggie Evans",
                    number: 30,
                    shoe: 14,
                    points: 12,
                    rebounds: 12,
                    assists: 12,
                    steals: 12,
                    blocks: 12,
                    slamDunks: 7,
                },
                "Brook Lopez":{
                    playerName: "Brook Lopez",
                    number: 11,
                    shoe: 17,
                    points: 17,
                    rebounds: 19,
                    assists: 10,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 15,
                },
                "Mason Plumlee":{
                    playerName: "Mason Plumlee",
                    number: 1,
                    shoe: 19,
                    points: 26,
                    rebounds: 12,
                    assists: 6,
                    steals: 3,
                    blocks: 8,
                    slamDunks: 5,
                },
                "Jason Terry":{
                    playerName: "Jason Terry",
                    number: 31,
                    shoe: 15,
                    points: 19,
                    rebounds: 2,
                    assists: 2,
                    steals: 4,
                    blocks: 11,
                    slamDunks: 1,
                },
            },
        },
        away: {
            teamName: 'Charlotte Hornets',
            colors: ["Turquoise", "Purple"],
            players: {
                "Jeff Adrien":{
                    playerName: "Jeff Adrien",
                    number: 4,
                    shoe: 18,
                    points: 10,
                    rebounds: 1,
                    assists: 1,
                    steals: 2,
                    blocks: 7,
                    slamDunks: 2,
                },
                "Bismak Biyombo":{
                    playerName: "Bismak Biyombo",
                    number: 0,
                    shoe: 16,
                    points: 12,
                    rebounds: 4,
                    assists: 7,
                    steals: 7,
                    blocks: 15,
                    slamDunks: 10,
                },
                "DeSagna Diop":{
                    playerName: "DeSagna Diop",
                    number: 2,
                    shoe: 14,
                    points: 24,
                    rebounds: 12,
                    assists: 12,
                    steals: 4,
                    blocks: 5,
                    slamDunks: 5,
                },
                "Ben Gordon":{
                    playerName: "Ben Gordon",
                    number: 8,
                    shoe: 15,
                    points: 33,
                    rebounds: 3,
                    assists: 2,
                    steals: 1,
                    blocks: 1,
                    slamDunks: 0,
                },
                "Brendan Haywood":{
                    playerName: "Brendan Haywood",
                    number: 33,
                    shoe: 15,
                    points: 6,
                    rebounds: 12,
                    assists: 12,
                    steals: 22,
                    blocks: 5,
                    slamDunks: 12,
                },
            },
        },
    };
}

const data = gameObject();
const {home, away} = data
const homePlayers = home.players;
const awayPlayers = away.players;
const allPlayers = {...homePlayers, ...awayPlayers}
// console.log(allPlayers)

function numPointsScored (inputName) {
    for (let playerKey in allPlayers){ //-> this returns every player's name
        // console.log(playerKey);
        if (inputName === playerKey) { //-> this checks if the inputname is the players name
            let result = allPlayers[inputName].points;
            // console.log(result);
            return result
        }
    }
}
console.log(numPointsScored("Jeff Adrien"))

function shoeSize (inputName){
    for (let alibi in allPlayers) {
        if (alibi === inputName) {
            return allPlayers[inputName].shoe
        }
    }
}
console.log(shoeSize('Jeff Adrien'))

function teamColors (inputTeam) {
    const teamNameOne = home.teamName
    const teamNameTwo = away.teamName   

    if (inputTeam === teamNameOne) {
        return away.colors 
    } else if (inputTeam === teamNameTwo) {
        return home.colors
    } else {
        return 
    }
}

console.log(teamColors("Charlotte Hornets"));

function teamNames () {
    let teamNameArray = []
    for (let gameKey in data) {
        teamNameArray.push(data[gameKey].teamName);
    }
    return teamNameArray
}
console.log(teamNames());
