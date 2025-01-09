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

let humanScore=0;
let computerScore=0;

let rbtn = document.querySelector('.rock');
let pbtn = document.querySelector('.paper');
let sbtn = document.querySelector('.scissors');

rbtn.addEventListener('click',(event)=>{
    playRound(getComputerChoice(),event.target);
})
pbtn.addEventListener('click',(event)=>{
    playRound(getComputerChoice(),event.target);
})
sbtn.addEventListener('click',(event)=>{
    playRound(getComputerChoice(),event.target);
})

let div = document.createElement('div');

function playRound(ComputerChoice,HumanChoice){
     
}


