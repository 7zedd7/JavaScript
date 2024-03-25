//reduce()

/*
    reduce() method is used to iterate over an array and accumulate a single value based on the elements of the array. It executes a reducer function on each element of the array, resulting in a single output value. The reducer function takes four arguments: an accumulator, the current element, the current index, and the array itself. The accumulator is a variable that stores the accumulated result of previous iterations. The reducer function can perform any computation on the accumulator and the current element to produce the next accumulator value. The reduce() method returns the final accumulated value after iterating over all elements of the array. It can be used to perform various operations such as summing elements, finding the maximum or minimum value, concatenating strings, or any other custom operation that requires aggregating values from an array.
*/

const myNums = [1,2,3]

// const myTotal = myNums.reduce(function (acc,currval) {
//     console.log(`acc: ${acc} and currval: ${currval}`);
//     return acc+currval
// },0)

//using arrow function
const myTotal = myNums.reduce((acc,curr) => acc+curr,0)

console.log(myTotal); // output =>6


const shoppingCart = [
    {
        itemName: "js book",
        price: 29999
    },
    {
        itemName: "py book",
        price: 2999
    },
    {
        itemName: "mobile development book",
        price: 5999
    },
    {
        itemName: "data science book",
        price: 12999
    },
]

const priceToPay = shoppingCart.reduce((acc,item) => acc+item.price,0)

console.log(priceToPay);