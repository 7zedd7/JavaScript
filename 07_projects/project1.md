# Project Related to DOM 

## Project Links
[CLICK HERE](https://stackblitz.com/edit/dom-project-chaiaurcode-fyq17b)


# Solutions

## Project 1 

```Javascript
console.log('Zeel');
const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach(function (button) {
  console.log(button);
  button.addEventListener('click', function (e) {
    console.log(e);
    console.log(e.target);
    if (e.target.id === 'grey') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'white') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'blue') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'yellow') {
      body.style.backgroundColor = e.target.id;
    }
  });
});

```

## Project 2 

```JavaScript
const form = document.querySelector('form');
// this usecase will give you empty
// when code start execute in this null value will be store because there will be no input initially
// const height = parseInt(document.querySelector('#height').value)
form.addEventListener('submit', function (e) {
  e.preventDefault();

  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');

  if (height === '' || height < 0 || isNaN(height)) {
    results.innerHTML = `Please Enter valid Height. Height is ${height}`;
  } else if (weight === '' || weight < 0 || isNaN(weight)) {
    results.innerHTML = `Please Enter valid weight. weight is ${weight}`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    results.innerHTML = `<span>${bmi}</span>`;

    const answer = document.querySelector('#answer');

    if (bmi <= 18.6) {
      answer.innerHTML = `Your weight Under weight`;
    } else if (bmi >= 18.6 || bmi <= 24.9) {
      answer.innerHTML = `Your weight is in Normal Range`;
    }
    if (bmi > 24.9) {
      answer.innerHTML = `You are Overweight`;
    }
  }
});

```

## Project 3

```Javascript
const clock = document.getElementById('clock');
// const clock = document.querySelector('#clock'); another way to get clock id

setInterval(function () {
  let date = new Date();
  // console.log(date.toLocaleTimeString());
  clock.innerHTML = date.toLocaleTimeString();
}, 1000);

```

## Project 4

```Javascript
let randomNuber = Math.floor(Math.random() * 100 + 1);
console.log(randomNuber);
const userInput = document.getElementById('guessField');
const guessSlot = document.querySelector('.guesses');
const submit = document.getElementById('subt');
const remaing = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');

let prevGuess = [];
let numGuess = 1;

playGame = true;

if (playGame) {
  submit.addEventListener('click', function (e) {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    console.log(guess);
    guessValidation(guess);
  });
}

function guessValidation(guess) {
  if (isNaN(guess)) {
    alert('Please Enter Valid Number');
  } else if (guess < 1) {
    alert('Please Enter Number Greater than 0');
  } else if (guess > 100) {
    alert('Please Enter Number Less than 101');
  } else {
    prevGuess.push(guess);
    if (numGuess === 10) {
      displayGuess(guess);
      displayMessage(`Game Over. Random Number was ${randomNuber}`);
      endGame();
    } else {
      displayGuess(guess);
      guessCheck(guess);
    }
  }
}

function guessCheck(guess) {
  if (guess === randomNuber) {
    displayMessage(`You Guess It right`);
    endGame();
  } else if (guess < randomNuber) {
    displayMessage(`Your Guess is Low`);
  } else if (guess > randomNuber) {
    displayMessage(`Your Guess is High`);
  }
}
function displayGuess(guess) {
  userInput.value = '';
  guessSlot.innerHTML += `${guess}, `;
  numGuess++;
  remaing.innerHTML = `${11 - numGuess}`;
}

function displayMessage(message) {
  lowOrHi.innerHTML = `<h2>${message}</h2>`;
}

function endGame() {
  userInput.value = '';
  userInput.setAttribute('disabled', '');
  p.classList.add('button');
  p.innerHTML = `<h2 id="newGame">Start New Game</h2>`;
  startOver.appendChild(p);
  playGame = false;
  newGame();
}

function newGame() {
  const newGameButton = document.getElementById('newGame');
  newGameButton.addEventListener('click', function (e) {
    randomNuber = parseInt(Math.random() * 100 + 1);
    prevGuess = [];
    numGuess = 1;
    guessSlot.innerHTML = '';
    remaing.innerHTML = `${11 - numGuess}`;
    userInput.removeAttribute('disabled');
    startOver.removeChild(p);

    playGame = true;
  });
}
```