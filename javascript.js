//define a random number between 1 and 100//
var randomNumber = Math.ceil((Math.random() * 100));

//defining the button object for submitting the user guess//
var guessButton = document.querySelector('.guess');

//setting the reset button object//
var resetButton = document.querySelector('.reset-button');

//setting the reset button object//
var clearButton = document.querySelector('.clear');


//defining the input as a string to display//
// var userInputString = document.getElementById('main-input');
console.log(randomNumber);
//function to simplify getting parsed integer//
function inputAsNumber() {
  return parseInt(document.getElementById('main-input').value)
};

//function to display the "your last guess was" text and the user input as a string - need to set character limit to avoid layout issues if user puts too many characters//
function displayInputString() {
  var guessSection = document.querySelector('.last-guess');
  guessSection.innerText = document.getElementById('main-input').value;
  var yourLastGuessWas = document.querySelector('.your-last-guess-text');
  yourLastGuessWas.innerText = "Your last guess was";
};

// //function to compare input to random number and return a response accordingly//
function compareAndInform() {
  var resultSection = document.querySelector('.response');
  if (inputAsNumber() > 100 ) {
    resultSection.innerText = "Range Exceeded! You need to guess a number between 1 and 100";
  } else if (inputAsNumber() < 1) {
    resultSection.innerText = "Range Exceeded! You need to guess a number between 1 and 100";
  } else if (inputAsNumber() < randomNumber) {
    resultSection.innerText = "That is too low";
  } else if (inputAsNumber() > randomNumber) {
    resultSection.innerText = "That is too high";
  } else if (inputAsNumber() === randomNumber) {
    resultSection.innerText = "You guessed it!"
  } else {
    resultSection.innerText = "You need to guess a NUMBER between 1 and 100";
  }
};

//event listener to run functions when button is  clicked that display the user's input and give them feedback based on the input//
guessButton.addEventListener('click', function() {
  console.log(randomNumber);
  displayInputString();
  compareAndInform();
});

//refreshing the page on click to set a new random number and clear the input//
resetButton.addEventListener('click', function() {
  location.reload();
});
