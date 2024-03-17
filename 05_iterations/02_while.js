
//+++++++++++++++++++++++++++++While Loop++++++++++++++++++++++++++++++++
//Checks the condition before executing the loop body
//The loop body may not be executed even once

let index = 0

while( index <=10){
    // console.log(`Value of the Index is ${index}`);
    index = index + 1; //if we don't write this then loop will run infinitely
}

let myArray = ['Ironman','Blackpanther','Spiderman']

let arr = 0

while (arr < myArray.length){ // we shouldn't write <= here
    // console.log(`You chose ${myArray[arr]} as your super hero`);
    arr = arr + 1
}

//++++++++++++++++++++++++++++DO While Loop++++++++++++++++++++++++++++++++
//Checks the condition after executing the loop body
//The loop body is executed at least once
let score = 11

do {
    console.log(`score is ${score}`);
    score++
}while(score <= 10);