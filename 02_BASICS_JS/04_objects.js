// const tinderUser = new Object() //This is the explicit way of creating an empty object using JavaScript's built-in constructor function. 

const tinderUser = {} // This syntax uses object literal notation, which is a shorter and more concise way of creating an empty object. It's commonly used because it's simpler and more readable.

tinderUser.id = "123abc"
tinderUser.name = "Virat"
tinderUser.isLoggedIn = false

// console.log(tinderUser); //output => { id: '123abc', name: 'Virat', isLoggedIn: false }

const regularUser = {
    email : "virat@gmail.com",
    fullname : {
        userfullname: {
            firstname: "virat",
            lastname: "Kohali"
        }
    }
}

//access first name 
// console.log(regularUser.fullname.userfullname.firstname);


const obj1 = {1:"a",2:"b"}
const obj2 = {3:"c",4:"d"}
const obj3 = {5:"r",6:"f"}

//merging two objects
const obj4 = {obj1,obj2} //output =>{ obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'c', '4': 'd' } }
const obj5 = Object.assign(obj1,obj2)//output => { '1': 'a', '2': 'b', '3': 'c', '4': 'd' }
const obj6 = Object.assign({},obj1,obj2)//output => { '1': 'a', '2': 'b', '3': 'c', '4': 'd' }
//in obj6 empty {} is target and obj1,obj2 are source it is good practice
//But commonly we use spread operator 
const obj7 = {...obj1 , ...obj2 , ...obj3} //output =>{ '1': 'a', '2': 'b', '3': 'c', '4': 'd', '5': 'r', '6': 'f' }

// console.log(obj4);
// console.log(obj5);
// console.log(obj6);
// console.log(obj7);

//Array of Objects
const users = [
    {
        id: 1,
        email: "a@gmail.com"
    },
    {
        id: 2,
        email: "b@gmail.com"
    },
    {
        id: 3,
        email: "c@gmail.com"
    },
]
// console.log(users[1].email); //accessing Array of Objects

// console.log(tinderUser); //output =>{ id: '123abc', name: 'Virat', isLoggedIn: false }

console.log(Object.keys(tinderUser)); //output => [ 'id', 'name', 'isLoggedIn' ]
console.log(Object.values(tinderUser)); //output => [ '123abc', 'Virat', false ]
console.log(Object.entries(tinderUser)); //output => [ [ 'id', '123abc' ], [ 'name', 'Virat' ], [ 'isLoggedIn', false ] ]

/*
    ~ Object.keys() method in JavaScript returns an array of the enumerable property names of an object.
    ~ Object.values() method returns an array of the values of all the enumerable properties of an object.
    ~ Object.entries used to return an array of key-value pairs for an object
*/

console.log(tinderUser.hasOwnProperty('isLoggedIn')); //output => true 
/*
    The hasOwnProperty() method returns a boolean value, indicating whether the object has the specified property as its own property. If the object has the property as its own property, the method returns true. If the object does not have the property as its own property, or if the property does not exist, the method returns false.
*/

const course = {
    coursename: "MERN Stack",
    price : "999" , 
    courseInstructor : "virat"
}

// console.log(course.courseInstructor);


//Object destructuring
const {courseInstructor} = course
console.log(courseInstructor);
/*  
    extracting the courseInstructor property directly and assigning it to a variable with the same name (courseInstructor). So, courseInstructor variable holds the value of the courseInstructor property from the course object.
*/

const {courseInstructor: instructor} =course
console.log(instructor);
/*
    extracting the courseInstructor property from the course object and assigning it to a variable named instructor. So, instructor variable holds the value of the courseInstructor property from the course object.
*/

//JSON
// {
//     "name": "hitesh",
//     "coursename": "js in hindi",
//     "price": "free"
// }