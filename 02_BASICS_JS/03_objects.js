/*
    The Object type represents one of JavaScript's data types. It is used to store various keyed collections and more complex entities. Objects can be created using the Object() constructor or the object initializer / literal syntax.
*/

/* Singleton :

    a singleton is a design pattern that restricts the instantiation of a class to a single instance. This means that no matter how many times you try to create a new instance of the class, you'll always get the same instance. It's commonly used when exactly one object is needed to coordinate actions across the system.

*/
// Object.create (object constructor/singleton)

//object literals

const mySym = Symbol("Key1")

const JsUser = {
    name: "Zeel",
    "full name": "Zeel Patel",
    [mySym]: "mykey1", //if we do not define brackets then it will print like string 
    age: 18,
    location: "Gujrat",
    email: "zeel@google.com",
    isLoggedIn : false,
    lastLoginDays : ["Monday","Saturday"]
}

//three different way to access object properties
// console.log(JsUser.email);    //directly using dot notation. 
// console.log(JsUser["email"]); //property using bracket notation. 
// console.log(JsUser[`email`]); // property using bracket notation and backticks.


// console.log(JsUser["full name"]);
// console.log(JsUser[mySym]);

// console.log(JsUser);

JsUser.email = "zeel@chatgpt.com"
// Object.freeze(JsUser)
JsUser.email = "zeel@microsoft.com"
// console.log(JsUser);
/*
    Object.freeze()used to prevent an object from being modified. Once an object is frozen, its existing properties can no longer be changed, removed, or added. It also prevents the object's prototype from being changed.
*/

JsUser.greeting = function(){
    console.log("Hello Js User");
}
JsUser.greetingTwo = function(){
    console.log(`Hello Js User, ${this.name}`);
}
/* this keyword
    a special keyword that refers to the current object. It is used to access the properties and methods of the current object. The value of this changes depending on the context in which it is used.
*/

console.log(JsUser.greeting); //Output =>[Function (anonymous)]
console.log(JsUser.greeting()); //Output => Hello Js User
console.log(JsUser.greetingTwo()); //Output => Hello Js User, Zeel