const myname ="Zeel "
const repoCount = 7

// console.log(myname + repoCount + " Value");  not recommended ,old way of creating strings in JavaScript

//console.log(`Hello my name is ${myname} and my repo count is ${repoCount}`); //new way of creating strings 

const gameName = new String('zeel-zp-.com')

// console.log(gameName[0]); //accessing the character at index 0 of the string.

// console.log(gameName.__proto__);
/*
    __proto__ is a non-standard way to access an object's prototype. 
    The __proto__ property is not part of the official ECMAScript 
    specification, but it has been supported by many browsers. 
    It's worth noting that using __proto__ is considered outdated, 
    and you should use Object.getPrototypeOf() or Object.setPrototypeOf() 
    for better compatibility.
*/

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// String Methods

// 1) charAt() : it returns the character at the specified index in a string.


//i)charAt() Method With Integer Index Value
const string = "Hello World!";

let result1= string.charAt(3); // finding character at index 3

// console.log("Character at index 1 is " + result1);

//ii)charAt() Method with Non-integer Index Value
const string1 = "Hello planets!";

let result2 = string1.charAt(6.9) //result => p 
let reuslt3 = string1.charAt(6.4) //result => p
/*
    the non-integer index values 6.4 and 6.9 are 
    converted to the nearest integer index 6.
*/
// console.log(result2)
// console.log(reuslt3)

//iii)charAt() Method Without passing parameter 
let sentence = "Happy Birthday to you!";
let reuslt4 = sentence.charAt();

// console.log("Character at index 0 is  " + reuslt4);
/*
    Here, we have not passed any parameter in the charAt() method. 
    The default index value is 0 so sentence.charAt() returns character 
    at index 0 which is "H".
*/

//iv)charAt() Method with Index Value Out of Range
let sentence1 = "Happy Birthday to Zeel!";
let result5 = sentence.charAt(100);

// console.log("Character at index 100 is: " + result5);
/*
    we have passed 100 as an index value. Since there is no element 
    in index value 100 in "Happy Birthday to Zeel!", the charAt() 
    method returns an empty string.
*/

// 2) concat(): this method concatenates given arguments to the given string


let emptyString = "";
let joinedString = emptyString.concat("JavaScript", " is", " fun.");

// console.log(joinedString)  Output => JavaScript is fun.

// console.log("".concat({})); //output => [object Object]
// console.log("".concat(null)); //output => null
// console.log("".concat(true)); //output => true
// console.log("".concat(4, 5)); //output => 45

let string2 = "Hello ";
let string3 = "Solar System!";

let string4 = string2.concat(string3)

// console.log(string4); output => Hello Solar system!

//  3) endsWith(): this method returns true if a string ends with the specified string. If not, the method returns false.


//i)Using endsWith() Method
let sentence2 = "Java is to JavaScript what Car is to Carpet.";
let check1 = sentence2.endsWith("to Carpet.")

// console.log(check); output => true

//ii)endsWith() for Case Sensitive Strings

let sentence3 =  "JavaScript is fun";
let check2 = sentence3.endsWith("fun"); //Output => true
let check3 = sentence3.endsWith("Fun"); //Output => False

// console.log(check2);
// console.log(check3);

//iii)endsWith() with two Parameters

let sentence4 = "JavaScript is fun";
let check4 = sentence4.endsWith("JavaScript", 10); //Output => ture

// console.log(check4);
/*
    We have passed two arguments, "JavaScript" and 10 where "JavaScript" 
    indicates the string to search and 10 indicates the portion of the 
    string to consider.

    The method checks if the first 10 characters of the string 
    end with "JavaScript" and returns true.
*/

// 4) includes(): this  method checks if one string can be found inside another string.


const message = "Javascript is fun"

let result6 = message.includes("Java"); //output => true

// console.log(result6);

let sentence5 = "Java is to JavaScript what Car is to Carpet.";
let check5 = sentence5.includes("Java"); //output => true 
let check6 = sentence5.includes("java"); //output => false
let check7 = sentence5.includes("Java", 20);//second argument specifies position to start at
let check8 = sentence5.includes("whose"); //output => false
let check9 = sentence5.includes("") // output => true

// console.log(check5);
// console.log(check6);
// console.log(check7); output => false
// console.log(check8);
// console.log(check9);


// 5) indexOf(): The string indexOf() method returns the index of the first occurence of the substring in a string.


const message1 = "JavaScript is not Java";
const index1 = message1.indexOf("va") //output =>index: 2

// console.log("index: "+index1);

//i)Using indexOf() method

