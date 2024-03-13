//Functions
/*
    A function in JavaScript is a block of code that performs a specific task. Functions can take input in the form of parameters and can return a value or output. They help you organize and structure your code.
*/


function sayMyName(){
    console.log("H");
    console.log("I");
    console.log("T");
    console.log("E");
    console.log("S");
    console.log("H");
}

// sayMyName    //This refers to the function itself, but it doesn't actually invoke or call the function. It's simply a reference to the function object.

// sayMyName() // This actually calls or invokes the sayMyName function, causing it to execute the code within its body. When you add () after the function name, it tells JavaScript to execute the function.


// function addTwoNumbers(number1 , number2){
    
//     console.log(number1+number2);
// }
// addTwoNumbers(1,2) //output => 3
// const result = addTwoNumbers(1,2) //output => 3
// console.log("Result: " , result); //output => undefined
/*
    output is undefined because the addTwoNumbers function does not explicitly return any value. When a function in JavaScript does not have a return statement, it implicitly returns undefined.
*/

function addTwoNumbers(number1, number2){

    // let result = number1 + number2
    // return result
    return number1 + number2
    console.log("hello world"); //When a return statement is used in a function body, the execution of the function is stopped.
}

const result = addTwoNumbers(3, 5) //output => 8
// console.log(result);

function loginUserMessage(userName) {
    if(userName === undefined){
        console.log("Please Enter a username");
        result
    }
    return `${userName} just logged in`
}
// loginUserMessage()  //output => Please Enter a username
// loginUserMessage("Zeel") // output => Nothing will print because it is just giving reference to function
// console.log(loginUserMessage("Zeel")); //output =>Zeel just logged in

/*
    We can also write the if statement like this:
    if(!userName){

    }
*/


//Function with Objects

function calculateCartPrice(num1){
    return num1
}

// console.log(calculateCartPrice(100)); //output => 100
// console.log(calculateCartPrice(100,200,300,400,500)); //output => 100

//Rest parameter
function calculateCartPrice1(...num1){
    return num1

}
// console.log(calculateCartPrice1(100,200,300,400,500)); //output => [ 100, 200, 300, 400, 500 ]

function calculateCartPrice2(value1, value2, ...num1){
    return num1
}

// console.log(calculateCartPrice2(100,200,300,400,500)); //output => [ 300, 400, 500 ] 
/*
    here 100 will assign to value1 amd 200 will assign to value2
*/

const user = {
    username: "Zeel",
    price: 499
}
const user1 = {
    username: "Zeel",
    prices: 499  //check spelling of price
}
function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price} `);
}

//handleObject function that is called with different objects as arguments 
handleObject(user) //output => Username is Zeel and price is 499 
handleObject(user1)//output => Username is Zeel and price is undefined 
handleObject({
    username: "Virat",
    price: "10500000000"
})

//



//Function with Arrays

const myNewArray = [200,400,600,800,100]

function returnSecondValue(getArray){
    return getArray[1]
}

console.log(returnSecondValue(myNewArray)); //output => 400
console.log(returnSecondValue([200,100,500,1000])); //output => 100


