var userInput = document.querySelector('.main-input');
var userGuess;
var lastGuess = document.querySelector('.last-guess');
var guessButton = document.querySelector('.guess');
var randomNumber = (Math.ceil(Math.random() * 100));
var response = document.querySelector('.response');


function displayGuess(){
  lastGuess.innerText = userGuess;
};

function getUserGuess() {
  userGuess = userInput.value;
};

 guessButton.addEventListener('click', function () {
   getUserGuess();
   displayGuess();
   compareGuess();
   console.log(randomNumber)
  });


//break function below into two, one to check that it's a valid input, other to compare//
  function compareGuess() {
    if (userGuess > 100) {
      console.log("Please enter a number between 1 and 100");
      response.innerText = "Please enter a number between 1 and 100";
    } else if (userGuess > randomNumber) {
      console.log("That is too high");
      response.innerText = "That is too high";
    } else if (userGuess < randomNumber) {
      console.log("That is too low");
      response.innerText = "That is too low";
    } else {
      console.log("You guessed it!")
      response.innerText = "You guessed it!";
    }
  };


// function compareGuess() {
//   if (userGuess > randomNumber) {
//     console.log("That is too high")
//   } else if (userGuess < randomNumber) {
//     console.log("That is too low")
//   } else {
//     console.log("You guessed it!")
//   }
// };
