//values defined on page load//
var min = 1;
var max = 100;

var submitButton = document.querySelector(".changeminmax")
var minValueField = document.querySelector("#min-value")
var maxValueField = document.querySelector("#max-value")


//define a random number between 1 and 100//
var randomNumber = generateRandomNumber();

// defining global variables for guess and reset functionality
var mainInputField = document.querySelector("#main-input");

var guessSection = document.querySelector('.last-guess');
var yourLastGuessWas = document.querySelector('.your-last-guess-text');
var response = document.querySelector('.response');


//defining the button object for submitting the user guess//
var guessButton = document.querySelector('.guess');

//setting the reset button object//
var resetButton = document.querySelector('.reset-button');

//setting the reset button object//
var clearButton = document.querySelector('.clear');


//defining the input as a string to display//
var userInputString = document.getElementById('main-input');

var rangeText = document.querySelector('.min-max-text');
// creating this function for use in the reset button so that it generates a new random number.
function generateRandomNumber() {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

//list the range the user must guess between//
  rangeText.innerText = `Enter a number between ${min} and ${max}`

//function to simplify getting parsed integer//
function inputAsNumber() {
  return  parseInt(document.getElementById('main-input').value)
};

//function to display the "your last guess was" text and the user input as a string - need to set character limit to avoid layout issues if user puts too many characters//
function displayInputString() {
  guessSection.innerText = document.getElementById('main-input').value;
  yourLastGuessWas.innerText = "Your last guess was";
};

// //function to compare input to random number and return a response accordingly//
function compareAndInform() {
  var resultSection = document.querySelector('.response');
  if (inputAsNumber() > max ) {
    resultSection.innerText = `Range Exceeded! You need to guess a number between ${min} and ${max}`;
  } else if (inputAsNumber() < min) {
    resultSection.innerText = `Range Exceeded! You need to guess a number between ${min} and ${max}`;
  } else if (inputAsNumber() < randomNumber) {
    resultSection.innerText = "That is too low";
  } else if (inputAsNumber() > randomNumber) {
    resultSection.innerText = "That is too high";
  } else if (inputAsNumber() === randomNumber) {
    resultSection.innerText = "You guessed it!"
    increaseValueOnWin();
    console.log(randomNumber);
  } else {
    resultSection.innerText = `You need to guess a NUMBER between ${min} and ${max}`;
  }
};

//function to increase the min and max value by 10 if the user gets it right. requires updating random number and displayed text as well//
function increaseValueOnWin() {
  if (inputAsNumber() === randomNumber) {
      min = min + 10;
      max = max + 10;
      randomNumber = generateRandomNumber();
      updateMinMaxText();
    }
  };

//event listener to run functions when button is  clicked that display the user's input and give them feedback based on the input//

//clicking guess button will display the user's guess and compare it to the random number and spit a response//
guessButton.addEventListener('click', function() {
    console.log(randomNumber);
    displayInputString();
    compareAndInform();
    increaseValueOnWin();

});

//allows user to press enter to submit answer//
mainInputField.addEventListener('keypress', function(e) {
  console.log(e)
  if (e.keyCode===13){
    console.log(randomNumber);
    displayInputString();
    compareAndInform();
  }
});

//resetting the page on click to set a new random number and clear the input//
function resetPage() {
  randomNumber = generateRandomNumber();
  mainInputField.value = "";
  yourLastGuessWas.innerText = "";
  guessSection.innerText = "";
  response.innerText = "";
  minValueField.value = "";
  maxValueField.value = "";
  guessButton.disabled = true;
  clearButton.disabled = true;
  console.log(randomNumber);
};

//resets the page and disables buttons//
resetButton.addEventListener('click', function(){
  resetPage();
  resetButton.disabled = true;
  submitButton.disabled = true;
});

//placing content in the input field enables buttons for use//
mainInputField.addEventListener('keyup', function(){
  if (userInputString.value != "") {
    guessButton.disabled = false;
    clearButton.disabled = false;
    resetButton.disabled = false;
  } else {
    guessButton.disabled = true;
    clearButton.disabled = true;
    resetButton.disabled = true;
  }
});

//content in the min value AND max value field will enable the submit button//
minValueField.addEventListener('keyup', function(){
  if (minValueField.value != "" && maxValueField.value != "") {
    submitButton.disabled = false;
  } else {
    submitButton.disabled = true;
  }
});

maxValueField.addEventListener('keyup', function(){
  if (maxValueField.value != "" && minValueField.value != "") {
    submitButton.disabled = false;
  } else {
    guessButton.disabled = true;
  }
});

// defining a function as clearing the input field and replacing it with nothing
function clearInputField() {
  mainInputField.value = "";
}
// when we click on clear button it clears the input field calling the clearInputField
clearButton.addEventListener('click', function(){
  clearInputField();
  guessButton.disabled = true;
  clearButton.disabled = true;
});

//updates min and max variables to user preference//
function updateMinMax() {
  min = parseInt(minValueField.value);
  max = parseInt(maxValueField.value);
};

function updateMinMaxText () {
  rangeText.innerText = `Enter a number between ${min} and ${max}`
};

//clicking the submit button updates min and max based on user preference and clears page content//
submitButton.addEventListener('click', function(){
  updateMinMax();
  resetPage();
  updateMinMaxText();
  submitButton.disabled = true;  //ADDED//
  // displayRange();
})
