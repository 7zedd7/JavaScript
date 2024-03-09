// Primitive 

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherID = Symbol('123')

console.log(id === anotherID);
/*
    id and anotherID. Symbols are unique and immutable values, 
    so even though they have the same description, they are not equal. 

*/

const bigNumber = 3456543576654356754n
// console.log(typeof bigNumber); // bigInt

// Reference (Non primitive) =>

// Array , Objects , Functions

const heros = ["shaktiman", "naagraj", "doga"];

let myObj = {
    name: "Zeel",
    age: 22,
}

const myFunction = function(){
    console.log("Hello Github");
}


/*

JavaScript data types and their corresponding return types

1) Primitive Datatypes
       Number => number
       String  => string
       Boolean  => boolean
       null  => object
       undefined  =>  undefined
       Symbol  =>  symbol
       BigInt  =>  bigint

2) Non-primitive Datatypes
       Arrays  =>  object
       Function  =>  function
       Object  =>  object
*/