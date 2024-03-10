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

/*  More about DataTypes in below Link

    https://262.ecma-international.org/5.1/#sec-11.4.3

*/ 


//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

/*  Static (Primitive)
    
    Primitive data types are stored on the stack, which is a 
    region of memory that is used to store function calls and 
    local variables.

*/

/*  Heap (Non-primitive)

    non-primitive data types are stored in the heap. The heap is
    a memory space that is used to store objects and arrays.

*/

let myName = "Zeel patel"

let anotherName = myName
anotherName = "Zedd" // When you assign a primitive variable to another, a copy of the value is made.

console.log(myName)
console.log(anotherName)

let userOne = {
    email: "abc@gmail.com",
    upi: "abc@paytm"
}

let userTwo = userOne

userTwo.email = "xyz@gmail.com" 
/*
    When you assign an object or array to another variable,
    the reference to the same object is copied, not a new copy 
    of the object. This means that if you make a change to one
    of the variables, the other variable will also be affected.
*/

console.log(userOne);
console.log(userTwo);