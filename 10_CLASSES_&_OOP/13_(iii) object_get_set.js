//getter setter with object

const user={
    _email: 'zeel@google.com',
    _password: 'abc456',

    get email(){
        return this._email.toUpperCase()
    },
    set email(value){
        return this._password = value
    }
}

const newUser = Object.create(user) // kind of factory function

console.log(newUser.email);

/*
    Differences between Object.create and factory function:-
    
        A factory function is a custom function that often includes more complex logic and initialization. Object.create is a built-in method specifically for creating objects with a given prototype, mainly used for inheritance purposes.
*/