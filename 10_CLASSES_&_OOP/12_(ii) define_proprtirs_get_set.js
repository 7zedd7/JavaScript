//getter setter with Function

function User(email,password){
    this._email = email
    this._password = password


    //getter and setter for email
    Object.defineProperty(this,"email",{
        get: function(){
            return this._email.toUpperCase()
        },
        set: function(value){
            return this._password = value
        }
    })

    //getter and setter for password
    Object.defineProperty(this,"password",{
        get: function(){
            return this._password.toUpperCase()
        },
        set: function(value){
            return this._password = value
        }
    })

}

const user = new User("zeel@google.com","abc456")

console.log(user.email);
console.log(user.password);

/*  defineProperty:-

        Object.defineProperty is a JavaScript method used to define or modify a property on an object and specify the property's configuration, including its value, whether it's writable, enumerable, and configurable, and its getter and setter functions. This method allows precise control over how properties behave, enabling encapsulation and data protection by allowing custom behavior for getting and setting property values. In the provided code, Object.defineProperty is used to define getters and setters for email and password properties, transforming the values when accessed or modified.
*/