/* Object literal :- 

    JavaScript Object Literal is a data type used to define objects in JavaScript. It is a syntax for creating an object in JavaScript that is composed of key-value pairs. It is a lightweight and efficient way to create and store data. It is a great way to store related data in an organized manner. 
*/

const user = {
    username: "Zeel",
    loginCount: 10,
    signedIn: true,

    getUserDetails: function () {
        console.log("Got User Details from Database");
    }

}

// console.log(user.username);
// console.log(user.getUserDetails());

/* output
    Zeel
    Got User Details from Database
    undefined

    why there is undefined?
    Because we are calling getUserDetails function and if a function doesn't have a return statement, it returns undefined by default
*/

const user2 = {
    username: "Zedd",
    loginCount: 5,
    signedIn: true,

    getUserDetails: function () {
        return "Got User Details from Database";
    }

}

// console.log(user2.username);
// console.log(user2.getUserDetails());



//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ Constructor function ++++++++++++++++++++++++++=++++++++++++++++++++++++++++++++

/* this:
    -The this keyword refers to the context where a piece of code, such as a function's body, is supposed to run. Most typically, it is used in object methods, where this refers to the object that the method is attached to, thus allowing the same method to be reused on different objects.

this keyword refers to an object.

    ~In an object method, this refers to the object.
    ~Alone, this refers to the global object.
    ~In a function, this refers to the global object.
    ~In a function, in strict mode, this is undefined.
    ~In an event, this refers to the element that received the event.
    ~Methods like call(), apply(), and bind() can refer this to any object.

*/

function Users(username , loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;

    this.greeting = function(){
        console.log(`Hello ${this.username}`);
    }
    return this
}

/* New:
        ~The new constructor is used to create instances of a user-defined object type or of built-in object types that have a constructor function. When you use the new keyword with a constructor function, it creates a new object, sets the this keyword to point to that new object, and executes the constructor function to initialize the object's properties and methods. For example, using new with a custom constructor function allows you to create multiple objects with similar properties and methods, facilitating the creation of complex data structures and objects.
*/

const user1ne = new Users("Zeel", 10, true);
const user2wo = new Users("Zedd", 5, true); // if I dont use new keyword it will overwrite the previous object
// console.log(user1ne);

console.log(user1ne.constructor); // The constructor data property of an Object instance returns a reference to the constructor function that created the instance object. Note that the value of this property is a reference to the function itself, not a string containing the function's name.

console.log(user2wo instanceof Users); //The instanceof operator tests to see if the prototype property of a constructor appears anywhere in the prototype chain of an object. The return value is a boolean value.