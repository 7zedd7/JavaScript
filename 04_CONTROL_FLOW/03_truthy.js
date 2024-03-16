const userEmail = []

if(userEmail){
    console.log("Got user Email");
}else {
    console.log("Don't have user email");


}

// Falsy Values

/*
    "Falsy values" refer to a set of values in JavaScript that are treated as equivalent to the Boolean value false when encountered in a Boolean context. In other words, when JavaScript expects a Boolean value (such as in an if statement), these values will be automatically coerced or converted to false.
*/

//false , 0 , -0 , BigInt 0n , "" , null , undefined , NaN

//Truthy Values

/*
    "Truthy values" refer to values in JavaScript that are treated as equivalent to the Boolean value true when encountered in a Boolean context. In other words, when JavaScript expects a Boolean value (such as in an if statement), these values will be automatically coerced or converted to true.
*/

// "0" , 'false' , " " , [] , {} , function() {} ,true , Any expression or value that is not falsy

const emptyObj = {}

if(Object.keys(emptyObj).length === 0){
    console.log("Object is Empty");
}

// Object.keys(emptyObj) is a method call that returns an array containing the names of all enumerable properties (keys) of the emptyObj object.


//Nullish Coalescing Operator (??): null undefined

/*
    The nullish coalescing (??) operator is a logical operator that returns its right-hand side operand when its left-hand side operand is null or undefined, and otherwise returns its left-hand side operand.
*/

let val1;
// val1 = 5 ?? 10 
// val1 = null ?? 10
// val1 = undefined ?? 15
val1 = null ?? 10 ?? 20

console.log(val1);


//Ternary operator 

/*
    The conditional (ternary) operator is the only JavaScript operator that takes three operands: a condition followed by a question mark (?), then an expression to execute if the condition is truthy followed by a colon (:), and finally the expression to execute if the condition is falsy. This operator is frequently used as an alternative to an if...else statement.
*/


//condition ? true : false

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80");;