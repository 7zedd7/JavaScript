console.log(Math.PI);
Math.PI = 5
console.log(Math.PI); // it will not change value of PI


const descriptor = Object.getOwnPropertyDescriptor(Math, "PI");

/*
    Object.getOwnPropertyDescriptor:-

        Object.getOwnPropertyDescriptor is a JavaScript method that returns an object describing the configuration of a specific property on an object. This descriptor includes details such as the property's value, whether it is writable, enumerable, and configurable. This method helps you understand and control the attributes of properties in an object, allowing for more precise property management.
*/

console.log(descriptor);

const laptop = {
    name: "hp",
    price: 50000,
    isAvailable: true,

    orderLaptop: function () {
        console.log("Laptop ordered");
    }
}


console.log(Object.getOwnPropertyDescriptor(laptop, "name"));

Object.defineProperty(laptop, "name", {
    enumerable: true
})



console.log(Object.getOwnPropertyDescriptor(laptop, "name"));

for (let [key, value] of Object.entries(laptop)) {
    if(typeof value!= 'function'){       //if is used to filter output of object
    console.log(`${key} : ${value}`);
    }
}

/*  Object.entries:-

        Object.entries is a JavaScript method that returns an array of a given object's own enumerable property [key, value] pairs. This array includes only the object's direct properties, not those inherited from its prototype. It's useful for iterating over an object's properties and values, making it easy to work with the data stored in an object.
*/


/* 
    The enumerable attribute of a property determines whether that property will show up in certain operations, like for...in loops, Object.keys(), and Object.entries().

    if enumerable is true then the property will be shown in object

        output: -   name : hp
                    price : 50000
                    isAvailable : true

    if enumerable is false then the property will not be shown in object

        output: -   price : 50000
                    isAvailable : true

*/
