//Immediately Invoked Function Expressions (IIFE)

//a function that is called immediately after it is defined.

//1st way to create IIFE
(function(){
    console.log("hello world!s");
})();

// semicolon is mandatory if you want to run more than one IIFE

//2st way to create IIFE
( (name) => {
    console.log(`Hello ${name}! How are you`);
})('Zeel')  //output => TypeError: (intermediate value)(...) is not a function

( (name) => {
    console.log(`Hello ${name}! How are you`);
})('Virat');