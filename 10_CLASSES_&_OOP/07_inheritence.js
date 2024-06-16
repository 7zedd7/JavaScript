// Inheritance in classes

class User{
    constructor(username){
        this.username = username
    }
    logMe(){
        return `UserName is ${this.username}`
    }
}

class Teacher extends User{
    constructor(username , email , password){
        super(username)
        this.email = email
        this.password = password
    }

    addCourse(){
        return `Course is added by ${this.username}`
    }
}

/*  super

    Super keyword is used to call the constructor of its parent class to access the parent's properties and methods.

*/

const teacher = new Teacher("Zeel","zeel@g.com","1234")

console.log(teacher);
console.log(teacher.addCourse());
console.log(teacher.logMe());

const teacher2 = new Teacher("Virat","virat@g.com","1234")

console.log(teacher2);
console.log(teacher2.addCourse());
console.log(teacher2.logMe());


console.log(teacher instanceof Teacher);
console.log(teacher instanceof User);
console.log(teacher2 instanceof Teacher);
console.log(teacher2 instanceof User);
console.log(Teacher instanceof User);

/* instanceof operator
    The instanceof operator in JavaScript is used to check the type of an object at run time. It returns a boolean value if true then it indicates that the object is an instance of a particular class and if false then it is not. 
*/