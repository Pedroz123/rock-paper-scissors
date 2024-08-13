console.log("Hello world!!");



// Create a function tha randomly choose between three decisions. Rock, paper and scissors.
// Use the math.random() to create the random numer and then assigned it  to an especific situation
// i think im going to use 2 functions to acomplish the situations. The first function is to get the random number and the second one to translaite it to an specific string

// Set a variable that get the random number
// Create a function named "getComputerChoice" with one parameter 
// Calculate a number using Math.floor() that will round it downwarse 
// Multiply the random number with the parameter
// Return the result of the multiplication
const randomNumber = getComputerChoice();
function getComputerChoice(){
    return Math.floor(Math.random() * 3);
}
console.log(randomNumber);
// Create a function with number that i get with the last function
// if my number is 2 is going to be rock
// else if my number is 1 my number is going to be paper
// else my number is another number than is going to be scissors


function getComputerString(number){
    let computeString;
    switch(number){
        case 2:
            return computeString = "rock";
          
        case 1:
            return computeString = "paper";
        
        default:
            return computeString = "scissors";
         
    }
}



// Do a function that ask the user what object they want to use between rock, peper and scissors
// Using the promp 

// get the answer of the function in a variable 
//obtain the object of the user with the promt
// change the object to lower case
// return the answer

function getHumanChoice(){
    let getAnswer = prompt("Choose between rock, paper and scissors");
    return getAnswer.toLowerCase();
}

// user score
let humanScore = 0;
// computer score
let computerScore = 0;


// A function that get the answer of the computer and the human. Compare the answer of each on of them and then return the winner
// nine posibilities 


// set two scores just for the function to know how win that round
// the human answer pass thrwo a switch statement
// Compare the human answer with the computer answer

 function playRound(getHumanAnswer,getComputerAnswer){

    
    let human = 1;
    switch (getComputerAnswer){
        case "rock":
            if (getHumanAnswer == "paper"){
                human++;
            }else if (getHumanAnswer == "scissors"){
                human--;
            }
            break;

        case "paper":
            if (getHumanAnswer == "scissors"){
                human++;
            }else if (getHumanAnswer == "rock"){
                human--;
            }
            break;
        case "scissors":
            if (getHumanAnswer == "rock"){
                human++;
            }else if (getHumanAnswer == "paper"){
                human--;
            }
            break;
    }
    console.log(human);
    if (human == 2){
        console.log("You win!!. ",getHumanAnswer," beats ",getComputerAnswer);
        humanScore++;
        return "human";
    }else if (human == 0){
        console.log("You lose!. ", getHumanAnswer," lose againts ", getComputerAnswer);
        computerScore++;
        return "computer";
    }else {
        console.log("WOW draw", getHumanAnswer,getComputerAnswer)
    }
   
}


function playGame(){

    let count = 0;
    let human = 0;
    let comp = 0;

    while(count < 5){

    getHumanAnswer = getHumanChoice();
    getComputerAnswer = getComputerString(randomNumber);


    console.log(getHumanAnswer);
    console.log(getComputerAnswer);

    let getScore= playRound(getHumanAnswer,getComputerAnswer)

    if (getScore == "human"){
        human++;
    }else if (getScore == "computer"){
        comp++;
    }

    count++;
    }

    if (human > comp){
        console.log("human win  with ", human, " rounds");
    }else if (human < comp){
        console.log("computer win with ", comp, "rounds");
    }else {
        console.log("ITS A DRAK !!!")
    }
}

playGame();