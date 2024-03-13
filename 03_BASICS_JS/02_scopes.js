/*
    JavaScript variables have 4 types of scope:

        ~Global scope: The default scope for all code running in script mode.        
        ~Module scope: The scope for code running in module mode.        
        ~Function scope: The scope created with a function
        ~Block scope: The scope created with a pair of curly braces (a block).
*/



//+++++++++++++++++++++++++++++Global scope+++++++++++++++++++++++++++++++++

var n = 2;       // Global scope

//However, variable being declared outside the function, making it global:
const y = "declared outside function"; 
// exampleFunction();                  //hoisting 
function exampleFunction() {
    console.log("Inside function");
    console.log(y);
}

// console.log("Outside function");
// console.log(y);



//+++++++++++++++++++++++++++++Function scope+++++++++++++++++++++++++++++++++

function myFunction() {
    var firstName = "Zeel";   // Function Scope
}



function exampleFunction() {
    const x = "declared inside function"; // x can only be used in exampleFunction
    console.log("Inside function");
    console.log(x);
}
// exampleFunction()
// console.log(x); // Causes error




//+++++++++++++++++++++++++++++Block scope+++++++++++++++++++++++++++++++++



//Blocks only scope let and const declarations, but not var declarations.

{
    var z = 1;
}
// console.log(z); // 1

//error
{
    // const z = 1;
}
// console.log(z); // ReferenceError: x is not defined

//+++++++++++++++++++++++++++++Local scope+++++++++++++++++++++++++++++++++

// This part of code cannot use firstName
function myFunction() {
    let firstName = "Zeel";
    // This part of code can use firstName
}
//This part of code cannot use firstNam



function foo() { 
	var xx = '1'; 
	console.log('inside function: ', xx); 
} 

// foo();		 // Inside function: 1 
// console.log(xx); // Error: x is not defined 



//=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=

var c =300
if(true){
    let a = 10
    const b =20
    c =200
    // console.log("INNER:",a);
}

// console.log(a); //ReferenceError: a is not defined
// console.log(b); //ReferenceError: b is not defined
// console.log(c); //output => 200

function one(){
    const username = "Zeel"

    function two(){
        const website = "Portfolio"
        console.log(username);
    }
    // console.log(website); //ReferenceError: website is not defined
    two();
}

// one();

if(true){
    const username = "Zeel"
    if(username === "Zeel"){
        const website = " Portfolio"
        console.log(username+website);
    }
    // console.log(website); //ReferenceError: website is not defined
}

// console.log(username); //ReferenceError: username is not defined


//+++++++++++++++++++++++++++++Interesting+++++++++++++++++++++++++++++++++

console.log(addon(5)); //hoisting 

function addon(num){
    return num+1
}

console.log(addtwo(5)); //

const addtwo = function(num){
    return num+2
}


/*
    addtwo, is declared using a function expression assigned to a const variable. Variable declarations (including const) are also hoisted, but they are initialized with undefined at the beginning. So, when you try to call addtwo(5) before the assignment (const addtwo = ...), addtwo is still undefined, resulting in an error because you can't call undefined as a function.

    1=>JavaScript starts executing the code line by line.

    2=>It encounters the console.log(addtwo(5)); statement.

    3=>It attempts to execute the addtwo(5) function call.

    4=>Since addtwo is declared using a const variable assignment (const addtwo = function(num) {...}), JavaScript checks if addtwo is defined at the point of the function call.

    5=>However, since variable declarations with const are hoisted but not initialized with a value until the actual declaration is reached in the code, at this point, addtwo is still undefined.

    6=>Therefore, JavaScript encounters an error when trying to call undefined as a function, resulting in a TypeError.
*/

