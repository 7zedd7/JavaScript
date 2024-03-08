"use strict"; // treat all JS code as newer version 

/*
The "use strict" directive in JavaScript enables strict mode. 
Strict mode was introduced in ECMAScript 5 and it enforces 
stricter parsing and error handling on the code at runtime. 
It also helps you write cleaner code and catch errors and bugs 
that might otherwise go unnoticed.
*/

console.log(3
    +
    3) // dont do this // code readability should be high

console.log("Zeel")

let name = "zeel"  // string
let age = 18 // number
let isLoggedIn = false // boolean
let state;


                            // #Primitive dataTypes# //

// number => 2 to power 53  
                /* it is the maximum range of integer representations , 
                the minimum "step" increases from 1 to 2.
                */

let number = 10;

// bigint       
                /* A big integer (BIGINT) is a binary integer with a 
                precision of 63 bits. The range of big 
                integers is -9223372036854775808 to +9223372036854775807. 
                */            

const bigInt1 = BigInt(1234567890123456789012345);
const bigInt2 = 1234567890123456789012345n;

// strings => "" , ''

let string = "Hello, world!";

// boolean => true/false

let boolean = true;

// null => standalone value 
                /* It represents the intentional absence of a value. 
                It is often used to indicate that a variable has not yet been 
                assigned a value, or that a function does not return a value. 
                */

let nullValue = null;                            

// undefined => 
                /*indicates that a variable has not been assigned a value,
                 or that a function did not return a value.
                */

let undefinedValue = undefined;

// Symbol => unique
                /*They are used to create unique identifiers. 
                Symbols are immutable and cannot be reassigned.
                */

let symbol = Symbol("mySymbol")
     


                            // #Non-Primitive DataTypes# //

// Object => Objects are collections of properties and methods.

let object = {
    name: "John Doe",
    age: 30
  };

// Array => Arrays are ordered lists of values.

let array = [1, 2, 3, 4, 5];

/* visit this link for more info about Data Types and Values
   link:-(https://tc39.es/ecma262/multipage/ecmascript-data-types-and-values.html)
   (ECMAScript Data Types and Values)
*/