// function SetUserName(username) {
//     //complex DB calls
//     this.username = username
//     console.log('called');
// }

// function createUser(username , email, password){

//     SetUserName(username) // Incorrect usage here

//     this.email = email
//     this.password = password

// }


// const user1 = new createUser('zeel','zeel@g.com','1234')
// console.log(user1);

/*
    Inside createUser, the SetUserName function is called, but it is called without any context (this binding). Hence, the this.username = username in SetUserName does not set username on the newly created user object as intended. Instead, it might unintentionally set username on the global object (or cause an error in strict mode).

    In simple terms:
    When SetUserName(username) is called inside createUser, it doesn’t know which object to attach username to. This is because this inside SetUserName isn’t pointing to the new user object.

    So, username doesn't get added to the new user object. Instead, it might try to set username on something else, like the global object, which isn’t what we want.
*/

function SetUserName(username) {
    //complex DB calls
    this.username = username
    console.log('called');
}

function createUser(username, email, password) {

    SetUserName.call(this, username) // Important line

    this.email = email
    this.password = password

}


const user1 = new createUser('zeel', 'zeel@g.com', '1234')
console.log(user1);

/*
    The call method allows you to call a function with a specific this context.
    
    SetUsername.call(this, username) means: "Call the SetUsername function, and while doing so, make sure this inside SetUsername refers to the current object being created by createUser."
*/

/* call() method

    The call() method is a predefined JavaScript method. It can be used to invoke (call) a method with an owner object as an argument (parameter). With call() , an object can use a method belonging to another object.

*/

// Call , Apply , Bind 