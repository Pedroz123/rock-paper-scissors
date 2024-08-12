console.log("Hello world!!");



// Create a function tha randomly choose between three decisions. Rock, paper and scissors.
// Use the math.random() to create the random numer and then assigned it  to an especific situation
// i think im going to use 2 functions to acomplish the situations. The first function is to get the random number and the second one to translaite it to an specific string

// Set a variable that get the random number
// Create a function named "getComputerChoice" with one parameter 
// Calculate a number using Math.floor() that will round it downwarse 
// Multiply the random number with the parameter
// Return the result of the multiplication
const randomNumber = getComputerChoice(3);
function getComputerChoice(max){
    return Math.floor(Math.random() * max);
}
console.log(randomNumber);
// Create a function with number that i get with the last function
// if my number is 2 is going to be rock
// else if my number is 1 my number is going to be paper
// else my number is another number than is going to be scissors
let outputString = getComputerString(randomNumber);
console.log(outputString);

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
const getAnswer = getHumanChoice();
console.log(getAnswer);
function getHumanChoice(){
    let getAnswer = prompt("Choose between rock, paper and scissors");
    return getAnswer.toLowerCase();
}