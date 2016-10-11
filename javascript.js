var userInput = document.querySelector('.main-input');
var userGuess;
var lastGuess = document.querySelector('.last-guess');
var guessButton = document.querySelector('.guess');
var randomNumber = (Math.ceil(Math.random() * 100));

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

  function compareGuess() {
    if (userGuess > 100) {
      console.log("Please enter a number between 1 and 100");
    } else if (userGuess > randomNumber) {
      console.log("That is too high");
    } else if (userGuess < randomNumber) {
      console.log("That is too low")
    } else {
      console.log("You guessed it!")
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
