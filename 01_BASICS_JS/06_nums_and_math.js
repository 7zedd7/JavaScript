const  score = 400
// console.log(score);

const balance = new Number(100)
console.log(balance);

console.log(balance.toString().length); //output => 3
/*
    ~The toString() method returns a string as a string.
    ~The toString() method does not change the original string.
    ~The toString() method can be used to convert a string object into a string.
*/
console.log(balance.toFixed(2));  //output => 100.00
/*
    ~The toFixed() method converts a number to a string.
    ~The toFixed() method rounds the string to a specified number of decimals.
*/

const otherNumber = 1123.4567
console.log(otherNumber.toPrecision(3)); //output =>1.12e+3
console.log(otherNumber.toPrecision(4)); //output =>1123
/*
    ~The toPrecision() method formats a number to a specified length.
    ~A decimal point and nulls are added (if needed), to create the 
    specified length.
*/

const hundreds = 1000000
console.log(hundreds.toLocaleString()); output => 1,000,000
console.log(hundreds.toLocaleString('en-IN')); output => 10,00,000


//++++++++++++++++++++++++++++ Maths ++++++++++++++++++++++++++++


console.log(Math); // generate random number between 0 to 1
console.log(Math.abs(-4)); //convert to positive number
console.log(Math.round(4.6)); // round a number to the nearest integer.
console.log(Math.ceil(4.2)); //rounds a number up to the nearest integer. 
console.log(Math.floor(4.9)); // rounds a number down to its nearest integer.
console.log(Math.min(4, 3, 6, 8)); // return min value from all values
console.log(Math.max(4, 3, 6, 8)); // return max value from all values


console.log(Math.random());
console.log((Math.random()*10)+1);
console.log(Math.floor(Math.random()*10)+1);

const min = 10
const max = 20

console.log(Math.floor(Math.random()*(max-min+1))+min) // generating random number between min and max values