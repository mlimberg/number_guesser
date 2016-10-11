
var userInput = document.querySelector('.main-input');
var userGuess;
var lastGuess = document.querySelector('.last-guess');
var guessButton = document.querySelector('.guess');
var randomNumber = (Math.ceil(Math.random() * 100));
var response = document.querySelector('.guess-result');
var yourLastGuess = document.querySelector('.your-last-guess');

//Get the input from the user and convert to a number//
function getUserGuess() {
  userGuess = parseInt(userInput.value);
};

//display the text above the user guess//
function displayText () {
  yourLastGuess.innerText = "Your Last Guess Was:";
};

//display the last guess the user input//
function displayInput () {
  lastGuess.innerText = userGuess;
}

//compare user input to the random number and return a message based on it//
function compare() {
  if (userGuess > 100) {
    response.innerText = "Please select a number between 1 and 100";
  } else if (userGuess < 1) {
    response.innerText = "Please select a number between 1 and 100";
  } else if (userGuess < randomNumber) {
    response.innerText = "That is too low";
  } else if (userGuess > randomNumber) {
    response.innerText = "That is too high";
  } else if (userGuess === randomNumber) {
    response.innerText = "You guessed it!";
  } else {
    response.innerText = "Make sure you enter a number"
  }
};





guessButton.addEventListener ('click', function() {
  getUserGuess();
  displayText();
  compare();
  displayInput();
  console.log(randomNumber);
  console.log(userGuess);
});



















//
//
// function getUserGuess() {
//   userGuess = userInput.value;
// };
//function displayGuess(){
//   lastGuess.innerText = userGuess;
// };
//
// // function validateGuess() {
// //   if (userGuess > 100 || userGuess < 0) {
// //     console.log("Please enter a number between 1 and 100");
// //     response.innerText = "Please enter a number between 1 and 100";
// //   };
//
// //break function below into two, one to check that it's a valid input, other to compare//
//   function compareGuess() {
//     if (userGuess > randomNumber) {
//       console.log("That is too high");
//       response.innerText = "That is too high";
//     } else if (userGuess < randomNumber) {
//       console.log("That is too low");
//       response.innerText = "That is too low";
//     } else {
//     console.log("You guessed it!");
//     response.innerText = "You guessed it!";
//   }
// };
//
//  guessButton.addEventListener('click', function () {
//    getUserGuess();
//    displayGuess();
//   //  validateGuess();
//    compareGuess();
//    console.log(randomNumber);
//   });
//
//
//
// // function compareGuess() {
// //   if (userGuess > randomNumber) {
// //     console.log("That is too high")
// //   } else if (userGuess < randomNumber) {
// //     console.log("That is too low")
// //   } else {
// //     console.log("You guessed it!")
// //   }
// // };
