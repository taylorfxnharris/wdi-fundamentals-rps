////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.")
    return prompt();
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////



function getPlayerMove(move) {
    move === undefined
    return move || `getInput()`.;
}
   function getComputerMove(move) {
	 move === undefined
     return move || `randomPlay()`;
}





function getWinner(playerMove,computerMove) {
    var winner;
    
    if (computerMove === playerMove) {
        winner = "It's a tie!";
    } 
    else if (playerMove === "rock" && computerMove === "paper") {
        winner = "computer";
    } 
    else if (playerMove === "rock" && computerMove === "scissors") {
        winner = "player";
    } 
    else if (playerMove === "paper" && computerMove === "rock") {
        winner = "player";
    } 
    else if (playerMove === "paper" && computerMove === "scissors") {
        winner = "computer";
    } 
    else if (playerMove === "scissors" && computerMove === "rock") {
        winner = "computer";
    } 
    else if (playerMove === "scissors" && computerMove === "paper") {
        winner = "player";
    }
    
{
	console.log("The 'winner' wins!");
    return winner;
	 }
   
   
   
   
    
}

function playToFive() {
    console.log("Let's play Taylor's Rock, Paper, Scissors Game");
    var playerWins = 0;
    var computerWins = 0;
    
while (playerWins < 5 && computerWins < 5) {

    var playerMove = getPlayerMove();
    var computerMove = getComputerMove();
    var winner = getWinner(playerMove, computerMove);

        if (winner === "player"){
            playerWins++;
            
        } else if (winner === 'computer'){
            computerWins++;
            
        } else {
        	(winner == "tie")
            console.log("It's a tie!");
        }
    console.log("Player Wins: " + playerWins + " Computer Wins: " + computerWins)
    return [playerWins, computerWins];
}

