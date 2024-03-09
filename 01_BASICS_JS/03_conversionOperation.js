let score = "23"

//Two ways to use type of
//console.log(typeof score);
//console.log(typeof(score));

let valueInNumber = Number(score) //converting data into number
//console.log(typeof valueInNumber);  //checking that converted data type
//console.log(valueInNumber) //it will return NaN if it is not a number

/*  Convert data of different data types into numbers and return the resulting data

    "33" => 33
    "33abc" => Nan
    true => 1
    false => 0

*/

let isLoggedIn = "Zeel"

let booleanIsLoggedIn = Boolean(isLoggedIn) //converting data into boolean
//console.log(typeof booleanIsLoggedIn); // check DataType
//console.log(booleanIsLoggedIn); // retun value

/*  Convert data of different data types into boolean and return the resulting data

    1 => true
    0 => false
    "" => false
    "Zeel" => true

    The default value of the Boolean() constructor in JavaScript is false

*/

let someNumber = 33

let stringNumber = String(someNumber) //converting data into string
//console.log(typeof stringNumber); //rerturn DataType
//console.log(stringNumber); //return value

/*  Convert data of different data types into boolean and return the resulting data

    33(number) => 33 (string)
    "33" => 33 (string)
    "zeel" => zeel (string)

*/

// *********************** Operations ***********************

let value =3 
let negValue = -value
//console.log(negValue);

/* Basi operations

    console.log(2+2);  
    console.log(2-2);
    console.log(2*2);
    console.log(2**3);  power
    console.log(2/3);
    console.log(2%3);   remainder

*/

let str1 = "Hello"
let str2 = " Zeel"

let str3 = str1 + str2
//console.log(str3);

// console.log("1" + 2);
// console.log(1+"2");
// console.log("1"+ 2 + 2);
// console.log(1 + 2 + "2");

// 
// console.log(+true);
// console.log(+"");

let num1, num2 , num3

num1 = num2 = num3 = 2 + 2

let gameCounter = 100
++gameCounter;
console.log(gameCounter);
// gameCounter++;
// console.log(gameCounter);

/* more about Type Conversion in below link

    https://tc39.es/ecma262/multipage/abstract-operations.html

*/