var string5 = "JavaScript is the world's most misunderstood programming language.";
var index2 = string5.indexOf("language"); // output =>57
var index3 = string5.indexOf("p"); // output =>8
var index4 = string5.indexOf("p",9); // output =>45
var index5 = string5.indexOf("Python"); // output =>-1 (not exist in the string)

// console.log(index2); 
// console.log(index3); 
// console.log(index4); 
// console.log(index5); 

//ii)Finding All the Occurrences of an Element

// 6) lastIndexOf(): this method returns the last index of occurence of a given substring in the string.


//i)Using lastIndexOf() method

var string6 = "Programming"
var substr = "g"
var substr1 = "m";
var result7 = string6.lastIndexOf(substr) //output => 10
var result8 = string6.lastIndexOf(substr1) //output => 7

// console.log(result7);
// console.log(result8);


//ii)lastIndexOf() With Two Parameters

var string7 = "Programming in laptop"
var substr2 = "g";
var fromIndex = 6;
var result9 = string7.lastIndexOf(substr2, fromIndex); //output =>3

// console.log(result9);


//iii) When Substring Is Not Found

var string8 = "I love JavaSript"
var result10 = string8.lastIndexOf("Python") //output => -1 string not found

// console.log(result10);


//iv) lastIndexOf() For Case-Sensitive Search

var string9 = "I love JavaScript"
var result11 = string9.lastIndexOf("JavaScript"); //output => 7
var result12 = string9.lastIndexOf("javascript"); //output => 7


// console.log(result11);
// console.log(result12);


// 7) length: The length property returns the number of characters in a string.


//i)Using length Property
let sentence6 = "I love Programiz.";
let string13 = "JavaScript";
let len = sentence6.length; //output => 17
let len2 = string13.length; //output => 10

// console.log(len);
// console.log(len2);


//ii)length Property is Read Only
let string14 =  "Programming";
string14.length = 5 // assigning a value to string's length property

// console.log(string14); //output => Programming
// console.log(string14.length); //output => 11

// 8) localeCompare(): thismethod checks if a given string comes before, after, or is equivalent as another string in sort order.


//i)Using localeCompare() Method

let result13 = 'c'.localeCompare('b') //returns positive value if 'b' comes before 'c'

// console.log(result13); // output => 1


//ii)Using localeCompare()

let result14 = 'b'.localeCompare('c')

// console.log(result14); output => -1


//iii)localeCompare() With Equal Strings

let resutl15 = 'JavaScript'.localeCompare('JavaScript');
let resutl16 = 'Python'.localeCompare('JavaScript')

// console.log(resutl15); //while comparing two equal strings 'JavaScript', the method returns 0.
// console.log(resutl16); //Since 'Python' comes after 'JavaScript', the method returns 1. 



// 9) repeat(): this method creates a new string by repeating the given string a specified number of times and returns it.


//i)Using repeat() Method
const holiday = "Happy Holiday!";
const resutl17 = holiday.repeat(3); //output => Happy holiday!Happy holiday!
let result18 = holiday.repeat(0) // doesn't print anything (prints empty string).

// console.log(resutl17);
// console.log(result18);

//ii)Using Non-integer as a Count Value in repeat()
let sentence7 = "Happy Birthday to you!"
let reuslt19 = sentence7.repeat(3.2);
let reuslt20 = sentence7.repeat(3.7);
/*
    Here, the non-integer index values 3.2 and 3.7 are 
    converted to the nearest integer index 3
    both output =>Happy Birthday to you!Happy Birthday to you!Happy Birthday to you!
*/
// console.log(reuslt19);
// console.log(reuslt20);

//iii)Using Negative Number as a Count Value

let sentence8 = "Happy Birthday Spiderman!"
let reuslt21 = sentence8(-1) //output => RangeError: Invalid count value

// console.log(reuslt21);


// 10) replace(): this method returns a new string with the specified string/regex replaced.

const message2 = "ball bat";
let result22 = message2.replace('b', 'c'); //output => call bat

// console.log(result22);

//i)Replace the first occurrence
const text = "Java is awesome. Java is fun."
let pattern = "Java";
let new_text = text.replace(pattern, "JavaScript"); //output => JavaScript is awesome. Java is fun.

// console.log(new_text);


// 11) replaceAll(): this  method returns a new string with all matches of a pattern replaced by a replacement.

const message3 ="ball bat";
let result23 = message3.replaceAll('b', 'c'); // Output => call cat

// console.log(result23);

//i)Replace the first occurrence
const text1 = "Java is awesome. Java is fun."
let pattern1 = "Java";
let new_text1 = text1.replaceAll(pattern1, "JavaScript"); //output => JavaScript is awesome. JavaScript is fun

// console.log(new_text1); 

