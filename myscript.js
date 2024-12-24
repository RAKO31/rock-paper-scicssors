function getComputerChoice(){
    let choice = Math.random()*100;
    if(choice<=33){
        return 'rock';
    }
    else if(choice>=33 && choice<=66){
        return 'paper';
    }
    else if(choice>66){
        return 'scissors';
    }
}

function getHumanChoice(){
    let choice = prompt("what is your choice?");
    return choice;
}

let humanScore=0;
let computerScore=0;

function playRound(ComputerChoice,HumanChoice){
    HumanChoice.toLowerCase();
    if(ComputerChoice==HumanChoice){
        console.log('it is a tie!');
    }
    else if(HumanChoice=='rock' && (ComputerChoice=='paper'||ComputerChoice=='scissors')){
        console.log("you won!");
        humanScore++;
    }
    else if(HumanChoice=='scissor' ){
        if(ComputerChoice='rock'){
            console.log("you lost!rock beats scissors");
            computerScore++;
        }
        else{
            console.log('you won!')
            humanScore++;
        }
    }
    else if(HumanChoice=='paper'){
        console.log("you lost!");
        computerScore++;
    }

}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

function playGAme(){
    for(let i=0 ;i<5;i++){
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(computerSelection,humanSelection);
        
    }
    console.log(humanScore);
    console.log(computerScore);
}

