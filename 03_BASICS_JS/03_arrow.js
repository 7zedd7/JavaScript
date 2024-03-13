
//++++++++++++++++++++++++++++++++++++++This keyword++++++++++++++++++++++++++++++++

/*
    The this keyword in JavaScript is a special keyword that refers to the current object. It is used to access the properties and methods of the current object. The value of this changes depending on the context in which it is used.
*/

const user = {
    username: "Zeel",
    price: 999,

    welcomeMessage: function () {
        console.log(`${this.username} , welcome to website`);
        console.log(this);
    }
}
/*  
    if we comment  console.log(this);  then it will print  user name and welcome message. and if we don't then object of user print as well
*/

// user.welcomeMessage() //{  username: 'Zeel',  price: 999, welcomeMessage: [Function: welcomeMessage] }

// user.username = "Virat"

// user.welcomeMessage() //{  username: 'Virat',  price: 999, welcomeMessage: [Function: welcomeMessage] }

// console.log(this);
/*  
    ~Browser Environment: In the browser, this in the global scope refers to the window object.if you log console.log(this) in the browser's console, you will see the window object logged.

    ~Node.js Environment: In Node.js, this in the global scope refers to the global object. if you log console.log(this) in a Node.js script, you will see the global object logged. which is {} empty object

*/

// function chai(){
//     let username = "Zeel"
//     console.log(this.username);
// }
// chai() //output => undefined

// const chai = function () {
//     let username = "Zeel"
//     console.log(this.username);
// }
// chai()  //output => undefined

const chai = () => {
    let username = "Zeel"
    console.log(this);
}

// chai() //output => {}

//++++++++++++++++++++++++++++++++++++++Arrow funtion++++++++++++++++++++++++++++++++
/*
    different way to create arrow function
*/
//1st way
const addTwo = (num1, num2) => {
    return num1 + num2
}
console.log(addTwo(2, 1)); //output => 3

//2nd Way
const multiplyTwo = (num1, num2) => num1 * num2
// console.log(multiplyTwo(2, 1)); //output => 2

//3rd Way
const divideTwo = (num1, num2) => (num1 / num2)
// console.log(divideTwo(2, 1)); //output => 2

//Creating object in Arrow function
const subTwo = (num1, num2) => ({ username: "Zeel" })

// console.log(subTwo(2, 1)); // output =>{ username: 'Zeel' }

const myArray = [1, 2, 3, 4, 5]

// Iterate over the array and print each number
myArray.forEach((number) => {
    console.log(number);    
/*
    output =>
        1
        2
        3
        4
        5    
*/
});
// console.log(myArray); //output : [ 1, 2, 3, 4, 5 ]



/* Interview Question
    why we cannot use this keyword in arrow function in javascript?

    Arrow functions are a concise way to write JavaScript functions. They are lexically scoped, which means that they use the this keyword of the surrounding context. This can be problematic if you need to use the this keyword inside the arrow function to refer to a different object.
*/

const person = {
    name: "Zeel Patel",
    showSkills: () => {
        console.log(this.name); 
    }
};

person.showSkills(); // undefined

/*
    In this example, the this keyword inside the arrow function refers to the global object, which is undefined. This is because arrow functions do not have their own this keyword. They inherit the this keyword from the surrounding context, which in this case is the global object.
*/

//To fix this problem, you can use a regular function instead of an arrow function

const person1 = {
    name: "Zeel Patel",
    showSkills: function () {
        console.log(this.name);
    }
};

person1.showSkills(); // Zeel Patel