// 12) search(): this method searches for a match between a given string and a regular expression.


//i)Passing non-regExp in search()
let string15 = "I love to code in JavaScript.";
let index6 = string15.search("code"); //output => 10

// console.log(index6);


// 13) slice(): this method extracts and returns a section of a string.


//i)Using slice() method
const message4 = "JavaScript is a very absurd programming language.";

let reuslt24 = message4.slice(0,10); //output => "JavaScript"
let reuslt25 = message4.slice(28); //output => "programming language."
let reuslt26 = message4.slice(4,15); //output => "Script is a"
let reuslt27 = message4.slice(50); //output => ""

// console.log(reuslt24);
// console.log(reuslt25);
// console.log(reuslt26);
// console.log(reuslt27);

//ii)Using slice() method with negative indices
const message5 = "JavaScript is a very absurd programming language.";

let result28 = message5.slice(-9);    //output =>language.
let result29 = message5.slice(-9,-1); //output =>language
let result30 = message5.slice(0,-1);  //output =>JavaScript is a very absurd programming language
let result31 = message5.slice(4,-1);  //output =>Script is a very absurd programming language
let result32 = message5.slice(11,-7); //output =>is a very absurd programming la

// console.log(result28);
// console.log(result29);
// console.log(result30);
// console.log(result31);
// console.log(result32);


// 14) split(): this method divides a string into a list of substrings and returns them as an array.


//console.log("ABCDEF".split("")); // output => [ 'A', 'B', 'C', 'D', 'E', 'F' ]

//i)Using split()
const message6 = "JavaScript::is::fun";
let result33 = message6.split("::"); //output => [ 'JavaScript', 'is', 'fun' ]

// console.log(result33);

const text2 = "Java is awesome. Java is fun.";
let pattern2 = "."
let newText = text2.split(pattern2) //output =>[ 'Java is awesome', ' Java is fun', '' ]
let newText1 = text2.split(pattern2, 2); //output =>[ 'Java is awesome', ' Java is fun']

// console.log(newText);
// console.log(newText1);

const text3 = "JavaScript ;  Python ;C;C++";
let pattern3 = ";";
let newText2 = text2.split(pattern3); //output => [ 'JavaScript ', '  Python ', 'C', 'C++' ]

// console.log(newText2);


// 15) startsWith(): this method returns true if a string begins with specified character(s). If not, it returns false.


//i)Using startsWith() method

const sentence9 = "Java is to JavaScript what Car is to Carpet.";
let check10 = sentence9.startsWith("Java"); //output => true
let check11 = sentence9.startsWith("JavaScript"); //output => false
let check12 = sentence9.startsWith("JavaScript",11); //output => true


// console.log(check10);
// console.log(check11);
// console.log(check12);


// 16) substring(): this method returns a specified part of the string between start and end indexes.


//i)Using substring
const message7 = "JavaScript is fun.";
let reuslt34 = message.substring(0, 10); //// Output => JavaScript

// console.log(reuslt34);

const string16 = "ZeelSPatel JavaScript Tutorials";
const substr3 = string16.substring(0, 1); //output =>Z
const substr4 = string16.substring(1, 0);//output =>Z
const substr5 = string16.substring(10);//output => JavaScript Tutorials
const substr6 = string16.substring(-44, 90);//output =>ZeelSPatel JavaScript Tutorials
const substr7 = string16.substring(0, string16.length - 1); //output =>ZeelSPatel JavaScript Tutorial

// console.log(substr3); 
// console.log(substr4); 
// console.log(substr5); 
// console.log(substr6); 
// console.log(substr7); 


// 17) toLowerCase(): this method returns the string converted to lowercase.



let string17 = "Hello World!";
let sentence10 = "Java is to JavaScript what Car is to Carpet.";

let lowercase_str = string17.toLowerCase(); //output =>hello world!
let lowercase = sentence10.toLowerCase(); //output => java is to javascript what car is to carpet.

console.log(lowercase_str); 
console.log(lowercase);


// 18) toUpperCase(): this method returns the string converted to uppercase.



let string18 = "Hello World!";
let sentence11 = "Java is to JavaScript what Car is to Carpet.";

let uppercase_str = string18.toUpperCase(); // output => HELLO WORLD!
let uppercase = sentence.toUpperCase(); // output => JAVA IS TO JAVASCRIPT WHAT CAR IS TO CARPET.


console.log(uppercase_str); 
console.log(uppercase);



// 19) trim(): this method removes whitespace from both ends of a string.

let string19 = "   foo  ";
let string20 = "  A B C D  ";

console.log(string19.trim()); // output => 'foo'
console.log(string20.trim()); // output => 'A B C D'