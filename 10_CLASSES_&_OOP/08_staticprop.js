class User {
    constructor(username) {
        this.username = username
    }
    logMe() {
        return `UserName is ${this.username}`
    }
    static createId() {
        return '123'
    }
}

const zeel = new User('Zeel')
// console.log(zeel.createId());

class Teacher extends User {
    constructor(username, email) {
        super(username)
        this.email = email
    }
}

const android = new Teacher("Android", "android@g.com")
console.log(android.createId());

/*
    Static Properties and Methods

    The static keyword defines a static method or field for a class, or a static initialization block . Static properties cannot be directly accessed on instances of the class. Instead, they're accessed on the class itself.

    Static methods are often utility functions, such as functions to create or clone objects, whereas static properties are useful for caches, fixed-configuration, or any other data you don't need to be replicated across instances.
*/