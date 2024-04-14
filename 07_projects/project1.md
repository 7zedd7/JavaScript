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