//--------------------------Classes in JavaScript----------------------------

/*
    ~Use the keyword class to create a class.
    ~Always add a method named constructor():

    class ClassName {
    constructor() { ... }
}
*/

//this code is just for fun 

// class User{
//     constructor(username , email , password){
//         this.username = username
//         this.email = email
//         this.password = password
//     }

//     generateRandomNumber(length){
//         const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
//         let randomString = '';
//         for (let i = 0; i < length; i++) {
//             const randomIndex = Math.floor(Math.random()* characters.length);
//             randomString += characters[randomIndex]
//         }
//         return randomString;
//     }
//     encryptPassword(){
//         const randomString = this.generateRandomNumber(10);
//         return `${randomString}${this.password}${randomString}`
//     }
// }

// const encryptor = new User("Zeel","zeel@g.com","1234")
// console.log(encryptor.encryptPassword());

//useful code

class User{
    constructor(username, email, password){
        this.username = username
        this.email = email
        this.password = password
    }

    encryptPassword(){
        return `${this.password}abc`
    }

    changeUserName(){
        return `${this.username.toUpperCase()}`
    }
}

const user1 = new User("Zeel","zeel@g.com","1234");
// console.log(user1);
// console.log(`Encrtpyted Password: `+user1.encryptPassword());
// console.log(`UserName changed to: `+user1.changeUserName());


// behind the scene

function User1(username,email , password){
    this.username = username
    this.email = email
    this.password = password
}
User1.prototype.encryptPswd = function(){
    return `${this.password}abc`
}

User1.prototype.changeUserN = function(){
    return `${this.username.toUpperCase()}`
}

const user2 = new User1("Zedd","zedd@g.com","1234");

// console.log(user2.encryptPswd());
// console.log(user2.changeUserN());