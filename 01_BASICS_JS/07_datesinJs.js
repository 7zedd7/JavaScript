// dates

// Date : Date is an object in javascript. 
// JavaScript stores dates as number of milliseconds since January 01, 1970

let myDate = new Date()
/*
    new Date() creates a date object with the current date and time
*/

//Displaying Dates
console.log(myDate.toString());
console.log(myDate.toISOString());
console.log(myDate.toUTCString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleDateString());
console.log(typeof myDate);
/*
    ~When you display a date object in HTML, it is automatically converted to a string, with the toString() method.
    ~The toDateString() method converts a date to a more readable format
    ~The toUTCString() method converts a date to a string using the UTC standard
    ~The toISOString() method converts a date to a string using the ISO standard

*/


let myCreateDate = new Date(2023 ,0,23) //YYYY-MM-DD
let myCreateDate1 = new Date(2023 ,0,23 , 5 , 3) //YYYY-MM-DD , HOURS ,MINUTES
let myCreateDate2 = new Date(2018, 11, 24, 10, 33, 30, 0) //year, month, day, hour, minute, second, and millisecond
let myCreateDate3 = new Date("2023-01-14") //YYYY-MM_DD
let myCreateDate4 = new Date("01-14-2023") //MM-DD-YYYY
/*
    new Date(date string) creates a date object from a date string
    7 numbers specify year, month, day, hour, minute, second, and millisecond (in that order)
*/

console.log(myCreateDate.toLocaleString());
console.log(myCreateDate1.toLocaleString());
console.log(myCreateDate2.toLocaleString());
console.log(myCreateDate3.toLocaleString());


//Get Date Methods
const d = new Date();

console.log(d.getFullYear())  //output =>Get year as a four digit number (yyyy)
console.log(d.getMonth()) //output =>	Get month as a number (0-11)
console.log(d.getMonth()) //output =>	Get day as a number (1-31)
console.log(d.getDay()) //output =>	Get weekday as a number (0-6)
console.log(d.getHours()) //output =>	Get hour (0-23)
console.log(d.getMinutes()) //output =>	Get minute (0-59)
console.log(d.getSeconds()) //output =>	Get second (0-59)
console.log(d.getMilliseconds()) //output => Get millisecond (0-999)
console.log(d.getTime()) //output => Get time (milliseconds since January 1, 1970)



let myTimeStamp = Date.now()

console.log(myTimeStamp);
console.log(myCreateDate.getTime());
console.log(Math.floor(Date.now()/(1000)));  //in seconds
console.log(Math.floor(Date.now()/(1000*60))); // in minutes
console.log(Math.floor(Date.now()/(1000*60*60))); // in hours 
console.log(Math.floor(Date.now()/(1000*60*60*24))); // in Days 
console.log(Math.floor(Date.now()/(1000*60*60*24*30))); // in Months
console.log(Math.floor(Date.now()/(1000*60*60*24*30*12))); // in years


let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth()+1);
console.log(newDate.getDay());


// `${newDate.getDay()} and the time `
//it uses JavaScript to get the current date and time

console.log(newDate.toLocaleString('default',{
    weekend: "long",
    day: "numeric",
    year: "numeric",
    month: "long"
}));