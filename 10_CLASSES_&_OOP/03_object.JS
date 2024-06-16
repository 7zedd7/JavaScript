function multiplyBy5(num){
    return num*5;
}

multiplyBy5.power = 2

console.log(multiplyBy5(5));
console.log(multiplyBy5.power); 

/*
    The .power property in this code is a custom property that we added to the multiplyBy5 function. This demonstrates that JavaScript functions can have additional properties attached to them, just like objects. This property has no intrinsic connection to the behavior of the function; it's simply a way to associate extra information with the function.
*/
console.log(multiplyBy5.prototype);

/*  prototype: ~
    When you create a function in JavaScript, it automatically gets a property called prototype. This prototype property is used in JavaScript's object-oriented programming to create objects that share properties and methods.
 */

//constructor function
function createUser(username , score){
    this.username = username
    this.score = score 
} 
//(this.username and this.score)If the function createUser is called with the new keyword, this will refer to the newly created instance of the object.

// Added increment Method to createUser
createUser.prototype.increment = function(){
    this.score++
}

// Added printMe Method to createUser
createUser.prototype.printMe = function(){
    console.log(`score is ${this.score}`);
}


// Create a new instance of createUser

// const us?er1 = createUser("Zeel", 10)  //JavaScript throws an error because user1 is undefined, and you can't call methods on undefined.
const user2 = new createUser("Zeel", 10) 
const user3 =  createUser("Zedd", 20) 

user2.printMe();


/*

Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new JavaScript object.

    Function --------
                    |
                    |
                    ⬇️
    Array ---------|> Object ---------> Null
                    ⬆️
                    |
                    |
    String ----------

A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.

The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.

*/

