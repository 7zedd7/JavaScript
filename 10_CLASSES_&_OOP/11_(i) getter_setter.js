//getter setter with class and most prefer way

class User {
    constructor(email, password) {
        this.email = email
        this.password = password
    }
    get email(){
        return this._email.toUpperCase()
    }
    set email(value){
        this._email = value  
    }

    get password(){
        return `${this._password}_13df23`
    }
    set password(value){
        this._password = value
    }
}

const user = new User("z@gmail.com", 'abc123')
console.log(user.email);
console.log(user.password);

/*  
    "_value" is a private variable or internal to the class or object. It is prefixed with an underscore. While JavaScript does not have true private properties like some other programming languages, using an underscore is a common practice to signal to other developers that this property should not be accessed or modified directly from outside the class.

    this._value is used to store the value internally
*/

/*
    Why do we need to use private properties in JavaScript?

        Using private classes or objects is important for encapsulation, which is a fundamental principle in object-oriented programming. Encapsulation helps in hiding the internal state and implementation details of a class or object, exposing only what is necessary through a public interface. This prevents external code from directly accessing or modifying the internal properties, which can protect the integrity of the data, reduce complexity, and make the code easier to maintain and understand. It also allows the internal implementation to change without affecting the code that depends on the public interface.
*/