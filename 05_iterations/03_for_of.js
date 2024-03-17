//_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_for of_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_
/*
    The for...of statement executes a loop that operates on a sequence of values sourced from an iterable object. Iterable objects include instances of built-ins such as Array, String, TypedArray, Map, Set, NodeList (and other DOM collections), as well as the arguments object, generators produced by generator functions, and user-defined iterables.
*/

// ["","",""]
// [{},{},{}]

const arr = [1,2,3,4,5]

for(const num of arr){
    // console.log(num);
}

const greetings = "Hello World!"
for(const greet of greetings){
    // console.log(greet);
}

const objectArray = [
    { name: "John", age: 30 }, 
    { name: "Jane", age: 25 }
];
for(const obj of objectArray){
    // console.log(obj);
}

