// let myName = "Zeel";
// let myUserName = "ZeelSPatel";

// console.log(myName.trueLength);


//---------------------- Prototype Inheritance and Custom Methods in JavaScript Objects ------------------------------

let myHeroes = ["IronMan" , "SpiderMan" , "BlackPanther"];

let heroPower = {
    IronMan : "Billionaire",
    SpiderMan : "Web-slinging",
    BlackPanther : "Ruthless",

    getSpiderPower: function(){
        console.log(`SpiderMan's power is ${this.SpiderMan}`);
    }
}

//creating custom object method and adding it to object prototype
Object.prototype.zeel = function(){
    console.log("Zeel is present in all objects");
}

//creating custom object method and adding it to object prototype
Object.prototype.heyZeel = function(){
    console.log("Hey Zeel");
}

// heroPower.zeel(); //zeel can be called from any object
// heroPower.heyZeel(); //Hey Zeel

// myHeroes.zeel(); //zeel can be called from any array

// myHeroes.heyZeel();


//------------------------------------Inheritance-----------------------------------------

const user= {
    username: "Zeel",
    email: "zeel@google.com",
}

const Teacher = {
    teach: true
}

const TeachingSupport = {
    isAvailable: false
}

const TAsupport = {
    makeAssignment : 'JS Assignment',
    fulltime: true,
    __proto__: TeachingSupport,
}

Teacher.__proto__ = user;

/*  
    __proto__:-

        The __proto__ property in JavaScript is used to set the prototype (i.e., the "parent" object) of another object. This defines the prototype chain for inheritance, allowing one object to access the properties and methods of another.
*/


//------------------------------------- Inheritance modern syntax -----------------------------------------------

Object.setPrototypeOf(TeachingSupport, Teacher); // TeachingSupport now has access to all the properties and methods of Teacher.

/*
    The Object.setPrototypeOf() static method sets the prototype (i.e., the internal [[Prototype]] property) of a specified object to another object or null.
*/

let newUser = "learning_JavaScript     "

String.prototype.trueLength = function(){
    console.log(this);
    console.log(`Original length is : ${this.length}`);
    console.log(`True length is : ${this.trim().length}`);
    console.log(`True length string: [${this.trim()}]`);
}

newUser.trueLength();
'react    '.trueLength();
'node.js   '.trueLength();
