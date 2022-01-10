data = ["rock", "paper", "scissors"];

function getRandomInt() {
    return Math.floor(Math.random() * 3);
}

function getData() {
    let selection = prompt("Please enter you selection", "Paper");
    selection.toLocaleLowerCase();

    for(let i = 0; i < data.length; i++) {
        if(selection == data[i]){
            return i;
        }
    }
}


function round(playerSelection, computerSelection) {
    let result = playerSelection - computerSelection;

    if(playerSelection === 0){
        if(result === 0){ return "Thats a TIE!!"}
        if(result === -1){ return " You LOOSE :(  Paper beats Rock"}
        if(result === -2){ return " You WIN!!  Rock beats Scissors"}
    }

    if(playerSelection === 1){
        if(result === 0){ return "Thats a TIE!!"}
        if(result === 1){ return " You WIN!!  Paper beats Rock"}
        if(result === -1){ return " You LOOSE :(  Scissors beats paper"}
    }

    if(playerSelection === 2){
        if(result === 0){ return "Thats a TIE!!"}
        if(result === 1){ return " You WIN!!  Scissors beats Paper"}
        if(result === 2){ return " You LOOSE :(  Rock beats Scissors"}
    }
}

for(let i = 0; i < 5; i++){
    let player = getData();
    let computer = getRandomInt();
    console.log(round(player,computer));
}