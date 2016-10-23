
var min = 1;
var max = 100;

var submitButton = document.querySelector(".changeminmax")
var minValueField = document.querySelector("#min-value")
var maxValueField = document.querySelector("#max-value")
var randomNumber = generateRandomNumber();
var mainInputField = document.querySelector("#main-input");
var guessSection = document.querySelector('.last-guess');
var yourLastGuessWas = document.querySelector('.your-last-guess-text');
var response = document.querySelector('.response');
var guessButton = document.querySelector('.guess');
var resetButton = document.querySelector('.reset-button');
var clearButton = document.querySelector('.clear');
var userInputString = document.getElementById('main-input');
var rangeText = document.querySelector('.min-max-text');
var resultSection = document.querySelector('.response');

function generateRandomNumber() {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

function updateRangeText() {
rangeText.innerText = `Enter a number between ${min} and ${max}`
}

updateRangeText();

function inputAsNumber() {
  return  parseInt(document.getElementById('main-input').value)
};

function displayInputString() {
  guessSection.innerText = document.getElementById('main-input').value;
  yourLastGuessWas.innerText = "Your last guess was";
};

function rangeExceededError() {
  resultSection.innerText = `Range Exceeded! You need to guess a number between ${min} and ${max}`;
}

function compareAndInform() {
  if (inputAsNumber() > max ) {
    rangeExceededError();
  } else if (inputAsNumber() < min) {
    rangeExceededError();
  } else if (inputAsNumber() < randomNumber) {
    resultSection.innerText = "That is too low";
  } else if (inputAsNumber() > randomNumber) {
    resultSection.innerText = "That is too high";
  } else if (inputAsNumber() === randomNumber) {
    resultSection.innerText = "You guessed it!"
    increaseValueOnWin();
  } else {
    updateRangeText();
  }
};

function increaseValueOnWin() {
  if (inputAsNumber() === randomNumber) {
      min = min - 10;
      max = max + 10;
      randomNumber = generateRandomNumber();
      updateRangeText();
    }
  };

guessButton.addEventListener('click', function() {
    displayInputString();
    compareAndInform();
    increaseValueOnWin();

});

mainInputField.addEventListener('keypress', function(e) {
  if (e.keyCode===13){
    displayInputString();
    compareAndInform();
  }
});

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
};

resetButton.addEventListener('click', function(){
  resetPage();
  resetButton.disabled = true;
  submitButton.disabled = true;
  min = 1;
  max = 100;
  updateRangeText();
});

function disableAllButtons() {
  guessButton.disabled = true;
  clearButton.disabled = true;
  resetButton.disabled = true;
}

function enableAllButtons() {
  guessButton.disabled = false;
  clearButton.disabled = false;
  resetButton.disabled = false;
}

mainInputField.addEventListener('keyup', function(){
  if (userInputString.value != "") {
    enableAllButtons();
  } else {
    disableAllButtons();
  }
});

minValueField.addEventListener('keyup', function(){
  if (minValueField.value != "" &&          maxValueField.value != "") {
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

function clearInputField() {
  mainInputField.value = "";
  minValueField.value = "";
  maxValueField.value= "";
}

clearButton.addEventListener('click', function(){
  clearInputField();
  guessButton.disabled = true;
  clearButton.disabled = true;
});

function updateMinMax() {
  min = parseInt(minValueField.value);
  max = parseInt(maxValueField.value);
};

submitButton.addEventListener('click', function(){
  updateMinMax();
  resetPage();
  updateRangeText();
  submitButton.disabled = true;
  resetButton.disabled = false;
})
