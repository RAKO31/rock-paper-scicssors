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

let btn1= document.querySelector(".rock");
let btn2= document.querySelector(".paper");
let btn3= document.querySelector(".scissors");

btn1.addEventListener('click',()=>{
    playRound(getComputerChoice(),'rock');
});

btn2.addEventListener('click',()=>{
    playRound(getComputerChoice(),'paper');
});

btn3.addEventListener('click',()=>{
    playRound(getComputerChoice(),'scissors');
});
let container = document.querySelector('div');

let div = document.createElement('div');
let hscore = document.createElement('div');
let cscore = document.createElement('div');
container.appendChild(div);
container.appendChild(hscore);
container.appendChild(cscore);

function playRound(ComputerChoice,HumanChoice){
    if(ComputerChoice==HumanChoice){
        div.textContent="it is a tie";
    }
    else if(HumanChoice=='rock' && (ComputerChoice=='paper'||ComputerChoice=='scissors')){
        div.textContent="you won!";
        humanScore++;
        hscore.textContent=`human : ${humanScore}`;
        cscore.textContent=`computer : ${computerScore}`;
    }
    else if(HumanChoice=='scissor' ){
        if(ComputerChoice='rock'){
            div.textContent="you lost!";
            computerScore++;
            hscore.textContent=`human : ${humanScore}`;
            cscore.textContent=`computer : ${computerScore}`;
        }
        else{
            div.textContent="you won!";
            humanScore++;
            hscore.textContent=`human : ${humanScore}`;
            cscore.textContent=`computer : ${computerScore}`;
          
        }
    }
    else if(HumanChoice=='paper'){
        div.textContent="you lost!";
        computerScore++;
        hscore.textContent=`human : ${humanScore}`;
        cscore.textContent=`computer : ${computerScore}`;
    }
    let winner = document.createElement('div');
    if(humanScore==5){
        winner.textContent="you have won the game";
    }
    else if(computerScore==5){
        winner.textContent="you have lost the game";
    }
    container.appendChild(winner);

}

